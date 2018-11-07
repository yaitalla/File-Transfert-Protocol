const upload = require('./upload/');
const download = require('./download');

Pour un router avec express, il faut redéclarer une instance de express:
const api = express();
après je te laisse chercher

module.exports = (router) => {
  upload(router),
  download(router)
}
