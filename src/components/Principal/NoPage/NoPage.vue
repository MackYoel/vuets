<template>
    <div class="imagenContenedor">
        <el-card :body-style="{ padding: '10px' }">
            <img src="https://www.puntmagicbarcelona.com/sites/default/files/page_images/pagina-no-encontrada.jpg?1323778678"/>
        </el-card>
    </div>
</template>

<script>
import NoPage from '@/components/Principal/NoPage/noPage.component'
export default NoPage
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.imagenContenedor {
    padding-top: 300px;
    padding-left: 500px;
    padding-right: 500px;
    text-align: center;
}


</style>