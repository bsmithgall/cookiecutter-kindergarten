FROM ubuntu:trusty

RUN apt-get update && apt-get install -yq python python-dev python-pip libpq-dev postgresql-client

RUN mkdir /app
WORKDIR /app

ADD {{ cookiecutter.app_name }} /app/{{ cookiecutter.app_name }}
ADD requirements /app/requirements
ADD README.md /app/README.md

RUN pip install -r requirements/dev.txt

EXPOSE 8080

CMD python {{ cookiecutter.app_name }}/app.py