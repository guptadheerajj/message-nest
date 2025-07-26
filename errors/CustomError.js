const errorNameMap = {
  400: "BadRequestError",
  401: "UnauthorizedError",
  403: "ForbiddenError",
  404: "NotFoundError",
  409: "ConflictError",
  422: "ValidationError",
  500: "ServerError",
  502: "BadGatewayError",
  503: "ServiceUnavailableError",
};

class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.name = errorNameMap[statusCode] || "CustomError";
    this.isOperational = true;
    Error.captureStackTrace(this, CustomError);
  }
}

module.exports = CustomError;
