Cookiecutter-Kindergarten
---

A Flask template for [cookiecutter](https://github.com/audreyr/cookiecutter) with a different stack. Huge inspiration from the original [cookiecutter-flask](https://github.com/sloria/cookiecutter-flask) app.

Get Started
---

The post-install hooks for cookiecutter-kindergarten make use of Node/NPM and bower to install javascript dependencies. In order to make use of the full stack, you will need these installed. Please visit the [nodejs](http://nodejs.org/) and [bower](http://bower.io/#install-bower) websites to install these before continuing.

After you have node/npm and bower installed, simply run:

```
$ pip install cookiecutter
$ cookiecutter https://github.com/bsmithgall/cookiecutter-kindergarten.git
```

You will asked to fill out some basic information about your app, which will then be used by the project. Note that this doesn't install the python dependencies. If you are using Docker (see below), this won't be an issue. If you aren't, see the "Not using Docker" section.

Running the App
---

#### Using Docker
Cookiecutter-kindergarten takes advantage of docker to allow you to run the app without worrying about installing external dependencies like Postgres. It uses docker containers and fig for task orchestration. In practice, you should just be able to navigate to your app's directory and type `fig up` and have all the containers spin up for you. Adding new containers is a fairly trivial task, if you need, for example, memcached. Simply link the relevant containers in the `fig.yml` file and you will be on your way. Access to memcached via a docker container is something in the development pipeline.

Because fig mounts the files, you should get access to live-reloading of python content automatically. However, it will be easier if you boot up a `grunt watch:docker` process in order to rebuild the javascript files as you make changes. A special `dist` folder is mounted to the docker container, and you will need to run this grunt task in order to live rebuild the files into your web container.

#### Not using Docker
If you aren't using docker, that's totally fine. The barebones of cookiecutter-kingergarten doesn't try to force anything onto you. Instead, it is recommended for you to use a virtualenv to contain your python dependencies. If you are developing on Mac OSX, it is also recommended that you check out [postgres.app](http://postgresapp.com/) as a fairly easy out-of-the box solution. In order to run the server, you can simply use the files in the `scripts` directory.

Features
---
+ [`Peewee`](http://peewee.readthedocs.org) for simple ORM
+ [`Marshmallow`](http://marshmallow.readthedocs.org) for simple serialization (e.g. for a REST API)
+ Simple BaseModel class to extend for peewee
+ Utilizes [blueprints](http://flask.pocoo.org/docs/0.10/blueprints/) and the [flask app factory](http://flask.pocoo.org/docs/0.10/patterns/appfactories/) pattern
+ [Angular.js](https://angularjs.org/) integration [new, 0.1.1]
+ Node/npm and bower for javascript dependency management [new, 0.1.1]
+ Separation of `backend` and `web` subdirectories for side-by-side development of the frontend and backend [new, 0.1.1]
+ Automatic inclusion of bare angular mocks to allow total development separation [new, 0.1.1]
+ Separate [Docker](https://www.docker.com/) containers for the python app and a default Postgres database [new, 0.1.2]

Versions
---
+ 0.1.2 [this version]: Includes complete Docker images for all repos
+ 0.1.1: Includes angular
+ [0.1.0: Python-only](https://github.com/bsmithgall/cookiecutter-kindergarten/tree/basic-python)

License
---
BSD License (see LICENSE file)
