---
title: TMDB Lists
---

# TMDB Lists

TMDB provides global trending and popularity charts that work without any API configuration. Choose the **TMDB Lists** collection type to mirror official feeds or curate your own list by URL.

## Sub-types

| Option | Description | Notes |
| --- | --- | --- |
| Trending Today | Daily trending feed across movies and TV | Updates every 24 hours. |
| Trending This Week | Seven-day trending feed | Good for lighter rotation. |
| Popular | TMDB popularity ranking | Works for movies or TV depending on the target library. |
| Top Rated | Highest-rated titles | Pulls vote-averaged rankings. |
| Custom Collection/List | Mirrors a TMDB collection or list URL | Accepts both `/collection/<id>` and `/list/<id>` URLs. |
| Random Lists | Rotates through curated TMDB collections | Uses `/config/random-lists/tmdb.txt` if you enable it. |

When you select **Custom Collection/List**, paste the public TMDB URL and press **Validate**. Agregarr fetches the title and infers media type so templates and library detection work automatically.

## Random Lists

Choose the **Random Lists** sub-type to surface different TMDB collections on each sync. Agregarr will:

1. Check `/config/random-lists/tmdb.txt`. Set `enabled=true` and add one collection URL per line to use your own list rotation.
2. Fall back to the built-in discovery engine, which refreshes cached collections roughly every 30 days.

