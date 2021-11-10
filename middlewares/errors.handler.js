
// Global Middleware error
function logErrors (err, req, res, next){
  console.error(err);
  next(err);// (err) = Middleware type error
}

// Middleware to detect error with notifier
function errorHandler (err, req, res, next){
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

// Detect a Boom Dynamic Error:
function boomErrorHandler (err, req, res, next){
  // Is the error from Boom?
  if (err.isBoom){
    const { output } = err;
    //res.status(500)... (BAD) > Dynamic error:
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}

module.exports = {logErrors, errorHandler, boomErrorHandler};




















