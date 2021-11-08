const expressJwt = require("express-jwt");
const api = process.env.API_URL;

function auth() {
  const secret = process.env.SECRET;
  return expressJwt({
    secret,
    algorithms: ["HS256"],
    isRevoked: isRevoked,
  }).unless({
    path: [
      { url: /\/api\/v1\/product(.*)/, methods: ["GET", "OPTIONS"] },
      { url: /\/api\/v1\category(.*)/, methods: ["GET", "OPTIONS"] },
      `${api}user/login`,
      `${api}user/register`,
      `${api}order`,
      { url: /\/api\/v1\/order(.*)/, methods: ["PUT", "OPTIONS"] },
      { url: /\/api\/v1\/order(.*)/, methods: ["DELETE", "OPTIONS"] },
    ],
  });
}
async function isRevoked(req, payload, done) {
  if (!payload.isAdmin) {
    done(null, true);
  }
  done();
}

module.exports = auth;
