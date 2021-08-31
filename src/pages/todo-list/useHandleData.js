import { ref } from "vue";
import {
  getTodoList,
  addTodoItem,
  deleteTodoItem,
  putTodoItem,
} from "@/db/todo";

export default function (addedCb) {
  const list = ref([]);

  const getListAPI = (params = {}) => {
    return getTodoList(params).then((res) => {
      list.value = res || [];
    });
  };

  const addDataAPI = async (data) => {
    await addTodoItem(data);
    addedCb && addedCb();
    getListAPI();
  };

  const deleteDataById = async (id) => {
    deleteTodoItem(id).then(() => {
      getListAPI();
    });
  };

  const updateDataById = async (id, data) => {
    await putTodoItem(id, data);
    addedCb && addedCb();
    getListAPI();
  };

  return {
    list,
    getListAPI,
    addDataAPI,
    deleteDataById,
    updateDataById,
  };
}
