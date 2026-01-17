## Installation

### Verify `node.js` and `npm` installation
```js
node -v
npm -v
```

### dotenv
```js
npm install dotenv
```

### Initialize Node & Install Dependencies 
```sh
npm init -y                 
npm i express dotenv
```
> 1. `npm init -y`: Initialize project
> 2. `npm i express dotenv`: Initialize the `dotenv` package

### Enable ES Modules
```json
{
  "type": "module",
  "name": "nasa-apod-proxy",
  "version": "1.0.0",
  "main": "server.js",
  ...
}
```

#### Optional 
```json
{
    "scripts": {
    "start": "node server.js"
    }
}
```