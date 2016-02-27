/**
* Transcript.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name : { type: 'string' },

    description : { type: 'string' },

    paragraph : { type: 'array' },
    //   Has many Annotations

    // Has and belong to many speakers

    //belongs to media
    owner:{
      model: 'media'
    }

  }
};
