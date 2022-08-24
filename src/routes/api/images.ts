import { Router, Request, Response } from 'express';
import simpString from '../../logic/ImgProcess';

import {existsSync} from 'fs';
import validation from '../../logic/validation';

const images_routes = Router();



images_routes.get('/', (req: Request, res: Response) => {
  const fileName = req.query.name as string ;
  const width = req.query.width as string;
  const height = req.query.height as string;

  
  // simpString(fileName,width,height);
  
  const data = simpString(fileName,width,height) as string;

  if(existsSync(data)===false){
    console.log(existsSync(data))
    console.log('the image is not exisit till now and first loop started')
      
      for(let i=0;i<10;i++){
          for(let x=0;x<5;x++){
            console.log(`i value : ${i} x value ${x}`);
            const datax =simpString(fileName,width,height) as string
            if(i===9&&x===4&&(existsSync(datax))===true){
              res.sendFile(datax);
              console.log(`Image successfuly sent and status of the main function is : ${existsSync(datax)}`)
            }

            if (existsSync(datax)===false){
              res.send(validation(fileName))
            }
            
            
              
          }
        
      
    
      }
    }
  }
  )
        

     
 
    

  



  // const imgLocation = path.resolve('./') + `/imges/${name}.jpg`;

  // const ResizedimgLoc =
  //   path.resolve('./') + `/imges/Resized_Images/${name}_${width}_${height}.jpg`;

  // const existedImg = imageArr.includes(name);
  // checking if the image exist

  // if (name === undefined) {
  //   return res.send('Image name is required');
  // }

  // if (existedImg === false) {
  //   return res.send("this Image doesn't exist");
  // }

  // if (existsSync(imgLocation) === false) {
  //   return res.send("this Image doesn't exist");
  // }

  // if (existsSync(ResizedimgLoc)) {
  //   console.log('Image Exists and was sent from Resized Images folder');
  //   return res.sendFile(ResizedimgLoc);
  // } else {
  //   sharp(imgLocation)
  //     .resize(parseInt(width), parseInt(height), {
  //       position: 'center'
  //     })
  //     .toFile(ResizedimgLoc)
  //     .then(() => {
  //       return res.sendFile(ResizedimgLoc);
  //     });
  
// }

export default images_routes;