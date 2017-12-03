//Para poder visualizar nuestro componente por favor, dirigirese a router/routes.ts
import { Vue, Component } from 'vue-property-decorator'
@Component({
   name: 'login'
})
//Cambiar el nombre del componente
export default class PublicarComponent extends Vue {
  
  ejemplo1:string;
  ejemplo2:number;
  ejemplo3:boolean;
  ejemplo4:any;
  formulario:any;
  dialogImageUrl:string;
  dialogVisible:boolean;
  servicio:string;
  TablaDatos:any;
  //Constructor, al igual que JAVA, se necesita de uno para trabajar con vue
  //Es necesario que cada variable que se declare, se inicialize dentro del constructor
  //El metodo super es obligatorio, porque se esta haciendo una herencia de VUE
  //el tipo any, es similar que la declaracion var de javascript, el tipo se le asigna con el valor
  constructor(){
    super();
    this.ejemplo1="Hola";
    this.ejemplo2=34;
    this.ejemplo3=false;
    this.ejemplo4="Hola";
    this.formulario={};
    this.dialogImageUrl="";
    this.dialogVisible = false;
    this.servicio="basico";
    this.TablaDatos= [{basico: 'Info', rapido: 'Rapido', furioso: 'Furioso'}, 
                      {basico: 'Basic', rapido: 'Fast', furioso: 'Unsa'}];
  }
  //Para la seccion de metodos se utiliza, nombre()
  
  handleRemove(file, fileList) {
    console.log(file, fileList);
  }
  
  handlePictureCardPreview(file) {
    this.dialogImageUrl = file.url;
    this.dialogVisible = true;
  }
}