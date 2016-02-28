/**
* Paperedit.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name : { type: 'string' },

    description : { type: 'string' },

    sections : { type: 'array' }

    //Belongs to project

    // Has many papercuts

  }
};
