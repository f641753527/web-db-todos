import { ref } from "vue";
import { getTodoList } from "@/db/todo";

export default function () {
  const list = ref([]);
  /**
   * @description: all list data
   */
  getTodoList().then((res) => {
    list.value = res;
  });

  const handleAdd = () => {};
  return {
    list,
    handleAdd,
  };
}
