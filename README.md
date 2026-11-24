# drruchit.github.io

Personal website of **Dr. Ruchit Nawal, MBBS, MD (Community Medicine)**, Senior Resident, Department of Community Medicine, B.J. Medical College, Ahmedabad.

Live at **https://drruchit.github.io**

## How it is built

- React 18 + [Framer Motion](https://www.framer.com/motion/) for the scroll story and animations, bundled with Vite.
- Fonts: Playfair Display and Inter, self-hosted through Fontsource.
- Every push to `main` builds the site and publishes it to GitHub Pages (`.github/workflows/deploy.yml`).

## Editing the content

All text, numbers and links live in one file: `src/data.js`. Change it, commit, push, and the site redeploys in about a minute.

The downloadable CV is `public/Dr-Ruchit-Nawal-CV.pdf`. It is the public copy, without home address or phone number.

## Running it locally

```
npm install
npm run dev
```
