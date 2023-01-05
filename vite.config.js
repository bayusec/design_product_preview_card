import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
    let out = {
        plugins: [vue()],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, "./src")
            }
        },
    }
    if (command === 'build') {
        out.base = '/design_product_preview_card/'
    } else out.base = ''

    return out

})

