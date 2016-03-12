# autoEditSailsAPI
** work in progress**
a [Sails](http://sailsjs.org) application

## Dependecines
Most production and dev dependencies are added to `package.json` so by running `npm install` in terminal from root of application you should be al set.

### waterlock requires latest version of xcode
However, if you are not using the latest version of xcode `7.2.1`, [waterlock](www.waterlock.ninja) (authentication dependency) will require you to upgrade.

To install or upgrade xcode, you'd need to do it from the app store.


## Testing

The app is tested running `npm test`.
And [this][testTutorial] has been followed to setup a test enviroment in sails, as well as [sails own testing documentation][sailsTestDoc].


## Boilerplates
### Authentication
Boilerplate repo for authentication with passport and sails js
https://github.com/andrixb/sails_auth_passport_js

### Authentication - waterlock
https://github.com/andrixb/sails_js_waterlock_js_auth_api

## Contributors

- Pietro Passarelli - [@pietropassarell](https://twitter.com/pietropassarell)    
- Andrea Baldo - [@and_baldo](https://twitter.com/and_baldo)
- Dan Zajdband - [@impronunciable](https://twitter.com/impronunciable)

<!-- Links -->
[testTutorial]: https://github.com/bredikhin/sailsjs-mocha-testing-barrels-fixtures-example

[sailsTestDoc]:http://sailsjs.org/documentation/concepts/testing
