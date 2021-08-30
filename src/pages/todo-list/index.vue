<template>
  <div>
    <List :list="list" />
  </div>
</template>

<script>
import { ref } from "vue";
import List from "./child/List";
import { getTodoList } from "@/db/todo";

export default {
  name: "Home",
  components: { List },
  setup() {
    const list = ref([]);
    getTodoList().then((res) => {
      list.value = res;
    });
    return {
      list,
    };
  },
};
</script>
