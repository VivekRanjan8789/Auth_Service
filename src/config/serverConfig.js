const dotenv = require('dotenv');
const bcrypt =  require('bcrypt');
var jwt = require('jsonwebtoken');

dotenv.config();

module.exports = {
      PORT: process.env.PORT,
      SALT: bcrypt.genSaltSync(10),
      JWT_KEY: process.env.JWT_KEY
}