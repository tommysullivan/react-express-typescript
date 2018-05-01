react-express-typescript
========================

To get started, run `./ci` and see the options in the usage.

    ./ci dev:environment:bash
    
To compile and run the web server, perform each of the following in its own terminal (or run in background):

    ./ci dev:environment:tscWatch
    ./ci dev:environment:webpackWatch
    ./ci dev:environment:express:run
    
To view the site, run:

    ./ci dev:browser
    
# Possible Enhancements

1. Add Material Design: https://www.material-ui.com/#/get-started/installation

# Known Bugs

1. Dist folders are duplicated somehow by webpack