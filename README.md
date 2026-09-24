# elcasey.com

Emmett Casey's consulting website: a single-page React + TypeScript site
positioning his independent software consulting practice for Midwest
businesses. All page copy and section data live in
[`src/website/Home/Home.tsx`](src/website/Home/Home.tsx) and
[`src/website/Home/HomeContent.ts`](src/website/Home/HomeContent.ts).

## Running Locally

To run the website locally, use the following commands:

* `npm install`
* `npm start`

The site is served at `http://localhost:3000` in development mode.

## Building for Production

To build the website for production, use the following command:

* `npm run build`

This runs every gate — lint, format, docs, typecheck — and then bundles in
production mode: minified, no source maps, and with a content hash in the
bundle filename so a host can cache it indefinitely.

## Publishing

`npm run build` writes everything the site needs into `dist/`. That folder is
the complete, self-contained deployable — upload its **contents** to the root
of any static host.

A published build contains:

| File | What it is |
| --- | --- |
| `index.html` | The page shell. Loads the bundle. |
| `index_bundle.<hash>.js` | React, the app, and all CSS. |
| `assets/portrait.<hash>.jpg` | The hero photo. |
| `favicon.ico` | Copied verbatim from `public/`. |

Two things are worth knowing before you deploy:

1. **Anything you put in `public/` is copied into `dist/` as-is**, apart from
   `index.html`, which is the template webpack builds the real page from. Put a
   `CNAME` or a `robots.txt` there and it will ship.
2. **The site is a single route (`/`).** It needs no server-side rewrite rules.
   If you ever add a second route, configure the host to serve `index.html` for
   unknown paths.

## Contact form

The contact form posts to [Formspree](https://formspree.io), which forwards
each submission to the email address on the Formspree account. The page
submits the form in the background and shows the result in place: a
confirmation replaces the form when Formspree accepts the message, and an
error notice appears above the button, with everything typed still in place,
when it does not. The visitor never leaves the site. It is the only way for a
visitor to reach Emmett: the site publishes no email address or phone number.

The endpoint is the `contactFormAction` constant in
[`src/website/Home/HomeContent.ts`](src/website/Home/HomeContent.ts). To
change where submissions go, create a new form in the Formspree dashboard and
put its endpoint URL there.

## Swapping the headshot

The hero photo is [`src/assets/portrait.jpg`](src/assets/portrait.jpg). It lives
under `src/` because webpack bundles it as an imported asset, not as a static
file. To change it, add the new image to `src/assets/` and update the import at
the top of [`src/website/Home/Home.tsx`](src/website/Home/Home.tsx).

The site prints the photo as a halftone: it is desaturated in CSS so it reads as
a newspaper photograph rather than a colour image.

## Updates

Updating provided by npm-check-updates:

* `npm run update`
