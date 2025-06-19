import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // <-- Thêm dòng này để làm việc với đường dẫn

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // THÊM TOÀN BỘ KHỐI resolve NÀY VÀO
  resolve: {
    alias: {
      // Định nghĩa @ là đường dẫn đến thư mục /src
      '@': path.resolve(__dirname, './src'),
    },
  },
})