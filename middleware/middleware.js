const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

module.exports = function middleware(app) {
  app.use(morgan("tiny"));
  //using cors middleware to trust all other network connecting to my node servera
  app.use(cors());
  app.options("*", cors());
  app.use(helmet());
};
