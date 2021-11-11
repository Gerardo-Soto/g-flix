const boom  = require('@hapi/boom');

// Middleware Static:
//function validatorHandler(req, res, next){

// Middleware Dynamic:
function validatorHandler(schema, property){
  // schema / property = req.DATA
  // Middleware:
  return (req, res, next) => {
    // Dynamic data: req.body | req.params | req.query === req[property]
    const data = req[property];
    // abortEarly: false = show all errors once time.
    // Schema validate returns a Object:
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      // Bad request = info in req is bad:
      //throw boom.badRequest(error);
      // Send the error to the Error Middleware:
      next(boom.badRequest(error));// 400 error
    } else {
      next();
    }
  }
}

module.exports = validatorHandler;






















