# Art-Sign front-end

### Configuration du projet
- **Platform:** [node](https://nodejs.org/en/)
- **Framework**: [express](http://expressjs.com)
- **Template Engine**: [handlebars](http://handlebarsjs.com)
- **CSS Preprocessor**: [sass](http://sass-lang.com)
- **JavaScript Framework**: [react](https://facebook.github.io/react/)
- **Build Tool**: [webpack](https://webpack.js.org)
- **Unit Testing**: [mocha](https://mochajs.org)

### License
* Apcahe-2.0

### consigne d'instalation
* cloner le depot apres l'avoir forker
* installer nodejs sur sa machine [nodejs.org](https://nodejs.org/en/)
* install webpack et mocha sur sa machine ```npm install -g mocha webpack```
* une fois dans le dossier du projet lancer un ```npm install```
* pour lancer le server de developpement ```npm start```
* ouvrir le navigateur et taper ```http://localhost:3000``` pour acceder a la version de developpement


### recommandation de pull request
* avant chaque pull request lancer le script de build en faisant un coup ```npm run build```


### consigne de travail générale
* le repository est packagé avec le superset de git [git flow](http://danielkummer.github.io/git-flow-cheatsheet/)
* le server de dev comprend un systeme de hotloading qui recharge les assets à chaud sur la page du navigateur sans recharge celle-ci
