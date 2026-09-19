# Velorr Industries — Website

A complete, responsive static website for Velorr Industries (Fly Ash Bricks, Hollow Blocks and Red Bricks — Gunamangalam, Cuddalore District, Tamil Nadu).

## 1. Running it locally

No build step is needed — it's plain HTML, CSS and JavaScript.

1. Unzip the project.
2. Double-click `index.html` to open it directly in your browser, **or** (recommended, so relative paths behave exactly like on a real server):
   - If you have Python installed: open a terminal in the project folder and run:
     ```
     python3 -m http.server 8000
     ```
     Then open `http://localhost:8000` in your browser.
   - If you use VS Code: install the "Live Server" extension, right-click `index.html`, and choose "Open with Live Server".

## 2. Replacing images (gallery, hero, products)

All images live in the `/images/` folder. The gallery images are currently **conceptual placeholder graphics**, clearly labelled as such — not real photos of your factory.

To replace a placeholder with a real photograph, keep the **same filename** so the site keeps working with no code changes:

| Filename | Used for |
|---|---|
| `images/factory-front.svg` (or `.jpg`) | Factory exterior |
| `images/raw-material-mixing.svg` | Raw material / mixing process |
| `images/block-making-machine.svg` | Block manufacturing machine |
| `images/curing-yard.svg` | Curing / production area |
| `images/finished-products.svg` | Finished products |
| `images/loading-delivery.svg` | Loading and delivery |
| `images/hero-banner.svg` | Homepage hero visual |
| `images/flyash-brick.svg`, `images/hollow-block-12x4x8.svg`, `images/hollow-block-16x4x8.svg`, `images/hollow-block-16x6x8.svg`, `images/red-brick.svg` | Product cards |
| `images/logo.svg` | Header and footer logo |

**Important:** if your replacement photo is a `.jpg` or `.png` instead of `.svg`, you also need to update the file extension referenced in `index.html`. Open `index.html`, search for the old filename (e.g. `factory-front.svg`), and change it to your new filename (e.g. `factory-front.jpg`).

Keep photos reasonably compressed (under ~500KB each) so the site loads quickly.

## 3. Connecting Google Forms

The enquiry form currently works by opening WhatsApp with the customer's details pre-filled. To connect it to a real Google Form instead:

1. Create your Google Form with fields matching: Full Name, Phone Number, Product, Quantity Required, Delivery Location, Requirement Date, Message.
2. In the Google Form editor, click the **three-dot menu → Get pre-filled link**.
3. Fill in sample answers for every field, click **Get link**, and copy the long URL.
4. From that link:
   - Replace `viewform` with `formResponse` to get your **submission URL**.
   - Note each field's **entry ID** — it appears in the link as `entry.123456789=...`.
5. Open `script.js` and find the section clearly marked:
   ```
   GOOGLE FORMS INTEGRATION — CONFIGURE HERE
   ```
6. Paste your submission URL into `GOOGLE_FORM_URL`, paste each entry ID into the matching field in `GOOGLE_FORM_ENTRIES`, and change `GOOGLE_FORM_ENABLED` to `true`.

Once enabled, submitting the form sends the enquiry to your Google Form (which can email you or log to a Sheet) instead of opening WhatsApp. No other code changes are needed.

## 4. Where to change phone numbers

Two numbers are used across the site:

- **Primary WhatsApp / CTA number:** `+91 75503 99569` — appears as `917550399569` inside `wa.me/...` links.
- **Second contact number:** `+91 88830 56525` — appears as `tel:+918883056525` links.

To change either number, open `index.html` and use Find & Replace for the old number (in both the displayed format and the digits-only `wa.me`/`tel:` format), and also update `WHATSAPP_NUMBER` near the top of the form-handling section in `script.js`.

## 5. Where to change business information

All business details (address, GST status, production capacity, service areas, product list) are written directly into `index.html` as plain text — there is no separate data file. Open `index.html` and search for the section you want to change:

- Address and map link: search for `562, South Street`.
- Service/delivery areas: search for `Gunamangalam` (appears in the About, Delivery and Footer sections).
- Product list and sizes: search for `Our Products`.
- Production capacity figures: search for `Production & Capacity`.
- Page title and meta description (for Google search results): edit the `<title>` and `<meta name="description">` tags near the top of the `<head>`.

## 6. Deploying to GitHub Pages

1. Create a new GitHub repository and push the contents of this folder to it (the repository root should contain `index.html` directly, not inside a subfolder).
2. In the repository, go to **Settings → Pages**.
3. Under "Build and deployment", set **Source** to "Deploy from a branch", choose the `main` branch and `/ (root)` folder, then click **Save**.
4. GitHub will publish the site at `https://<your-username>.github.io/<repository-name>/` within a few minutes.

## 7. Deploying to Netlify

1. Go to [app.netlify.com](https://app.netlify.com) and log in.
2. Click **Add new site → Deploy manually**.
3. Drag and drop the entire `velorr-industries` project folder onto the upload area.
4. Netlify will give you a live URL immediately. You can rename the site or connect a custom domain from the site's **Domain settings**.

## 8. Deploying to Vercel

1. Go to [vercel.com](https://vercel.com) and log in.
2. Click **Add New → Project**, then choose **"Deploy without Git"** / drag-and-drop upload if you don't want to use a repository.
3. Upload the project folder. Since this is a static site with no framework, Vercel will serve it as-is.
4. Once deployed, Vercel gives you a live URL, and you can add a custom domain from the project's **Settings → Domains**.

## 9. Deploying to normal cPanel hosting

1. Log in to your hosting provider's **cPanel**.
2. Open **File Manager** and navigate to `public_html` (or the folder for your domain).
3. Upload all the files and folders from this project (`index.html`, `styles.css`, `script.js`, `images/`, `favicon/`) directly into that folder — `index.html` must sit at the top level, not inside a subfolder, so your domain loads it automatically.
4. If you uploaded a `.zip`, use cPanel's **Extract** option after uploading, then delete the `.zip` file.
5. Visit your domain in a browser to confirm the site loads.

## 10. Before going live — checklist

- [ ] Replace placeholder gallery/hero images with real photographs (see section 2).
- [ ] Double-check the address, phone numbers and Google Maps link are correct.
- [ ] Confirm product sizes match what you currently manufacture.
- [ ] Connect Google Forms if you want enquiries emailed/logged automatically (see section 3), otherwise the WhatsApp fallback works as-is.
- [ ] Test the site on a real mobile phone: check the menu, the enquiry form, and all WhatsApp/call buttons.
