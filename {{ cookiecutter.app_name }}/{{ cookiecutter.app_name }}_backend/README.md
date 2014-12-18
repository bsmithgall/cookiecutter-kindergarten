{{ cookiecutter.app_name }}_backend
===============================

About
---

{{ cookiecutter.project_short_description }}

Development
---

Developing {{ cookiecutter.app_name }}_backend is a simple Flask application. It can be developed similarly to any other Flask app. The stack uses [Peewee](http://peewee.readthedocs.org) as an ORM and [Marshmallow](http://marshmallow.readthedocs.org) for a serializer. Running the backend independently gives you access to a blank template with a basic angular controller for simulating GET and POST requests to your API. To run the backend by itself, simply run the following command from inside the {{ cookiecutter.app_name }}_backend directory:

```
PYTHONPATH=. python {{ cookiecutter.app_name }}/app.py
```

Navigate to `localhost:9000` in your browser. You should see the simple template. Opening developer tools will give you access to the angular part of the application.

Getting Started with Virtualenv and Virtualenvwrapper
---

Using a virtual environment is the easiest way to develop with this stack. The best way to familiarize yourself with virtualenv and the set of tools on top of it -- the virtualenvwrapper is to take a look at the [docs](http://virtualenvwrapper.readthedocs.org/en/latest/). The biggest trick is to make sure that your `WORKON_HOME` environmental variable lives in your `.bashrc` or `bash_profile` to ensure that you always have access to the `workon` command.

Other Useful Links and Tools
---

+ [Postgres.app](http://postgresapp.com/) is the easiest way to get started with Postgres on MacOSX if developing with a Postgres database.
+ [Peewee](http://peewee.readthedocs.org) and [Marshmallow](http://marshmallow.readthedocs.org) (hence the "Kindergarten stack" name) docs.
+ [cookiecutter-flask](https://github.com/sloria/cookiecutter-flask), for getting started with a SqlAlchemy-based stack.
