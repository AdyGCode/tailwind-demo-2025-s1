import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    root: 'src',
    build: {
        outDir: '../assets',
        emptyOutDir: true,
    }
})
