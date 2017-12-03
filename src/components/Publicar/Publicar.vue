<template>

  <div>
    
    <h1 class="titulo" >PUBLICA TU SERVICIO AHORA</h1>

    <el-card :body-style="{ padding: '10px' }">

      <el-row style="text-align:center;">
        
        <el-col :span="6">
          <p></p>
        </el-col>

        <el-col :span="4">
          <el-radio v-model="radio" label="1">
            <el-card class="radio1">
              <h2>GRATIS</h2>
              <h3>Una semana</h3>
            </el-card>  
          </el-radio>
        </el-col>
           
        <el-col :span="4">
          <el-radio v-model="radio" label="2">
            <el-card class="radio2">
              <h2 >RAPIDO</h2>
              <h3>Una semana</h3>
            </el-card>
          </el-radio>
        </el-col>
         
        <el-col :span="4">
          <el-radio v-model="radio" label="3">
            <el-card class="radio3">
              <h2 >FURIOSO</h2>
              <h3>Una semana</h3>
            </el-card>
          </el-radio>
        </el-col>

        <el-col :span="6">
          <p></p>
        </el-col>

      </el-row>
    </el-card>

    <br>

    <el-card :body-style="{ padding: '10px' }">

      <el-col :span="6">
        <p></p>
      </el-col>

      <el-col :span="12">

      <el-form :model="formulario" label-width="200px"  label-position="left" class="formularioEstilo">
 
        <el-form-item label="Escoja el tipo de servicio: ">
          <el-select v-model="value" placeholder="Escoja el servicio">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="Escoja el tipo de servicio: ">
          <el-input placeholder="Nombre" v-model="formulario.NombreEmpresa"></el-input>
        </el-form-item>

        <el-form-item label="Ingrese direccion de la empresa: ">
          <el-input placeholder="Direccion" v-model="formulario.DireccionEmpresa"></el-input>
        </el-form-item>

        <el-form-item label="Servicio a todo el Peru: ">
           <el-checkbox v-model="servicioPeru"></el-checkbox>
        </el-form-item>

        <el-form-item label="Ingrese destinos: ">
          <el-transfer
            v-model="value1"
            :data="data">
          </el-transfer>
        </el-form-item>

        <el-form-item label="Ingrese descripcion: ">
          <el-input type="textarea" v-model="formulario.Descripcion" placeholder="Descripcion"></el-input>
        </el-form-item>

        <!--  
        <el-row>
          <el-col :span="12">
            <el-form-item label="Ingrese destinos: ">
              <el-transfer
                v-model="value1"
                :data="data">
              </el-transfer>
            </el-form-item>
          </el-col>
          
          <el-col :span="12">
            <el-form-item label="Ingrese descripcion: ">
              <el-input type="textarea" v-model="formulario.Descripcion" placeholder="Descripcion"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        -->
        
        <el-form-item label="Agregar imagenes: ">
           <el-upload
              class="upload-demo"
              action="http://localhost:4022/api/addImagenFake"
              :on-success="pruebas"
              :file-list="fileList2"
              list-type="picture">
              <el-button size="small" type="primary">Presione para subir sus imagenes</el-button>
              <!--<div slot="tip" class="el-upload__tip">jpg/png files with a size less than 500kb</div>-->
            </el-upload>
        </el-form-item>

        <div style="text-align:right;">
          <el-button @click="mostrarImagen()">Cancelar</el-button>
          <el-button type="primary" @click="guardarImagen()">Publicar</el-button>
        </div>

        <br>
        <br>      
        </el-form>
      </el-col>

      <el-col :span="6">
      </el-col>
    </el-card>

  </div>

</template>

<!--Dentro del tag script se pone la ruta del controlador -->
<script>
import Publicar from '@/components/Publicar/publicar.component'
export default Publicar
</script>

<!--Dentro del tag style, se puede añadir estilos-->
<style scoped lang="scss">

  .titulo {
    text-align: center;
    color: #0F1447;
    font-family: Helvetica;
  }

  .radio1{
    color: white;
    background-color:  #999999; 
    font-family: Helvetica;
    font-size: 20px;
  }

  .radio2{
    color: white;
    background-color:  #666666;
    font-family: Helvetica;
    font-size: 20px; 
  }

  .radio3{
    color: white;
    background-color:  #003366;
    font-family: Helvetica;
    font-size: 20px; 
  }

  .formularioEstilo{
    color: #999999;
    font-family: Helvetica;
    font-size: 20px;
  }



 
</style>
