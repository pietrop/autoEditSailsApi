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

 // NEED TO BE IMPLEMENTED:
 /**
  * `AuthController.login()`
  */
  login: function (req, res) {
      return res.json({
        success:'login page'
      });
  },

/**
  * `AuthController.signup()`
  */
  signup: function (req, res) {
    return res.json({
      success:'signup page'
    });
  },

/**
  * `AuthController.logout()`
  */
  logout:function (req, res) {
    return res.json({
      success:'logout page'
    });
  }

});
