const expressJwt = require('express-jwt');
const userHandling = require('./database/users/userHandling');


function jwt() {
  const secret = "superkangourou";
  return expressJwt({ secret,isRevoked }).unless({
    path: [
      //ces routes ne requierent pas de token
      '/users/authentication',
      '/users/register'
    ]
  });
}

async function isRevoked(req, payload, done){
  const user = await userHandling.getById(payload.sub);
// retire le token si pas de user
  if (!user) {
    return done(null, true);
  }
  done();
}

module.exports = jwt;
