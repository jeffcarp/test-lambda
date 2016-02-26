# `test-lambda`

AWS Lambda is really cool, but you know what's also cool? A well tested app. Writing your code as a Lambda function is convenient because it makes things easy to test.

```js
const tl = require('test-lambda')

var testLambda = tl.test(path.resolve('./path/to/your/lambda/index.js'))

it('returns something', function () {
  testLambda(function () {})
})
```

