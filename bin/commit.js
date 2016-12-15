#! /usr/bin/env node
var shell = require("shelljs");

shell.exec("Commiting gh-pages");

shell.exec("git add -A && git commit -a -m 'gh-pages update'");

shell.exec("Commit Success!");
