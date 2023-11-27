import { contextBridge, ipcRenderer } from "electron";

export type API = {
  //TODO
};

const api = {
  //TODO
};

contextBridge.exposeInMainWorld("gameWindow", api);
