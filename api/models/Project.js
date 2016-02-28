/**
* Project.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    name : { type: 'string' },

    description : { type: 'string' },

    date : { type: 'date' },

    // Has many Users
   user: {
     collection: 'user',
     via: 'account'
   },
   //Has many medias
   media: {
     collection: 'media',
     via: 'clip'
   },

   //Has many Transcripts through Medias

  // Has many Annotations through Transcripts

  // Has many Speakers

  // Has many Paperedit Annotation

  }
};
