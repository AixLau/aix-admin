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
            imports: ["vue", "vue-router",  "pinia"],
            dirs: ['src/utils', 'src/api'],
            dts: 'src/auto-imports.d.ts', // 自动生成的类型声明文件路径
            vueTemplate: true,
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            deep: true, // 搜索子目录
            dirs: ['src/components'], // 按需加载的文件夹
            dts: 'src/components.d.ts', // 自动生成的类型声明文件路径
            extensions: ['vue'],
            resolvers: [ElementPlusResolver()],
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    }
})
