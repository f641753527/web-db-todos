<template>
  <el-table :data="list" style="width: 100%">
    <el-table-column prop="id" label="id"> </el-table-column>
    <el-table-column prop="name" label="姓名"> </el-table-column>
    <el-table-column prop="gender" label="性别"> </el-table-column>
    <el-table-column prop="age" label="年龄"> </el-table-column>
    <el-table-column prop="habbit" label="爱好"> </el-table-column>
  </el-table>
</template>

<script>
import { ElTable, ElTableColumn } from "element-plus";

export default {
  components: { ElTable, ElTableColumn },
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  setup() {},
};
</script>

<style scoped></style>
