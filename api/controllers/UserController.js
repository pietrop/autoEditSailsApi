/**
 * UserController.js
 *
 * @module      :: Controller
 * @description :: Provides the base user
 *                 actions used to make waterlock work.
 *
 * @docs        :: http://waterlock.ninja/documentation
 */

var actionUtil = require('../../node_modules/sails/lib/hooks/blueprints/actionUtil');
var sails = require('sails');

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

        // Look up the model
        var Model = actionUtil.parseModel(req);

        // Locate and validate the required `id` parameter.
        var pk = { id: req.session.user.id };

        // Create `values` object (monolithic combination of all parameters)
        // But omit the blacklisted params (like JSONP callback param, etc.)
        var values = actionUtil.parseValues(req);

        // Omit the path parameter `id` from values, unless it was explicitly defined
        // elsewhere (body/query):
        var idParamExplicitlyIncluded = ((req.body && req.body.id) || req.query.id);
        if (!idParamExplicitlyIncluded) delete values.id;


        // Find and update the targeted record.
        //
        // (Note: this could be achieved in a single query, but a separate `findOne`
        //  is used first to provide a better experience for front-end developers
        //  integrating with the blueprint API.)
        Model.findOne(pk).populateAll().exec(function found(err, matchingRecord) {

            if (err) return res.serverError(err);
            if (!matchingRecord) return res.notFound();

            Model.update(pk, values).exec(function updated(err, records) {

                // Differentiate between waterline-originated validation errors
                // and serious underlying issues. Respond with badRequest if a
                // validation error is encountered, w/ validation info.
                if (err) return res.negotiate(err);


                // Because this should only update a single record and update
                // returns an array, just use the first item.  If more than one
                // record was returned, something is amiss.
                if (!records || !records.length || records.length > 1) {
                    req._sails.log.warn(
                        util.format('Unexpected output from `%s.update`.', Model.globalId)
                    );
                }

                var updatedRecord = records[0];

                // If we have the pubsub hook, use the Model's publish method
                // to notify all subscribers about the update.
                if (req._sails.hooks.pubsub) {
                    if (req.isSocket) { Model.subscribe(req, records); }
                    Model.publishUpdate(pk, _.cloneDeep(values), !req.options.mirror && req, {
                        previous: matchingRecord.toJSON()
                    });
                }

                // Do a final query to populate the associations of the record.
                //
                // (Note: again, this extra query could be eliminated, but it is
                //  included by default to provide a better interface for integrating
                //  front-end developers.)
                var Q = User.findOne(updatedRecord[User.primaryKey]);
                Q = actionUtil.populateEach(Q, req);
                Q.exec(function foundAgain(err, populatedRecord) {
                    if (err) return res.serverError(err);
                    if (!populatedRecord) return res.serverError('Could not find record after updating!');
                    res.ok(populatedRecord);
                }); // </foundAgain>
            }); // </updated>
        }); // </found>

    },

    /*=====  End of update  ======*/

    /*===============================================================
    =   'DELETE /user' :   delete    =
    ================================================================*/
    delete: function(req, res) {

        User.findOne({ id: req.session.user.id }).exec(function foundRecord(err, record) {
            if (err) return res.serverError(err);
            if (!record) return res.notFound('No record found with the specified `id`.');

            User.update({
                    id: req.session.user.id
                }, { enabled: false },
                function(err, users) {
                    // Error handling
                    if (err) {
                        console.log(err);
                        return res.send(err);
                        // Updated users successfully!
                    } else {
                        console.log("Users updated:", users);

                        User.destroy({ id: req.session.user.id }).exec(function destroyedRecord(err) {
                            if (err) return res.negotiate(err);

                            if (req.isSocket) {
                                User.unsubscribe(req, record);
                                User.retire(record);
                            }

                            req.session.destroy(function(err) {
                                if (err) return res.negotiate(err);
                            });
                        });
                        sails.log(req.session.user);
                        return res.json({
                            success: 'Deleted user, if it existed.'
                        });
                    }
                });
        });
    }

    /*=====  End of delete  ======*/


});
