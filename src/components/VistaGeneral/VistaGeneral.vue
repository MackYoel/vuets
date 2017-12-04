<template>

  <div class="container">
    <template>
      <div class="block">
        <el-carousel height="300px">
          <el-carousel-item v-for="image in images" :key="image" :style="{ backgroundImage: 'url(' + image + ')' }"
            style="background-size: 100% 300px;">
          </el-carousel-item>
        </el-carousel>
      </div>
    </template>
    <br>

    <el-row class="busqueda">
      <el-form :model="formBuscar">
          <el-col :span="16">
            <el-form-item>
               <el-input v-model="formBuscar.nombre"></el-input>
             </el-form-item>
           </el-col>
           <el-col :span="8">
            <el-button type="primary">
               Buscar
             </el-button>
          </el-col>
        </el-form>
    </el-row>

    <!--Cuerpo -->
    <el-row class="cuerpo">
      <el-col :span="6" class="filtros">
        <el-card class="submenu">
            <p>
              Navigation one
            </p>
            <p>
              Navigation two
            </p>
            <p>
              Navigation three
            </p>
          </el-card>
        </el-col>

        <el-col :span="18" class="resultados">

          <el-row>

          <div class="publicacion">
            <div class="image">
              <img src="./imagenCamion.jpg" height="250px" width="250px">
            </div>
            <div class="descripcion">
              <h4>Nombre del servicio</h4>
              <el-row>
                <el-col :span="18">
                  16/05/1029
                </el-col>
                <el-col :span="3">
                  C
                </el-col>
                <el-col :span="3">
                  M
                </el-col>
              </el-row>
            </div>
          </div>

          </el-row>
        </el-col>

      </el-row>

      <div class="pie">
        <ul class="paginacion">
          <li><a href="#">«</a></li>
          <li><a href="#">1</a></li>
          <li><a class="active" href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">4</a></li>
          <li><a href="#">5</a></li>
          <li><a href="#">6</a></li>
          <li><a href="#">7</a></li>
          <li><a href="#">»</a></li>
        </ul>
      </div>

  </div>
  

</template>

<!--Dentro del tag script se pone la ruta del controlador -->
<script>
import VistaGeneral from '@/components/VistaGeneral/VistaGeneral.component'
export default VistaGeneral
</script>

<!--Dentro del tag style, se puede añadir estilos-->
<style scoped lang="scss">
  .container{
    padding: 5% 8%;
  }
  .filtros{
    padding: 0px 10px;
  }
  img{
    padding: 0px;
    margin: 0px;
  }
  .submenu {
    height: 500px;
    background-color: #CEE3F6;
  }
  .resultados {
    padding: 0px 10px;
  }
  .publicacion {
    height: 350px;
    width: 250px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    
  }
  .image {
    height: 250px;
    padding: 0px;
    margin: 0px;
  }
  .descripcion {
    padding: 10px;
    height: 100px;
    font-family: Helvetica;
    font-size: 15px; 
  }

  ul.pagination {
    display: inline-block;
    padding: 0;
    margin: 0;
  }

  ul.paginacion li {display: inline;}

  ul.paginacion li a {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color .3s;
    border: 1px solid #ddd;
  }

  ul.paginacion li a.active {
    background-color: #2E9AFE;
    color: white;
    border: 1px solid #2E9AFE;
  }

  ul.paginacion li a:hover:not(.active) {background-color: #ddd;}

  .pie {
    text-align: left;
    padding: 0 0 0 25%;
  }

</style>
