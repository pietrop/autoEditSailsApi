/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name : { type: 'string' },

  lastname : { type: 'string' },

  email : { type: 'string' },

  password : { type: 'string' },

  //  Belongs to Project
  account: {
    model: 'project'
  }


  }
};
