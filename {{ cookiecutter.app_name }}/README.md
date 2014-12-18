{{ cookiecutter.project_name }}
===============================

About
---

{{ cookiecutter.project_short_description }}

Setup
---

{{ cookiecutter.project_name }} is split into two subdirectories: `{{ cookiecutter.app_name }}_backend`, and `{{ cookiecutter.app_name }}_web`. You can run these parts independently, or together.

### Running the whole stack

{{ cookiecutter.app_name }} comes with [Docker](https://www.docker.com/) support. It uses [fig](http://www.fig.sh/) for container orchestration. It is split into three separate container modules:

   + **`{{ cookiecutter.app_name }}_server`** runs nginx and proxies the other two containers.
   + **`{{ cookiecutter.app_name }}_web`** runs nginx and serves static content (it defaults to angular.js)
   + **`{{ cookiecutter.app_name }}_backend`** runs the Flask python content and serves to port 8080 (which is proxy passed by the server container)

Because fig mounts the directories, changes to the python code will be automatically picked up and run. However, in order to catch changes to the angular code, you should run the `grunt watch:docker` command helpfully included in the Gruntfile.

Docker will also boot up an empty Postgres database and connect to it for you. If you are interested in using a different backing database, you can switch this out fairly easily by changing the image for the db container in the `fig.yml` file and `DATABASE_DRIVER` environmental variable in the `api` container.

For more information about getting started with Docker, please take a look at the [Installation](https://docs.docker.com/installation/#installation) section of the docker docs.

If you don't want to use docker, a helpful script has been included in the `scripts` directory to run both backend and frontend together. Simply type `./scripts/run_dev` to access both.

### {{ cookiecutter.app_name }}_backend

The backend uses the kindergarten stack for the ORM and marshmallow for serialization. These provide a very light-weight stack for pure python deveopment. You can run this project independently only. See the README in the `{{ cookiecutter.app_name }}_backend` directory for more details.

### {{ cookiecutter.app_name }}_web

The frontend uses angular.js as the primary framework and Grunt for serving. The combination of the Gruntfile and the angular mocks give a fully-formed simulation of the backend without needing to run any python. See the README in the `{{ cookiecutter.app_name }}_web` directory for more details.
