===============================
{{ cookiecutter.project_name }}
===============================

About
---

{{ cookiecutter.project_short_description }}

Setup
---

Developing {{ cookiecutter.project_name }} is as simple as setting up a few environmental variables. It will use `sqlite` as a default database unless otherwise configured. For detailed explanation of setting up with Postgres (for example), please see below. It is also recommended that you use a `virtualenv` with `virtualenvwrapper` to make development easier. See below for an example for setting this up.

1. Set the app's secret key to an environmental variable. For example, add the following to a `.bashrc` or `.bash_profile`: `export {{ cookiecutter.app_name | upper }}_SECRET = 'a-super-secret-key'`
2. Run the following commands to set up (preferably from inside a virtualenv):

```
git clone https://github.com/{{ cookiecutter.github_username }}/{{ cookiecutter.app_name }}
cd {{ cookiecutter.app_name }}
pip install -r requirements/dev.txt
PYTHONPATH=. python {{ cookiecutter.app_name }}/app.py
```

Navigate to `localhost:9000` in your browser.

Deployment
---
Make sure that your `APP_SETTINGS` environmental variable is set to `config.ProductionConfig`. This will turn off the reloader and debugger.

Getting Started with Virtualenv
---

The best way to familiarize yourself with virtualenvwrapper is to take a look at the [docs](http://virtualenvwrapper.readthedocs.org/en/latest/). The biggest trick is to make sure that your `WORKON_HOME` environmental variable lives in your `.bashrc` or `bash_profile` to ensure that you have access to the `workon` command.

Other Useful Tools
---

+ [Postgres.app](http://postgresapp.com/) is the easiest way to get started with Postgres on MacOSX.
+ [Peewee](http://peewee.readthedocs.org) and [Marshmallow](http://marshmallow.readthedocs.org) (hence the "Kindergarten stack" name) docs.
+ [cookiecutter-flask](https://github.com/sloria/cookiecutter-flask), for getting started with a SqlAlchemy-based stack.
