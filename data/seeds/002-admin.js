require('dotenv').config();
const { hashSync } = require('../../helpers/bcryptHelpers');
// const bcrypt = require("bcryptjs");
// const email = process.env.INITIAL_ADMIN_EMAIL;
// const salt = async() => await bcrypt.genSaltSync(10);
// const password = async () => await bcrypt.hashSync(process.env.INITIAL_ADMIN_PASSWORD, salt);

exports.seed = function(knex, Promise) {
  return knex("accounts").insert([
    {
      role_id: 1,
      email:process.env.INITIAL_ADMIN_EMAIL,
      password:hashSync(process.env.INITIAL_ADMIN_PASSWORD, 10)
    }
  ]);
};
