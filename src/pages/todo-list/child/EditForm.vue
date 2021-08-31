<template>
  <el-dialog
    title="Title"
    :model-value="isShow"
    width="60%"
    :before-close="beforeClose"
  >
    <el-form :model="formData" :rules="rules" ref="formRef" label-width="100px">
      <el-form-item label="name" prop="name">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
      <el-form-item label="gender" prop="gender">
        <el-input v-model="formData.gender"></el-input>
      </el-form-item>
      <el-form-item label="age" prop="age">
        <el-input v-model="formData.age"></el-input>
      </el-form-item>
      <el-form-item label="habbit" prop="habbit">
        <el-input v-model="formData.habbit"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="handleCancel">取 消</el-button>
      <el-button type="primary" @click="handleSubmit">确 定</el-button>
    </template>
  </el-dialog>
</template>

<script>
import { ElDialog, ElButton, ElForm, ElFormItem, ElInput } from "element-plus";
import { reactive, ref } from "vue";

export default {
  components: { ElDialog, ElButton, ElForm, ElInput, ElFormItem },
  props: ["isEdit", "editItem", "isShow", "hide"],
  emits: {
    handleAddEditSubmit: (isEdit, { name, gender, age, habbit }) => {
      return typeof isEdit === "boolean" && name && gender && age && habbit;
    },
  },
  data() {
    return {
      rules: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        gender: [{ required: true, message: "请输入性别", trigger: "blur" }],
        age: [{ required: true, message: "请输入年龄", trigger: "blur" }],
        habbit: [{ required: true, message: "请输入爱好", trigger: "blur" }],
      },
    };
  },
  setup(props, { emit }) {
    const formRef = ref(null);
    const formData = reactive({
      name: props.isEdit ? props.editItem.name : "",
      gender: props.isEdit ? props.editItem.gender : "",
      age: props.isEdit ? props.editItem.age : "",
      habbit: props.isEdit ? props.editItem.habbit : "",
    });
    const beforeClose = (done) => {
      done && done();
      props.hide();
    };
    const handleCancel = () => {
      props.hide();
    };
    const handleSubmit = () => {
      formRef.value.validate(async (valid) => {
        if (!valid) return false;
        console.warn(formData);
        emit(
          "handleAddEditSubmit",
          props.isEdit,
          formData,
          props.isEdit ? props.editItem.id : null
        );
      });
    };
    return {
      formRef,
      formData,
      beforeClose,
      handleCancel,
      handleSubmit,
    };
  },
};
</script>
