---
sidebar_position: 1
title: Collection Sources
---

# Collection Sources

Agregarr supports 14 different collection sources. Some work immediately, others need API keys.

## No Setup Required

### IMDb

- **Top 250 Movies** - IMDb's highest rated movies
- **Popular (Movies/TV Meter)** - Most viewed content
- **Box Office** - Top grossing movies
- **Custom List** - Any public IMDb list (paste the URL)

### TMDb (The Movie Database)

- **Trending Today** - Movies/TV trending in the last 24 hours
- **Trending This Week** - Movies/TV trending this week
- **Popular** - Most popular movies/TV shows
- **Top Rated** - Highest rated content
- **Custom List** - Any TMDb collection or list URL

### Letterboxd

Paste any public Letterboxd list URL to create a collection.

### FlixPatrol (Network Top 10)

Access top 10 charts from streaming platforms by country. No setup needed.

**Supported platforms:**
- Netflix
- HBO
- Disney+
- Amazon Prime Video
- Apple TV+
- Paramount+
- Peacock
- Crunchyroll
- Discovery+
- Hulu

Plus any other local to your region!

Due to some local sources using combined Movie/TV Top 10 lists I recommend you use the Global options for the popular services and local only for services unqiue to your country.

### AniList

**Available collections:**
- **Trending Anime** - Currently trending
- **Popular Anime** - Most popular
- **Top Rated Anime** - Highest rated
- **Custom List** - Any public AniList list URL

## API Key Required

### Trakt

Trakt requires API key setup but gives you access to powerful trending and popularity data.

**Setup:**
1. Go to [trakt.tv/oauth/applications](https://trakt.tv/oauth/applications)
2. Create a new application
3. Use `urn:ietf:wg:oauth:2.0:oob` as your redirect URI
4. Copy your Client ID
5. In Agregarr: Settings → Sources → Trakt
6. Enter Client ID and test

**Available collections:**
- **Trending** - Currently trending (daily/weekly/monthly/all-time)
- **Popular** - Rated and voted content
- **Most Played** - By watch count (with time periods)
- **Most Watched** - By unique users (with time periods)
- **Most Collected** - By unique users (with time periods)
- **Most Favorited** - User favorites (with time periods)
- **Box Office** - Top 10 movies from last weekend
- **Custom List** - Any public Trakt list URL

Supports both movies and TV shows with flexible time period filtering.

### MDBList

Required for Network Originals and custom MDBList collections.

**Setup:**
1. Sign up at [mdblist.com/api](https://mdblist.com/api/)
2. Copy your API key
3. In Agregarr: Settings → Sources → MDBList
4. Enter API key and test

**Available collections:**
- **Custom List** - Import any MDBList list by URL

### MDBList Network Originals

Uses MDBList to access curated Network Originals collections. Requires MDBList API key.

**Available platforms:**
- Netflix Originals
- Amazon Originals
- Disney+ Originals
- HBO Max Originals
- Paramount+ Originals
- Hulu Originals
- Peacock Originals
- Apple TV Originals
- Discovery+ Originals

### MyAnimeList

Access top anime rankings and statistics.

**Setup:**
1. Create an application at [myanimelist.net/apiconfig](https://myanimelist.net/apiconfig)
2. Set the critical fields
   - App Type - Web
   - App Redirect URL - http://localhost/
   - Homepage URL - https://github.com/agregarr/agregarr
   - Non-Commerical
   - Hobbyist
3. Copy the Client ID
4. In Agregarr: Settings → Sources → MyAnimeList
5. Enter Client ID and test

**Available collections:**
- **Top Anime Series** - Highest rated overall
- **Top Airing Anime** - Currently airing, highest rated
- **Top Anime TV Series**
- **Top Anime Movies**
- **Top OVA Series**
- **Top Anime Specials**
- **Most Popular Anime** - By member count
- **Most Favorited Anime** - By users

## Local Sources

These sources integrate with your existing *arr setup and Plex server.

### Tautulli

Create collections based on what's actually being watched on your server.

**Setup:**
1. In Agregarr: Settings → Sources → Tautulli
2. Enter your Tautulli URL (e.g., `http://192.168.0.236:8181`)
3. Get API key from Tautulli Settings → Web Interface
4. Enter API key and test

**Available collections:**
- **Most Popular (Play Count)** - By number of plays
- **Most Popular (Watch Duration)** - By total watch time

Both support:
- Custom time period
- Minimum play count filter

Create collections such as "Most Popular this Year on [Your Server Name]"

### Overseerr

Create collections from Overseerr requests.

**Setup:**
1. In Agregarr: Settings → Sources → Overseerr
2. Enter Overseerr URL (e.g., `http://192.168.0.236:5055`)
3. Get API key from Overseerr Settings
4. Enter API key and test

**Available collections:**
- **Individual User Requests** - Per-user collections (excludes server owner)
- **Server Owner Requests** - Only requests from server owner
- **All Requests** - Combined requests from everyone

Individual user requests and server owner requests create user-specific collections that are only visible to that user.

### Radarr Tags

Create movie collections based on Radarr tags.

**Setup:**
- Requires Radarr instance configured in Settings → Downloads
- Select your Radarr instance
- Select a tag from your Radarr tags

Creates a Plex collection from all movies with that specific tag in Radarr.

### Sonarr Tags

Create TV show collections based on Sonarr tags.

**Setup:**
- Requires Sonarr instance configured in Settings → Downloads
- Select your Sonarr instance
- Select a tag from your Sonarr tags

Creates a Plex collection from all TV shows with that specific tag in Sonarr.

## Multi-Source Collections

Combine multiple sources into a single collection.

**Configuration:**
1. Select "Multi-Source" when creating a collection
2. Add any combination of sources
3. Choose combination mode:
   - **Interleaved** - Combine all items from all sources, takes the first item from each list, then the second etc etc
   - **List order** - Combine all items from all sources, take the entire first list, then the entire second etc etc
   - **Randomised** - Combine all items from all sources, randomises the order of items
   - **Cycle Lists** - Uses one list at a time, cycling on every sync

## Using Custom Lists

For sources that support custom lists (Trakt, IMDb, Letterboxd, TMDb, MDBList, AniList):

1. Find the list on the source website
2. Copy the list URL
3. When creating a collection in Agregarr, select "Custom List"
4. Paste the URL

**Important:** The list must be public, not private.

## Random Lists

Several sources support "Random Lists" mode:
- Trakt
- TMDb
- IMDb
- Letterboxd

You can either let Agregarr select a random list (will only create a collection if >4 matching items), or you can create your own random list of lists in config/random-lists, and Agregarr will randomly select items from across all configured lists.