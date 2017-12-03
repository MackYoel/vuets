
import { Vue, Component } from 'vue-property-decorator'
import Auth0 from '@/Auth/AuthService.js'
@Component({
   name: 'ServicioDetalle'
})

//Cambiar el nombre del componente
export default class ServicioDetalleComponent extends Vue {
    formulario:any;
    nombreEmpresa:String;
    tipoServicio:String;
    descripcion:String;
    numeroContacto:any;
    precio:any;
    edit_publicacion: boolean;
  
  constructor(){
    super();
    
    this.formulario={};
    this.formulario="";
    this.nombreEmpresa="";
    this.tipoServicio="";
    this.descripcion="";
    this.numeroContacto="";
    this.precio="";
    this.edit_publicacion=false;
  }

  //Para la seccion de metodos se utiliza, nombre()
  getEmpresaNombre(){
    return this.nombreEmpresa;
  }
 
 
  handleRemove(file, fileList) {
    console.log(file, fileList);
  }
  
  handlePictureCardPreview(file) {
 
  }
  


}

