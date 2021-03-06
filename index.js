const context = require('./context-stub')
const dynamoDocStub = require('./dynamodb-doc-stub')
const proxyquire = require('proxyquire').noCallThru()

function test (requirePath, options) {
  var lambda = proxyquire(requirePath, {
    'dynamodb-doc': dynamoDocStub
  })

  return function testLambda (params, callback) {
    context.callback = callback

    options && options.before && options.before()

    lambda.handler(params, context)

    options && options.after && options.after()
  }
}

module.exports = {
  test: test,
  dynamo: dynamoDocStub
}
