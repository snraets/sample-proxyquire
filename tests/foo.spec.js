let chai = require('chai');
let proxyquire =  require('proxyquire');

let foo = proxyquire('../lib/foo', {'./database/db': { log: function(){ console.log('I was replaced'); } }});

describe('This works', function(){

    it('has a test', function(){

        foo.runDB();

        chai.expect(true).to.be.true;
    });

});