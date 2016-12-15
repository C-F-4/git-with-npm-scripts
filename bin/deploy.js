#! usr/bin/env node
var shell = require("shelljs");

shell.exec("Deploying github-pages");

shell.exec("github-pages-commit && github-pages-push");

shell.exec("Deployement was success!");
