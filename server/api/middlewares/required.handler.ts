import { Request, Response, NextFunction } from 'express';
const requireParams =
  (params: any) => (req: Request, res: Response, next: NextFunction) => {
    const reqParamList = Object.keys(req.body);
    const hasAllRequiredParams = params.every((param: string) =>
      reqParamList.includes(param)
    );
    if (!hasAllRequiredParams)
      return res
        .status(400)
        .send(
          `The following parameters are all required for this route: ${params.join(
            ', '
          )}`
        );

    next();
    return;
  };

export default requireParams;
