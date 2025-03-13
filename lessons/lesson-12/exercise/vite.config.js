import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig(({ command, mode }) => {
  // Load all environment variables that start with VITE_
  const env = loadEnv(mode, process.cwd(), ['VITE_']);
  console.log('Mode loaded:', mode);
  console.log('Env loaded:', env);
  return {
    plugins: [vue()],
    server: {
      // Use the loaded env variable instead of process.env
      port: Number(env.VITE_PORT) || 3000,
    },
    build: {
      outDir: 'dist',
    },
    define: {
      __APP_ENV__: JSON.stringify(env.VITE_APP_ENV),
    },
  };
});
