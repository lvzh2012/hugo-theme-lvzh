---
title: "Theme Features Overview"
date: 2026-03-05
tags: ["Theme", "Features"]
categories: ["Guide"]
cover: "https://picsum.photos/seed/features/1920/1080"
---

A comprehensive overview of what the Lvzh theme offers.

## Design System

The theme is built on a carefully crafted design system with CSS custom properties:

- **Colors**: Warm cream background (`#FAF9F6`) with terracotta accent (`#C15F3C`)
- **Typography**: Newsreader serif for headings, Inter sans-serif for body
- **Spacing**: 8px grid-based spacing system
- **Transitions**: Smooth 200ms ease transitions throughout

## Responsive Layout

The theme adapts seamlessly across all screen sizes:

- **Mobile** (< 768px): Single column, hamburger menu
- **Tablet** (768px - 1023px): Comfortable reading width
- **Desktop** (1024px+): Sidebar navigation, desktop TOC

## Table of Contents

On desktop, a sticky sidebar TOC appears on the left side of articles. It features:

- Scroll spy that highlights the current section
- Collapsible with state persistence via localStorage
- On mobile, a collapsible `<details>` element at the top of the article

## Reading Progress

A thin progress bar appears below the header on article pages, showing how far the reader has scrolled.

## Cover Images

Posts can include cover images via the `cover` front matter field. The theme handles both local and remote images with lazy loading support.

## Accessibility

- Skip-to-content link
- ARIA labels on navigation
- Focus-visible states
- Respects `prefers-reduced-motion`
- Semantic HTML structure
