import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@Components': path.resolve(__dirname, 'src/Components'),
      '@Hooks': path.resolve(__dirname, 'src/Hooks'),
      '@Context': path.resolve(__dirname, 'src/Context'),
      '@Assets': path.resolve(__dirname, 'src/Assets'),
      '@Data': path.resolve(__dirname, 'src/Data'),
      '@Utils': path.resolve(__dirname, 'src/Utils'),
      '@Styles': path.resolve(__dirname, 'src/Styles'),
      '@Pages': path.resolve(__dirname, 'src/Pages'),
      '@Images': path.resolve(__dirname, 'src/Assets/Images'),
    }
  }
})