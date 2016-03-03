'use strict'

const test = require('tape')
const tl = require('..')

test('basic use case', (t) => {
  const testLambda = tl.test('./test/sample-lambda.js')

  testLambda({}, function (status, arg) {
    t.equal(status, 'succeed')
    t.end()
  })
})
