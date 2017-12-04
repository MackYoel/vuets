import axios from 'axios';

import direccionServer from '@/services/global.service.ts'

export default class CategoriaPrecioService {
  
  url:string;
  private insert:string;
  private update:string;
  private delete:string;
  private getAll:string;
  private getById:string;
 
  constructor(){
    this.url=direccionServer.url;
    this.getAll="getCategoriaPrecioAll";
    this.insert="addCategoriaPrecio";
    this.update="updateCategoriaPrecio";
    this.delete="deleteCategoriaPrecio";
    this.getById="getCategoriaPrecioById";
       
  }

  public insertarCategoriaPrecio(categoriaPrecio) {
    return axios.post(this.url + this.insert,categoriaPrecio,{
      headers:{'Content-Type':'application/json;charset=UTF-8'}
    })
  }

 public getAllCategoriaPrecio(){
    return axios.get(this.url + this.getAll,{
      headers:{'Content-Type':'application/json;charset=UTF-8'}
    })
  }

  public updateCategoriaPrecio(categoriaPrecio){
    return axios.put(this.url+this.update+categoriaPrecio.idCategoriaTipo,categoriaPrecio,{
      headers:{'Content-Type':'application/json;charset=UTF-8'}
    })
  }

  public deleteCategoriaPrecio(idCategoriaPrecio) {
    return axios.delete(this.url+this.delete+idCategoriaPrecio,{
      headers:{'Content-Type':'application/json;charset=UTF-8'}
    })
  }
  
  public getCategoriaPrecioById(idCategoriaPrecio) {
    return axios.delete(this.url+this.getCategoriaPrecioById+idCategoriaPrecio,{
      headers:{'Content-Type':'application/json;charset=UTF-8'}
    })
  }
}