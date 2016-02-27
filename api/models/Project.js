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
   users: {
     collection: 'user',
     via: 'account'
   },
   //Has many medias
   medias: {
     collection: 'media',
     via: 'media'
   }
   //Has many Transcripts through Medias
  //  transcripts:{
  //     collection: 'transcript',
  //     via: 'media',
  //     through: 'transcriptions'
  //   }

  // Has many Annotations through Transcripts

  // Has many Speakers

  // Has many Paperedit Annotation

  }
};
