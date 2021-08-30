export default class DB {
  static _dbName = "todo-db";
  static _version = 4;
  static _dbInstance = null;
  static _store = null;

  static open() {
    console.log("=====open");
    return new Promise((resolve, reject) => {
      console.log(this._dbName);
      const request = window.indexedDB.open(this._dbName, this._version);

      /**
       * @description: open db fail
       */
      request.onerror = (ev) => {
        console.error(new Error(ev));
        reject();
      };
      /**
       * @description: db open success
       */
      request.onsuccess = () => {
        const db = request.result;
        console.log("***** db instance", db);
        this._dbInstance = db;
        resolve(db);
      };
      /**
       * @description: 如果指定的版本号，大于数据库的实际版本号，就会发生数据库升级事件upgradeneeded。
       */
      request.onupgradeneeded = function (event) {
        console.log("====onupgradeneeded");
        const db = event.target.result;
        if (!db.objectStoreNames.contains("person")) {
          this._store = db.createObjectStore("person", { autoIncrement: true });
        }
      };
    });
  }

  static close() {
    this._dbInstance.close();
  }
}
