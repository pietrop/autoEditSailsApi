/**
 * User
 *
 * @module      :: Model
 * @description :: This is the base user model
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = {

  attributes: require('waterlock').models.user.attributes({
    
   name : { type: 'string' },

    lastname : { type: 'string' },

    email : { type: 'string' },

    password : { type: 'string' },

    //  Belongs to Project
    project: {
      collection: 'project',
      via: 'user'//attribute
    }
    // ,
    // media: {
    //   collection: 'project',
    //   via: 'media'//attribute
    // }


  }),
  
  beforeCreate: require('waterlock').models.user.beforeCreate,
  beforeUpdate: require('waterlock').models.user.beforeUpdate
};
