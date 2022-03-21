require("react-native-electron/preload");
const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("lndmobile", {
  hello: () => "hejsan"
});
