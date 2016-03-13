- [ ] Res HTTP Verb + Json
- [ ] User validation, ie in model required
- [ ] username and email should be same field

- [X] return all users should not work while we figure out admin 

- **{ developer note on prev issue: _method commented out_ }**

- [X] update user
POST user -> update user details 
manda al controller.
controller prender user id per update dalla session
session contiene user ID 

- **{ developer note on prev issue: _routes updated for findOne, update, delete. Id user is obtnaied by parsing ``req.session.user.id``_}**

- [X] delete user
DELETE user -> session needs to be destroyed after delete (or redirect on simething like: 'POST auth/logout' ??) 

- **{ dev notes: _add a req.session.destroy(callback);_ It might have risen some issues. See the routes followed:**
possible fix from [http://miscposts1.blogspot.co.uk/2014/09/sailsjs-user-authentication.html] use ``req.logOut();``

**Error:**

1. POST http://localhost:1337/auth/register
2. GET http://localhost:1337/user
3. DELETE http://localhost:1337/user
4. POST http://localhost:1337/auth/login

```js
debug: Deleted user, if it existed.
/Users/Andrix/Desktop/autoEditSailsApi/node_modules/waterlock-local-auth/lib/controllers/actions/login.js:25
        if(bcrypt.compareSync(pass, user.auth.password)){
                                             ^

TypeError: Cannot read property 'password' of undefined
    at /Users/Andrix/Desktop/autoEditSailsApi/node_modules/waterlock-local-auth/lib/controllers/actions/login.js:25:46
    at /Users/Andrix/Desktop/autoEditSailsApi/node_modules/waterlock/lib/engine.js:28:9
    at wrapper (/Users/Andrix/Desktop/autoEditSailsApi/node_modules/waterline/node_modules/lodash/index.js:3602:19)
    at applyInOriginalCtx (/Users/Andrix/Desktop/autoEditSailsApi/node_modules/waterline/lib/waterline/utils/normalize.js:421:80)
    at wrappedCallback (/Users/Andrix/Desktop/autoEditSailsApi/node_modules/waterline/lib/waterline/utils/normalize.js:320:18)
    at callback.success (/Users/Andrix/Desktop/autoEditSailsApi/node_modules/waterline/node_modules/switchback/lib/normalize.js:33:31)
    at _switch (/Users/Andrix/Desktop/autoEditSailsApi/node_modules/waterline/node_modules/switchback/lib/factory.js:58:28)
    at returnResults (/Users/Andrix/Desktop/autoEditSailsApi/node_modules/waterline/lib/waterline/query/finders/basic.js:180:9)
    at /Users/Andrix/Desktop/autoEditSailsApi/node_modules/waterline/lib/waterline/query/finders/basic.js:91:16
    at /Users/Andrix/Desktop/autoEditSailsApi/node_modules/waterline/lib/waterline/query/finders/operations.js:77:45
    at wrapper (/Users/Andrix/Desktop/autoEditSailsApi/node_modules/waterline/node_modules/lodash/index.js:3602:19)
    at applyInOriginalCtx (/Users/Andrix/Desktop/autoEditSailsApi/node_modules/waterline/lib/waterline/utils/normalize.js:421:80)
    at wrappedCallback (/Users/Andrix/Desktop/autoEditSailsApi/node_modules/waterline/lib/waterline/utils/normalize.js:320:18)
    at callback.success (/Users/Andrix/Desktop/autoEditSailsApi/node_modules/waterline/node_modules/switchback/lib/normalize.js:33:31)
    at _switch (/Users/Andrix/Desktop/autoEditSailsApi/node_modules/waterline/node_modules/switchback/lib/factory.js:58:28)
    at null._onTimeout (/Users/Andrix/Desktop/autoEditSailsApi/node_modules/sails-disk/lib/adapter.js:179:10)
```

**Error:**

1. POST http://localhost:1337/auth/register
2. GET http://localhost:1337/user
3. DELETE http://localhost:1337/user
4. POST http://localhost:1337/auth/register  [without changing previous data fields]


```js
debug:  Error (E_VALIDATION) :: 1 attribute is invalid
    at WLValidationError.WLError (/Users/Andrix/Desktop/autoEditSailsApi/node_modules/waterline/lib/waterline/error/WLError.js:26:15)
    at new WLValidationError (/Users/Andrix/Desktop/autoEditSailsApi/node_modules/waterline/lib/waterline/error/WLValidationError.js:20:28)
    at duckType (/Users/Andrix/Desktop/autoEditSailsApi/node_modules/waterline/lib/waterline/error/index.js:60:12)
    at errorify (/Users/Andrix/Desktop/autoEditSailsApi/node_modules/waterline/lib/waterline/error/index.js:39:10)
    at wrappedCallback (/Users/Andrix/Desktop/autoEditSailsApi/node_modules/waterline/lib/waterline/utils/normalize.js:325:15)
    at callback.error (/Users/Andrix/Desktop/autoEditSailsApi/node_modules/waterline/node_modules/switchback/lib/normalize.js:42:31)
    at _switch (/Users/Andrix/Desktop/autoEditSailsApi/node_modules/waterline/node_modules/switchback/lib/factory.js:56:28)
    at null._onTimeout (/Users/Andrix/Desktop/autoEditSailsApi/node_modules/sails-disk/lib/adapter.js:179:10)
    at Timer.listOnTimeout (timers.js:92:15)
debug:  Error (E_VALIDATION) :: 1 attribute is invalid
    at WLValidationError.WLError (/Users/Andrix/Desktop/autoEditSailsApi/node_modules/waterline/lib/waterline/error/WLError.js:26:15)
    at new WLValidationError (/Users/Andrix/Desktop/autoEditSailsApi/node_modules/waterline/lib/waterline/error/WLValidationError.js:20:28)
    at duckType (/Users/Andrix/Desktop/autoEditSailsApi/node_modules/waterline/lib/waterline/error/index.js:60:12)
    at errorify (/Users/Andrix/Desktop/autoEditSailsApi/node_modules/waterline/lib/waterline/error/index.js:39:10)
    at wrappedCallback (/Users/Andrix/Desktop/autoEditSailsApi/node_modules/waterline/lib/waterline/utils/normalize.js:325:15)
    at callback.error (/Users/Andrix/Desktop/autoEditSailsApi/node_modules/waterline/node_modules/switchback/lib/normalize.js:42:31)
    at _switch (/Users/Andrix/Desktop/autoEditSailsApi/node_modules/waterline/node_modules/switchback/lib/factory.js:56:28)
    at null._onTimeout (/Users/Andrix/Desktop/autoEditSailsApi/node_modules/sails-disk/lib/adapter.js:179:10)
    at Timer.listOnTimeout (timers.js:92:15)
```
**}**

### TEST
- [ ] test AUTHCONTROLLER register
- [ ] test user controller



####Manual Tested
- register
- registered with existing user gives error
- logout
- login with correct details
- login with wrong details gives error  

- update user not working 
**{dev notes: _update user currently working. it works on change role too._}**

_http://localhost:1337/auth/register_
```
{
   "firstname":"LongJon",
   "lastname":"Silver",
   "email":"LongJon@Silver.com",
   "password":"TreasureIsland",
   "username": "Test2"
 }
```
_http://localhost:1337/auth/login_
```
{
   "firstname":"LongJon",
   "lastname":"Silver",
   "email":"LongJon@Silver.com",
   "password":"TreasureIsland",
   "username": "Test2"
 }
```
_http://localhost:1337/auth/logout_
