<template>
  <div style="width: 100vw;height: 100vh;overflow: hidden;display: flex">
    <div style="flex: 1; width: 70%">
      <el-image style="width: 100%;height: 100%" fit="cover"
                src="src/img/index_panda.jpg"></el-image>
    </div>
    <div style="width: 30%;background-color: white">
      <router-view v-slot="{ Component }">
        <transition name="el-fade-in-linear" mode="out-in">
          <component :is="Component" style="height: 100%"/>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>