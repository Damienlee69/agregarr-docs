---
sidebar_position: 12
title: Missing Items & Auto Requests
---

# Missing Items & Auto Requests

This section lets Agregarr request or download items that appear in the source list but are missing from Plex. It ties into Overseerr, Radarr, and Sonarr so your desired content arrives automatically.

## Enabling Automation

- Toggle **Grab Missing Items** to show the rest of the controls.
- Enable **Grab Missing Movies** and/or **Grab Missing TV Shows** depending on the media types your libraries support.

## Content Filters

- **Position Limit** – skip entries beyond a certain list position (keeping focus on the top X items).
- **Minimum Release Year** – ignore titles released before the specified year.
- **Max Seasons** and **Seasons per Show** – prevent huge or long-running series from being requested.
- **Genre** and **Country Exclusions** – block genres or origin countries you do not want to add.

## Download Methods

### Overseerr Mode

- Creates Overseerr requests for the missing items.
- Optional auto-approve checkboxes let you bypass manual review for movies, TV, or both.
- Useful when you want Overseerr approval flow or notifications.

### Direct Mode (Radarr/Sonarr)

- Sends the grab straight to Radarr for movies and Sonarr for TV.
- Choose the server, quality profile, and root folder for each media type.

