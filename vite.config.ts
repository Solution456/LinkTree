import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ElementPlus from 'unplugin-element-plus/vite'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ElementPlus({
      useSource:true
    })
  ],
  root: resolve(__dirname),
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  },

})
