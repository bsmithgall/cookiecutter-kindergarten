Cookiecutter-Kindergarten
---

A Flask template for [cookiecutter](https://github.com/audreyr/cookiecutter) with a different stack. Huge inspiration from the original [cookiecutter-flask](https://github.com/sloria/cookiecutter-flask) app.

Get Started
---
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

License
---
BSD License (see LICENSE file)