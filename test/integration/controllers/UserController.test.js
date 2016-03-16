var request = require('supertest');
var should = require('should');


var fakeMockUserLogin = {
  "email": "John@Armstrong.com",
  "password": "MoonLanding"
};

var wrongMockUserLogin = {
  "email": "John@Armstrong.com",
  "password": "M00nL2nd1n6"
};

var wrongMockUserLoginPwd = {
  "email": "John@Armstrong.com",
  "password": "M00nL2nd1n6"
};

var wrongMockUserLoginEmail = {
  "email": "J0hn@Armstr0n6.c0m",
  "password": "MoonLanding"
};

var mockUserRegister = {
  "firstname": "John",
  "lastname": "Armstrong",
  "email": "John@Armstrong.com",
  "password": "MoonLanding"
}

var Cookies;

describe('UserController', function() {

  // find one

  describe('#findOne()', function() {
    it('register', registerUser());
    it('logout', logoutUser());
    it('login', loginUser());

    it('should read the user details if logged in', function(done) {
      var req = request.agent(sails.hooks.http.app).get("/user");

        req.cookies = Cookies;
        req.set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          console.log(res.body);
          done();
        });
    });
  });


  describe('#findOne()', function() {
    it('register', registerUser());
    it('logout', logoutUser());
    it('login_wrong', loginWrongUser());

    it('should not read the user details if logged in with wrong credentials', function(done) {
      var req = request.agent(sails.hooks.http.app).get("/user");

        req.cookies = Cookies;
        req.set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(403)
        .end(function(err, res) {
          if (err) return done(err);
          console.log(res.body);
          done();
        });
    });
  });

  /**-------------- Register test success --------------*/
   function registerUser() {
     return function(done) {
       request.agent(sails.hooks.http.app)
         .post("/auth/login")
         .send(mockUserRegister)
         .expect(200)
         .end(onResponse);

       function onResponse(err, res) {
         if (err) return done(err);
         Cookies = res.headers['set-cookie'].pop().split(';')[0];
         return done();
       }
     };
   }

   /**-------------- Logout test success --------------*/
    function logoutUser() {
      return function(done) {
        request.agent(sails.hooks.http.app)
          .post("/auth/logout")
          .send(fakeMockUserLogin)
          .expect(200)
          .end(onResponse);

        function onResponse(err, res) {
          if (err) return done(err);
           Cookies = null;
          return done();
        }
      };
    }

 /**-------------- Login test success --------------*/
  function loginUser() {
    return function(done) {
      request.agent(sails.hooks.http.app)
        .post("/auth/login")
        .send(mockUserRegister)
        .expect(200)
        .end(onResponse);

      function onResponse(err, res) {
        if (err) return done(err);
        Cookies = res.headers['set-cookie'].pop().split(';')[0];
        return done();
      }
    };
  }

 /**-------------- Login test wrong --------------*/
  function loginWrongUser() {
    return function(done) {
      request.agent(sails.hooks.http.app)
        .post("/auth/login")
        .send(fakeMockUserLogin)
        .expect(403)
        .end(onResponse);

      function onResponse(err, res) {
        if (err) return done(err);
        Cookies = res.headers['set-cookie'].pop().split(';')[0];
        return done();
      }

    };

  }

});


// =============== example through JWT ==================
// var token = null;
//
//   before(function(done) {
//     request(url)
//       .post('/user/token')
//       .send({ _id: user1._id, password: user1.password })
//       .end(function(err, res) {
//         token = res.body.token; // Or something
//         done();
//       });
//   });
//
//   it('should get a valid token for user: user1', function(done) {
//     request('/get/user')
//       .set('Authorization', token)
//       .expect(200, done);
//   });

// =============== END example through JWT ==================

//   //User profile/account page
//   describe('#read()', function() {
//     it('should get a user object provided the user id');
//
//   });
//
//   describe('#update()', function() {
//     it('should update a user details provided the user id');
//
//   });
//
//User delete
// describe('#delete()', function() {
//   it('should delete the user', function(done) {
//     request(sails.hooks.http.app)
//       .post("/auth/login")
//       .send(fakeMockUserLogin)
//       .expect(200)
//       .end(function(err, res) {
//         request(sails.hooks.http.app)
//           .del("/user")
//           .send(fakeMockUserLogin)
//           .expect(200)
//           .end(function(err, res) {
//             done(err)
//           });
//
//
//         done(err)
//       });
//   });
//
// });
//
//
// });





// ================================================
// //User delete
// describe('#delete()', function() {
//   it('should delete the user', function(done) {
//     // request(sails.hooks.http.app)
//     //   .post("/auth/login")
//     //   .send(fakeMockUserLogin)
//     //   .expect(200)
//     //   .end(function(err, res) {
//         request(sails.hooks.http.app)
//         .del("/user")
//           .send(fakeMockUserLogin)
//           .expect(200)
//           .end(function(err, res) {
//             done(err)
//           });
//         // done(err)
//       // });
//   });
//
// });



// describe('#delete()', function(){
//   it('should delete the user', function(done){
//     request(sails.hooks.http.app)
//     .delete("/user")
//     .send(fakeMockUserLogin)
//     .expect(200)
//     .end(function(err, res) {
//       // should(res.body.auth.email).be.exactly(mockUserLogin.email);
//       done(err)
//     });
//   });
// });

// it('should not allow a user to login up providing fake credentials', function (done) {
//   request(sails.hooks.http.app)
//     .post("/auth/login")
//     .send(fakeMockUserLogin)
//     .expect(401)
//     .end(function(err, res){
//       //console.log(err, res)
//       done(err)
//     });
// });
