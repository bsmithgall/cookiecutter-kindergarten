'use strict';

module.exports = function(grunt) {

  // Load grunt tasks together
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    // Declare path variables to be used through the file
    {{ cookiecutter.app_name }}: {
      base: '{{ cookiecutter.app_name }}_web/src',
      app: require('./bower.json').appPath || '{{ cookiecutter.app_name }}_web/src/app',
      dist: '{{ cookiecutter.app_name }}_web/dist'
    },

    // Configure connect, a dev web server
    connect: {
      options: {
        port: 9000,
        hostname: '0.0.0.0'
      },
      development: {
        options: {
          open: true,
          base: ['<%= {{ cookiecutter.app_name }}.dist %>', '<%= {{ cookiecutter.app_name }}.app %>'],
        }
      }
    },

    // Watch files for changes and run tasks accordingly
    // less - Recompile less files to css files
    // gruntfile - Reload the running gruntfile

    watch: {
      serve: {
        less: {
          files: ['<%= {{ cookiecutter.app_name }}.app %>/less/**/*.less'],
          tasks: ['less:development'],
          options: {
            spawn: false
          }
        },
        gruntfile: {
          files: ['Gruntfile.js']
        },
        mocks: {
          files: ['<%= {{ cookiecutter.app_name }}.base %>/test/mocks/*.js'],
          tasks: ['concat:mocks'],
          options: {
            spawn: false
          }
        }
      },
      docker: {
        less: {
          files: ['<%= {{ cookiecutter.app_name }}.app %>/less/**/*.less'],
          tasks: ['less:docker'],
          options: {
            spawn: false
          }
        },
        js: {
          files: ['<%= {{ cookiecutter.app_name }}.app %>/js/**/*.{js,html}'],
          tasks: ['copy:docker'],
          options: {
            spawn: false
          }
        },
        index: {
          files: ['<%= {{ cookiecutter.app_name }}.dist %>/index.html'],
          tasks: ['targethtml:docker'],
          options: {
            spawn: false
          }
        }
      }
    },

    // Compile LESS assets to CSS
    less: {
      development: {
        options: {
          paths: ['<%= {{ cookiecutter.app_name }}.app %>/less']
        },
        files: {
          '<%= {{ cookiecutter.app_name }}.app %>/css/app.css': '<%= {{ cookiecutter.app_name }}.app %>/less/app.less'
        }
      },
      docker: {
        options: {
          paths: ['<%= {{ cookiecutter.app_name }}.app %>/less']
        },
        files: {
          '<%= {{ cookiecutter.app_name }}.dist %>/css/app.css': '<%= {{ cookiecutter.app_name }}.app %>/less/app.less'
        }
      }
    },

    // Lint all script files
    jshint: {
      files: ['<%= {{ cookiecutter.app_name }}.app %>/js/*.js'],
      options: {
        curly: true,
        devel: true,
        eqnull: true,
        evil: true,
        immed: true,
        maxcomplexity: 8,
        newcap: true,
        noarg: true,
        sub: true,
        trailing: true,
        globals: {
          angular: true,
        }
      }
    },

    // Remove files out of our dist directory and css files
    clean: {
      tmp: {
        files: [{
          dot: true,
          src: [
            '<%= {{ cookiecutter.app_name }}.dist %>',
            '<%= {{ cookiecutter.app_name }}.app %>/css/*'
          ]
        }]
      }
    },

    // Copy Javascript files to dist
    copy: {
      development: {
        files: [{
          expand: true,
          cwd: '<%= {{ cookiecutter.app_name }}.app %>/js',
          src: ['**'],
          dest: '<%= {{ cookiecutter.app_name }}.dist %>/js'
        }]
      },
      docker: {
        files: [{
          expand: true,
          cwd: '<%= {{ cookiecutter.app_name }}.app %>',
          src: ['bower_components/**', 'js/**'],
          dest: '<%= {{ cookiecutter.app_name }}.dist %>'
        }]
      }
    },

    // Concat the mocks together under an E2EMocks header
    concat: {
      mocks: {
        options: {
          banner: 'E2EMocks={};\n\n'
        },
        src: [
          '<%= {{ cookiecutter.app_name }}.base %>/test/mocks/mocks.js',
          '<%= {{ cookiecutter.app_name }}.base %>/test/mocks/*.js'
        ],
        dest: '<%= {{ cookiecutter.app_name }}.dist %>/js/mocks.js'
      }
    },

    // If there are mocks, use targethtml to clean them out
    // and move the resulting file to dist
    targethtml: {
      development: {
        files: {
          '<%= {{ cookiecutter.app_name }}.dist %>/index.html': '<%= {{ cookiecutter.app_name }}.app %>/index.html',
        }
      },
      docker: {
        files: {
          '<%= {{ cookiecutter.app_name }}.dist %>/index.html': '<%= {{ cookiecutter.app_name }}.app %>/index.html',
        }
      }
    }
  });

  // Clean out any references to /static/ in our index.html and copied JS
  // This allows the files to be happily loaded both by the grunt server
  // and by the Flask app
  grunt.registerTask('removeStatic', 'removes references to /static/', function() {
    function removeStatic(abspath, rootdir, subdir, filename) {
      // open the file in memory
      var file = grunt.file.read(abspath);
      // replace /static/ with /
      var revisedFile = file.replace(/\/static\//g, '/');

      // uncomment mocks
      if (filename === 'index.html') {
        revisedFile = revisedFile.replace(
            '<!-- <script src="/bower_components/angular-mocks/angular-mocks.js"></script> -->',
            '<script src="/bower_components/angular-mocks/angular-mocks.js"></script>'
          ).replace(
            '<!-- <script src="/js/mocks.js"></script> -->',
            '<script src="/js/mocks.js"></script>'
          );
      }

      // overwrite the original file with the new one
      grunt.file.write(abspath, revisedFile);
    }

    grunt.file.recurse('{{ cookiecutter.app_name }}_web/dist', removeStatic);
  });

  grunt.registerTask('watch:docker', function() {
    var config = {
      options: {
        interrupt: true
      },
      less: {
        files: ['<%= {{ cookiecutter.app_name }}.app %>/less/**/*.less'],
        tasks: ['less:docker'],
        options: {
          spawn: false
        }
      },
      js: {
        files: ['<%= {{ cookiecutter.app_name }}.app %>/js/**/*.{js,html}'],
        tasks: ['copy:docker'],
        options: {
          spawn: false
        }
      },
      index: {
        files: ['<%= {{ cookiecutter.app_name }}.dist %>/index.html'],
        tasks: ['targethtml:docker'],
        options: {
          spawn: false
        }
      }
    };

    grunt.config('watch', config);
    grunt.task.run('watch');

  })

  grunt.registerTask('default', [
    'docker'
  ]);

  grunt.registerTask('dockerWatch', [
    'docker',
    'watch:docker'
  ]);

  grunt.registerTask('docker', [
    'clean:tmp',
    'targethtml:docker',
    'copy:docker',
    'removeStatic',
    'less:docker',
  ]);

  grunt.registerTask('serve', [
    'clean:tmp',
    'targethtml:development',
    'concat:mocks',
    'copy:development',
    'removeStatic',
    'connect:development',
    'less:development',
    'watch:serve'
  ]);

  // Add more grunt tasks here for deployment build
};