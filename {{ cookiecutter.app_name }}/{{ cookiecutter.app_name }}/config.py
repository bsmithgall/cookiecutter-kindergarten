#!/usr/bin/env python
# -*- coding: utf-8 -*-

class Config(object):
    DEBUGGER = True
    RELOADER = True
    PORT = 9000

class DevelopmentConfig(Config):
    pass

class ProductionConfig(Config):
    DEBUGGER = False
    RELOADER = False
