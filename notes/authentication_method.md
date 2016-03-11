# AUTHENTICATION METHOD

### Packages required

```
npm install sails-generate-auth --save
npm install passport-local --save
npm install passport --save
npm install bcryptjs --save
npm install validator --save
npm install passport-http-bearer --save
``` 

 - ``passport-local`` is used for local authentication strategy. 

 - ``passport``, 

 - ``bcryptjs``,

 - ``validator`` and dependencies are used for ``passport`` and ``sails-generate-auth``. 


 - ``passport-http-bearer`` is for authenticated APIs using token.

 ### Set up

 - Run ``sails generate auth`` => generates files needed by _passport_

 - In ``/config/route.js`` the following routes have been added:
 
 ```js
'get /login': 'AuthController.login',
'get /logout': 'AuthController.logout',
'get /register': 'AuthController.register',

'post /auth/local': 'AuthController.callback',
'post /auth/local/:action': 'AuthController.callback',

'get /auth/:provider': 'AuthController.provider',
'get /auth/:provider/callback': 'AuthController.callback',
'get /auth/:provider/:action': 'AuthController.callback',
 ```
- In ``config/bootstrap.js`` has been added after the ``cb();`` the following line:
 
 ``sails.services.passport.loadStrategies();``

 which loads Passport providers on startup.

- All required Passport.js middleware is contained within the passport policy. So it is loaded before the controllers in ``config/policies.js``:

``'*': [ 'passport', /* your auth dependant policies go here */ ]``

- To make use of the error messages, the following locale definitions need to be added (example translations provided):
```
{
  "Error.Passport.Password.Invalid": "The provided password is invalid!",
  "Error.Passport.Password.Wrong": "Whoa, that password wasn't quite right!",
  "Error.Passport.Password.NotSet": "Oh no, you haven't set a password yet!",
  "Error.Passport.Username.NotFound": "Uhm, what's your name again?",
  "Error.Passport.User.Exists": "This username is already taken.",
  "Error.Passport.Email.NotFound": "That email doesn't seem right",
  "Error.Passport.Email.Missing": "You need to supply an email-address for verification",
  "Error.Passport.Email.Exists": "This email already exists. So try logging in.",
  "Error.Passport.Username.Missing": "You need to supply a username",
  "Error.Passport.Password.Missing": "Oh no, you haven't set a password yet!",
  "Error.Passport.Generic": "Snap. Something went wrong with authorization."
}
```
- ``sails-generate-auth`` , by default doesn't deny access to controllers if the user is not logged in. 
Created another policy (i.e. ``sessionAuth``) in ``api/policies/`` and added it to ``config/policies`` as follows:
```
 '*': ['passport', 'sessionAuth'],

 'auth': {
    '*': ['passport']
  }
```
This helps to restrict access to all the controller except auth controller actions such as *login*, *logout* and *register*, if the user is not logged in.

- For controller actions which are accessed via APIs, has been added ``bearerAuth`` (available in ``api/policies``). This policy ensures that the API is secure and only requests containing a bearer token can access them.

 ## NOTES

https://github.com/sails101/even-more-passport

https://github.com/kasperisager/sails-generate-auth/


