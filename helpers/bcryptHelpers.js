const bcrypt = require('bcryptjs');

exports.hashSync = async password => await bcrypt.hashSync(password, 10);