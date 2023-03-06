# The Resume and Portfolio
The portfolio is built with Next.js and Tailwind CSS. 

- [The Resume and Portfolio](#the-resume-and-portfolio)
  - [Install Next.js](#install-nextjs)
  - [Install Tailwind CSS with Next.js](#install-tailwind-css-with-nextjs)
    - [Add the paths to all of your template files in your **tailwind.config.js** file:](#add-the-paths-to-all-of-your-template-files-in-your-tailwindconfigjs-file)
    - [Add the @tailwind directives for each Tailwind’s layers to your **globals.css** file:](#add-the-tailwind-directives-for-each-tailwinds-layers-to-your-globalscss-file)
  - [Deploy on Vercel](#deploy-on-vercel)


## Install Next.js
[Next.js](https://nextjs.org/docs/getting-started) is a flexible React framework that gives you building blocks to create fast web applications.

```bash

# npx create-next-app@latest ref-portfolio --typescript --eslint
npx create-next-app@latest --typescript
# yarn
corepack enable
corepack prepare yarn@stable --activate
yarn set version stable

yarn create next-app --typescript 
```

## Install Tailwind CSS with Next.js
[Tailwind CSS ](https://tailwindcss.com/docs/guides/nextjs)works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.
It's fast, flexible, and reliable — with zero-runtime.
Rapidly build modern websites without ever leaving your HTML.

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
### Add the paths to all of your template files in your **tailwind.config.js** file:
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```
### Add the @tailwind directives for each Tailwind’s layers to your **globals.css** file:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```bash
# npx create-next-app@latest  -e with-tailwindcss ref-portfolio --typescript
npm i react-icons next-themes
npm i -D tailwind-styled-components
```
## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
