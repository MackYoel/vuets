import { Vue, Component } from 'vue-property-decorator'

@Component({
   name: 'registereduser'
})

//Cambiar el nombre del componente
export default class RegisteredUserComponent extends Vue {
    nombreUsuario: string;
    imagen: any;
    puntaje_promedio: number;
    estrellas: any;
    nom_dat_publicaciones : any;
    lista_publicaciones: any;
    pag_perfil_usuario: boolean;
    pag_publicaciones: boolean;
    pag_estadisticas: boolean;
    correoUsuario: string;
    
    // Elementos editables, solo para perfil de usuario y para publicaciones, solo una publicacion a la vez
    edit_perfil_usuario: boolean;

  //Constructor, al igual que JAVA, se necesita de uno para trabajar con vue
  //Es necesario que cada variable que se declare, se inicialize dentro del constructor
  //El metodo super es obligatorio, porque se esta haciendo una herencia de VUE
  //el tipo any, es similar que la declaracion var de javascript, el tipo se le asigna con el valor
  constructor(){
    super();
    this.nombreUsuario = "Ana Perez";
    this.correoUsuario = "aperez@gmail.com";


    this.estrellas = [{uno: 0, dos: 2, tres: 0, cuatro: 0, cinco: 0}];
    this.puntaje_promedio = 0;
    this.nom_dat_publicaciones = ['item', 'anuncio', 'origen', 'destino', 'tipo de servicio', 'categoria', 'descripcion', 'fotos'];
    this.lista_publicaciones = [{id: 1, nom_pub: "Primera Publicacion", origen: 'Caylloma' ,destino:"Arequipa", tipo:"Carga Pesada", categoria: 'Gratis', "descripcion": "Carro de dimensiones 5x1.7 metros.", "foto": "./car01.jpg"},
                                {id: 2, nom_pub: "Segunda Publicacion", origen: 'Cayma', destino:"Arequipa", tipo:"Carga Pesada", categoria: 'Gratis', "descripcion": "Carro de dimensiones 5x1.7 metros.", "foto": "./car02.jpg"},
    ];
    this.pag_perfil_usuario = true;
    this.pag_publicaciones = false;
    this.pag_estadisticas = false;

    // Por default, todos los elementos no son editables
    this.edit_perfil_usuario = false;
  }
  getUsuarioNombre(){
    return this.nombreUsuario;
  }

  getPuntajePromedio(){
    return this.puntaje_promedio;
  }
  abrir_perfil_usuario(){
    this.pag_perfil_usuario = true;
    this.pag_estadisticas = false;
    this.pag_publicaciones = false;
  }
  abrir_publicaciones(){
    this.pag_publicaciones = true;
    this.pag_perfil_usuario = false;
    this.pag_estadisticas = false;
  }
  abrir_estadisticas(){
    this.pag_estadisticas = true;
    this.pag_perfil_usuario = false;
    this.pag_publicaciones = false;
  }
  enable_editar_perfil_usuario(){
    this.edit_perfil_usuario = true;
  }
  guardar_info_usuario(){
    //this.nombreUsuario = nuevoNombre;
    this.edit_perfil_usuario = false;
  }
}