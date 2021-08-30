<template>
  <div>
    <Header @submit="showEdit" />
    <List :list="list" />
    <Edit :is-show="isShowEdit" :hide-edit="hideEdit" />
  </div>
</template>

<script>
import List from "./child/List";
import Header from "./child/FilterHeaer";
import Edit from "./child/Edit";
import useList from "./useList";
import useEdit from "./child/useEdit";

export default {
  name: "Home",
  components: { List, Header, Edit },
  setup() {
    const { list, handleAdd } = useList();

    const { isShowEdit, showEdit, hideEdit } = useEdit();
    return {
      //useList
      list,
      handleAdd,
      // useEdit
      isShowEdit,
      showEdit,
      hideEdit,
    };
  },
};
</script>
