# Project Libros

A redesigned, bilingual website based on the supplied PL-main project. This is a complete static website: no installation, build step, paid service, or framework is required.

## Open the website

Open `index.html` in a browser. The Spanish version is `Espanol.html`. All styles, scripts, and images are included and use relative paths.

For a local web server, run this command from this folder if Python is installed:

```sh
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish

Upload the **contents of this folder** to your static hosting provider or web server. Keep the `assets` and `pages` folders alongside `index.html` and `Espanol.html`. The old `pages/Espanol.html` address forwards to the new Spanish page.

This package has not been published to the live website.

## What changed

- A new cream, teal, and golden-yellow visual system with editorial typography, book illustrations, and the original photography.
- A clearer journey through the mission, approach, Oaxaca project, and ways to contribute.
- Fully translated Spanish content and working language navigation.
- Responsive layouts, a mobile menu, native FAQ accordions, and a share dialog with clipboard and email options.
- Accessible names, visible keyboard focus, a skip link, correct language attributes, reduced-motion support, and support for browser zoom.
- Responsive WebP images, priority loading for the hero, lazy loading below the fold, and explicit image dimensions.
- Removed jQuery, Font Awesome, unused template pages, and external font dependencies.

## Editing

| File | Purpose |
| --- | --- |
| `index.html` | English content, navigation, links, and metadata |
| `Espanol.html` | Spanish content, navigation, links, and metadata |
| `assets/styles.css` | Colors, typography, layouts, and responsive rules |
| `assets/main.js` | Mobile menu, sharing, and footer year |
| `assets/children-*.webp` | Responsive hero photography |
| `assets/reader-*.webp` | Responsive mission photography |
| `pages/Espanol.html` | Compatibility with the original Spanish URL |

Update both language pages when changing content. The CSS color variables are near the top of `assets/styles.css`.

## Connected actions and source content

Donation buttons link directly to the existing `https://donorbox.org/project-libros` campaign. Book donations and volunteering open an email to `contact@projectlibros.org` with a relevant subject. Social links and the phone number are preserved from the supplied site. No payment collection, email sending, or form backend is implemented locally.

Sharing copies the public Project Libros address, not a local preview URL. If clipboard access is unavailable, the website selects the address for manual copying. The email sharing link also works without JavaScript. The navigation and FAQ answers remain accessible without JavaScript.

The mission, planned Oaxaca project, contact details, and nonprofit-status wording come from the supplied website. No new impact statistics, fundraising totals, or testimonials were added. Project timing has not been independently updated.

Photography was optimized from the supplied files: `kids_running.jpg` and `suad-kamardeen-8PyNdtGL4Bg-unsplash.jpg`. The original favicon is retained. The book mark and decorative illustrations are inline SVG.

## Verification

Tested locally in Chromium (Chrome):

- Both language pages at widths of 320, 360, 390, 640, 760, 768, 900, 1024, 1440, and 1920 pixels: no horizontal page overflow.
- All local links and assets, all eight FAQ controls, language switching, and the legacy Spanish redirect.
- Mobile menu opening, closing, Escape behavior, and anchor positioning beneath the sticky header.
- Keyboard skip link, modal focus management, Escape-to-close, focus restoration, and clipboard copying.
- Navigation, FAQ controls, and email sharing with JavaScript disabled.
- No uncaught JavaScript errors or broken images during checks.

At 1440 pixels and device pixel ratio 1, measured complete-page resource bodies decreased from **1,697,582 bytes to 125,156 bytes (93%)**, with requests decreasing from 17 to 6. Script resources decreased from 88,889 bytes to 2,657 bytes. Both images were loaded for this comparison. The responsive image size and transfer total vary by device; these are local resource measurements, not Lighthouse scores or live-network timings.
