import axios from 'axios';

import direccionServer from '@/services/global.service.ts'

export default class RolUsuarioService {
  
  url:string;
  private insert:string;
  private update:string;
  private delete:string;
  private getAll:string;
  private getById:string;
 
  constructor(){
    this.url=direccionServer.url;
    this.getAll="getRolUsuarioAll";
    this.insert="addRolUsuario";
    this.update="updateRolUsuario";
    this.delete="deleteRolUsuario";
    this.getById="getRolUsuarioById";
       
  }

  public insertarRolUsuario(rolUsuario) {
    return axios.post(this.url + this.insert,rolUsuario,{
      headers:{'Content-Type':'application/json;charset=UTF-8'}
    })
  }

 public getAllRolUsuario(){
    return axios.get(this.url + this.getAll,{
      headers:{'Content-Type':'application/json;charset=UTF-8'}
    })
  }

  public updateRolUsuario(rolUsuario){
    return axios.put(this.url+this.update+rolUsuario.idRolUsuario,rolUsuario,{
      headers:{'Content-Type':'application/json;charset=UTF-8'}
    })
  }

  public deleteRolUsuario(idRolUsuario) {
    return axios.delete(this.url+this.delete+idRolUsuario,{
      headers:{'Content-Type':'application/json;charset=UTF-8'}
    })
  }
  
  public getRolUsuarioById(idRolUsuario) {
    return axios.delete(this.url+this.getRolUsuarioById+idRolUsuario,{
      headers:{'Content-Type':'application/json;charset=UTF-8'}
    })
  }
}