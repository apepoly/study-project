<template>
  <h2 style="text-align: center">新闻中心</h2>
  <el-divider />
    <el-row :align="'middle'" class="row-box">
      <el-col :span="6" ></el-col>
      <el-col :span="12">
        <el-link v-for="item in items" :key="item.id" :href=getImageUrl(item.url) :underline="false">
          <el-card class="el-card" shadow="hover">
            <template #header>
              <div class="card-header">
                <el-text class="title">{{item.title}}</el-text>
                <div>
                  <p>{{item.author}}</p>
                  <div style="text-align: right">{{item.date}}</div>
                </div>
              </div>
            </template>
            <p>{{item.content}}</p>
          </el-card>
        </el-link>
      </el-col>
      <el-col :span="6"></el-col>
    </el-row>
</template>

<script setup>
function getImageUrl(name) {
  return new URL(`/src/img/${name}.jpg`, import.meta.url).href
}
const items= [
  {id:1, title:"【熊猫知识】大熊猫生长发育", date: "2023-1-2", content: "刚出生：初生熊猫幼仔体重仅是它母亲体重的千分之一，平均体重仅120克左右，最轻的为51克，最重的为225克。粉色的皮肤上长着白毛，眼睛和耳朵还没有发育完全，免疫系统的也还未发育完", url:"panda1", author: "大熊猫研究中心"},
  {id:2, title:"【熊猫知识】大熊猫历史", date: "2023-1-2", content: "刚出生：初生熊猫幼仔体重仅是它母亲体重的千分之一，平均体重仅120克左右，最轻的为51克，最重的为225克。粉色的皮肤上长着白毛，眼睛和耳朵还没有发育完全，免疫系统的也还未发育完", url:"index_panda", author: "大熊猫研究中心"},
  {id:3, title:"【熊猫知识】大熊猫生长发育", date: "2023-1-2", content: "刚出生：初生熊猫幼仔体重仅是它母亲体重的千分之一，平均体重仅120克左右，最轻的为51克，最重的为225克。粉色的皮肤上长着白毛，眼睛和耳朵还没有发育完全，免疫系统的也还未发育完", url:"panda1", author: "大熊猫研究中心"},
  {id:1, title:"【熊猫知识】大熊猫生长发育", date: "2023-1-2", content: "刚出生：初生熊猫幼仔体重仅是它母亲体重的千分之一，平均体重仅120克左右，最轻的为51克，最重的为225克。粉色的皮肤上长着白毛，眼睛和耳朵还没有发育完全，免疫系统的也还未发育完", url:"panda1", author: "大熊猫研究中心"},
  {id:2, title:"【熊猫知识】大熊猫历史", date: "2023-1-2", content: "刚出生：初生熊猫幼仔体重仅是它母亲体重的千分之一，平均体重仅120克左右，最轻的为51克，最重的为225克。粉色的皮肤上长着白毛，眼睛和耳朵还没有发育完全，免疫系统的也还未发育完", url:"index_panda", author: "大熊猫研究中心"},
  {id:3, title:"【熊猫知识】大熊猫生长发育", date: "2023-1-2", content: "刚出生：初生熊猫幼仔体重仅是它母亲体重的千分之一，平均体重仅120克左右，最轻的为51克，最重的为225克。粉色的皮肤上长着白毛，眼睛和耳朵还没有发育完全，免疫系统的也还未发育完", url:"panda1", author: "大熊猫研究中心"}
]
</script>

<style scoped>
.image {
  padding: 10px;
  width: 20%;
  object-fit: cover;
}
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
  font-size: 20px;font-weight: bolder
}
p{text-indent:2em;}
</style>