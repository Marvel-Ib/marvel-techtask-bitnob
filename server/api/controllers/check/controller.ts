import CheckService from '../../services/check.services';
import { Request, Response } from 'express';

export class Controller {
  all(_: Request, res: Response): void {
    CheckService.all()
      .then((r) => res.json(r))
      .catch(() => {
        console.log('omo');
        res.status(404).json({
          message: 'please change',
        });
      });
  }
}
export default new Controller();
