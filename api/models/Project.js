/**
 * Project.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {

        name: { type: 'string' },

        description: { type: 'string' },

        date: { type: 'date' },

        // Has many Users
        user: {
            model: 'user'
        },
        //Has many medias
        media: {
            collection: 'media',
            via: 'clip'
        }

        //Has many Transcripts through Medias

        // Has many Annotations through Transcripts

        // Has many Speakers

        // Has many Paperedit Annotation

    }
};
