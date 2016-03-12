/**
 * Papercut.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        label: { type: 'string' },

        order: { type: 'integer' },
        // TODO: change this with an association ?
        wordsSelectionIds: { type: 'array' }

    }
};
