---
sidebar_position: 2
title: Initial Setup
---

import ImageGallery from '@site/src/components/ImageGallery';

# Initial Setup

After installing Agregarr, you need to connect it to your Plex server and optionally configure collection sources and download methods.

## Sign in to Plex

Open Agregarr at `http://localhost:7171`

1. Click **Sign in with Plex**
2. Log in with your Plex account
3. Authorize Agregarr

You need to use the Plex account that owns your server.

<ImageGallery
    images={[
      { src: '/img/sign-in-1.png', alt: 'Agregarr Plex Sign-In' },
      { src: '/img/sign-in-2.png', alt: 'Plex account authorisation' },
    ]}
    columns={2}
  />


## Select Your Plex Server

1. Click the refresh icon next to the server dropdown
2. Select your Plex Media Server
3. Click Continue

<ImageGallery
    images={[
      { src: '/img/server-setup-1.png', alt: 'Server search' },
      { src: '/img/server-setup-2.png', alt: 'Server selection' },
      { src: '/img/server-setup-3.png', alt: 'Finalised setup' },
    ]}
    columns={3}
  />


If you want to manage multiple Plex servers, you'll need [separate Agregarr instances](/docs/faq/#setup).


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

If you want Agregarr to download missing items from collections according to your set filters, you can set up:

**Radarr/Sonarr** - Directly adds, monitors, and initiates a search for content. You can add multiple Radarr/Sonarr servers if needed.
 
  or

**Overseerr** - Creates either manual or auto approve request 



### Source identification options

Both download methods have options to differentiate which source the item is being downloaded from

|Setting|Overseerr user|Radarr/Sonarr tag|
|-------|------|------|
|Single|Aggregarr|agregarr|
|Per-Source|e.g. IMDbAgregarr|e.g. imdb-agregarr|
|Per-Collection|e.g. IMDbTop250Agregarr|e.g. imdb-top-250-agregarr|

## Run Discover Existing Collections & Hubs

Once setup is complete:

1. Click Finish
2. Click the **Discover** button
3. Agregarr will scan your Plex library

This finds all existing collections and default Plex hubs (Recently Added, Continue Watching, etc.) so Agregarr can manage them alongside new collections.
