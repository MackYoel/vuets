import { Vue, Component } from 'vue-property-decorator'
import Router from '@/router'
@Component({
   name: 'TopMenu'
})
export default class TopMenuComponent extends Vue {
  
  constructor(){
    super();
  }
  
  goExtras(command){
    Router.push(command);
  }

  goRegistrarse(){
    Router.push("registro");
  }
  
  goPublica(){
    Router.push("publicar");
  }

  goIngresa(){
    Router.push("registro");
  }

  goVistaGeneral(){
    Router.push("vistaGeneral");
  }  

  goServicioDetalle(){
    Router.push("servicioDetalle");
  }

  
  
}

