import { API } from "./preload";

declare global {
  interface Window {
    gameWindow: API;
  }
}
