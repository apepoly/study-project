<template>
  <div class="common-layout">
    <el-container>
      <el-header style="padding: 0">
        <el-menu
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            element-loading-background=""
            :ellipsis="false"
            active-text-color="white"
            :router="true"
            style="border-bottom: 0; background-color: #76d36f">
          <img src="src/img/logo.png" width="60" height="60" alt=""/>
          <el-menu-item index="/index" >首页</el-menu-item>
          <el-menu-item index="/introduction">大熊猫公园介绍</el-menu-item>
          <el-menu-item index="3">大熊猫知识科普</el-menu-item>
          <el-menu-item index="4">新闻资讯</el-menu-item>
          <el-menu-item index="5">旅行专题</el-menu-item>
          <div class="flex-grow" />
          <el-menu-item index="/welcome" style="color: black">登录</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer><button @click="logout">退出</button></el-footer>
    </el-container>
  </div>
</template>

<script setup>
import {get} from "@/net";
import {ElMessage} from "element-plus";
import router from "@/router";
import {useStore} from "@/stores";
import {ref} from "vue";
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
const store = useStore()
const logout = () => {
  get("/api/auth/logout", (message) => {
    ElMessage.success(message)
    store.auth.user = null
    router.push('/')
  })
}
</script>

<style scoped>
  .el-menu-item{
    transition-duration: 0s;
    color: white;
    font-weight: bold;
    font-size: 18px;
  }
  .el-menu-item.is-active {
    background-color: #76d36f !important;
    border-bottom: 0 !important;
  }
  .el-menu-item:hover {
    background-color: rgba(109,191,102,1) !important;
  }
  .flex-grow {
    flex-grow: 1;
  }
</style>