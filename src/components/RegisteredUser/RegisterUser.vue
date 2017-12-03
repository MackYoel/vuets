
<template>

<div class="registereduser">  
    <div>
        <el-row>
            <el-col :span="5">
                
                <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo" theme="dark">
                <el-menu-item-group><!-- title="Group One"-->
                    <el-menu-item class="el-menu-item" index="1" @click="abrir_perfil_usuario()"><i class="el-icon-setting"></i>Mi perfil</el-menu-item>
                    <el-menu-item class="el-menu-item" index="2" @click="abrir_publicaciones()"><i class="el-icon-picture"></i>Mis Publicaciones</el-menu-item>
                    <el-menu-item class="el-menu-item" index="3" @click="abrir_estadisticas()"><i class="el-icon-plus"></i>Estadisticas</el-menu-item>
                </el-menu-item-group>
                <!--el-menu-item-group title="Group Two">
                    <el-menu-item index="3"><i class="el-icon-message"></i>Favoritos</el-menu-item>
                    <el-menu-item index="4"><i class="el-icon-message"></i>Mis publicaciones</el-menu-item>
                </el-menu-item-group-->
                </el-menu>
            </el-col>
            
            <el-col :span="19" style="padding-left: 40px;" class="pag-user">
                <div id="showing_perfil_usuario" v-show="pag_perfil_usuario">
                    <div></div>
                    <el-row>
                        <el-col :span="18">
                        <h2 class="h2">Informaci&oacute;n de Usuario</h2> 
                        </el-col>
                        <div style="margin: 30px 0;"></div>
                        <el-col :span="6">
                            <!--el-button class="el-button" @click="enable_editar_perfil_usuario" v-show="!edit_perfil_usuario">Editar</el-button-->
                            <el-button  @click="enable_editar_perfil_usuario" style="background-color: #111A5D; border-color:#111A5D;" size="small" type="primary" icon="edit">Editar</el-button>
                        </el-col>
                    </el-row>
                    <div style="margin: 30px 0;"></div>

                    <el-row>
                    <el-form class="demo-dynamic">
                        <el-col :span="18">
                        
                        <!--el-form :model="formulario_perfil_usuario"-->
                        
                        <el-row>
                            <el-col :span="6">
                                <span>Nombre de Usuario :</span>
                            </el-col>
                            <el-col :span="9">
                                <span v-show="!edit_perfil_usuario" v-text="nombreUsuario"/>
                            </el-col>
                            <el-col :span="9">
                                <el-input type="text" v-show="edit_perfil_usuario" size="small" v-model="nombreUsuario"></el-input>
                            </el-col>
                        </el-row>

                        <div style="margin: 30px 0;"></div>
                        <!-- CORREO -->
                        <el-row>
                            <el-col :span="6">
                                <span>Correo :</span>
                            </el-col>
                            <el-col :span="9">
                                <span v-show="!edit_perfil_usuario" v-text="correoUsuario"/>
                            </el-col>
                            <el-col :span="9">
                                <!--el-input type="text" v-show="edit_perfil_usuario" size="small" v-model="correoUsuario"></el-input-->
                                <!-- :rules="[
                                    { required: true, message: 'Please input email address', trigger: 'blur' },
                                    { type: 'email', message: 'Please input correct email address', trigger: 'blur,change' }
                                    ]" -->
                                <el-form-item prop="correoUsuario" v-show="edit_perfil_usuario">
                                    <el-input type="email" v-model="correoUsuario"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        
                        
                        <!-- PASSWORD -->
                        <el-row v-show="edit_perfil_usuario">
                            <div style="margin: 30px 0;"></div>
                            <el-col :span="6">
                                <span>Contrase&ntilde;a nueva :</span>
                            </el-col>
                            <el-col :span="9">
                                <span/>
                            </el-col>
                            <el-col :span="9">
                                <el-input type="password" size="small"></el-input>
                            </el-col>
                        </el-row>  

                        
                        <!-- REPETIR PASSWORD -->
                        <el-row v-show="edit_perfil_usuario">
                            <div style="margin: 30px 0;"></div>
                            <el-col :span="6">
                                <span>Repetir contrase&ntilde;a :</span>
                            </el-col>
                            <el-col :span="9">
                                <span/>
                            </el-col>
                            <el-col :span="9">
                                <el-input type="password" size="small"></el-input>
                            </el-col>
                        </el-row>            
                        
                        <div style="margin: 30px 0;"></div>
                        <el-row>
                            <el-col :span="7"> <p></p> </el-col>
                            <el-col :span="4">
                                <el-button class="el-button" v-show="edit_perfil_usuario" @click="guardar_info_usuario()" style="background-color: #111A5D; border-color:#111A5D; font-weight:bold;" type="primary">Guardar</el-button>
                            </el-col>

                            <el-col :span="1"> <p></p> </el-col>
                            <el-col :span="4">
                                <el-button class="el-button" v-show="edit_perfil_usuario" @click="guardar_info_usuario()" style="background-color: #111A5D; border-color:#111A5D;" type="primary">Cancelar</el-button>
                            </el-col>

                            <el-col :span="8"> <p></p> </el-col>
                        </el-row>

                        <!--/el-form-->
                        </el-col>

                        
                    </el-form>
                    </el-row>
                </div>
                



                <div id="showing_pag_estadisticas" v-show="pag_estadisticas">
                    Pagina de Estadisticas.
                </div>
                <div id="showing_pag_publicaciones" v-show="pag_publicaciones">
                    <el-row>
                        <el-col :span="18">
                        <h2 class="h2">Mis Publicaciones</h2> 
                        </el-col>
                        <div style="margin: 30px 0;"></div>
                        <!--el-col :span="6">
                            <el-button class="el-button" @click="enable_editar_perfil_usuario" v-show="!edit_perfil_usuario">Editar</el-button>
                            <el-button  @click="enable_editar_perfil_usuario" style="background-color: #111A5D; border-color:#111A5D;" size="small" type="primary" icon="edit">Editar</el-button>
                        </el-col-->
                    


                    </el-row>

                    <el-row>
                        <form id="main" v-cloak>
                        <ul>
                            <!-- Render a li element for every entry in the computed filteredArticles array. -->
                            <!-- Create a binding between the searchString model and the text field -->
                            <!--div class="bar">
                                

                                <input type="text" v-model="searchString" placeholder="Enter your search terms" />
                            </div-->

                            <li class="main-li" v-for="article in lista_publicaciones" v-bind:key="article.item">
                                <el-col>
                                <!-- v-bind:href="article.url" -->
                                
                                <p class="main-p">
                                    <span class=" titulo-pub">{{article.nom_pub}}</span>
                                <a class="main-a" href="#"><img class="main-img" src="./car01.jpg" style="max-width: 200px;" /></a>
                                <div class="data">
                                    <p>
                                        <span class="label-data">Tipo: </span><span class="data-con">{{article.tipo}}</span><br>
                                        <span class="label-data">Categoria:</span><span class="data-con"> {{article.categoria}}</span><br>
                                        <span class="label-data">Origen: </span><span class="data-con">{{article.origen}}</span><br>
                                        <span class="label-data">Destino: </span><span class="data-con">{{article.destino}}</span><br>
                                        <span class="label-data">Descripci&oacute;n: </span>
                                        <span  class="data-con">{{article.descripcion}}</span><br>
                                    </p>
                                </div>

                                </p>
                                </el-col>
                            </li>
                        </ul>
                        </form>
                    </el-row>
                    


                </div>
                <div style="margin: 20px 0;"></div>
                Aqui se nota todo, para perfil de usuario o puntuaciones o cualquier otro item de la izquierda.
            </el-col>
        </el-row>
    </div>

</div>
</template>

<script>
import RegisterUser from '@/components/RegisteredUser/registereduser.component'
export default RegisterUser
</script>

<style scoped lang="scss">
#showing_perfil_usuario{
    padding-left: 20px;
    //background-color: red;
}
.registereduser{
    font-family: Helvetica;
}
.el-menu-vertical-demo{
    //background-color: #E8EAEA;
    //color: white;
    font-weight: bold;
}

[v-cloak] {
  display: none;
}



#main{
    font:15px/1.3 'Open Sans', sans-serif;
    color: #5e5b64;
    text-align:center;
}

.main-a, .main-a:visited {
    outline:none;
    color:#389dc1;
}

.main-a:hover{
    text-decoration:none;
}

section, footer, header, aside, nav{
    display: block;
}

/*-------------------------
    The search input
--------------------------*/

.main-ul{
    list-style: none;
    width: 428px;
    margin: 0 auto;
    text-align: left;
}

.main-li{
    border-bottom: 1px solid #ddd;
    padding: 10px;
    overflow: hidden;
}

.main-img{
    width:200px;
    height:200px;
    float:left;
    border:none;
}

.main-p{
    margin-left: 75px;
    font-weight: bold;
    padding-top: 12px;
    color:#6e7a7f;
}
.data p{
    margin-left: 20px;
    padding: 20px;
    text-align: left;
}
.data span{
    margin-left: 20px;
    line-height: 23px;
}
.titulo-pub{
    color: #100857;
}
.label-data{
    float: left;
    //max-width: 40px;
    width: 80px;
}
.data-con{

    //max-width: 40px;
    width: 100px;
}

  
  </style>