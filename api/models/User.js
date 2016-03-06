/**
 * User
 *
 * @module      :: Model
 * @description :: This is the base user model
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = {

  attributes: require('waterlock').models.user.attributes({

    /* e.g.
    nickname: 'string'
    */

  name : 'string',
  lastname : 'string',
  email : 'string',
  password : 'string',

  //  Belongs to Project
  projects: {
    collection: 'project',
    via: 'user'//attribute
  }


  }),

  beforeCreate: require('waterlock').models.user.beforeCreate,
  beforeUpdate: require('waterlock').models.user.beforeUpdate
};
