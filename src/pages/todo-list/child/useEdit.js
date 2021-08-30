import { ref } from "vue";

export default function () {
  const isShowEdit = ref(false);

  const showEdit = () => {
    isShowEdit.value = true;
  };

  const hideEdit = () => {
    isShowEdit.value = false;
  };

  return { isShowEdit, showEdit, hideEdit };
}
