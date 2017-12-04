<template>

    <el-menu theme="dark"  class="topMenuV2" mode="horizontal" >
        
        <div class="empresa">
            <img src="./logoMyTruck.png" height="50px" width="100px">
        </div>

        <div class="itemMenuGrupoV2">
        </div>    

        <el-menu-item index="1" class="itemMenuV2" @click="goRegistrarse()">
           Mi cuenta
        </el-menu-item>

        <el-menu-item index="2" class="itemMenuV2" @click="goPublica()">
            Mis items
        </el-menu-item>

        <el-menu-item index="3" class="itemMenuV2" @click="goPublica()">
           Publicar
        </el-menu-item>
        
        <el-menu-item index="5" class="itemMenuV2" @click="goIngresa()">
           Log Out
        </el-menu-item>
        
        <el-menu-item index="6" class="itemMenuV2" @click="goServicioDetalle()">
           Detalle Anuncio
        </el-menu-item>
        
        <el-menu-item index="7" >
            <el-dropdown @command="goExtras" class="itemMenuV3" trigger="click">
                <i class="el-icon-menu"></i>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="destacados">Destacados</el-dropdown-item>
                    <el-dropdown-item command="noticias">Noticias</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>    
        </el-menu-item>
        
    </el-menu>
</template>

<script>
import NoPage from '@/components/Principal/TopMenu/topMenu.component'
export default NoPage
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.topMenuV2{
    display: flex;
    background-color: #0F1447;
}

.itemMenuGrupoV2 {
  margin-left: auto;
}

.itemMenuV2 {
  color:white;
  font-size: 16px;
  font-family: Helvetica;
}

.itemMenuV3 {
    color:white;
    text-align: center;
}

.empresa{
    font-size: 2em;
    height: 50px;
    padding: 5px 15px 0 15px;
    color: black;
}





</style>