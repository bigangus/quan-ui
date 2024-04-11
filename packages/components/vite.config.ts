import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import {resolve} from 'path';

export default defineConfig({
    build: {
        emptyOutDir: true,
        lib: {
            entry: {
                index: resolve(__dirname, './src/index.ts'),
            },
            formats: ['es'],
            name: 'quan-ui',
        },
        minify: false,
        rollupOptions: {
            external: ['vue', 'element-plus'],
            output: {
                chunkFileNames: 'common/[name].js',
                entryFileNames: (file: any) => {
                    if (file.name == 'index') {
                        return 'index.js';
                    } else {
                        return '[name]/index.js';
                    }
                },
                globals: {
                    vue: 'Vue',
                },
            },
        },
        assetsDir: '',
    },
    plugins: [vue(), dts()],
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
            },
        },
    },
});

