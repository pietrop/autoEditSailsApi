# Notes on Testing strategy - draft

## Notes setting up
Testing for sails app.

Unit test are...

Integration Tests are...

Link documentation

Install mocha ( unit test)
'
Install super test ( integration test)
'

Make folder structure

Setup test script
'

With different port so you can run it at same time as app.

 So you can run
'npm test'

bootstrap.test.js
To populate with fixture (?) and tear down (?)


Setup/Connect to test database (?)
Sails-memory or disk


---
Readme with testing strategy - backend:

Avoid testing sails features.
Example

### Testing API calls and responses.
Through controllers integration tests.
(Because testing json response, no need to test HTML views one?)
Remember: thin controllers.

### Testing model methods
(?) tbc

### Testing utilities and other modules 
( defining interface input / output for test cases)
( components folder?
Ie srt to hyper-transcript
To EDL
Etc...)
