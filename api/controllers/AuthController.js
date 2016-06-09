/**
 * AuthController
 *
 * @module      :: Controller
 * @description :: Provides the base authentication
 *                 actions used to make waterlock work.
 *
 * @docs        :: http://waterlock.ninja/documentation
 */
var bcrypt = require('bcrypt');


module.exports = require('waterlock').waterlocked({


    register: function(req, res) {
      //TODO: needs adding validation to check all params username, firstname, lastname, email are all present
        var params = req.params.all();
        var auth = {
                email: params.email,
                password: params.password
            },
            userObj = {
                username: params.username,
                firstname: params.firstname,
                lastname: params.lastname,
                email: params.email
            };

        User.create(userObj)
            .exec(function(err, user) {
                if (err) {
                    waterlock.logger.debug(err);
                    req.session.flash = {
                        err: err
                    };

                    return res.json(401, { success: false });
                }
                req.session.user = user;
                req.session.authenticated = true;
                waterlock.engine.attachAuthToUser(auth, user, function(err) {
                    if (err) {
                        waterlock.logger.debug(err);
                        return res.json(401, { success: false });
                    }
                    //user.online = true;
                    user.save(function(err, user) {
                        if (err) {
                            sailsLog('err', err);
                            return next(err);
                        }

                        user.action = "signed-up and logged-in.";

                        User.publishCreate(user);

                        waterlock.logger.debug('user login success');
                        return res.ok({ success: true });
                    });
                });
            });
    },

    login: function(req, res) {

        var scope = require('../../node_modules/waterlock-local-auth/lib/scope')(waterlock.Auth, waterlock.engine);
        var params = req.params.all();

        if (typeof params[scope.type] === 'undefined' || typeof params.password !== 'string') {
            waterlock.cycle.loginFailure(req, res, null, { error: 'Invalid ' + scope.type + ' or password' });
        } else {
            var pass = params.password;
            scope.getUserAuthObject(params, req, function(err, user) {
                if (err) {
                    if (err.code === 'E_VALIDATION') {
                        return res.status(400).json(err);
                    } else {
                        return res.serverError(err);
                    }
                }
                if (user) {
                    if (user.auth) {
                        if (bcrypt.compareSync(pass, user.auth.password)) {
                            waterlock.cycle.loginSuccess(req, res, user);
                        } else {
                            waterlock.cycle.loginFailure(req, res, user, { error: 'Invalid ' + scope.type + ' or password' });
                        }
                    } else {
                        waterlock.cycle.loginFailure(req, res, null, { error: 'user not found' });
                    }
                } else {
                    //TODO redirect to register
                    try {
                        waterlock.cycle.loginFailure(req, res, null, { error: 'user not found' });
                    } catch (err) {
                        return res.json(401, err);
                    }
                }
            });
        }
    }
    // ,

    // logout: function(req, res) {
    //     if (!req.session.userId) return res.redirect('/');
    //     User.findOne(req.session.userId, function foundUser(err, user) {
    //         if (err) return res.negotiate(err);
    //         if (!user) { //C
    //             sails.log.verbose('Session refers to a user who no longer exists.');
    //             return res.redirect('/');
    //         }
    //         req.session.userId = null;
    //         return res.redirect('/');
    //     });
    // },


});
