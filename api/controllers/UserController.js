/**
 * UserController.js
 *
 * @module      :: Controller
 * @description :: Provides the base user
 *                 actions used to make waterlock work.
 *
 * @docs        :: http://waterlock.ninja/documentation
 */

// var actionUtil = require('../../node_modules/sails/lib/hooks/blueprints/actionUtil');

module.exports = require('waterlock').actions.user({

    /*===============================================================
    =   'GET /user' :   findOne    =
    ================================================================*/

    findOne: function(req, res) {
        // var params = req.params.all();
        // console.log('session: ' + JSON.stringify(req.session.user.id));

        User.findOne({
            id: req.session.user.id
        }).exec(function(err, account) {
            if (err) {
                return res.send(err);
            }
            if (!account) {
                return res.send('Could not find the user, sorry.');
            }
            sails.log('Found "%s"', account.email);
            return res.json(account);
        });
    },

    /*=====  End of findOne  ======*/

    // /*===============================================================
    // =   'GET /user' :   findAll    =
    // ================================================================*/
    // findAll: function(req, res) {

    //      User.find().exec(function(err, users) {
    //          if (err) {
    //             return res.negotiate(err);
    //         }
    //         if (!users) {
    //             return res.notFound('Could not find any user, sorry.');
    //         }
    //         sails.log('Found "%s"', users.email);
    //         return res.json(users);
    //     });
    // },

    /*=====  End of findAll  ======*/

    /*===============================================================
     =   'PUT /user' :   update    =
     ================================================================*/
    update: function(req, res) {

        User.update({
                id: req.session.user.id
            },
            req.body,
            function(err, users) {
                // Error handling
                if (err) {
                    console.log(err);
                    return res.send(err);
                    // Updated users successfully!
                } else {
                    console.log("Users updated:", users);
                    return res.json('user updated');
                }
            });
    },

    /*=====  End of update  ======*/

    /*===============================================================
    =   'DELETE /user' :   delete    =
    ================================================================*/
    delete: function(req, res) {

        User.findOne({ id: req.session.user.id }).exec(function foundRecord(err, record) {
            if (err) return res.serverError(err);
            if (!record) return res.notFound('No record found with the specified `id`.');

            User.destroy({ id: req.session.user.id }).exec(function destroyedRecord(err) {
                if (err) return res.negotiate(err);

                // if (sails.hooks.pubsub) {
                //     User.publishDestroy(pk, !sails.config.blueprints.mirror && req, { previous: record });
                if (req.isSocket) {
                    User.unsubscribe(req, record);
                    User.retire(record);
                }
            });

            return res.json({
                success: 'Deleted user, if it existed.'
            });
        });
    }


    /*=====  End of delete  ======*/





});
