import fs from "fs";

export const ensureUserFolderExist = (userName: string) => {
  const ensureDataFolderExist = () => {
    if (fs.existsSync("data")) return;
    fs.mkdirSync("data");
  };

  ensureDataFolderExist();
  if (fs.existsSync(`data/${userName}`)) return;
  fs.mkdirSync(`data/${userName}`);
};

export const ensureUserJSONExist = (userName: string, fileName: string) => {
  ensureUserFolderExist(userName);
  if (fs.existsSync(`data/${userName}/${fileName}.json`)) return true;
  fs.writeFileSync(`data/${userName}/${fileName}.json`, "");
  return true;
};

export const readJSON = <T>(userName: string, fileName: string) => {
  if (ensureUserJSONExist(userName, fileName)) {
    const ctx = fs.readFileSync(`data/${userName}/${fileName}.json`, "utf-8");
    if (ctx) {
      return JSON.parse(ctx) as T;
    }
  }
  return null;
};

export const saveJSON = <T>(userName: string, fileName: string, data: T) => {
  if (ensureUserJSONExist(userName, fileName)) {
    fs.writeFileSync(`data/${userName}/${fileName}.json`, JSON.stringify(data));
    return true;
  }
  return false;
};

export const getAllJsonFiles = (userName: string) => {
  ensureUserFolderExist(userName);
  return fs.readdirSync(`data/${userName}`);
};
