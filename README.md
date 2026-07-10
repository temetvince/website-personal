# elcasey.com

Emmett Casey's consulting website: a single-page React + TypeScript site
positioning his independent software consulting practice for Midwest
businesses. All page copy and section data live in
[`src/website/Home/Home.tsx`](src/website/Home/Home.tsx).

## Running Locally

To run the website locally, use the following commands:

* `npm install`
* `npm start`

## Building for Production

To build the website for production, use the following command:

* `npm run build`

## Contact form

The contact form posts to [Formspree](https://formspree.io). It ships with a
placeholder endpoint, so submissions do nothing until it is configured:

1. Create a form in a Formspree account and copy its form ID.
2. In [`src/website/Home/Home.tsx`](src/website/Home/Home.tsx), replace
   `YOUR_FORM_ID` in the `contactFormAction` constant with that ID.

## Swapping the headshot

The hero photo is [`public/IMG_0081.JPG`](public/IMG_0081.JPG). To change it,
add the new image to `public/` and update the import at the top of
[`src/website/Home/Home.tsx`](src/website/Home/Home.tsx).

## Updates

Updating provided by npm-check-updates:

* `npm run update`
