{
"name":"test",
"lastname":"testL",
"email":"piet@gmail.com",
"password":"salty"
}



/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
* TODO : add some validations http://sailsjs.org/documentation/concepts/models-and-orm/validations
*/

module.exports = {

  attributes: {
    name : {
      type: 'string',
      required: true
    },

    lastname : {
      type: 'string',
      required: true
   },

    email : {
      type: 'string',
      unique: true,
      email: true,
      required: true
    },

    password : {
      type: 'string',
      required: true
    },

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
