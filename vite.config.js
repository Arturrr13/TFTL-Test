import { defineConfig } from 'vite'
import VueRouter from 'unplugin-vue-router/vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		VueRouter(),
		vue()
	],
  	css: {
    	preprocessorOptions: {
        	scss: {
				api: 'modern',
				additionalData: `
					@use "/src/assets/css/fonts.scss" as *; 
					@use "/src/assets/css/function.scss" as *; 
					@use "/src/assets/css/mixins.scss" as *;
					@use "/src/assets/css/colors.scss" as *;
					@use "/src/assets/css/responsive.scss" as *;
				`
			},
    	},
  	}
})
