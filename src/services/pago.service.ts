import axios from 'axios';

import direccionServer from '@/services/global.service.ts'

export default class PagoService {
  
  url:string;
  private insert:string;
  private update:string;
  private delete:string;
  private getAll:string;
  private getById:string;
 
  constructor(){
    this.url=direccionServer.url;
    this.getAll="getPagoAll";
    this.insert="addPago";
    this.update="updatePago";
    this.delete="deletePago";
    this.getById="getPagoById";
       
  }

  public insertarPago(pago) {
    return axios.post(this.url + this.insert,pago,{
      headers:{'Content-Type':'application/json;charset=UTF-8'}
    })
  }

 public getAllPago(){
    return axios.get(this.url + this.getAll,{
      headers:{'Content-Type':'application/json;charset=UTF-8'}
    })
  }

  public updatePago(pago){
    return axios.put(this.url+this.update+pago.idPago,pago,{
      headers:{'Content-Type':'application/json;charset=UTF-8'}
    })
  }

  public deletePago(idPago) {
    return axios.delete(this.url+this.delete+idPago,{
      headers:{'Content-Type':'application/json;charset=UTF-8'}
    })
  }
  
  public getPagoById(idPago) {
    return axios.delete(this.url+this.getPagoById+idPago,{
      headers:{'Content-Type':'application/json;charset=UTF-8'}
    })
  }
}