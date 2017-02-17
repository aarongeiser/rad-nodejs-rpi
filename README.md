# RAD NodeJS

A starting point for containerized Node.js 6.9 applications on Raspbian for Raspberry Pi.  Based on RAD Container:  https://github.com/frog/rad-container

# Getting Started
1.  Start by flashing the SD card for your Raspberry Pi and installing the latest version of Raspbian Jesse.  Follow the instructions located here:  https://www.raspberrypi.org/documentation/installation/installing-images/README.md

2.  Once you have Raspbian installed and you boot up your Raspberry Pi, you must install the latest version of docker.  `curl -sSL https://get.docker.com | sh`

Once Docker is installed on your machine, follow the steps below to begin developing your application.  This is intended for local development, and will map your project root directory into the container and auto restart the application when changes are made.

1.  Navigate to your project root directory and copy the contents of this repository to that location.
2.  Create a copy of `make_env.dist` and rename it to `make_env`.  Update with your project specific information.
3.  `make build`
4.  `make shell`
5.  `npm install`
6.  `npm start`

# Success
1.  If successful, you will see "Application running..." in your console.

# Included Packages
1.  This project include the `node-rpio` package for communicating with the Pi's GPIO pins.  Documentation is located here:  https://github.com/jperkin/node-rpio
2.  This project also includes the `mcp-api-adc` package for interfacing with MCP3002/4/8, MCP3202/4/8 and MCP3304 SPI analog to digital conversion chips.  Documentation is located here:  https://github.com/fivdi/mcp-spi-adc

# Special Sauce
1.  Please note that they `Makefile` for this project includes some extra flags for starting up your Docker container.  These are necessary to gain access to the GPIO pins.  Depending on your project, you may need to add additional capabilities.  Documentation on how to do this is located here:  https://docs.docker.com/engine/reference/run/#/runtime-privilege-and-linux-capabilities 
-  `--cap-add SYS_RAWIO` 
-  `--device /dev/mem`
-  `--privileged`

2.  Additionally, this project runs a special version of Node.js that is intended to work on ARM based systems.  You may encounter issues using Node packages that are not designed to work with this flavor of Node.js.  Documentation here:  https://github.com/hypriot/rpi-node

# Environment Variables

You may pass additional environment variables to your application by including them in your `make_env` file.  Follow these steps to add new environment variables.

1.  Add your environment variable to your `make_env` file inside the DOCKER_ENV specification.  Remember, the last line does not get a trailing slash.
2.  Destroy your existing container and rebuild it using `make build`.
3.  Run and re-attach to your updated container using `make shell`.