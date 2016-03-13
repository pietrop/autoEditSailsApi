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

- [ ] delete user
DELETE user -> session needs to be destroyed after delete (or redirect on simething like: 'POST auth/logout' ??) 

### TEST
- [ ]test AUTHCONTROLLER register
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
   "name":"LongJon",
   "lastname":"Silver",
   "email":"LongJon@Silver.com",
   "password":"TreasureIsland",
   "username": "Test2"
 }
```
_http://localhost:1337/auth/login_
```
{
   "name":"LongJon",
   "lastname":"Silver",
   "email":"LongJon@Silver.com",
   "password":"TreasureIsland",
   "username": "Test2"
 }
```
_http://localhost:1337/auth/logout_
