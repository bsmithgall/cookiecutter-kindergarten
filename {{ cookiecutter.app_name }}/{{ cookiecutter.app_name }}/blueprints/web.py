#!/usr/bin/env python
# -*- coding: utf-8 -*-

from flask import Blueprint, render_template
from werkzeug.wrappers import Response

web_bp = Blueprint('web', __name__)

@web_bp.route('/')
def web_root():
    return render_template('index.html'), 200