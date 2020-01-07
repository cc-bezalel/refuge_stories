const bcrypt = require('bcryptjs');

exports.hashSync = password => bcrypt.hashSync(password, 10);