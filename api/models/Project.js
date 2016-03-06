/**
 * Project.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: require('waterlock').models.project.attributes({

    name: 'string',
    description: 'string',
    date: 'date',
    // Has many Users
    user: {
      model: 'user'
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

    beforeCreate: require('waterlock').models.user.beforeCreate,
    beforeUpdate: require('waterlock').models.user.beforeUpdate
  });
};
