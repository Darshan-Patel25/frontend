import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: "/frontend/",  // Ensure correct asset paths for deployment
  build: {
    outDir: "dist",  // Default Vite output folder
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
});
