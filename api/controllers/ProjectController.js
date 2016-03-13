/**
 * ProjectController
 *
 * @description :: Server-side logic for managing projects
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {
    /*============================
    =            Test            =
    ============================*/

    restricted: function(req, res) {
        return res.ok(sails.__("If you can see this you are authenticated") + " as user " + req.session.user.username);
    },
    open: function(req, res) {
        return res.ok(sails.__("This is open!"));
    },
    admin: function(req, res) {
        return res.ok(sails.__("If you can see this you are admin."));
    },
    jwt: function(req, res) {
        return res.ok(sails.__("If you can see this you have a web token."));
    },

    /*=====  End of Test  ======*/

    /*=============================================================
    =   'POST /user/:userId/project'       :          create      =
    ==============================================================*/

        created: function(req, res) {
        return res.ok('Project created');
    },

    /*=====  End of findAll  ======*/

    /*=============================================================
    =   'GET /user/:userId/project'        :          findAll     =
    ==============================================================*/

    findAll: function(req, res) {
        return res.ok('All projects listed');
    },

    /*=====  End of findAll  ======*/

    /*=============================================================
    =   'GET /user/:userId/project/:projectId'  :     findOne     =
    ==============================================================*/

    findOne: function(req, res) {
        return res.ok('Project listed');
    },


    /*=====  End of findOne  ======*/

    /*=============================================================
    =   'PUT /user/:userId/project/:projectId'    :    update     =
    ==============================================================*/

    update: function(req, res) {
        return res.ok('Project updated');
    },

    /*=====  End of update  ======*/


    /*=============================================================
    =  'DELETE /user/:userId/project/:projectId'    :   delete    =
    ==============================================================*/

    delete: function(req, res) {
        return res.ok('Project deleted');
    },

    /*=====  End of delete  ======*/

};
