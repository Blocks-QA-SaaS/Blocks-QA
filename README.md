# BLOCKS website

Static HTML, CSS, and JavaScript website published at <https://blocks-qa.in/>.

## Deployment

Pushes to `main` deploy automatically through `.github/workflows/pages.yml`. In repository **Settings → Pages**, keep **Source** set to **GitHub Actions**.

The site uses relative internal paths and production metadata points to the `blocks-qa.in` custom domain. Keep canonical URLs, Open Graph URLs, `robots.txt`, and `sitemap.xml` synchronized if the domain changes.

## Browser copy deterrence

The lightweight `copy-protection.js` file lives in the project root beside the HTML files. Every public page loads it immediately before the closing `</body>` tag:

```html
<script src="copy-protection.js" defer></script>
```

Pages requested from nested URLs, such as the custom `404.html`, use the root-relative form `/copy-protection.js`. The script disables the context menu and blocks Ctrl+C, Ctrl+V, Ctrl+U, Ctrl+A, Ctrl+S, and F12. This is only a browser-level deterrent; it cannot prevent a determined visitor from retrieving public website assets.

## Content ownership

The six product names are presented as technology brands. Proposals and agreements must identify the applicable legal service provider. Public contact details are maintained directly in the HTML files.

## Fonts and media

The design uses a system font stack with optional local Inter and Gilroy fonts. Images should be exported near their rendered dimensions and compressed before being committed.
