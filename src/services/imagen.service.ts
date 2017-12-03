import axios from 'axios';

import direccionServer from '@/services/global.service.ts'

export default class ImagenService {
  
  url:string;
  private insert:string;
  private update:string;
  private delete:string;
  private getAll:string;
  private getById:string;
 
  constructor(){
    this.url=direccionServer.url;
    this.getAll="getImagenAll";
    this.insert="addImagen";
    this.update="updateImagen";
    this.delete="deleteImagen";
    this.getById="getImagenById";
       
  }

  public insertarImagen(imagen) {
    return axios.post(this.url + this.insert,imagen,{
      headers:{'Content-Type':'application/json;charset=UTF-8'}
    })
  }

 public getAllImagen(){
    return axios.get(this.url + this.getAll,{
      headers:{'Content-Type':'application/json;charset=UTF-8'}
    })
  }

  public updateImagen(imagen){
    return axios.put(this.url+this.update+imagen.idImagen,imagen,{
      headers:{'Content-Type':'application/json;charset=UTF-8'}
    })
  }

  public deleteImagen(idImagen) {
    return axios.delete(this.url+this.delete+idImagen,{
      headers:{'Content-Type':'application/json;charset=UTF-8'}
    })
  }
  
  public getImagenById(idImagen) {
    return axios.delete(this.url+this.getImagenById+idImagen,{
      headers:{'Content-Type':'application/json;charset=UTF-8'}
    })
  }
}