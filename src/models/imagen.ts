export default class Imagen {

    id_Imagen: string;
    imaDescripcion: Buffer;
    imaDireccion: string;
    

  constructor() {
    this.id_Imagen=''
	  this.imaDireccion=''
  }

  rellenarCampos(imagen){
    this.id_Imagen=imagen.id_Imagen
	  this.imaDescripcion=imagen.descripcion
    this.imaDireccion=imagen.direccion
  }  
}