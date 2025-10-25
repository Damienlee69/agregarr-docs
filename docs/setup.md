---
sidebar_position: 2
title: Initial Setup
---

# Initial Setup

After installing Agregarr, you need to connect it to your Plex server and optionally configure collection sources.

## Sign in to Plex

Open Agregarr at `http://localhost:7171`

1. Click **Sign in with Plex**
2. Log in with your Plex account
3. Authorize Agregarr

You need to use the Plex account that owns your server.

## Select Your Plex Server

1. Click the refresh icon next to the server dropdown
2. Select your Plex Media Server
3. Click Continue

If you want to manage multiple Plex servers, you'll need separate Agregarr instances.

## Configure Sources (Optional)

Some sources work immediately, others need API keys. You can skip this and add them later.

### Works Without Setup

- IMDb
- TMDb
- Letterboxd
- FlixPatrol (Network Top 10s)
- AniList

### Requires API Keys

See the [Collection Sources](/docs/sources/overview) page for detailed setup instructions for:

- Trakt
- MDBList
- MyAnimeList
- Tautulli
- Overseerr

Each source has a Test button to verify your configuration works.

## Configure Downloads (Optional)

If you want Agregarr to automatically download missing items from collections, you can set up Radarr/Sonarr or Overseerr.

### Radarr/Sonarr

1. Go to Settings → Downloads
2. Click Add Radarr or Add Sonarr
3. Enter server URL (e.g., `http://192.168.0.236:7878`)
4. Enter API key (from Radarr/Sonarr Settings → General)
5. Test the connection

You can add multiple Radarr/Sonarr servers if needed.

### Source identification options

Both download methods have options to differentiate which source the item is being downloaded from

|Setting|Overseerr user|Radarr/Sonarr tag|
|-------|------|------|
|Single|Aggregarr|agregarr|
|Per-Source|IMDbAgregarr|imdb-agregarr|
|Per-Collection|IMDbTop250Agregarr|imdb-top-250-agregarr|

## Run Discover Existing Collections & Hubs

Once setup is complete:

1. Click Finish
2. Click the **Discover** button at the top
3. Agregarr will scan your Plex library

This finds all existing collections and default Plex hubs (Recently Added, Continue Watching, etc.) so Agregarr can manage them alongside new collections.
