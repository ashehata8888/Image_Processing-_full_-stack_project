import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';



dotenv.config();

import routes from './routes/index';

const app: Application = express();






// app.get('/user', function(req, res) {
//   res.status(200).json({ name: 'john' });
// });




app.use(routes);

// app.use(supertest);
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Express + TypeScript Running '
  });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

export default app;
