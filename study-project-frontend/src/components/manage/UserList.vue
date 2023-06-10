<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="用户">
      <el-input v-model="formInline.value" placeholder="ID/姓名"/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">搜索</el-button>
    </el-form-item>
  </el-form>
  <!--  <el-table :data="tableData" stripe style="width: 100%">-->
  <!--    <el-table-column prop="date" label="Date"/>-->
  <!--    <el-table-column prop="name" label="Name"/>-->
  <!--    <el-table-column prop="address" label="Address"/>-->
  <!--    <el-table-column fixed="right" label="Operations">-->
  <!--      <template #default>-->
  <!--        <el-button link type="primary" size="small" @click="handleClick">Detail</el-button>-->
  <!--        <el-button link type="primary" size="small" @click="dialogFormVisible = true">Edit</el-button>-->
  <!--        <el-button link type="danger" size="small">delete</el-button>-->
  <!--      </template>-->
  <!--    </el-table-column>-->
  <!--  </el-table>-->
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
  <div style="text-align: center">
    <el-pagination hide-on-single-page background layout="prev, pager, next,total" :total="total" :page-size="pagesize"
                   @current-change="current_change"></el-pagination>
  </div>
  <el-dialog v-model="dialogFormVisible" title="修改信息">
    <el-form :model="form">
      <el-form-item label="name" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"/>
      </el-form-item>
      <el-form-item label="password" :label-width="formLabelWidth">
        <el-input v-model="form.password" autocomplete="off"/>
      </el-form-item>
      <el-form-item label="email" :label-width="formLabelWidth">
        <el-input v-model="form.email" autocomplete="off"/>
      </el-form-item>
      <el-form-item label="state" :label-width="formLabelWidth">
        <el-input v-model="form.state" autocomplete="off"/>
      </el-form-item>
      <el-form-item label="type" :label-width="formLabelWidth">
        <el-input v-model="form.type" autocomplete="off"/>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="update= false">
          提交
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import {get, post} from "@/net";

const handleClick = () => {
  console.log('click')
}

const tableData = ref([
  {
    id: 1,
    name: 'Tom',
    password: '123456',
    email: 'xxxx@xx.com',
    state: '正常',
    type: '游客'
  },
  {
    id: 1,
    name: 'Tom',
    password: '123456',
    email: 'xxxx@xx.com',
    state: '正常',
    type: '游客'
  }, {
    id: 1,
    name: 'Tom',
    password: '123456',
    email: 'xxxx@xx.com',
    state: '正常',
    type: '游客'
  },
  {
    id: 1,
    name: 'Tom',
    password: '123456',
    email: 'xxxx@xx.com',
    state: '正常',
    type: '游客'
  }, {
    id: 1,
    name: 'Tom',
    password: '123456',
    email: 'xxxx@xx.com',
    state: '正常',
    type: '游客'
  }, {
    id: 1,
    name: 'Tom',
    password: '123456',
    email: 'xxxx@xx.com',
    state: '正常',
    type: '游客'
  }, {
    id: 1,
    name: 'Tom',
    password: '123456',
    email: 'xxxx@xx.com',
    state: '正常',
    type: '游客'
  }, {
    id: 1,
    name: 'Tom',
    password: '123456',
    email: 'xxxx@xx.com',
    state: '正常',
    type: '游客'
  }, {
    id: 1,
    name: 'Tom',
    password: '123456',
    email: 'xxxx@xx.com',
    state: '正常',
    type: '游客'
  }, {
    id: 1,
    name: 'Tom',
    password: '123456',
    email: 'xxxx@xx.com',
    state: '正常',
    type: '游客'
  }, {
    id: 1,
    name: 'Tom',
    password: '123456',
    email: 'xxxx@xx.com',
    state: '正常',
    type: '游客'
  }, {
    id: 1,
    name: 'Tom',
    password: '123456',
    email: 'xxxx@xx.com',
    state: '正常',
    type: '游客'
  }, {
    id: 1,
    name: 'Tom',
    password: '123456',
    email: 'xxxx@xx.com',
    state: '正常',
    type: '游客'
  }, {
    id: 1,
    name: 'Tom',
    password: '123456',
    email: 'xxxx@xx.com',
    state: '正常',
    type: '游客'
  },
  {
    id: 1,
    name: 'Tom',
    password: '123456',
    email: 'xxxx@xx.com',
    state: '正常',
    type: '游客'
  }])
const tabColumn = [
  {prop: "id", label: "ID"},
  {prop: "name", label: "用户名"},
  {prop: "password", label: "密码"},
  {prop: "email", label: "邮箱"},
  // {prop: "state", label: "状态"},
  // {prop: "type", label: "角色"},
]

import {onMounted, reactive, ref} from 'vue'
import {ElMessage} from "element-plus";

const loading = ref(false)
const total = ref(100)//总条数
const pagesize = ref(10)//指定展示多少条
const currentPage = ref(1)//当前页码
const current_change = (cp) => {
  currentPage.value = cp;
}
const getList = () => {
  loading.value = true;
  get('api/user/findAll', (message) => {
    loading.value = false;
    tableData.value = message;
    // total.value = res.data.total;
  })
}
//更新用户信息
const update = () => {
  const param = reactive({
    id: '',
    username: '',
    password: '',
    email: '',
    state: '',
    type: ''
  })
  post('', param, (success) => {
    ElMessage.success(success)
  } , () => {
    ElMessage.error('修改失败')
  })
}
onMounted(() => {
  getList()
})
const formInline = reactive({
  value: '',
})

const onSubmit = () => {
  console.log(formInline)
}
const formLabelWidth = '100px'
const dialogFormVisible = ref(false)
const form = reactive({
  name: '',
  password: '',
  email: '',
  state: '',
  type: ''
})
</script>

<style scoped>

</style>