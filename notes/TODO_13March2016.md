-[ ] Res HTTP Verb + Json
-[ ] User validation, ie in model required
-[ ] username and email should be same field

-[ ] return all users should not work while we figure out admin

-[ ]update user
POST user -> update user details
manda al controller.
controller prender user id per update dalla session
session contiene user ID

TEST
-[ ]test AUTHCONTROLLER register
-[ ] test user controller



Manual Tested
- register
- registered with existing user gives error
- logout
- login with correct details
- login with wrong details gives error  

- update user not working

http://localhost:1337/auth/register

{
   "name":"LongJon",
   "lastname":"Silver",
   "email":"LongJon@Silver.com",
   "password":"TreasureIsland",
   "username": "Test2"
 }

http://localhost:1337/auth/login

{
   "name":"LongJon",
   "lastname":"Silver",
   "email":"LongJon@Silver.com",
   "password":"TreasureIsland",
   "username": "Test2"
 }

http://localhost:1337/auth/logout


<!--
# Hooks
Sails hooks autoEditSailsAPI/node_modules/sails/lib/hooks/blueprints/


in index.js dove fa il binding -->
