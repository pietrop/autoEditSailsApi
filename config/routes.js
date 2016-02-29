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
  'get /hi': 'TranscriptController.hi',

  //Project Media Transcript
  'get /project/:projectId/media/:mediaId/transcript': {
    controller: 'TranscriptController',
    action: 'show',
    skipAssets: true
  },

/*****************
*                *
* Create User    *
*                *
*****************/
  'post /user' : {
    controller: 'UserController',
    action: 'create',
    skipAssets: true
  },

/*****************
*                *
* Sign up User   *
*                *
*****************/
  'post /user' : {
    controller: 'UserController',
    action: 'findOne',
    skipAssets: true
  },

/**********************
*                     *
* User account Read   *
*                     *
***********************/
'get /user/:userId' : {
    controller: 'UserController',
    action: 'find',
    skipAssets: true
  },

/************************
*                       *
* User account Update   *
*                       *
*************************/
'put /user/:userId' : {
    controller: 'UserController',
    action: 'update',
    skipAssets: true
  },

/************************
*                       *
* User account Delete   *
*                       *
*************************/
'delete /user/:userId' : {
    controller: 'UserController',
    action: 'update',
    skipAssets: true
  },

/************************
*                       *
* Project List Read     *
*                       *
*************************/
'get /user/:userId/project' : {
    controller: 'ProjectController',
    action: 'find',
    skipAssets: true
  },

/************************
*                       *
* Project Show Single   *
*                       *
*************************/
'get /user/:userId/project/:projectId' : {
    controller: 'ProjectController',
    action: 'findOne',
    skipAssets: true
  },

/************************
*                       *
* Project Show Update   *
*                       *
*************************/
'put /user/:userId/project/:projectId': {
    controller: 'ProjectController',
    action: 'findOne',
    skipAssets: true
  },

/************************
*                       *
* Project Delete Single *
*                       *
*************************/
'delete /user/:userId/project/:projectId' : {
    controller: 'ProjectController',
    action: 'delete',
    skipAssets: true
  },

/************************
*                       *
* Project Create new    *
*                       *
*************************/
'post /user/:userId/project'  : {
    controller: 'ProjectController',
    action: 'create',
    skipAssets: true
  },

/************************
*                       *
* Project Panel         *
* Transcript - list     *
*                       *
*************************/
'get /user/:userId/project/:projectId/transcript': {
    controller: 'TranscriptController',
    action: 'find',
    skipAssets: true
  },

/************************
*                       *
* Paperedit             *
* list                  *
*                       *
*************************/
'get /user/:userId/project/:projectId/paperedit' : {
    controller: 'PapereditController',
    action: 'find',
    skipAssets: true
  }

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
