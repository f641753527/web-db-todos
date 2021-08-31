import DB from "./index";

export function getItemDetailById(id) {
  return DB.open().then((db) => {
    return new Promise((resolve) => {
      var request = db
        .transaction(["person"], "readwrite")
        .objectStore("person")
        .get(id);

      request.onsuccess = function () {
        console.log("数据查询成功", request.result);
        DB.close();
        resolve(request.result);
      };

      request.onerror = function () {
        console.log("数据查询失败");
        DB.close();
        resolve(null);
      };
    });
  });
}

export async function getTodoList() {
  return DB.open().then((db) => {
    const dataStore = db.transaction("person").objectStore("person");
    const list = [];
    return new Promise((resolve) => {
      const result = dataStore.openCursor();
      result.onsuccess = (event) => {
        var cursor = event.target.result;
        if (cursor) {
          console.log("数据获取中...", list);
          const item = {
            id: cursor.key,
            ...cursor.value,
          };
          list.push(item);
          cursor.continue();
        } else {
          console.log("数据获取完毕", list);
          DB.close();
          resolve(list);
        }
      };
    });
  });
}

export function addTodoItem({ name, gender, age, habbit }) {
  return DB.open().then((db) => {
    return new Promise((resolve, reject) => {
      var request = db
        .transaction(["person"], "readwrite")
        .objectStore("person")
        .add({ name, gender, age, habbit });

      request.onsuccess = function () {
        console.log("数据写入成功");
        DB.close();
        resolve();
      };

      request.onerror = function () {
        console.log("数据写入失败");
        DB.close();
        reject();
      };
    });
  });
}

export function deleteTodoItem(id) {
  return DB.open().then((db) => {
    return new Promise((resolve, reject) => {
      getItemDetailById(id).then((res) => {
        if (!res) {
          console.error(id, "数据不存在");
          DB.close();
          reject();
          return;
        }
        const request = db
          .transaction(["person"], "readwrite")
          .objectStore("person")
          .delete(id);

        request.onsuccess = () => {
          console.log(id, "数据删除成功");
          DB.close();
          resolve();
        };
      });
    });
  });
}

export function putTodoItem(id, data) {
  return DB.open().then((db) => {
    return new Promise((resolve, reject) => {
      var request = db
        .transaction(["person"], "readwrite")
        .objectStore("person")
        .put({ ...data }, id);

      request.onsuccess = function () {
        console.log("数据更新成功");
        DB.close();
        resolve();
      };

      request.onerror = function () {
        console.log("数据更新失败");
        DB.close();
        reject();
      };
    });
  });
}
