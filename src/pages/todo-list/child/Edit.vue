<template>
  <el-dialog
    title="Title"
    :model-value="isShow"
    width="60%"
    :before-close="handleClose"
  >
    <el-form :model="formData" :rules="rules" ref="formRef" label-width="100px">
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary" @click="handleClose">确 定</el-button>
    </template>
  </el-dialog>
</template>

<script>
import { ElDialog, ElButton, ElForm, ElFormItem, ElInput } from "element-plus";
import { reactive, ref } from "vue";

export default {
  components: { ElDialog, ElButton, ElForm, ElInput, ElFormItem },
  props: ["isShow", "hideEdit"],
  data() {
    return {
      rules: {
        name: [{ required: true, message: "请输入名称", trigger: "blur" }],
      },
    };
  },
  setup(props) {
    const formRef = ref(null);
    const formData = reactive({
      name: "",
      gender: "",
      age: "",
      habbit: "",
    });
    const resetForm = () => {
      formRef.value.resetFields();
    };
    const handleClose = (done) => {
      resetForm();
      done && done();
      props.hideEdit();
    };
    return {
      formRef,
      formData,
      handleClose,
    };
  },
};
</script>
