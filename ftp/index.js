const upload = require('./upload/');
const download = require('./download');

module.exports = (router) => {
  upload(router),
  download(router)
}
