#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
from flask import Blueprint, render_template

__location__ = os.path.realpath(
    os.path.join(os.getcwd(), os.path.dirname(__file__))
    )

TEMPLATE_DIR = os.environ.get('TEMPLATE_DIR', __location__ + '/../mock_templates/')
STATIC_DIR = os.environ.get('STATIC_DIR', __location__ + '/../mock_static/')

web_bp = Blueprint('web', __name__)

@web_bp.route('/')
def web_root():
    return render_template('index.html'), 200