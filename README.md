# Lvzh

A minimal editorial Hugo theme with warm cream palette, serif + sans typography, and a clean reading experience.

<!-- TODO: replace with actual screenshot -->
<!-- ![Lvzh Theme Screenshot](images/screenshot.png) -->

## Features

- **Editorial Design** — Newsreader serif headings + Inter sans-serif body, warm cream background with terracotta accent
- **Responsive** — Mobile-first layout with hamburger menu, adapts to all screen sizes
- **Table of Contents** — Sticky sidebar TOC on desktop with scroll spy, collapsible on mobile
- **Reading Progress** — Thin progress bar below the header on article pages
- **Cover Images** — Front matter `cover` field with lazy loading
- **Sidebar Navigation** — Homepage sidebar with article list and scroll-to highlighting
- **Pagination** — Clean pagination for post lists
- **Back to Top** — Floating button on article pages
- **CJK Support** — Noto Sans SC / Noto Serif SC for Chinese/Japanese/Korean text
- **Accessibility** — Skip links, ARIA labels, focus states, `prefers-reduced-motion` support

## Requirements

- Hugo **v0.146.0** or later (extended edition recommended for PostCSS)

## Installation

### Method 1: Git Submodule

```bash
cd your-hugo-site
git submodule add https://github.com/lvzh2012/hugo-theme-lvzh.git themes/hugo-theme-lvzh
```

Then set the theme in your `hugo.toml`:

```toml
theme = "hugo-theme-lvzh"
```

### Method 2: Hugo Module

Initialize your site as a Hugo module (if not already done):

```bash
hugo mod init github.com/your-username/your-site
```

Add the theme to your `hugo.toml`:

```toml
[module]
  [[module.imports]]
    path = "github.com/lvzh2012/hugo-theme-lvzh"
```

### Method 3: Direct Download

Download the [latest release](https://github.com/lvzh2012/hugo-theme-lvzh/releases) and extract it to your `themes/` directory.

## Configuration

Here is a minimal `hugo.toml` to get started:

```toml
baseurl = "https://example.com/"
languageCode = "zh-CN"
title = "My Blog"
theme = "hugo-theme-lvzh"

copyright = "Copyright © 2024 Your Name"
hasCJKLanguage = true

[pagination]
  pagerSize = 12

[permalinks]
  posts = "/posts/:slug.html"

[taxonomies]
  tag = "tags"
  category = "categories"

[markup]
  [markup.goldmark]
    [markup.goldmark.renderer]
      unsafe = true
  [markup.tableOfContents]
    startLevel = 2
    endLevel = 3

[menu]
  [[menu.main]]
    name = "Home"
    url = "/"
    weight = 1
  [[menu.main]]
    name = "Categories"
    url = "/categories/"
    weight = 2
  [[menu.main]]
    name = "Tags"
    url = "/tags/"
    weight = 3
  [[menu.main]]
    name = "About"
    url = "/about/"
    weight = 4

[params]
  description = "My blog description"
  author = "Your Name"

  [params.hero]
    subtitle = "Your subtitle here"
```

## Post Front Matter

```yaml
---
title: "Post Title"
date: 2026-01-01
tags: ["tag1", "tag2"]
categories: ["Category"]
cover: "https://example.com/image.jpg"  # optional cover image
draft: false
---
```

## Color Palette

| Role | Hex | CSS Variable |
|------|-----|-------------|
| Background | `#FAF9F6` | `--color-bg` |
| Background Soft | `#F5F3EE` | `--color-bg-soft` |
| Text | `#141413` | `--color-text` |
| Text Muted | `#6B6B67` | `--color-text-muted` |
| Border | `#E8E6E1` | `--color-border` |
| Accent | `#C15F3C` | `--color-accent` |

## Typography

- **Headings**: [Newsreader](https://fonts.google.com/specimen/Newsreader) + [Noto Serif SC](https://fonts.google.com/specimen/Noto+Serif+SC)
- **Body**: [Inter](https://fonts.google.com/specimen/Inter) + [Noto Sans SC](https://fonts.google.com/specimen/Noto+Sans+SC)
- **Code**: [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)

## License

[MIT](LICENSE)
