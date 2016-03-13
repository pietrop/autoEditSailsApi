
  //USER
  '/user/signup.html': {
    view: 'user/signup'
  },

  '/user/signin.html': {
    view: 'user/signin'
  },

  '/user/signout.html': {
    view: 'user/signout'
  },

  '/user/profile.html': {
    view: 'user/profile'
  },
  //PROJECTS LIST
  '/project/index.html': {
    view: 'project/index'
  },
  //PROJECT PANEL
  // '/project/show.html': {
  //   view: 'project/show'
  // },
  'GET /project/show.html': 'ProjectController.showDemo',

  //TRANSCRIPT SHOW PANEL
  '/transcript/show.html': {
    view: 'transcript/show'
  },

  //PAPEREDIT SHOW PANEL
  // '/paperedit/show.html': {
  //   view: 'paperedit/show'
  // },
    'GET /paperedit/show.html': 'PapereditController.showdemo',
