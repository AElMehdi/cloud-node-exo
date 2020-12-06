//During the test the env variable is set to test
// process.env.NODE_ENV = 'test';

let Book = require('../app/models/book');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app.js');
// let should = chai.should();


chai.use(chaiHttp);

describe('Hello', () => {
   describe('/GET hello', () => {
      it('it should return Hello World!', (done) => {
         chai.request(server)
            .get('/hello')
            .end((err, res) => {
               res.should.have.status(200);
               // res.body.should.be.a('array');
               // res.body.length.should.be.eql(0);
               done();
            });
      });
   });
});