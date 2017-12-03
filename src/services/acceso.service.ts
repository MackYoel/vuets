import axios from 'axios';

import direccionServer from '@/services/global.service.ts'

export default class AccesoService {
  
  url:string;
  private insert:string;
  private update:string;
  private delete:string;
  private getAll:string;
  private getById:string;
 
  constructor(){
    this.url=direccionServer.url;
    this.getAll="getAccesoAll";
    this.insert="addAcceso";
    this.update="updateAcceso";
    this.delete="deleteAcceso";
    this.getById="getAccesoById";
       
  }

  public insertarAcceso(acceso) {
    return axios.post(this.url + this.insert,acceso,{
      headers:{'Content-Type':'application/json;charset=UTF-8'}
    })
  }

 public getAllAcceso(){
    return axios.get(this.url + this.getAll,{
      headers:{'Content-Type':'application/json;charset=UTF-8'}
    })
  }

  public updateAcceso(acceso){
    return axios.put(this.url+this.update+acceso.idAcceso,acceso,{
      headers:{'Content-Type':'application/json;charset=UTF-8'}
    })
  }

  public deleteAcceso(idAcceso) {
    return axios.delete(this.url+this.delete+idAcceso,{
      headers:{'Content-Type':'application/json;charset=UTF-8'}
    })
  }
  
  public getAccesoById(idAcceso) {
    return axios.delete(this.url+this.getAccesoById+idAcceso,{
      headers:{'Content-Type':'application/json;charset=UTF-8'}
    })
  }
}