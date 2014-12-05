#!/bin/bash
green='\033[32;47m'
NC='\033[0m'

chmod +x scripts/run_dev
echo -e "${green}Installing packages from NPM.${NC}"
sleep 2
npm install || { echo >&2 "NPM install failed, make sure that you have Node and NPM installed"; exit 1; }
echo -e "${green}Installing packages for Bower.${NC}"
sleep 2
bower install || { echo >&2 "bower install failed, make sure that you have bower installed"; exit 1; }
echo "Install finished. You will still need to install python packages via pip."
sleep 2
echo -e "${green}Building dist folder for docker.${NC}"
grunt || { echo >&2 "Grunt task failed, make sure you have grunt installed"; exit 1; }
echo -e "${green}Setup completed! Run fig up to build containers and boot dev server.${NC}"
