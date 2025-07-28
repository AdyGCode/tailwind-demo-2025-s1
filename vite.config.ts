import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    root: 'src',
    server: {
        port: 5175
    },
    build: {
        outDir: '../assets',
        emptyOutDir: true,
    }
})
