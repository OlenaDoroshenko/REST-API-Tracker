class customErrors extends Error {
  constructor(message, errors) {
    super(message);
    this.status = 404;
    this.errors = errors;
  }
}

class validationError extends customErrors {
  constructor(message, errors) {
    super(message, errors);
    this.status = 400;
  }
}

class parameterError extends customErrors {
  constructor(message, errors) {
    super(message, errors);
  }
}

module.exports = { validationError, parameterError };
