import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000
  },
  build: {
    outDir: 'lib',
    // 库编译模式设置
    lib: {
      entry: path.resolve(__dirname, 'packages/index.js'), // 指定组件编译入口文件
      name: 'Vue3ViteUI',
      fileName: 'vue3_vite_ui'
    },
    // rollup 打包配置
    rollupOptions: {
      // 确保外部化处理哪些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些全局变量提供命名空间
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
