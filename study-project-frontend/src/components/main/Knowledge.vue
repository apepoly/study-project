<template>
  <div>
    <h2 style="text-align: center">大熊猫知识科普</h2>
    <el-divider />
    <el-row :align="'middle'" class="row-box">
      <el-col :span="6"></el-col>
      <el-col :span="12">
        <el-space direction="vertical">
          <!--          ==========================================================-->

          <el-card class="el-card" shadow="hover">
            <template #header>
              <div class="card-header">
                <el-link class="title">【熊猫知识】大熊猫生长发育</el-link>
                <div>2016-08-04</div>
              </div>
            </template>
            <p>刚出生：初生熊猫幼仔体重仅是它母亲体重的千分之一，平均体重仅120克左右，最轻的为51克，最重的为225克。粉色的皮肤上长着白毛，眼睛和耳朵还没有发育完全，免疫系统的也还未发育完</p>
          </el-card>

          <!-- ==========================================================-->
          <el-card class="el-card" shadow="hover">
            <template #header>
              <div class="card-header">
                <el-link class="title">【熊猫知识】大熊猫生长发育</el-link>
                <div>2016-08-04</div>
              </div>
            </template>
            <p>刚出生：初生熊猫幼仔体重仅是它母亲体重的千分之一，平均体重仅120克左右，最轻的为51克，最重的为225克。粉色的皮肤上长着白毛，眼睛和耳朵还没有发育完全，免疫系统的也还未发育完</p>
          </el-card>

          <el-card class="el-card" shadow="hover">
            <template #header>
              <div class="card-header">
                <el-link class="title">【熊猫知识】伴生动物</el-link>
                <div>2016-08-04</div>
              </div>
            </template>
            <p>大熊猫的伴生动物有金丝猴，小熊猫，林麝、羚牛、血雉，红腹锦鸡等。这些珍贵动物基本上都与熊猫生活在同一环境中。从自然历史源源上来看，她们都是一百万到几百万年以前的古</p>
          </el-card>
          <el-card class="el-card" shadow="hover">
          <template #header>
            <div class="card-header">
              <el-link class="title">【熊猫知识】认识大熊猫</el-link>
              <div>2016-08-05</div>
            </div>
          </template>
          <p>大熊猫是世界上最可爱的动物之一，它有着圆圆的脸颊，大大的黑眼圈，胖嘟嘟的身体，标志性的内八字的行走方式，也有解剖刀般锋利的爪子。</p>
        </el-card><el-card class="el-card" shadow="hover">
          <template #header>
            <div class="card-header">
              <el-link class="title">【熊猫知识】大熊猫历史</el-link>
              <div>2016-08-05</div>
            </div>
          </template>
          <p>大熊猫是世界上最可爱的动物之一，它有着圆圆的脸颊，大大的黑眼圈，胖嘟嘟的身体，标志性的内八字的行走方式，也有解剖刀般锋利的爪子。</p>
        </el-card>
        </el-space>
      </el-col>
      <el-col :span="6"></el-col>
    </el-row>
  </div>
</template>

<script>

</script>

<style scoped>

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
  font-size: 20px;
  font-weight: bolder
}
p{text-indent:2em;}
</style>