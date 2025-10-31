---
sidebar_position: 4
title: Source Specific Options
---

# Source Specific Options

The **Collection Type** and **Collection Sub-Type** dropdowns decide which external list Agregarr uses for the collection. Each selection unlocks different inputs, and certain sources require API keys (set in **Settings -> Sources**).

## Source Summaries

### Overseerr Requests

- **Individual Users** – builds a collection per Overseerr user (except the server owner) and restricts visibility to the library tab only (because Plex ignores label restrictions on the home screen).
- **Server Owner** – builds a collection based on the server owner’s requests and has the option to show the collection on the owner’s home screen.
- **Global** – aggregates all Overseerr requests into a single collection.

### Tautulli Statistics

- Choose between **Most Popular (by Play Count)** or **Most Popular (by Watch Duration)**.
- Supply a **Number of Days** window and a **Minimum Play Count** so you can ensure the collection has a decent number of items.

### Trakt Lists

| Sub-type | Description | Extra Input |
| --- | --- | --- |
| Trending | What users are watching right now | — |
| Popular | Highest-rated items on Trakt | — |
| Played | Most plays over a period | Time period selector |
| Watched | Unique watchers over a period | Time period selector |
| Collected | Most collected items | Time period selector |
| Favorited | Most favourited items | Time period selector |
| Custom List | Import any public Trakt list | URL validation |
| Random Lists | Find a new random list each sync | Set custom random lists in `config/random-lists`  |

### TMDB Lists

| Sub-type | Description | Extra Input |
| --- | --- | --- |
| Trending Today | Daily trending feed | — |
| Trending This Week | Weekly trending feed | — |
| Popular | Popular items by TMDB votes | — |
| Top Rated | Highest-rated TMDB entries | — |
| Custom Collection/List | Import a TMDB collection or list | URL validation |
| Random Lists | Find a new random list each sync | Set custom random lists in `config/random-lists`  |

### IMDb Lists

| Sub-type | Description | Extra Input |
| --- | --- | --- |
| Top 250 | IMDb Top 250 movies or shows | — |
| Popular (Meter) | Daily popularity rankings | — |
| Custom List | Import any public IMDb list | URL validation |
| Random Lists | Find a new random list each sync | Set custom random lists in `config/random-lists`  |

### Letterboxd Lists

| Sub-type | Description | Extra Input |
| --- | --- | --- |
| Custom List | Follow a Letterboxd user or list | URL validation |
| Random Lists | Find a new random list each sync | Set custom random lists in `config/random-lists`  |

### MDBList

| Sub-type | Description | 
| --- | --- |
| Custom List | Use an MDBList list |

### AniList

| Sub-type | Description |
| --- | --- | 
| Trending | Current trending anime |
| Popular | Most popular anime overall |
| Top Rated | Highest-rated anime |
| Custom List | Import an AniList user list |

### MyAnimeList

| Sub-type | Description |
| --- | --- |
| Top Anime Series | Overall top-rated anime |
| Top Airing | Currently airing rankings |
| Top TV | TV-only rankings |
| Top Movies | Movie rankings |
| Top OVA | Original video animation rankings |
| Top Specials | Special releases |
| Most Popular | Ordered by member count |
| Most Favorited | Ordered by user favourites |

### Networks Top 10

- Pick a **Country/Region** to filter the available streaming charts.
- Choose a **Platform** from the dynamic list that loads for the selected country.

### Network Originals (uses MDBList - API key required)

- Select the provider whose originals you want to use. These are true originals, not just items that appear on the streaming service.

### Radarr / Sonarr Tags

- Pick the Radarr or Sonarr instance, then choose the tag to use.
- The tag dropdown only populates after an instance is selected.

### Coming Soon

- **Monitored in Radarr/Sonarr** keeps an eye on monitored titles that have not been released yet so you can show upcoming media you already plan to download.
- **Trakt Anticipated** mirrors Trakt’s anticipated feed for movies or shows, shows a banner overlay and uploads a trailer if available or a placeholder if not.

### Multi-Source Collections

- Enable **Multiple Sources** to aggregate sources
- The mixed-content warning restricts combine mode choices when you mix incompatible media types, for example TV Shows and Individual Episodes cannot be in the same collection.

**Combine Modes**

| Mode | Behaviour |
| --- | --- |
| List Order | All items from source 1, then all from source 2, etc. |
| Interleaved |Take 1st item from each source, then 2nd from each, etc. |
| Randomised | Shuffle all items randomly on every sync |
| Cycle Lists | Only one source active at a time, rotates each sync |

### Custom URL Validation

Custom sub-types across Trakt, TMDB, IMDb, Letterboxd, MDBList, and AniList require a URL before the rest of the form unlocks. Use the **Validate** button to pull the title from the source and confirm that the link is reachable.
