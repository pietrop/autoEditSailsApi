# authapp

a [Sails](http://sailsjs.org) application for auth based on RESTful APIs.


## SET UP


- ``sails new authApp``
- ``cd authApp``
- ``npm install waterlock --save``
- ``npm install waterlock-local-auth --save``
- ``./node_modules/.bin/waterlock generate all``
- In ``/config/waterlock.js`` change ``secret`` in the ``jsonWebTokens`` object
- ``sails generate api post``
- Change the ``PostController`` like this:
```
/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	restricted:function(req,res){
		return res.ok("If You can see this you are authenticated");
	},	
	open:function(req,res){
		return res.ok("This is open to all!!!");
	}
};
```
- Change the ``/config/policy.js``
```
/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your controllers.
 * You can apply one or more policies to a given controller, or protect
 * its actions individually.
 *
 * Any policy file (e.g. `api/policies/authenticated.js`) can be accessed
 * below by its filename, minus the extension, (e.g. "authenticated")
 *
 * For more information on configuring policies, check out:
 * http://sailsjs.org/#!documentation/
 */


module.exports.policies = {

  '*': true,
  PostController:{
  	restricted:['sessionAuth'],
  	open:true
  }
};
```
- Close the blueprints by setting ``action``, ``rest``, and ``shortcuts``to ``false``

- Edit the ``/config/route.js`` file like so:
```
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

  'POST /auth/login' : 'AuthController.login'
  ,
  'POST /auth/logout' : 'AuthController.logout'
  ,
  'POST /auth/register' : 'AuthController.register'

};
```
- Lift the application and test the urls:

``http://localhost:1337/post/open`` GET

``http://localhost:1337/post/restricted`` GET

``http://localhost:1337/post/register`` POST

``http://localhost:1337/auth/login``  POST

### NOTES
http://maangalabs.com/blog/2014/10/25/waterlock-easy-authentication-in-sails/
