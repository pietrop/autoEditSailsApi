## Installation
``npm install waterlock``
``npm install waterlock-local-auth``
``./node_modules/.bin/waterlock generate all``

the last command generates automatically models for:
- Use
- User
- Attempt
- Auth
- Jwt
- Reset Token

the controllers for:

- User
- Auth

and the authentication policies in ``/api/policies/``

## Notes

The models and controllers need to be wrapped up by ``require('waterlock')``:

i.e. **controller**
```js
module.exports = require('waterlock').actions.user({

  //do something
});
```

i.e. **model**
```js
module.exports = {

  attributes: require('waterlock').models.user.attributes({

      // define attributes

  });

  beforeCreate: require('waterlock').models.user.beforeCreate,
  beforeUpdate: require('waterlock').models.user.beforeUpdate
};
```

## Configuration

In ``/config/policies.js`` the default action routes (after they have been overwritten in the relative controller) can be associated with the auth strategy.

_i.e._
```js  
UserController: {
    '*': ['sessionAuth']
  },

  AuthController: {
    login: ['sessionAuth'],
    logout: true
  }
  ```

``/config/waterlock.js`` defines:
 - the _authorization_ method
 - _JSON Web Tokens_ for token based APIs
 - _POST action routes_

### Current implemented login method
_Your user can simply try to login to ``/login`` if the user is not found one will be created using waterlines ``findOrCreate`` method_

### Get a JSON Web Token
_Your user can request tokens, once they are authenticated, by navigating to the following URI_ ``/user/jwt``


 ## TO DO
 Define the action routes to lock down.
 Implement the methods that need to be either open or restricted through session.
 How to separate ``POST`` from ``GET`` in ``policies.js`` file?
