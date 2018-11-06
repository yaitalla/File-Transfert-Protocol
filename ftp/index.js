const upload = require('./upload/index');
//const download = require('./download');

module.exports = (router) => {
  upload(router),
  //download(router)
}
