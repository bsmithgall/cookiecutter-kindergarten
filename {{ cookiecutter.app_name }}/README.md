{{ cookiecutter.project_name }}
===============================

About
---

{{ cookiecutter.project_short_description }}

Setup
---

{{ cookiecutter.project_name }} is split into two subdirectories: `{{ cookiecutter.app_name }}-backend`, and `{{ cookiecutter.app_name }}-web`. You can run these parts independently, or together.

### Running the whole stack

A helpful script has been included in the `scripts` directory to run both backend and frontend together. Simply type `./scripts/run_dev` to access both.

### {{ cookiecutter.app_name }}-backend

The backend uses the kindergarten stack for the ORM and marshmallow for serialization. These provide a very light-weight stack for pure python deveopment. You can run this project independently only. See the README in the `{{ cookiecutter.app_name }}-backend` directory for more details.

### {{ cookiecutter.app_name }}-web

The frontend uses angular.js as the primary framework and Grunt for serving. The combination of the Gruntfile and the angular mocks give a fully-formed simulation of the backend without needing to run any python. See the README in the `{{ cookiecutter.app_name }}-web` directory for more details.
