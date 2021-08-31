<template>
  <div>
    <Header @submit="handleAdd" />
    <List :list="list" @delete-item="deleteDataById" @handleEdit="handleEdit" />
    <EditForm
      v-if="isShowEditForm"
      :is-edit="isEdit"
      :edit-item="editItem"
      :is-show="isShowEditForm"
      :hide="hideEditForm"
      @handleAddEditSubmit="handleAddEditSubmit"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import List from "./child/List";
import Header from "./child/FilterHeaer";
import EditForm from "./child/EditForm";
import useEdit from "./child/useEdit";
import useHandleData from "./useHandleData";

export default {
  name: "Home",
  components: { List, Header, EditForm },
  setup() {
    const isEdit = ref(false);
    const editItem = ref(null);

    const handleAdd = () => {
      isEdit.value = false;
      showEditForm();
    };
    const handleEdit = (data) => {
      editItem.value = data;
      isEdit.value = true;
      showEditForm();
    };

    const handleAddEditSubmit = (isEdit, formData, id) => {
      if (!isEdit) {
        addDataAPI(formData);
      } else {
        updateDataById(id, formData);
      }
    };

    const { isShowEditForm, showEditForm, hideEditForm } = useEdit();
    // handle data
    const { list, getListAPI, addDataAPI, deleteDataById, updateDataById } =
      useHandleData(hideEditForm);
    getListAPI();

    return {
      isEdit,
      editItem,
      handleAdd,
      handleEdit,
      handleAddEditSubmit,
      // useEdit
      isShowEditForm,
      showEditForm,
      hideEditForm,
      // useHandleData
      list,
      addDataAPI,
      deleteDataById,
      updateDataById,
    };
  },
};
</script>
