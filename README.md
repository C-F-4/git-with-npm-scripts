# Github Pages With NPM(Scripts)
 >> ( an Easy Command Line Deployment of Github Pages )

---
Basic useful feature list:

 * github-pages-push
 * github-pages-commit
 * github-pages-deploy (Just do this It'll add, commit, and push)


The repository is publically published [on npmjs](https://www.npmjs.com/package/@flaming_phoenix/git-with-npm-scripts)

Requires!

 * npm
 * .gitignore (so you don't commit node_modules into your git repo)
 * shelljs (don't worry it'll be installed with the package)

Package Dependecies:
 * shelljs (Uses shelljs module to execute git scripts)

Steps for Installation:

### Step 1:
```bash
#Preferable Way (Save it as a dev-dependency)
npm install --save-dev @flaming_phoenix/git-with-npm-scripts
```
```bash
# To install locally and adding it as dependency
npm install --save @flaming_phoenix/git-with-npm-scripts
```
```bash
# To install it globally
npm install -g @flaming_phoenix/git-with-npm-scripts
```
### Step 2:
```bash
# So we know it's a git repository, do feel free to add git remotes and also edit in your package.json ("repository" field)
git init
```

### Step 3:
```bash
# Go ahead, and give it a shot, 3 commands are available
# Go to your ROOT directory
github-pages-push
github-pages-commit
github-pages-deploy
```
---
Feel free to use it, modify it and PR it.
