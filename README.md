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

You will asked to fill out some basic information about your app, which will then be used by the project.

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

Versions
---
+ 0.1.1 [this version]: Includes angular
+ [0.1.0: Python-only](https://github.com/bsmithgall/cookiecutter-kindergarten/tree/basic-python)

License
---
BSD License (see LICENSE file)