# `test-lambda`

AWS Lambda is really cool, but you know what's also cool? Tests. This is a module for unit testing Lambda functions. It should work with Mocha, Jasmine, Tape, or whatever test framework you use.

```js
var assert = require('assert')
var tl = require('test-lambda')

var testLambda = tl.test(path.resolve('./path/to/your/lambda/index.js'))

it('returns something', function (done) {
  testLambda({
    operation: 'get',
    id: 'an-id',
  }, function (status, data) {

    assert(status === 'succeed')    

    done()
  })
})
```

