import fs from "fs";
export const ensureDataFolderExist = () => {
  if (fs.existsSync("data")) return;
  fs.mkdirSync("data", { recursive: true });
};

export const ensureDataJSONExist = (fileName: string) => {
  ensureDataFolderExist();
  if (fs.existsSync(`data/${fileName}.json`)) return;
  fs.writeFileSync(`data/${fileName}.json`, "");
};

export const readJSON = <T>(fileName: string) => {
  ensureDataJSONExist(fileName);
  const ctx = fs.readFileSync(`data/${fileName}.json`, "utf-8");
  if (ctx) {
    return JSON.parse(ctx) as T;
  }
  return null;
};

export const saveJSON = <T>(fileName: string, data: T) => {
  ensureDataJSONExist(fileName);
  fs.writeFileSync(`data/${fileName}.json`, JSON.stringify(data));
};
