import axios from 'axios';

import direccionServer from '@/services/global.service.ts'

export default class UbicacionService {
  
  url:string;
  private insert:string;
  private update:string;
  private delete:string;
  private getAll:string;
  private getById:string;
 
  constructor(){
    this.url=direccionServer.url;
    this.getAll="getUbicacionAll";
    this.insert="addUbicacion";
    this.update="updateUbicacion";
    this.delete="deleteUbicacion";
    this.getById="getUbicacionById";
       
  }

  public insertarUbicacion(ubicacion) {
    return axios.post(this.url + this.insert,ubicacion,{
      headers:{'Content-Type':'application/json;charset=UTF-8'}
    })
  }

 public getAllUbicacion(){
    return axios.get(this.url + this.getAll,{
      headers:{'Content-Type':'application/json;charset=UTF-8'}
    })
  }

  public updateUbicacion(ubicacion){
    return axios.put(this.url+this.update+ubicacion.idUbicacion,ubicacion,{
      headers:{'Content-Type':'application/json;charset=UTF-8'}
    })
  }

  public deleteUbicacion(idUbicacion) {
    return axios.delete(this.url+this.delete+idUbicacion,{
      headers:{'Content-Type':'application/json;charset=UTF-8'}
    })
  }
  
  public getUbicacionById(idUbicacion) {
    return axios.delete(this.url+this.getUbicacionById+idUbicacion,{
      headers:{'Content-Type':'application/json;charset=UTF-8'}
    })
  }
}