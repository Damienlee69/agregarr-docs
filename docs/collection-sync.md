---
sidebar_position: 9
title: Collection Sync
---

# Collection Sync

Agregarr keeps Plex in sync with your configuration with a scheduled full sync that refreshes all collection. An individual sync is also available for when you add or update a collction and only want to sync that single collection

## Full Sync

Full sync runs on the schedule you configure under **Settings → Jobs** (default: every 12 hours). You can trigger it manually from the Jobs tab or from the dashboard.

A full sync:

1. Refreshes settings and library information from Plex.
2. Processes every Agregarr collection, default hub, and pre-existing collection.
3. Applies visibility changes, ordering, time restrictions, and poster updates.
4. Pulls items from each configured source and applies filters.
5. Sends missing items to Radarr/Sonarr or Overseerr if automation is enabled.
6. Cleans up collections that should be hidden or removed when time restrictions expire.

## Individual Sync

Sometimes you only need to refresh one collection without touching the rest of your library. Open the All Collections view and click the sync icon next to the collection. Agregarr refreshes:

- The source data for that collection.
- Visibility and ordering.
- Posters and templates (if updated).
- Download automation for just that collection.

