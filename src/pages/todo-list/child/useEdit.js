import { ref } from "vue";

export default function () {
  const isShowEditForm = ref(false);

  const showEditForm = () => {
    isShowEditForm.value = true;
  };

  const hideEditForm = () => {
    isShowEditForm.value = false;
  };

  return { isShowEditForm, showEditForm, hideEditForm };
}
