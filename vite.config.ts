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
  base: "./",
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@/components': resolve(__dirname, "src/components"),
      '@/stores': resolve(__dirname, "src/stores"),
      '@/composables': resolve(__dirname, "src/composables"),
      '@/types': resolve(__dirname, "/src/@types")
    }
  },

})
