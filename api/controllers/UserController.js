/**
 * UserController.js
 *
 * @module      :: Controller
 * @description :: Provides the base user
 *                 actions used to make waterlock work.
 *
 * @docs        :: http://waterlock.ninja/documentation
 */

// var requestType = function(req, res) {
//     if (req.params == null || req.params == 0) {
//         if (req.body == null || req.body == 0) {
//             return res.send({ error: 'error' });
//         } else {
//             reqType = 'body';
//         }
//     } else {
//         reqType = 'params';
//     }

//     switch (reqType) {
//         case 'params':
//             console.log('PARAMS');
//             return params = req.params.all();
//             break;
//         case 'body':
//             console.log('BODY');
//             return params = req.body;
//             break;
//         default:
//             return params = {};
//     }
// };



module.exports = require('waterlock').actions.user({
    /* e.g.
      action: function(req, res){

      }
    */
    // //TODO: write test case
    // validateUsername: function(req, res) {

    //     var params = req.params.all();

    //     // var params = req.params.all();
    //     User.findOne({ name: params.username }).exec(function(err, user) {
    //         if (err) {
    //             waterlock.logger.debug(err);
    //             res.serverError();
    //         }
    //         if (!user) {

    //             return res.ok({ valid: true });
    //         } else {
    //             sails.log.error('Name is in use!');
    //             return res.ok({ valid: false });
    //         }
    //     });
    // },
    // //TODO: write test case
    // //TODO: write it up
    // validateEmail: function(req, res) {
    //     var params = req.params.all();

    //     User.findOne({ name: params.email }).exec(function(err, user) {
    //         if (err) {
    //             waterlock.logger.debug(err);
    //             res.serverError();
    //         }
    //         if (!user) {

    //             return res.ok({ valid: true });
    //         } else {
    //             sails.log.error('Name is in use!');
    //             return res.ok({ valid: false });
    //         }
    //     });
    // },
    // route to create user, user auth and associate them
    // create: function(req, res) {                  //NEW VERSION INTEGRATED IN AUTHCONTROLLER register
    //     //console.log("customsied!!!!!!");
    //     var params = req.params.all();
    //     var auth = {
    //         email: params.email,
    //         password: params.password
    //     },
    //     userObj = {
    //         username: params.username,
    //         firstname: params.firstname,
    //         lastname: params.lastname,
    //         email: params.email
    //     };


    //     User.create(userObj)
    //         .exec(function(err, user) {
    //             if (err) {
    //                 waterlock.logger.debug(err);
    //                 req.session.flash = {
    //                     err: err
    //                 };

    //                 return res.send({ success: false, message: err });
    //             }
    //             req.session.user = user;
    //             req.session.authenticated = true;
    //             waterlock.engine.attachAuthToUser(auth, user, function(err) {
    //                 if (err) {
    //                     waterlock.logger.debug(err);
    //                     return res.send({ success: false, message: err });
    //                 }
    //                 //user.online = true;
    //                 user.save(function(err, user) {
    //                     if (err) {
    //                         sailsLog('err', err);
    //                         return next(err);
    //                     }

    //                     user.action = "signed-up and logged-in.";

    //                     User.publishCreate(user);

    //                     waterlock.logger.debug('user login success');
    //                     return res.send({ success: true });
    //                 });
    //             });
    //         });
    // },
    // show: function(req, res) { //won't see unless the owner

    // },
    // login_fail: function(req, res) {
    //     return res.send({ success: false });
    // },
    // logout_fail: function(req, res) {
    //     return res.send({ success: false });
    // },


    /**
     * `UserController.create()`  OLD VERSION
     */
    // create: function(req, res) {

    //     User.create({
    //         name: req.body.name,
    //         email: req.body.email,
    //         password: req.body.password
    //     }).exec(function(err, msg) {
    //         sails.log(msg);
    //     });

    //     return res.json({
    //         success: 'user created'
    //     });
    // },

    /**
     * `UserController.findOne()`
     */
    findOne: function(req, res) {
        var params = req.params.all();
        console.log(req.params);

        User.findOne({id: req.params.userId}).exec(function(err, account) {
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

    // Media.findOne(req.param('mediaId'))
    //          .populate('transcript')
    //          .exec(function(err, m){
    //              return res.json(
    //                   m.transcript[0]
    //              );



    /**
     * `UserController.findAll()`
     */
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

    /**
     * `UserController.update()`
     */
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

    /**
     * `UserController.delete()`
     */
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
});
