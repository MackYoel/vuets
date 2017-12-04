import axios from 'axios';

import direccionServer from '@/services/global.service.ts'

export default class RolService {
  
  url:string;
  private insert:string;
  private update:string;
  private delete:string;
  private getAll:string;
  private getById:string;
 
  constructor(){
    this.url=direccionServer.url;
    this.getAll="getRolAll";
    this.insert="addRol";
    this.update="updateRol";
    this.delete="deleteRol";
    this.getById="getRolById";
       
  }

  public insertarRol(rol) {
    return axios.post(this.url + this.insert,rol,{
      headers:{'Content-Type':'application/json;charset=UTF-8'}
    })
  }

 public getAllRol(){
    return axios.get(this.url + this.getAll,{
      headers:{'Content-Type':'application/json;charset=UTF-8'}
    })
  }

  public updateRol(rol){
    return axios.put(this.url+this.update+rol.idPago,rol,{
      headers:{'Content-Type':'application/json;charset=UTF-8'}
    })
  }

  public deleteRol(idRol) {
    return axios.delete(this.url+this.delete+idRol,{
      headers:{'Content-Type':'application/json;charset=UTF-8'}
    })
  }
  
  public getRolById(idRol) {
    return axios.delete(this.url+this.getRolById+idRol,{
      headers:{'Content-Type':'application/json;charset=UTF-8'}
    })
  }
}