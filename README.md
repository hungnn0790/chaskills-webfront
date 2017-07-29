# chaskill-webfront

The main services for Realife, an application for lifelong learner.

## Deploy

* Generate bundle file
```$ NODE_ENV=production node_modules/.bin/webpack -p```
* Run with babel-node:
```$ NODE_ENV=production node_modules/.bin/babel-node --presets react,es2015 src/server.js```
* Run in Production:
```$ npm start```