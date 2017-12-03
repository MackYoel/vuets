
//Para poder visualizar nuestro nuevo componente
//Primero: Importemos el componente

import NoPage from '@/components/Principal/NoPage/NoPage.vue';
import Publicar from '@/components/Publicar/Publicar.vue'
import Hello from '@/components/hello/Hello.vue'
import Registro from '@/components/Registro/Registro.vue'
import VistaGeneral from '@/components/VistaGeneral/VistaGeneral.vue'
import login from '@/components/login/login.vue'
import ServicioDetalle from '@/components/ServicioDetalle/ServicioDetalle.vue'
import RegisteredUser from '@/components/RegisteredUser/RegisterUser.vue'

//Despues, solo creemos un nuevo path, con la direccion url y nuestro componente
export default [
  { path: '/hello', component: Hello },
  { path: '/publicar', component: Publicar },
  { path: '/registro', component: Registro },
  { path: '/vistaGeneral', component: VistaGeneral },
  { path: '/login', component: login },
  { path: '/servicioDetalle', component: ServicioDetalle },
  { path: '/registereduser', component: RegisteredUser},
  { path: '**', component: NoPage }  
];
