import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

//https://vitejs.dev/config/#conditional-config  #para saber si estamos en dev o prod
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

