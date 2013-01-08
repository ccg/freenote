#!/bin/sh

coffee -c app/app_jasmine.coffee
coffee -c app/app.coffee
coffee -o spec/js -c spec/coffee/*.coffee
