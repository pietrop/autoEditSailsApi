/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
* TODO : add some validations http://sailsjs.org/documentation/concepts/models-and-orm/validations
*/

module.exports = {

  attributes: {
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


  }
};
