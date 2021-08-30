<template>
  <el-row :gutter="20">
    <el-col :span="6"></el-col>
    <el-col :span="6"></el-col>
    <el-col :span="6"></el-col>
    <el-col :span="6">
      <el-button type="primary" @click="handleSubmit">新建</el-button>
    </el-col>
  </el-row>
</template>

<script>
import { ElRow, ElCol, ElButton } from "element-plus";
export default {
  components: { ElRow, ElCol, ElButton },
  emits: ["submit"],
  setup(props, { emit }) {
    const handleSubmit = () => {
      emit("submit", 1);
    };
    return {
      handleSubmit,
    };
  },
};
</script>
