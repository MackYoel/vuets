import axios from 'axios';

import direccionServer from '@/services/global.service.ts'

export default class RolAccesoService {
  
  url:string;
  private insert:string;
  private update:string;
  private delete:string;
  private getAll:string;
  private getById:string;
 
  constructor(){
    this.url=direccionServer.url;
    this.getAll="getRolAccesoAll";
    this.insert="addRolAcceso";
    this.update="updateRolAcceso";
    this.delete="deleteRolAcceso";
    this.getById="getRolAccesoById";
       
  }

  public insertarRolAcceso(rolAcceso) {
    return axios.post(this.url + this.insert,rolAcceso,{
      headers:{'Content-Type':'application/json;charset=UTF-8'}
    })
  }

 public getAllRolAcceso(){
    return axios.get(this.url + this.getAll,{
      headers:{'Content-Type':'application/json;charset=UTF-8'}
    })
  }

  public updateRolAcceso(rolAcceso){
    return axios.put(this.url+this.update+rolAcceso.idRolAcceso,rolAcceso,{
      headers:{'Content-Type':'application/json;charset=UTF-8'}
    })
  }

  public deleteRolAcceso(idRolAcceso) {
    return axios.delete(this.url+this.delete+idRolAcceso,{
      headers:{'Content-Type':'application/json;charset=UTF-8'}
    })
  }
  
  public getRolAccesoById(idRolAcceso) {
    return axios.delete(this.url+this.getRolAccesoById+idRolAcceso,{
      headers:{'Content-Type':'application/json;charset=UTF-8'}
    })
  }
}