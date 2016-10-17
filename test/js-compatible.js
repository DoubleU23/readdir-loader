var should = require('should');
var path = require('path');
var cssobjectsLoader = require('../');

function run(resourcePath, query, content) {
  content = content || new Buffer('1234');
  var result = null;
  var context = {
    resourcePath: resourcePath,
    query: '?' + query,
    options: {
      context: ''
    },
    emitFile: function(url, content2) {
      content2.should.be.eql(content);
      result = url;
    }
  };
  fileLoader.call(context, content);
  return result;
}

function test(excepted, resourcePath, query, content) {
  run(resourcePath, query, content).should.be.eql(excepted);
}

describe('category', function() {
  it('test', function() {
    var test = {foo: 'bar'}
    test.should.be.eql({foo: 'bar'});
  });
});