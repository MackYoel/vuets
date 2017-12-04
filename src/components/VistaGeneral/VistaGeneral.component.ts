import { Vue, Component } from 'vue-property-decorator'
import Auth0 from '@/Auth/AuthService.js'
@Component({
   name: 'vistaGeneral'
})

//Cambiar el nombre del componente
export default class VistaGeneralComponent extends Vue {
  

  //Radio
  radio:string;

  //Select
  value:string;
  options:any;
  
  //CheckBox
  servicioPeru:boolean;

  //Tranfer
  value1:any;
  data:any;

  //Upload
  fileList2:any[];
  images:any[];

  formBuscar:any;
  dialogImageUrl:string;
  dialogVisible:boolean;
  servicio:string;
  TablaServicios:any;

  Auth:Auth0;

  //Constructor, al igual que JAVA, se necesita de uno para trabajar con vue
  //Es necesario que cada variable que se declare, se inicialize dentro del constructor
  //El metodo super es obligatorio, porque se esta haciendo una herencia de VUE
  //el tipo any, es similar que la declaracion var de javascript, el tipo se le asigna con el valor
  constructor(){
    super();

    //Ratio
    this.radio="1";

    //Select
    this.value="";
    this.options=[];

    //CheckBox
    this.servicioPeru=false;

    //Transfer
    this.value1=[];
    this.data=[];

    //Upload
    this.fileList2= [{name: 'vue', url: 'https://vuejs.org/images/logo.png'}]
    this.images= [
      'http://automundo.pe/wp-content/uploads/2017/02/5-factores-considerar-adquiere-camio%CC%81n-pesado.jpg',
      'http://imageneschidas.mx/wp-content/uploads/2015/10/imagen-de-trailer-rojo-en-la-carretera.jpg',
      'http://www.tfw2005.com/boards/attachments/g2-optimus-prime-alt-mode1-jpg.27095864/'
    ];
    //this.fileList2=[];

    this.Auth= new Auth0;
    this.formBuscar={};
    this.dialogImageUrl="";
    this.dialogVisible = false;
    this.servicio="basico";
    this.TablaServicios= [{basico: 'Info', rapido: 'Rapido', furioso: 'Furioso'}, 
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

  pruebaLogin(){
    console.log("Algo");
    this.Auth.login();
  }

  handlePreview(file, fileList){

  }

}

