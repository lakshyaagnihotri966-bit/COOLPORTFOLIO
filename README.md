# Lakshya Agnihotri — Portfolio

Static site (no build step). Needs internet for Tailwind, fonts and OGL (loaded from CDNs).

## Run
`python3 -m http.server 8080` then open http://localhost:8080 (or deploy the folder to Vercel / Netlify / GitHub Pages).

## Edit content (Admin panel)
1. Open `/admin.html` — default password `admin123` (change it under Security).
2. Edit any tab, click **Save**, then open the site in the same browser to preview.
3. To publish for everyone: click **Export site-data.js**, replace the `site-data.js` file in this folder with it, and redeploy.

Saved edits live in your browser only until you export and redeploy. For images, either upload in admin (small images) or put files in `assets/` and type the path (e.g. `assets/me.png`) — better for the exported file size.

## Files
- `site-data.js` — all content (single source of truth)
- `site-render.js` — applies content to the page
- `admin.html` — editor
- `index.html`, `flex-carousel.js`, `works-wheel.js`, `scroll-expand-media.js`, `experience-section.js` — layout and animations (ECHO template, MIT)
