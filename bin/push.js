#! /usr/bin/env node
var shell = require("shelljs");

shell.exec("Pushing changes to remote(origin)");

shell.exec("git push origin master --force");

shell.exec("Push changes was success!");
