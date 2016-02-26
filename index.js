const context = require('./context-stub')
const dynamoDocStub = require('./dynamodb-doc-stub')
const proxyquire = require('proxyquire').noCallThru()

function test (requirePath) {

  var lambda = proxyquire(requirePath, {
    'dynamodb-doc': dynamoDocStub
  })

  return function testLambda (params, callback) {
    context.callback = callback

    dynamoDocStub._set('rcrd-users', {
      id: 'hi@jeff.is',
      hash: '88FvUlobfCBPyVPW19txaNhOv0kC+Dw6N9ETsYwomB8=',
      time_zone: 'America/Los_Angeles',
    })

    dynamoDocStub._set('rcrd-access-tokens', {
      id: 'some_bs_access_token',
      owner: 'hi@jeff.is',
      // this should fail without expiration
    })

    dynamoDocStub._set('rcrd-access-tokens', {
      id: 'expired_access_token',
      owner: 'hi@jeff.is',
      expiration: '2016-02-23T22:49:05+00:00',
    })

    lambda.handler(params, context)

    dynamoDocStub._clear()
  }
}

module.exports = {
  test: test,
  dynamo: dynamoDocStub,
}
