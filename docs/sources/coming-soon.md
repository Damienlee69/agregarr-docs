---
title: Coming Soon
---

# Coming Soon

Coming Soon collections build hype by showcasing unreleased titles. Agregarr can pull upcoming media from Radarr, Sonarr, and Trakt, create placeholder files, apply overlays, and automatically remove placeholders and reset posters once real media arrives.

## Prerequisites

Configure the following:

- **Radarr and/or Sonarr** under **Settings → Downloads** (required for the `Monitored` subtype).
- **Trakt** under **Settings → Sources** (required for the `Trakt Anticipated` subtype).

## Sub-types

| Option | Description |
| --- | --- |
| Monitored in Radarr/Sonarr | Finds titles monitored in Radarr/Sonarr that have not been released. |
| Trakt Anticipated | Uses Trakt’s anticipated feed to list highly awaited releases. |

Both sub-types respect the **Days to Look Ahead** field (default 360 days, range 1–730).

## Features

- **Placeholder creation** – Agregarr can generate placeholder media (trailer if available usint `yt-dlp`, other standard placeholder is used), posters, and overlay banners (“COMING SOON”, “PREMIERES”, etc.) so Plex shows a full collection even before final files exist.
- **Automatic clean-up** – Placeholder files are removed once the real media arrives, keeping libraries tidy.
- **Sort by release date** – Items are ordered by the earliest release date so viewers see what is arriving next

