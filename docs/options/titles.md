---
sidebar_position: 3
title: Titles & Templates
---

# Titles & Templates

Collection title have preset options and a custom title option. Titles are set per-library.

## Preset Templates

- The dropdown lists dynamic presets for the current source and sub-type, including special entries for random or time-based feeds.

## Custom Titles

- Choose **Custom** if you want to set a custom title. When both movie and TV libraries are selected, separate fields appear so you can provide titles per media type.
- Custom templates support every variable that presets use, so you can mix static text with dynamic placeholders.

## Template Preview

- The live preview renders for each selected library, giving you a concrete view of how Plex will display the collection name.
- Some variables (such as `{username}` for Overseerr, will be filled with admin info for the preview)

## Available Variables

Use the placeholders below inside any template or custom field:

- `{mediaType}` - TV Show or Movie depending on library type
- `{username}` – Plex username for Overseerr Individual Collections
- `{nickname}` – Plex nickname for Overseerr Individual Collections
- `{servername}` – Plex server name
- `{domain}` – Overseerr domain
- `{appTitle}` – Overseerr application title
