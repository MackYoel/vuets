//Ejemplo
//Para poder visualizar nuestro componente por favor, dirigirese a router/routes.ts

import { Vue, Component } from 'vue-property-decorator'
import ImagenService from '@/services/imagen.service.ts'
import Imagen from '@/models/imagen.ts'
import Auth0 from '@/Auth/AuthService.js'
//import { writeFileSync, readFileSync } from 'fs';

@Component({
   name: 'publicar'
})

//Cambiar el nombre del componente
export default class PublicarComponent extends Vue {
  
  //Formulario
  formulario:any;

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

  //Imagenes
  imagenes:any;
  

  //Servicios
  imagenService:ImagenService;

  //Modelos
  imagen:Imagen;
  informacion:any;

  Auth:Auth0;

  constructor(){
    super();

    //Formulario
    this.formulario={};

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
  
    //Imagenes
    this.imagenes=[];

    //Servicios
    this.imagenService= new ImagenService();

    //Modelos
    this.imagen= new Imagen();
    this.informacion={};
    this.Auth= new Auth0;
    
  }


  pruebaLogin(){
    console.log("Algo");
    this.Auth.login();
  }

  pruebas(file, fileList){
    console.log(fileList);
    this.imagenes.push(fileList.url);
  } 

  mostrarImagen(){
    console.log(this.fileList2);
  }

  guardarImagen(){

    this.imagen.imaDescripcion=this.imagenes[0];
    //console.log(this.informacion);
    //var data = new FormData();
    console.log(this.imagenes[0]);
    //data.append("imagen",this.imagenes[0]);

    //console.log(data.get("iamgen"));
    //this.imagen.imaDescripcion=readFileSync(this.imagenes[0]);  
    
    this.imagenService.insertarImagen(this.imagen).then(response =>{
      console.log(response.data);
    })
    console.log(this.imagenes);
    
  }

}

