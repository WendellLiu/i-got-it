import { path, isNil } from "ramda";

const handlerMapping = {
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "del",
};

const createHandler = (handlers) => {
  return (req, res) => {
    const requestMethod = req.method;

    const handlerName = path([requestMethod], handlerMapping);

    if (isNil(handlerName)) {
      throw new Error(`HTTP request method ${requestMethod} is not supported`);
    }

    const handler = path([handlerName], handlers);

    if (isNil(handler)) {
      throw new Error(`Undefined ${requestMethod} Handler`);
    }

    return handler(req, res);
  };
};

export default createHandler;
