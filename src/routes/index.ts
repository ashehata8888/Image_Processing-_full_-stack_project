import { Router, Request, Response } from 'express';
import imges_routes from './api/images';

const routes = Router();

routes.get('/', (_req: Request, res: Response) => {
  res.send('Imge Processing Project');
});
routes.use('/images',imges_routes)
export default routes;
