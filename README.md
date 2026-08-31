# BLOCKS website

Static HTML, CSS, and JavaScript website published at <https://blocks-qa-saas.github.io/Blocks-QA/>.

## Deployment

Pushes to `main` deploy automatically through `.github/workflows/pages.yml`. In repository **Settings → Pages**, keep **Source** set to **GitHub Actions**.

The site intentionally uses relative internal paths so it works under the `/Blocks-QA/` project path. If a custom domain is configured later, update the canonical URLs, Open Graph URLs, `robots.txt`, and `sitemap.xml` together.

## Content ownership

The six product names are presented as technology brands. Proposals and agreements must identify the applicable legal service provider. Public contact details are maintained directly in the HTML files.

## Fonts and media

The design uses a system font stack with optional local Inter and Gilroy fonts. Images should be exported near their rendered dimensions and compressed before being committed.
