<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <h1>管理系统</h1>
      </el-header>
        <el-container>
          <el-aside width="200px">
            <el-menu
                :default-active="activeIndex"
                class="el-menu"
                @select="handleSelect"
                :router="true"
            >
              <el-menu-item index="/manage">主页</el-menu-item>
              <el-sub-menu index="2" >
                <template #title>用户管理</template>
                <el-menu-item index="/userList">用户列表</el-menu-item>
                <el-menu-item index="/userAuthApply">用户权限申请列表</el-menu-item>
              </el-sub-menu>
              <el-sub-menu index="3" >
                <template #title>帖子管理</template>
                <el-menu-item index="/postList">帖子列表</el-menu-item>
                <el-menu-item index="/postApply">帖子审核列表</el-menu-item>
              </el-sub-menu>
              <el-sub-menu index="4" >
                <template #title>媒体新闻管理</template>
                <el-menu-item index="/newsList">媒体新闻列表</el-menu-item>
                <el-menu-item index="/newsApply">帖子新闻审核列表</el-menu-item>
              </el-sub-menu>
              <el-sub-menu index="5" >
                <template #title>基金会管理</template>
                <el-menu-item index="/foundationList">基金会捐赠列表</el-menu-item>
                <el-menu-item index="/capitalFlow">基金会资金流动</el-menu-item>
              </el-sub-menu>
            </el-menu>
          </el-aside>
          <el-main >
            <router-view></router-view>
          </el-main>
        </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref('1')
let title = ref()
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
const goBack = () => {
  console.log('go back')
}


</script>

<style scoped>

</style>