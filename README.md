react-express-typescript
========================

This is a starting point template for a web ui that uses react, express, typescript technology stack, and 
aims to be "clone and go" ready for use with each merge to master.

# Development

We try to employ a "Development Environment as Code" approach to ensure one can "clone and go" without any 
manual environment setup.

The development environment is constituted by one or more docker containers, whose images contain all the
dependencies needed to run the typescript build, webpack, and express web server processes.

## Start the Development Environment

To begin development and view the current website, after cloning the repo, from the project root, run:

    ./ci dev:environment:runEverything

Before handing control of the dev environment off to docker, this command first ensures your workstation
has a compatible, isolated docker runtime environment.

Once ready, a browser window will be opened, showing the latest build of the site.

## Make Code Changes

Code changes are watched, and the development environment automatically refreshes to reflect the latest changes.

## View Logs

The typescript compilation, webpack, and express web server processes each produce logs. In development mode, these
logs are written to the logs folder. Feel free to tail the logs or open them in your favorite IDE to understand
what is happening if the development environment appears to be giving you any trouble.

## Interactive Shell

To get an interactive shell within the development environment, run:

    dev:environment:bash

## Proper Shutdown

When finished working, clean up the development environment by running:

    dev:environment:stopEverything

# Possible Enhancements

1. Add Material Design: https://www.material-ui.com/#/get-started/installation
2. IDE as code with typescript-enabled Cloud9

# Known Bugs

1. Dist folders are duplicated somehow by webpack

# Release Notes

## Version 1.0.0

- Added hello world webpage
- Added a single command to bring up an Express webserver and periodically compile Typescript code with tsc and webpack