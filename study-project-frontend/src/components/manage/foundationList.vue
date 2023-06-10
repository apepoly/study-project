<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="用户">
      <el-input v-model="formInline.value" placeholder="ID/姓名" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">搜索</el-button>
    </el-form-item>
  </el-form>
  <div style="width: auto;height: 480px">
    <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" stripe style="width: 100%"
              v-loading="loading">
      <el-table-column align="center" label="序号" type="index" width="70px" show-overflow-tooltip></el-table-column>
      <el-table-column v-for="item in tabColumn" :key="item.index" :prop="item.prop" :label="item.label" align="center"
                       show-overflow-tooltip></el-table-column>
      <el-table-column fixed="right">
        <template #default>
          <el-button link type="primary" size="small" @click="handleClick">Detail</el-button>
          <el-button link type="primary" size="small" @click="dialogFormVisible = true">Edit</el-button>
          <el-button link type="danger" size="small">delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>

  <div style="text-align:center">
    <el-pagination hide-on-single-page background layout="prev, pager, next,total" :total="total" :page-size="pagesize"
                   @current-change="current_change"></el-pagination>
  </div>
</template>

<script setup>
import {reactive, ref} from 'vue'
import {get} from "@/net";

const formInline = reactive({
  value: '',
})
const tableData = ref([])
const tabColumn = [
  {prop: "id", label: "ID"},
  {prop: "name", label: " 基金会"},
  {prop: "capital", label: "资金收入"},
  {prop: "capitalOff", label: "资金指出"},
]
const loading = ref(false)
const total = ref(100)//总条数
const pagesize = ref(10)//指定展示多少条
const currentPage = ref(1)//当前页码
const current_change = (currentPage) => {
  this.currentPage.value = currentPage;
}
const getList = () => {
  loading.value = true;
  get('', (res) => {
    loading.value = false;
    tableData.value = res.data.list;
    total.value = res.data.total;
  })
}
const onSubmit = () => {
  console.log(formInline)
}


</script>

<style scoped>

</style>