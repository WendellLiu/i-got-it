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
      res.status(404).send();
      return;
    }

    const handler = path([handlerName], handlers);

    if (isNil(handler)) {
      res.status(404).send();
      return;
    }

    return handler(req, res);
  };
};

export default createHandler;
