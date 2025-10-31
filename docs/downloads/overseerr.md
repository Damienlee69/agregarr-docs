---
sidebar_position: 3
title: Overseerr Requests
---

# Overseerr Requests

Choose Overseerr when you want Agregarr to create requests instead of sending items straight to Radarr/Sonarr. Either manual or auto approve can be used.

## Prerequisites

1. Configure Overseerr under **Settings → Sources → Overseerr** with at minimum, hostname, port, and API key.
2. Select **Service User Settings** to decide whether Agregarr creates a dedicated Overseerr user once, per source or per collection.

Use the **Test Connection** buttons to confirm everything works before saving.

## Enable Overseerr per collection

1. Open the collection you want to automate.
2. Toggle **Grab Missing Items**.
3. Adjust any filters (position, year, genres, countries, season limits) as needed.
4. Set **Download Mode** to **Overseerr**.
5. Choose whether to auto-approve movies, TV, or both.

## What happens during sync

- Agregarr compares the collection list with your Plex libraries.
- Missing items that pass your filters are turned into Overseerr requests.
- Requests follow your auto-approval settings: approved items go straight to Radarr/Sonarr through Overseerr, others wait for manual approval.
- Once Radarr/Sonarr finishes downloading and Plex sees the new media, on the next sync the item will be added to the collection.

## Request Attribution

Set the identification strategy in **Settings → Downloads → Source Identification**:

| Strategy | Overseerr user | 
| --- | --- | --- |
| Single | `Agregarr` |
| Per Source | `IMDbAgregarr`, `TraktAgregarr`, … |
| Per Collection | `IMDbTop250Agregarr`, … |

Agregarr creates or reuses these user accounts when it submits requests, and can reuse the same account for mixed manual and auto approve requests.
