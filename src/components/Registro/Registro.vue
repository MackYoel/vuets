<template>

  <div>
    <el-form :model="formulario" label-position="up" label-width="100px">

      <el-card class="center">
        <h1>Registrate!</h1>
        <el-row >
          <el-col  :span="20">
            <el-form-item label="Nombre:">
              
              <el-input v-model="formulario.nombre"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

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
        <el-row >
            <el-col  :span="20">
              <el-form-item label="Confirmar (Contraseña):">
                <el-input type="password" v-model="formulario.contrasena"></el-input>
              </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col  :span="20">
              <el-form-item>
                <el-checkbox>Acepto Terminos y condiciones</el-checkbox>
              </el-form-item>
            </el-col>
        </el-row>

        <div class="botones">
          <el-button type="success" class="bt1">Registrarse</el-button>
          <p>
          O tambien puede..
          </p>
          <el-button type="primary" class="bt2">
            <el-row>
              <el-col :span = "3">
                <img src="./facebook1.png" height="31px" width="30px">
              </el-col>
              <el-col :span = "21">
                Registrarse con Facebook
              </el-col>
            </el-row>
          </el-button>

          <el-button type="danger" class="bt3">
            <el-row>
              <el-col :span = "3">
                <img src="./google1.png" height="31px" width="30px">
              </el-col>
              <el-col :span = "21">
                Registrarse con Google
              </el-col>
            </el-row>
          </el-button>
        </div>

        <p>Ya tienes Cuenta? <a href="#" @click="goIngresa()">Ingresar</a></p>
      </el-card>         
    </el-form>
  </div>

</template>

<!--Dentro del tag script se pone la ruta del controlador -->
<script>
import Registro from '@/components/Registro/registro.component.ts'
export default Registro
</script>


<!--Dentro del tag style, se puede añadir estilos-->
<style scoped lang="scss">

  .center {
    padding: 10px 25px;
    border-radius: 10px;
    margin: 0px 28%;
    width: 35%;
    font-family: Helvetica;
  }

  .bt1{
    width: 60%;
    margin: 5px;
    font-size: 17px;
    padding: 5px 0px 0px 0px;
    height: 40px;
  }
  .bt2{
    width: 60%;
    margin: 5px;
    font-size: 17px;
    padding: 5px 0px 0px 0px;
    height: 40px;
     background-color: #3b5998;
  }
  .bt3{
    width: 60%;
    margin: 5px;
    font-size: 17px;
    padding: 5px 0px 0px 0px;
    height: 40px;
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
  .botones{
    margin: 0px;
    padding: 0px;
    text-align: center;
  }
</style>
