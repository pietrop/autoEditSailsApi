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


 ## TO DO
 Define the action routes to lock down.
 Implement the methods that need to be either open or restricted through session.
