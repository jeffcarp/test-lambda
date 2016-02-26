# `test-lambda`

AWS Lambda is really cool, but you know what's also cool? Tests. Fortunately, Lambda functions are easy to test.

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

