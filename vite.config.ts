import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function ClosePlugin() {
  return {
    name: 'ClosePlugin',
    closeBundle() {
      console.log('Bundle closed')
      process.exit(0)
    },
  }
}

export default defineConfig({
  plugins: [react(), ClosePlugin()],
  base: '/',
})
