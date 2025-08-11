// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
// preload.js
window.addEventListener('DOMContentLoaded', () => {
  // You can expose safe functionality from main to renderer here
  // For example, you can safely expose Node.js modules:
  const { ipcRenderer } = require('electron');

  // You can add custom functionality here
  window.ipcRenderer = ipcRenderer;  // Now this can be accessed from your HTML/JS
});
