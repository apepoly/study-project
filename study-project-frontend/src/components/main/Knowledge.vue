<template>
  <h2 style="text-align: center">大熊猫知识科普</h2>
  <el-divider />
  <el-row :align="'middle'" class="row-box">
    <el-col :span="6"></el-col>
    <el-col :span="12">
    <router-link v-for="item in items" :key="item.id" :to="{path: '/KnowledgeDetail', query: {id: item.id}}" :underline="false" style="text-decoration: none" target="_blank">
        <el-card  class="el-card" shadow="hover">
          <template #header>
            <div class="card-header">
              <el-text class="title">{{item.title}}</el-text>
              <div>{{item.date}}</div>
            </div>
          </template>
          <p>{{item.content}}</p>
        </el-card>
    </router-link>
    </el-col>
    <el-col :span="6"></el-col>
  </el-row>
</template>

<script setup>
  import {get} from "@/net";
  import {onMounted, ref} from "vue";

  function getImageUrl(name) {
    return new URL(`/src/img/${name}.jpg`, import.meta.url).href
  }
  const items = ref()
  const items_= [
    {id:1, title:"【熊猫知识】大熊猫生长发育", date: "2023-1-2", content: "刚出生：初生熊猫幼仔体重仅是它母亲体重的千分之一，平均体重仅120克左右，最轻的为51克，最重的为225克。粉色的皮肤上长着白毛，眼睛和耳朵还没有发育完全，免疫系统的也还未发育完", url:"panda1", author: "大熊猫研究中心"},
    {id:2, title:"【熊猫知识】大熊猫历史", date: "2023-1-2", content: "刚出生：初生熊猫幼仔体重仅是它母亲体重的千分之一，平均体重仅120克左右，最轻的为51克，最重的为225克。粉色的皮肤上长着白毛，眼睛和耳朵还没有发育完全，免疫系统的也还未发育完", url:"index_panda", author: "大熊猫研究中心"},
    {id:3, title:"【熊猫知识】大熊猫生长发育", date: "2023-1-2", content: "刚出生：初生熊猫幼仔体重仅是它母亲体重的千分之一，平均体重仅120克左右，最轻的为51克，最重的为225克。粉色的皮肤上长着白毛，眼睛和耳朵还没有发育完全，免疫系统的也还未发育完", url:"panda1", author: "大熊猫研究中心"},
    {id:1, title:"【熊猫知识】大熊猫生长发育", date: "2023-1-2", content: "刚出生：初生熊猫幼仔体重仅是它母亲体重的千分之一，平均体重仅120克左右，最轻的为51克，最重的为225克。粉色的皮肤上长着白毛，眼睛和耳朵还没有发育完全，免疫系统的也还未发育完", url:"panda1", author: "大熊猫研究中心"},
    {id:2, title:"【熊猫知识】大熊猫历史", date: "2023-1-2", content: "刚出生：初生熊猫幼仔体重仅是它母亲体重的千分之一，平均体重仅120克左右，最轻的为51克，最重的为225克。粉色的皮肤上长着白毛，眼睛和耳朵还没有发育完全，免疫系统的也还未发育完", url:"index_panda", author: "大熊猫研究中心"},
    {id:3, title:"【熊猫知识】大熊猫生长发育", date: "2023-1-2", content: "刚出生：初生熊猫幼仔体重仅是它母亲体重的千分之一，平均体重仅120克左右，最轻的为51克，最重的为225克。粉色的皮肤上长着白毛，眼睛和耳朵还没有发育完全，免疫系统的也还未发育完", url:"panda1", author: "大熊猫研究中心"}
  ]
  const getItems = () => {
    get('', (data) => {
      items.value = data
    }, () => {

    })
  }
  const toDetail = () => {

  }
  const test = () => {
    items.value = items_
  }
  onMounted(() => {
    console.log('111')
    test()
  })
</script>

<style scoped>

.row-box .el-card {
  min-width: 100%;
  height: 100%;
  margin: 10px;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  font-size: 20px;
  font-weight: bolder
}
p{text-indent:2em;}
</style>