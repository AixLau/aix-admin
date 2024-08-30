import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import path from 'path'
import {createSvgIconsPlugin} from "vite-plugin-svg-icons";
import {viteMockServe} from "vite-plugin-mock";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        viteMockServe({
            mockPath: 'mock',
            enable: true
        }),
        createSvgIconsPlugin({
            iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
            symbolId: 'icon-[dir]-[name]',
        }),
        AutoImport({
            imports: [
                "vue", "vue-router", "pinia",
                {
                    'element-plus': [
                        'ElMessage',
                        'ElMessageBox',
                    ]
                }
            ],
            dts: 'src/auto-imports.d.ts', // 自动生成的类型声明文件路径
            dirs: ['src/stores/**', 'src/utils/**', 'src/api/**'], // 自动导入目录
            vueTemplate: true, // 允许在模板中使用自动导入
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            dts: 'src/components.d.ts', // 自动生成的类型声明文件路径
            dirs: ['src/components', 'src/views'], // 添加你的组件和视图目录
            extensions: ['vue'],
            deep: true,
            resolvers: [ElementPlusResolver(),],

        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    }
})
