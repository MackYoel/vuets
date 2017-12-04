import axios from 'axios';

import direccionServer from '@/services/global.service.ts'

export default class CategoriaTipoService {
  
  url:string;
  private insert:string;
  private update:string;
  private delete:string;
  private getAll:string;
  private getById:string;
 
  constructor(){
    this.url=direccionServer.url;
    this.getAll="getCategoriaTipoAll";
    this.insert="addCategoriaTipo";
    this.update="updateCategoriaTipo";
    this.delete="deleteCategoriaTipo";
    this.getById="getCategoriaTipoById";
  }

  public insertarCategoriaTipo(categoriaTipo) {
    return axios.post(this.url + this.insert,categoriaTipo,{
      headers:{'Content-Type':'application/json;charset=UTF-8'}
    })
  }

 public getAllCategoriaTipo(){
    return axios.get(this.url + this.getAll,{
      headers:{'Content-Type':'application/json;charset=UTF-8'}
    })
  }

  public updateCategoriaTipo(categoriaTipo){
    return axios.put(this.url+this.update+categoriaTipo.idCategoriaTipo,categoriaTipo,{
      headers:{'Content-Type':'application/json;charset=UTF-8'}
    })
  }

  public deleteCategoriaTipo(idCategoriaTipo) {
    return axios.delete(this.url+this.delete+idCategoriaTipo,{
      headers:{'Content-Type':'application/json;charset=UTF-8'}
    })
  }
  
  public getCategoriaTipoById(idCategoriaTipo) {
    return axios.delete(this.url+this.getCategoriaTipoById+idCategoriaTipo,{
      headers:{'Content-Type':'application/json;charset=UTF-8'}
    })
  }
}