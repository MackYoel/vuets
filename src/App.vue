<template>
  <div class="app">
    <top-menu></top-menu>
    <el-col style="padding:1em;overflow-y:auto; weight:100%; height:93%;">
      <router-view></router-view>
    </el-col>
  </div>
</template>

<script>
import TopMenu from '@/components/Principal/TopMenu/TopMenu.vue'
export default {
  name: 'app',
  components: {
    'topMenu': TopMenu
  }
}
</script>
<style>
.app {
  color: #2c3e50;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-y:hidden;
 
}

.main-container {
  display: flex;
  height: 100%;
}

</style>
