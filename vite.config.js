import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  return {
    base: mode === 'production'
        ? '/LDP-Portfolio-Website/'
        : '/',
    plugins: [react()]
  }
})

