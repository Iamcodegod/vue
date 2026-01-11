import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // 关键：配置 base 路径，对应 GitHub 仓库名（仓库名小写）
  base: '/vue/', // 替换成你的仓库名，格式：/仓库名/
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})