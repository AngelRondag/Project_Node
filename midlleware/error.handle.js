function logErrors(err, req, res, next) {
  console.log("logErrorssss-----")

  console.error(err)
  next(err);
}

function errorHandle(err, req, res, next) {
  console.log("errorHandlessss----")
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  })

}

function boomErrorHandle(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload)
  } else {
    next(err)
  }

}

module.exports = { logErrors, errorHandle, boomErrorHandle }
