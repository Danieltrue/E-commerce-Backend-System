const expressJwt = require("express-jwt");

function auth() {
  const secret = process.env.SECRET;
  return expressJwt({
    secret,
    algorithms: ["HS256"],
  });
}

module.exports = auth;
