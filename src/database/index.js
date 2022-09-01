import Dexie from "dexie";

export const db = new Dexie("freqacad");

db.version(1).stores({
  subjects: "++id, name, presenceMinTax, absenceCount, presenceCount",
});
