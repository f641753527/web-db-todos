import DB from "./index";

export async function getTodoList() {
  return DB.open().then((db) => {
    const dataStore = db.transaction("person").objectStore("person");
    const list = [];
    return new Promise((resolve) => {
      const result = dataStore.openCursor();
      result.onsuccess = (event) => {
        var cursor = event.target.result;
        if (cursor) {
          const item = {
            id: cursor.key,
            ...cursor.value,
          };
          list.push(item);
          cursor.continue();
        } else {
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
