const asyncWrapper = (controller) => {
  return (req, res, next) => {
    controller(req, res).catch(next);
  };
};

const errorHandler = (err, req, res, next) => {
  console.log("Middleware Error Hadnling");
  const errStatus = err.status || 500;
  const errMsg = err.message || "Something went wrong";
  const errDescription = err.errors;
  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMsg,
    description: errDescription,
  });
};

module.exports = { asyncWrapper, errorHandler };
