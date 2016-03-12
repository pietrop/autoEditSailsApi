/**
 * ProjectController
 *
 * @description :: Server-side logic for managing projects
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {
    restricted: function(req, res) {
        return res.ok(sails.__("If you can see this you are authenticated") + " as user " + req.session.user.username);
    },
    open: function(req, res) {
        return res.ok(sails.__("This is open!"));
    },
    admin: function(req, res) {
        return res.ok(sails.__("If you can see this you are admin."))
    }
};
