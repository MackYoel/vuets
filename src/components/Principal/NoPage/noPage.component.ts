import { Vue, Component } from 'vue-property-decorator'

@Component({
   name: 'NoPage'
})
export default class NoPageComponent extends Vue {
  
  pru:string;
  
  constructor(){
    super();
    this.pru="dd";
  }

  

  
  
}

