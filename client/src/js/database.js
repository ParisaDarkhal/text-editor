import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
// export const putDb = async (content) => console.error('putDb not implemented');
export const putDb = async (content) => {
  //opens database and gives version 1
  const jateDb = await openDB("jate", 1);
  //new transaction with readwrite mode
  const transaction = jateDb.transaction("jate", "readwrite");
  // opening and objectStore for the transaction and pass content to it
  const store = transaction.objectStore("jate");
  const request = store.put({ id: 1, value: content });
  const result = await request;
  if (!result) {
    console.error("putDb not implemented!");
  } else console.log("✨✨✨ - Data Saved in Database!", result);
};

// TODO: Add logic for a method that gets all the content from the database
// export const getDb = async () => console.error("getDb not implemented");
export const getDb = async () => {
  // opens database and gives version 1
  const jateDb = await openDB("jate", 1);
  // new transaction with readonly mode
  const transaction = jateDb.transaction("jate", "readonly");
  // open object store
  const store = transaction.objectStore("jate");
  // get all data
  const request = store.getAll();
  //confirmation and then return
  const result = await request;
  if (!result) {
    console.error("getDb not implemented!");
  } else console.log("✨✨✨ - Data Saved in Database!", result);
};

initdb();
