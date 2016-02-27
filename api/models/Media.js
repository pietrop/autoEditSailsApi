/**
* Media.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    filePath : { type: 'string' },

    fileName : { type: 'string' },

    mediaType : { type: 'string' },

    cameraTimecode : { type: 'string' },

    creationTime : { type: 'datetime' },

    tapeReelName : { type: 'string' },

    duration : { type: 'float' }, //in seconds

    codecTimeBaseFps : { type: 'integer' },

    converted : { type: 'array' },


  //Has One Transcript
  transcript:{
     model: 'transcript'
  },
  // Belongs to Project
  media: {
    model: 'project'
  }


  }
};
