<template>
  <el-table :data="list" style="width: 100%">
    <el-table-column prop="id" label="id"> </el-table-column>
    <el-table-column prop="name" label="姓名"> </el-table-column>
    <el-table-column prop="gender" label="性别"> </el-table-column>
    <el-table-column prop="age" label="年龄"> </el-table-column>
    <el-table-column prop="habbit" label="爱好"> </el-table-column>
    <el-table-column label="操作" width="200">
      <template #default="{ row }">
        <el-button @click="handleEditEvent(row)">编辑</el-button>
        <el-button @click="handleDeleteEvent(row.id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { ElTable, ElTableColumn, ElButton } from "element-plus";

export default {
  components: { ElTable, ElTableColumn, ElButton },
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  emits: {
    deleteItem: (id) => !!id,
    handleEdit: (data) => !!data,
  },
  setup(props, { emit }) {
    const handleDeleteEvent = (id) => {
      emit("deleteItem", id);
    };
    const handleEditEvent = (data) => {
      emit("handleEdit", data);
    };
    return {
      handleDeleteEvent,
      handleEditEvent,
    };
  },
};
</script>

<style scoped></style>
