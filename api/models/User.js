var User = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
    username  : { type: 'string', unique: true },
    profileUrl  : { type: 'string'},
    email     : { type: 'email',  unique: true },
    passports : { collection: 'Passport', via: 'user' },
    photos    : { type: 'array'},
    name      : { type: 'object', unique: true }
  }
};

module.exports = User;
