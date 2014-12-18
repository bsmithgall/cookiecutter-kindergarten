#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
import peewee as pw

db_driver = getattr(pw, os.environ.get('DATABASE_DRIVER', 'SqliteDatabase'))
db = db_driver(
        os.environ.get('DATABASE_NAME', '{{ cookiecutter.app_name }}'),
        host=os.environ.get('DATABASE_HOST', 'localhost'),
        user=os.environ.get('DATABASE_URL', '{{ cookiecutter.github_username }}')
    )

class BaseModel(pw.Model):
    """Base Model -- all inheriting classes share the same database"""
    def __marshallable__(self):
        """Return the marshallable dictionary that will be serialized by
        marshmallow. Peewee models have a dictionary representation where the
        ``_data`` key contains all the field:value pairs for the object.
        """
        return dict(self.__dict__)['_data']

    class Meta:
        database = db
