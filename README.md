## How to use?


```javascript
const ErrorHandler = require('errorhandler');
const app = require('express')();
const errCode = 'ERR_EXMP_001'; // any object
const message = 'Hello world'; // any object

const ExampleError = ErrorHandler.factory(errCode, message);

app.get('*', (req, res) => {
	throw ExampleError;
});

app.use(ErrorHandler.handler);

app.listen(3000);