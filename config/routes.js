/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'homepage'
  },

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/


  // 'POST /api/v1/user/signup': {blueprint: 'create', model: 'user'},
  //
  // //TODO: make custum `.find` in user controller

/*=============================================>>>>>
= ROUTES FOR SIGNIN =
===============================================>>>>>*/

  'GET  /login' : {
    view: 'loginpage'
  }
,
  'POST /login/:userEmail/:userPassword'    :   'AuthController.login'

/*= End of ROUTES FOR SIGNIN =*/
/*=============================================<<<<<*/
,
/*=============================================>>>>>
= ROUTES FOR SIGNUP =
===============================================>>>>>*/

  'GET  /signup' : {
    view: 'signuppage'
  }
,
  'POST /signup/:userEmail/:userPassword'   :   'AuthController.singup'

/*= End of ROUTES FOR SIGNUP =*/
/*=============================================<<<<<*/
,
/*=============================================>>>>>
= ROUTES FOR USER ACCOUNT =
===============================================>>>>>*/

  'GET  user/'            :  'UserController.findAll'
,
  'POST user/'            :  'UserController.create'
,
  'GET  user/:userId'     :  'UserController.findOne'
,
  'PUT user/:userId'      :  'UserController.update'
,
  'DELETE user/:userId '  :  'UserController.delete'

/*= End of ROUTES FOR USER ACCOUNT =*/
/*=============================================<<<<<*/
// ,
/*=============================================>>>>>
= ROUTES FOR PROJECT LIST =
===============================================>>>>>*/

  'GET user/:userId/project'                  :   'ProjectController.findAll'
,
  'GET user/:userId/project/:projectId'       :   'ProjectController.findOne'
,
  'PUT user/:userId/project/:projectId'       :   'ProjectController.update'
,
  'DELETE user/:userId/project/:projectId'    :   'ProjectController.delete'

/*= End of ROUTES FOR PROJECT LIST =*/
/*=============================================<<<<<*/
,
/*=============================================>>>>>
= ROUTES FOR CREATE NEW PROJECT =
===============================================>>>>>*/

  'POST user/:userId/project'   :   'ProjectController.create'

/*= End of ROUTES FOR CREATE NEW PROJECT =*/
/*=============================================<<<<<*/
,
/*=============================================>>>>>
= ROUTES FOR PROJECT PANEL  =
===============================================>>>>>*/

  'GET user/:userId/project/:projectId/transcript/'                   :   'TranscriptController.list'
,
  'GET user/:userId/project/:projectId/transcript/:transcriptId'      :   'TranscriptController.findOne'
,
  'PUT user/:userId/project/:projectId/transcript/:transcriptId'      :   'TranscriptController.update'
,
  'DELETE user/:userId/project/:projectId/transcript/:transcriptId'   :   'TranscriptController.delete'

,
  'GET user/:userId/project/:projectId/paperedit'                   :   'PapereditController.list'
,
  'GET user/:userId/project/:projectId/paperedit/:papereditId'      :   'PapereditController.findOne'
,
  'PUT user/:userId/project/:projectId/paperedit/:papereditId'      :   'PapereditController.update'
,
  'DELETE user/:userId/project/:projectId/paperedit/:papereditId'   :   'PapereditController.delete'

/*= End of ROUTES FOR PROJECT PANEL  =*/
/*=============================================<<<<<*/
,
/*=============================================>>>>>
= ROUTES FOR CREATE NEW MEDIA =
===============================================>>>>>*/

  'POST user/:userId/project/:projectId/media'    :   'MediaController.upload'

/*= End of ROUTES FOR CREATE NEW MEDIA =*/
/*=============================================<<<<<*/
,
/*=============================================>>>>>
= ROUTES FOR READ TRANSCRIPT =
===============================================>>>>>*/

  // 'GET user/:userId/project/:projectId/transcript/:transcriptId'  : 'TranscriptController.findOne'
  // ,
  'GET user/:userId/project/:projectId/annotation'                                             :   'AnnotationController.list'
,
  'GET user/:userId/project/:projectId/transcript/:transcriptId/annotation'                    :   'AnnotationController.findOne'
,
  'POST user/:userId/project/:projectId/transcript/:transcriptId/annotation'                   :   'AnnotationController.create'
,
  'PUT user/:userId/project/:projectId/transcript/:transcriptId/annotation/:annotationId'      :   'AnnotationController.update'
,
  'DELETE user/:userId/project/:projectId/transcript/:transcriptId/annotation/:annotationId'   :   'AnnotationController.delete'

/*= End of ROUTES FOR READ TRANSCRIPT =*/
/*=============================================<<<<<*/
,
/*=============================================>>>>>
= ROUTES FOR CREATE NEW PAPER EDIT =
===============================================>>>>>*/

  'POST user/:userId/project/:projectId/paperedit'  :  'PapereditController.create'

/*= End of ROUTES FOR CREATE NEW PAPER EDIT =*/
/*=============================================<<<<<*/
,
/*=============================================>>>>>
= ROUTES FOR PAPEREDIT PANEL =
===============================================>>>>>*/
  'GET user/:userId/project/:projectId/paperedit/:papereditId'    :   'PapereditController.findOne'
,
  'PUT user/:userId/project/:projectId/paperedit/:papereditId'    :   'PapereditController.update'

/*= End of ROUTES FOR PAPEREDIT PANEL =*/
/*=============================================<<<<<*/



};
