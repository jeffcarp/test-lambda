# `test-lambda`

AWS Lambda is really cool, but you know what's also cool? Tests. This is a module for unit testing Lambda functions. It should work with Mocha, Jasmine, Tape, or whatever test framework you use.

> :rotating_light: **Status:** OK for basic tests. Also attempts to mock `dynamodb-doc` but it's not a complete feature.

```js
var assert = require('assert')
var testMyLambda = require('test-lambda').test(path.resolve('./path/to/your/lambda/index.js'))

it('returns something', function (done) {
  testMyLambda({
    operation: 'get',
    id: 'an-id',
  }, function (status, data) {
    assert(status === 'succeed')
    done()
  })
})
```

# Install

```bash
npm install test-lambda
```
