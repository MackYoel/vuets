<template>
  <div>  
    <el-form :model="formulario" label-position="left" label-width="210px">
      <div class="center">
      
        <h1>Ingresar</h1>
        <el-row >
            <el-col  :span="20">
              <el-form-item label="E-mail:">
                <el-input v-model="formulario.mail"></el-input>
              </el-form-item>
            </el-col>
        </el-row>
        <el-row >
            <el-col  :span="20">
              <el-form-item label="Contraseña:">
                <el-input type="password" v-model="formulario.contrasena"></el-input>
              </el-form-item>
            </el-col>
        </el-row>
      
        <el-row>
            <el-col  :span="20">
              <el-form-item>
                <el-checkbox>Recordar mis datos</el-checkbox>
              </el-form-item>
            </el-col>
        </el-row>
        <el-button type="success" class="bt1">Iniciar Sesion</el-button>
        <el-row >
        <div class="centro">
        <p> 
                           O tambien puedes..
        </p>
        
        <el-button type="primary" class="bt2">
            <el-row>
              <el-col :span = "3">
                <img src="./facebook1.png" height="33px" width="33px">
              </el-col>
              <el-col :span = "20">
                Ingresar con Facebook
              </el-col>
            </el-row>
          </el-button>

          <el-button type="danger" class="bt3">
            <el-row>
              <el-col :span = "2">
                <img src="./google1.png" height="33px" width="33px">
              </el-col>
              <el-col :span = "20">
                Ingresar con Google
              </el-col>
            </el-row>
          </el-button>
          </div>
            <el-col  :span="24">
              <p>¿No tienes una cuenta?<a href="#" @click="goRegistrate()">Registrate</a></p>
              </el-form-item>
            </el-col>
        </el-row>
      </div>  
          
        
        
    </el-form>
        
  
  </div>
</template>
<!--Dentro del tag script se pone la ruta del controlador -->
<script>
import Publicar from '@/components/Login/login.component.ts'
export default Publicar
</script>
<!--Dentro del tag style, se puede añadir estilos-->
<style scoped lang="scss">
  .center {
    padding: 10px 25px;
    border: 1px solid #d9d9d9;
    border-radius: 10px;
    margin: 0 28%;
    width: 35%;
    font-family: Helvetica;
  }
  .bt1{
    width: 53%;
    margin: 3px;
    margin: 0 24%;
    font-size: 17px;
    padding: 5px 0px 0px 0px;
    height: 39px;
  }
  .bt2{
     width: 53%;
    margin: 3px;
    margin: 0 24%;
    font-size: 17px;
    padding: 1px 0px 0px 0px;
    height: 39px;
    background-color: #3b5998;
  }
  .bt3{
    width: 53%;
    margin: 3px;
    margin: 0 24%;
    font-size: 17px;
    padding: 5px 0px 0px 0px;
    height: 39px;
    background-color: #d62d20;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .centro{
    margin: 0px;
    padding: 0px;
    text-align: center;
  }
</style>