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
          <el-menu-item index="/knowledge">大熊猫知识科普</el-menu-item>
          <el-menu-item index="/News">新闻资讯</el-menu-item>
          <el-menu-item index="/Travel">旅行专题</el-menu-item>
          <div class="flex-grow" />
          <el-menu-item><router-link to="welcome" style="color: white" v-if="store.auth.user != null">{{store.auth.user.username}}</router-link></el-menu-item>
          <el-menu-item><router-link to="manage">进入管理</router-link></el-menu-item>
          <el-menu-item index="/welcome" style="color: black" v-if="store.auth.user == null">登录</el-menu-item>
          <el-menu-item @click="logout" style="color: black" v-else>退出</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        {{ data }}
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import {useStore} from "@/stores";
import {useRoute} from "vue-router";
import {get} from "@/net";
import {onMounted, ref} from "vue";

const store = useStore()

let route = useRoute();
const data = ref()
const getData = () => {
  //通过id获取信息
  get('', (success) => {
    data.value = success.data
  })
}
onMounted(getData)
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