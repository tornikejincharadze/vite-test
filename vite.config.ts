import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, isSsrBuild }) => {
  console.log(command, mode, isSsrBuild);

  if (command === 'serve') {
    return {
      // dev specific config
      base: '/vite-test/',
      plugins: [react()],
    };
  } else {
    // command === 'build'
    return {
      // build specific config
    };
  }
});
