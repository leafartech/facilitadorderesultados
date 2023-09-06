import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "my": "#EB3D57",
        "my2": "#DA3750",
        "my3": "#FF6980",
        "my4": "#D45281"
      }
    },
  },
  plugins: [],
}
export default config
