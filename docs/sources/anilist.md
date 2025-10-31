---
title: AniList
---

# AniList

AniList exposes public endpoints that Agregarr can query without authentication.

## Sub-types

| Option | Description | Notes |
| --- | --- | --- |
| Trending Anime | Current trending list on AniList | Updates frequently and mixes movies with series. |
| Popular Anime | Overall popularity ranking | Long-term popularity across the service. |
| Top Rated Anime | Highest-rated titles | Based on AniList community scores. |
| Custom List | Any public AniList list | Accepts URLs such as `https://anilist.co/user/<user>/animelist/<list>` or `https://anilist.co/animelist/<list>`. |

## Custom Lists

When you paste a custom list URL and hit **Validate**, Agregarr:

1. Fetches the remote list title for template usage.
2. Detects whether the list contains movies, TV, or both, so the Library picker can warn about mismatched media types.

