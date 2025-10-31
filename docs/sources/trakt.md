---
title: Trakt Lists
---

# Trakt Lists

Agregarr links to Trakt via a Client ID, then lets you build collections from official charts or any public list.

## Prerequisites

1. Visit [trakt.tv/oauth/applications](https://trakt.tv/oauth/applications) and create an application.
2. Use `urn:ietf:wg:oauth:2.0:oob` as the redirect URI.
3. Copy the **Client ID**.
4. In Agregarr open **Settings → Sources → Trakt**, paste the Client ID, test, and save.

## Sub-types

| Option | Description | Extras |
| --- | --- | --- |
| Trending | What Trakt users are watching right now | No extra inputs. |
| Popular | Top-rated titles based on votes | No extra inputs. |
| Most Played | Highest play counts | Requires a **Time Period** (daily/weekly/monthly/all). |
| Most Watched | Highest unique watcher counts | Requires a **Time Period**. |
| Most Collected | Most frequently added to collections | Requires a **Time Period**. |
| Most Favorited | Most favourited titles | Requires a **Time Period**. |
| Custom List | Any public Trakt list | Paste URL and validate. |
| Random Lists | Rotates through Trakt lists | Uses `/config/random-lists/trakt.txt` if enabled. |

Time-based sub-types unlock the **Time Period** dropdown. Choose from daily, weekly, monthly, or all-time.

## Custom Lists

Paste a list URL such as:

- `https://trakt.tv/users/username/lists/listname`
- `https://trakt.tv/lists/official/listname`

Hit **Validate** to pull the list title, and detect media types.

## Random Lists

When you select **Random Lists**, Agregarr chooses a different random list on each sync with a minimum of 4 items, if you would like to use a custom list of lists to use when random is selected:

- Check `/config/random-lists/trakt.txt`. Set `enabled=true` and add one Trakt URL per line to control the rotation.

