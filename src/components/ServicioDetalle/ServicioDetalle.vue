<template>  
    <div id="content">
        <div id="central">
         <div>          
             
           <el-row>
                            <el-col :span="6">
                                <span>Nombre de la empresa :</span>
                            </el-col>
                            <el-col :span="9">
                                <span v-show="!edit_publicacion" v-text="nombreEmpresa"/>
                            </el-col>
                            <el-col :span="9">
                                <el-input type="text" v-show="edit_publicacion" size="small" v-model="nombreEmpresa"></el-input>
                            </el-col>
                        </el-row>            
         </div>
           
         <div id="column-left">
            <el-card class="left">
             <img class="centrado" src="https://s3.amazonaws.com/tf.images/reduced-galery_image_13512_24721.jpg" width="130" height="130"  >
           
            </el-card>      
         <br> 
            <el-card class="left"  >
            <img class="centrado" src="https://s3.amazonaws.com/tf.images/reduced-galery_image_13512_24721.jpg" width="130" height="130"  >
            </el-card>       
         <br>
          <el-card class="left"  > 
          <img class="centrado" src="https://s3.amazonaws.com/tf.images/reduced-galery_image_13512_24721.jpg" width="130" height="130"  >
         </el-card>         
          </div>
          
                   
         <div class="imagen">
          
            <img class="centrado" src="https://cnet4.cbsistatic.com/img/EEUSgRf4_PLNUO9MlrQbkpp_JZo=/770x433/2016/01/05/a3d8185a-0456-42ce-9d55-e2b3b5ff00d0/optimus.png" width="500" height="250"  >
            </div>
            
		    <div>
                <el-form :model="formulario" label-position="up" label-width="100px">
                    <el-card class="center"  >
                     
                             <el-row>
                            <el-col :span="8">
                                <span>Tipo de Servicio:</span>
                            </el-col>
                             <el-col :span="9">
                                <span v-show="!edit_publicacion" v-text="tipoServicio"/>
                            </el-col>
                            <el-col :span="9">
                                <el-input type="text" v-show="edit_publicacion" size="small" v-model="tipoServicio"></el-input>
                            </el-col> 
                        </el-row>
                        <el-row>
                        </el-row>
                        <br>
  
                        <el-row>
                            <el-col :span="50">
                                <span>Descripcion:</span>
                            </el-col>
                            <el-col :span="50">
                                <span v-show="!edit_publicacion" v-text="descripcion"/>
                            </el-col>
                            <el-col :span="50 ">
                                <el-input type="text" v-show="edit_publicacion" size="small" v-model="descripcion"></el-input>
                            </el-col> 
                        </el-row>
                        <br>
                        <el-row>
                            <el-col :span="6">
                                <span>Numero de contacto :</span>
                            </el-col>
                           <el-col :span="9">
                                <span v-show="!edit_publicacion" v-text="numeroContacto"/>
                            </el-col>
                            <el-col :span="9">
                                <el-input type="text" v-show="edit_publicacion" size="small" v-model="numeroContacto"></el-input>
                            </el-col> 
                        </el-row>

                        <br>
                        <el-row>
                            <el-col :span="6">
                                <span>Precio:</span>
                            </el-col>
                            <el-col :span="9">
                                <span v-show="!edit_publicacion" v-text="precio"/>
                            </el-col>
                            <el-col :span="9">
                                <el-input type="text" v-show="edit_publicacion" size="small" v-model="precio"></el-input>
                            </el-col> 
                        </el-row>
                        <br>

                            <el-row >
                                <el-col  :span="20">
                                <el-form-item  >
                             <el-input type="text" class="sinborde" ></el-input>
                            </el-form-item>
                            </el-col>
                            </el-row>
                              <div style="text-align:right;">
                             <el-button type="primary" >Atras</el-button>
                        </div>   
                         <form :model="calificacion" label-position="up">
                            <p class="clasificacion">
                                <input id="radio1" type="radio" name="estrellas" value="5"><!--
                                --><label for="radio1" >★</label><!--
                                --><input id="radio2" type="radio" name="estrellas" value="4"><!--
                                --><label for="radio2">★</label><!--
                                --><input id="radio3" type="radio" name="estrellas" value="3"><!--
                                --><label for="radio3">★</label><!--
                                --><input id="radio4" type="radio" name="estrellas" value="2"><!--
                                --><label for="radio4">★</label><!--
                                --><input id="radio5" type="radio" name="estrellas" value="1"><!--
                                --><label for="radio5">★</label>
                            </p>
                            </form>
                         </el-card>         
                    </el-form>   

            </div> 
        </div>
        <div id="column-left">
         
        <el-col :span="9">
        <span v-show="!edit_publicacion" v-text="nombreEmpresa"/>
           </el-col>
            <el-card class="left">
             <img class="centrado" src="https://s3.amazonaws.com/tf.images/reduced-galery_image_13512_24721.jpg" width="130" height="130"  >
           
            </el-card>      
         </div>  
          
          <div id="column-left"> 
           <el-col :span="9">
        <span v-show="!edit_publicacion" v-text="nombreEmpresa"/>
           </el-col>
          <el-card class="right"> 
           <img class="centrado" src="https://s3.amazonaws.com/tf.images/reduced-galery_image_13512_24721.jpg" width="130" height="130"  >
           
          </el-card>         
          </div> 
          <div id="column-left"> 
           <el-col :span="9">
        <span v-show="!edit_publicacion" v-text="nombreEmpresa"/>
           </el-col>
          <el-card class="right"> 
           <img class="centrado" src="https://s3.amazonaws.com/tf.images/reduced-galery_image_13512_24721.jpg" width="130" height="130"  >
           
          </el-card>         
          </div> 
          <div id="column-left"> 
           <el-col :span="9">
        <span v-show="!edit_publicacion" v-text="nombreEmpresa"/>
           </el-col>
          <el-card class="right"> 
           <img class="centrado" src="https://s3.amazonaws.com/tf.images/reduced-galery_image_13512_24721.jpg" width="130" height="130"  >
           
          </el-card>         
          </div> 

     </div>
</template>

<script>
import ServicioDetalle from '@/components/ServicioDetalle/servicioDetalle.component.ts'
export default ServicioDetalle
</script>


<style scoped lang="css">
.sinborde {
  border: 0;
}
#content {
    width: 1000px;
    margin: 20px auto;
}

#column-left {
    background-color: white;
    border: 4px solid white;
    border-radius: 8px 8px 8px 8px;
    float: left;
    min-height: 500px;
    margin-bottom: 10px;
    margin-right: 10px;
    overflow: hidden;
    text-align: center;
    width: 230px;
    position:relative;
    top:10px;
    left:20px;
}
#column-down {
    background-color: white;
    border: 4px solid white;
    border-radius: 8px 8px 8px 8px;
    float: left;
    min-height: 500px;
    margin-bottom: 10px;
    margin-right: 10px;
    overflow: hidden;
    text-align: center;
    width: 230px;
     position: center;
    top:10px;
    left:20px;
}
 
#central {
    background-color: white;
    border: 1px solid #D2D2D2;
    border-radius: 8px 8px 8px 8px;
    float: right;    
    height: 750px;
     
}
#bt1{
    width: 100%;
    margin: 5px;
    font-size: 20px;
    padding: 15px 32px;
    text-align: center;
    height: 50px;
 
  }
.center {
    padding: 10px 50px;
    border-radius: 10px;
    margin: 0px 28%;
    width: 50%;
    font-family: Helvetica;
  }
.centrado{
	margin:20px auto;
	display:block;
    left:250px;
}


#form {
  width: 250px;
  margin: 0 auto;
  height: 50px;
}

#form p {
  text-align: center;
}

#form label {
  font-size: 100px;
}

input[type="radio"] {
  display: none;
  
}

label {
  color: grey;
 
}

.clasificacion {
  direction: rtl;
  unicode-bidi: bidi-override;
}

label:hover,
label:hover ~ label {
  color: orange;
}

input[type="radio"]:checked ~ label {
  color: orange;
}
</style>