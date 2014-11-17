'use strict';

module.exports = function(grunt) {

  // Load grunt tasks together
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    // Declare path variables to be used through the file
    {{ cookiecutter.app_name }}: {
      app: require('./bower.json').appPath || 'app',
      dist: 'dist'
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
          base: ['.tmp', '<%= {{ cookiecutter.app_name }}.app %>'],
        }
      }
    },

    // Watch files for changes and run tasks accordingly
    // less - Recompile less files to css files
    // gruntfile - Reload the running gruntfile

    watch: {
      less: {
        files: ['<%= {{ cookiecutter.app_name }}.app %>/less/**/*.less'],
        tasks: ['less:development'],
        options: {
          spawn: false
        }
      },
      gruntfile: {
        files: ['Gruntfile.js']
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

    // Remove files out of our .tmp directory and css files
    clean: {
      tmp: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= {{ cookiecutter.app_name }}.app %>/css/*'
          ]
        }]
      }
    },

    // Copy Javascript files to .tmp
    copy: {
      development: {
        files: [{
          expand: true,
          cwd: '<%= {{ cookiecutter.app_name }}.app %>/js',
          src: ['**'],
          dest: '.tmp/js'
        }]
      }
    },

    // If there are mocks, use targethtml to clean them out
    // and move the resulting file to .tmp
    targethtml: {
      development: {
        files: {
          '.tmp/index.html': '<%= {{ cookiecutter.app_name }}.app %>/index.html',
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

      // overwrite the original file with the new one
      grunt.file.write(abspath, revisedFile);
    }

    grunt.file.recurse('.tmp', removeStatic);
  });

  grunt.registerTask('serve', [
    'clean:tmp',
    'targethtml:development',
    'copy:development',
    'removeStatic',
    'connect:development',
    'less:development',
    'watch'
  ]);

  // Add more grunt tasks here
};