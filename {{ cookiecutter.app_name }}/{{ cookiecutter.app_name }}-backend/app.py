#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
from flask import Flask
from werkzeug.serving import run_simple
from blueprints.web import web_bp

def create_app(config=False):
    # send global static files to a junk /nostatic path
    app = Flask(__name__, static_path='/nostatic')
    # generate configuration from environmental variable
    if not config:
        config = os.environ.get('APP_SETTINGS', 'config.DevelopmentConfig')
        app.config.from_object(config)

    app.register_blueprint(web_bp)
    return app

if __name__ == '__main__':
    app = create_app()
    run_simple('0.0.0.0', app.config.get('PORT', 9000), app,
        use_reloader=app.config.get('RELOADER', True), 
        use_debugger=app.config.get('DEBUG', True))
