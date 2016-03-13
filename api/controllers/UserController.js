/**
 * UserController.js
 *
 * @module      :: Controller
 * @description :: Provides the base user
 *                 actions used to make waterlock work.
 *
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = require('waterlock').actions.user({

    /*===============================================================
    =   'GET /user/:userId :   findOne    =
    ================================================================*/
    
    findOne: function(req, res) {
        var params = req.params.all();
        console.log(req.params);

        User.findOne({
            id: req.params.userId
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

    /*===============================================================
    =   'GET /user :   findAll    =
    ================================================================*/
    findAll: function(req, res) {

        User.find().exec(function(err, users) {
            if (err) {
                return res.negotiate(err);
            }
            if (!users) {
                return res.notFound('Could not find any user, sorry.');
            }
            sails.log('Found "%s"', users.email);
            return res.json(users);
        });
    },

    /*=====  End of findAll  ======*/

   /*===============================================================
    =   'PUT /user/:userId :   update    =
    ================================================================*/
    update: function(req, res) {

        User.update({
                id: req.params.userId
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
    =   'DELETE /user/:userId :   delete    =
    ================================================================*/
    delete: function(req, res) {

        User.destroy({
            id: req.params.userId
        }).exec(function(err) {
            if (err) {
                return res.negotiate(err);
            }
            sails.log('Deleted user, if it existed.');
            return res.json({
                success: 'Deleted user, if it existed.'
            });

        });
    }
    /*=====  End of delete  ======*/
});
