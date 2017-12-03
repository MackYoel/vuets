import { Vue, Component } from 'vue-property-decorator'

@Component({
   name: 'hello'
})
export default class HelloComponent extends Vue {
  
  pru:string;
  constructor(){
    super();
    this.pru="dd";
  }

  open(){
  this.$alert('This is a message  de tales', 'Title', {
         confirmButtonText: 'ESTA BIEN',
         callback: action => {
            this.$message({
               type: 'info',
               message: `action: ${action}`
            })
         }
      })    
  }
  
  prueba(){
   this.$alert('Esta es una señal');
  }
  
  
}

