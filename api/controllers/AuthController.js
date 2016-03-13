/**
 * AuthController
 *
 * @module      :: Controller
 * @description	:: Provides the base authentication
 *                 actions used to make waterlock work.
 *
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = require('waterlock').waterlocked({
    /* e.g.
      action: function(req, res){
  
      }
    */

       register: function(req, res) {
        //console.log("customsied!!!!!!");
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

                    return res.send({ success: false, message: err });
                }
                req.session.user = user;
                req.session.authenticated = true;
                waterlock.engine.attachAuthToUser(auth, user, function(err) {
                    if (err) {
                        waterlock.logger.debug(err);
                        return res.send({ success: false, message: err });
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
                        return res.send({ success: true });
                    });
                });
            });
    }

});
