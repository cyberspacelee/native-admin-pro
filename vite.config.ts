import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Unocss from 'unocss/vite'
const baseSrc = fileURLToPath(new URL('./src', import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
    // 响应式语法糖
      reactivityTransform: true,
    }),
    AutoImport({
      // 配置需要自动导入的库
      imports: [
        'vue',
        'vue/macros',
        'vue-router',
        'vue-i18n',
        '@vueuse/core',
        'pinia',
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar',
          ],
        },
      ],
      // 生成到的地址
      dts: 'types/auto-imports.d.ts',
      // 配置本地需要自动导入的库
      dirs: [
        // pinia 状态管理目录
        'src/stores',
        // 自定义组合式api目录
        'src/composables',
      ],
    }),
    Components({
      // 导入 naiveui 的配置项目
      resolvers: [NaiveUiResolver()],
      // 生成类型的地址
      dts: 'types/components.d.ts',
    }),
    Unocss(),
  ],
  // 配置别名
  resolve: {
    alias: {
      '~': baseSrc,
      '~@': baseSrc,
    },
  },
})
