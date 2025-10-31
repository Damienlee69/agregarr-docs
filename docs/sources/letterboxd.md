---
title: Letterboxd Lists
---

# Letterboxd Lists

Agregarr uses public lists directly — no API keys required.

## Sub-types

| Option | Description | Notes |
| --- | --- | --- |
| Custom List | Uses a public Letterboxd list | Supports URLs such as `https://letterboxd.com/user/list/list-name/`. |
| Random Lists | Rotates through curated Letterboxd lists | Uses `/config/random-lists/letterboxd.txt` when enabled. |

## Custom Lists

1. Choose **Custom List** in the collection modal.
2. Paste any public Letterboxd list URL (user or official).
3. Press **Validate** to fetch the list title and confirm the media type (Letterboxd lists are movie-only, so the Library picker warns if you include TV libraries).
4. Select templates, posters, and other options as usual.

## Random Lists

Random mode chooses a different Letterboxd list each time the collection syncs:

- Edit `/config/random-lists/letterboxd.txt` and set `enabled=true` to provide your own rotation (one URL per line).
- Without a custom config, Agregarr falls back to its discovery cache of highly rated, frequently updated lists.
