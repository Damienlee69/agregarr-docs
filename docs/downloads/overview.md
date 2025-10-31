---
sidebar_position: 1
title: Download Automation Overview
---

# Download Automation Overview

Agregarr can grab items that exist in the source list but not in your Plex server. Pick the mode that works best for each collection.

| Mode | Info |
| --- | --- |
| Radarr/Sonarr (Direct) | Sends straight to Radarr/Sonarr using your chosen profile, root folder, and tags. | 
| Overseerr Requests | Creates Overseerr requests (with optional auto-approval) | 

Enable either or all. Choose the mode per collection. If you want to select individual items only, use the Preview Collections feature to add individual items manually to either service.

## Collection-Level Controls

Each collection’s **Grab Missing Items** section includes these filters:

- Position limit – only grab the first N items in the source list.
- Minimum release year – drop older titles.
- Excluded genres and countries – block specific content (uses TMDB values).
- Maximum seasons – skip long-running shows.
- Seasons per show – limit how many seasons are grabbed.
- Download method – Radarr/Sonarr or Overseerr per collection.
- Server/profile/root folder – choose the Radarr/Sonarr server and settings to use.
- Auto-approve (Overseerr) – allow requests to start immediately without manual approval.


## Source Identification

Agregarr can tag downloads and Overseerr requests so you know where they came from:

| Mode | Overseerr user | Radarr/Sonarr tag |
| --- | --- | --- |
| Single | `Agregarr` | `agregarr` |
| Per Source | `IMDbAgregarr`, `TraktAgregarr`, etc | `imdb-agregarr`, `trakt-agregarr`, etc|
| Per Collection | `IMDbTop250Agregarr`, `TraktTrendingAgregarr`, etc| `imdb-top-250-agregarr`, `trakt-trending-agregarr`, etc|

Pick one in **Settings → Downloads → Source identification**.
