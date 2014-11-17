#!/bin/bash
green='\033[32;47m'
NC='\033[0m'

chmod +x scripts/run_dev
echo -e "${green}Installing packages from NPM and Bower${NC}"
sleep 1
cd $PWD/{{ cookiecutter.app_name}}-web && npm install || { echo >&2 "NPM install failed, make sure that you have Node and NPM installed"; exit 1; }
bower install || { echo >&2 "bower install failed, make sure that you have bower installed"; exit 1; }
