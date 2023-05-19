<template>
  <h2 style="text-align: center">新闻中心</h2>
  <el-divider />
    <el-row :align="'middle'" class="row-box">
      <el-col :span="6" ></el-col>
      <el-col :span="12">
        <el-space direction="vertical">
          <el-card class="el-card" shadow="hover">
            <template #header>
              <div class="card-header">
                <el-link class="title">【熊猫知识】大熊猫生长发育</el-link>
                <div>大熊猫同好会</div>
                <div>2016-08-04</div>
              </div>
            </template>
            <p>刚出生：初生熊猫幼仔体重仅是它母亲体重的千分之一，平均体重仅120克左右，最轻的为51克，最重的为225克。粉色的皮肤上长着白毛，眼睛和耳朵还没有发育完全，免疫系统的也还未发育完</p>
          </el-card>
          <el-card class="el-card" shadow="hover">
            <template #header>
              <div class="card-header">
                <el-link class="title">【熊猫知识】大熊猫生长发育</el-link>
                <div>大熊猫同好会</div>
                <div>2016-08-04</div>
              </div>
            </template>
            <p>刚出生：初生熊猫幼仔体重仅是它母亲体重的千分之一，平均体重仅120克左右，最轻的为51克，最重的为225克。粉色的皮肤上长着白毛，眼睛和耳朵还没有发育完全，免疫系统的也还未发育完</p>
          </el-card>
          <el-card class="el-card" shadow="hover">
            <template #header>
              <div class="card-header">
                <el-link class="title">【熊猫知识】大熊猫生长发育</el-link>
                <div>大熊猫同好会</div>
                <div>2016-08-04</div>
              </div>
            </template>
            <p>刚出生：初生熊猫幼仔体重仅是它母亲体重的千分之一，平均体重仅120克左右，最轻的为51克，最重的为225克。粉色的皮肤上长着白毛，眼睛和耳朵还没有发育完全，免疫系统的也还未发育完</p>
          </el-card>

        </el-space>
      </el-col>
      <el-col :span="6" ></el-col>
    </el-row>
</template>

<script setup>
function getImageUrl(name) {
  return new URL(`/src/img/${name}.jpg`, import.meta.url).href
}
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
   border: 0;
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