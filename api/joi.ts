import { NowRequest, NowResponse } from "@now/node";
import Joi from "@hapi/joi";

let schema = Joi.object().keys({
  username: Joi.string()
    .min(3)
    .required()
});

export default (req: NowRequest, res: NowResponse) => {
  let username = req.query.username || "";
  let result = schema.validate({ username });
  res.status(200).json({ result });
};
