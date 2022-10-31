/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import App from './App';

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
  <>
    <App />
    <ToastContainer className="w-32 text-xl font-sans font-bold rounded-full" />
  </>
);

// calling IPC exposed from preload script
window.electron.ipcRenderer.once('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});
window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
