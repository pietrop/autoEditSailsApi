/**
 * User
 *
 * @module      :: Model
 * @description :: This is the base user model
 * @docs        :: http://waterlock.ninja/documentation
 */

var User = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {

    /* e.g.
    nickname: 'string'
    */
    username  : { type: 'string', unique: true },
    email     : { type: 'email',  unique: true },
    passports : { collection: 'Passport', via: 'user' },

    name: 'string',
    lastname: 'string',
    password: 'string',

    //  Belongs to Project
    projects: {
      collection: 'project',
      via: 'user' //attribute
    }

  }
};

module.exports = User;
