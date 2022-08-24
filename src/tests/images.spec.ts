import supertest from 'supertest';
import images_routes from '../routes/api/images';
import path from 'path';
import { existsSync } from 'fs';
const name = 'Imagesample';
const imgLocation = path.resolve('./') + `/imges/${name}.jpg`;
const request = supertest(images_routes);

describe('Test the Images endpoint', () => {
  it('get the (/) endpoint', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });

  it('it test if there is no image name enter corectlly will return warning message', async () => {
    const response = await request.get('/');
    if (existsSync(imgLocation) === false) {
      expect(response.body).toEqual("this Image doesn't exist");
    }
  });
});
