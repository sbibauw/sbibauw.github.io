# AGENTS.md

## Project Overview

This is a Jekyll-based academic website for Serge Bibauw, built using the [al-folio](https://github.com/alshedivat/al-folio) theme. It's hosted on GitHub Pages and serves as a personal academic portfolio featuring publications, talks, CV, and research information focused on conversational AI for language learning.

## Development Environment Setup

### Recommended: Docker (Easiest)

```bash
# Pull latest image and run development server
docker compose pull
docker compose up

# For slimmer image (under 100MB)
docker compose -f docker-compose-slim.yml up

# Build your own image if needed
docker compose up --build
```

Access at: `http://localhost:8080`

### Alternative: Development Container (VS Code)

The repository includes `.devcontainer/devcontainer.json` with all necessary dependencies pre-configured. VS Code will automatically prompt to use the container when opening the project.

## Common Development Commands

### Building and Serving

```bash
# Development server with live reload (Docker)
docker compose up

# Production build
bundle exec jekyll build

# Development server (native)
bundle exec jekyll serve --livereload

# Build to custom destination
bundle exec jekyll build --destination /path/to/output
```

### Code Formatting and Quality

```bash
# Format with Prettier
pnpx prettier --write .

# Check for CSS optimization opportunities
purgecss -c purgecss.config.js
```

### Git Hooks

The repository includes a pre-commit hook that automatically runs Prettier before each commit:

```bash
# The hook runs automatically, but you can test it manually:
.git/hooks/pre-commit

# To temporarily bypass the hook (not recommended):
git commit --no-verify -m "commit message"
```

### Content Management

```bash
# Add new blog post
# Create file in _posts/ with format: YYYY-MM-DD-title.md

# Add new publication
# Edit _bibliography/papers.bib

# Add new project
# Create markdown file in _projects/
```

## Key Configuration Files

- `_config.yml` - Main Jekyll configuration and site settings
- `Gemfile` - Ruby dependencies and Jekyll plugins
- `package.json` - Node.js dependencies (Prettier, etc.)
- `_data/` - Structured data files (CV, social links, repositories)
- `_bibliography/papers.bib` - Publications in BibTeX format

## Architecture and Structure

### Theme Foundation

Built on al-folio v0.14.6, which provides:

- Academic-focused layouts (CV, publications, projects)
- Jekyll Scholar integration for bibliography management
- Responsive design with light/dark theme support
- Advanced features: MathJax, image optimization, search

### Content Collections

- `_pages/` - Main site pages (about, publications, CV, etc.)
- `_posts/` - Blog posts
- `_projects/` - Project portfolio items
- `_news/` - News/announcement items
- `_talks/` - Conference talks and presentations
- `_books/` - Book reviews and reading list

### Key Jekyll Plugins

- `jekyll-scholar` - Bibliography and citation management
- `jekyll-imagemagick` - Responsive image generation
- `jekyll-feed` - RSS feed generation
- `jekyll-sitemap` - Automatic sitemap generation
- `jekyll-jupyter-notebook` - Jupyter notebook integration

### Asset Pipeline

- Images automatically optimized to WebP format
- CSS/JS minification enabled in production
- MathJax for mathematical notation
- Syntax highlighting with Rouge

## Deployment

### GitHub Pages (Automatic)

- Push to `main` branch triggers automatic deployment
- Uses `.github/workflows/deploy.yml` GitHub Action
- Builds to `gh-pages` branch
- Available at: `https://sbibauw.github.io`

### Manual Deployment

```bash
# Build static site
bundle exec jekyll build

# Copy _site/ contents to hosting server
```

## Content Guidelines

### Publications

- Add entries to `_bibliography/papers.bib` in BibTeX format
- Use `selected={true}` for featured publications
- Include `pdf`, `code`, `slides` fields for additional resources

### Profile Updates

- Edit `_pages/about.md` for main bio
- Update `_data/cv.yml` for structured CV data
- Modify `_config.yml` for site-wide settings (social links, analytics, etc.)

### Academic Focus Areas

The site specializes in:

- Conversational AI for language learning
- Computer-Assisted Language Learning (CALL)
- Task-based language teaching (TBLT)
- Natural Language Processing (NLP) applications in education

## Image and Media Management

### Profile and Content Images

- Store in `assets/img/`
- Automatic WebP conversion enabled
- Multiple sizes generated: 480px, 800px, 1000px
- Use `{% include figure.liquid %}` for responsive images

### Publications and Project Assets

- PDFs in `assets/pdf/`
- Code repositories linked via `_data/repositories.yml`
- Slides and supplementary materials as needed

## Environment Variables (Production)

When deploying to services like Netlify:

- `JEKYLL_ENV=production`
- `RUBY_VERSION=3.3.5` (or current version in deploy workflow)

## Troubleshooting

### Docker Issues

- If permission errors occur, uncomment and configure user/group settings in `docker-compose.yml`
- Use `docker compose up --force-recreate` to rebuild from scratch

### Jekyll Build Issues

- Check `bundle exec jekyll doctor` for common problems
- Ensure all required gems are installed
- Verify `_config.yml` syntax

### Bibliography Issues

- Validate BibTeX syntax in `papers.bib`
- Check Jekyll Scholar configuration in `_config.yml`
- Ensure publication thumbnails exist in `assets/img/publication_preview/`

## Updating the al-folio Theme

### Recommended Approach (Merge Strategy)

**Use merge instead of rebase** for theme updates to avoid complex conflict resolution:

```bash
# 1. Ensure you have the upstream remote
git remote add upstream https://github.com/alshedivat/al-folio.git

# 2. Fetch latest updates
git fetch upstream

# 3. Check available versions
git tag --list --sort=-version:refname | head -10

# 4. Create backup branch (safety first!)
git branch backup-before-update

# 5. Merge the target version
git merge v0.16.3 --no-ff -m "Update al-folio to v0.16.3"

# 6. Resolve conflicts strategically:
# - Keep YOUR settings: README.md, _config.yml, _data/socials.yml, docker-compose.yml
# - Take UPSTREAM changes: GitHub workflows, Gemfile.lock, INSTALL.md, .prettierignore
git checkout --ours README.md _config.yml _data/socials.yml docker-compose.yml
git checkout --theirs .github/workflows/deploy.yml .github/workflows/broken-links.yml Gemfile.lock INSTALL.md .prettierignore

# 7. Add resolved files and commit
git add .
git commit -m "Update al-folio to v0.14.6"

# 8. Update Docker image version to match
# Edit docker-compose.yml: change image version to match theme version
git add docker-compose.yml && git commit -m "Update Docker image to v0.14.6"

# 9. Clean up backup branch if successful
git branch -d backup-before-update
```

### What NOT to Do (Lessons Learned)

**❌ Avoid `git rebase` for theme updates:**

- Creates complex merge conflicts with customized content
- Difficult to resolve conflicts in generated files (like madagascar/ directory)
- Time-consuming and error-prone process
- Can break customizations and personal content

### Post-Update Checklist

- [ ] Update WARP.md to reflect new theme version
- [ ] Update Docker image version in `docker-compose.yml`
- [ ] Test local development: `docker compose up`
- [ ] Verify personal customizations are preserved
- [ ] Check that publications, talks, and CV data are intact
- [ ] Test deployment pipeline
- [ ] Update any custom CSS/JS if needed

### Conflict Resolution Strategy

**Personal/Content Files (Keep OURS):**

- `README.md` - Personal project description
- `_config.yml` - Site configuration with personal settings
- `_data/socials.yml` - Personal social media links
- `_pages/about.md` - Personal bio
- `_bibliography/papers.bib` - Personal publications
- `assets/img/` - Personal images and photos

**Infrastructure Files (Take THEIRS):**

- `.github/workflows/` - GitHub Actions for deployment
- `Gemfile.lock` - Dependencies lockfile
- `INSTALL.md` - Installation instructions
- `.prettierignore` - Code formatting rules
- `_includes/scripts.liquid` - Theme scripts

**Hybrid Files (Manual Resolution):**

- `_includes/footer.liquid` - May need custom footer text
- `docker-compose.yml` - Update version but keep custom settings
