---
sidebar_position: 11
title: Custom Sync Timing
---

# Custom Sync Timing

Custom sync timing overrides the global collection sync cadence for a single collection. It can be helpful for lists that need to update more (or less) frequently than the global sync schedule (default 12 hours, can be changed in **Settings -> Jobs**).

## Enabling Custom Timing

- Tick **Enable custom sync timing** to unlock the schedule options.
- The collection follows the schedule you set here while collectiona without this use the global job interval.

## Preset Schedules

- Presets range from every 10 minutes up to once a year.

## Custom Cron Expressions

- Choose **Custom Cron Expression** to provide a standard cron schedule (e.g. `0 9 * * MON` for every Monday at 9 AM).

## Start Timing

- Leave **Start on next sync** enabled to kick things off immediately at the next eligible window.
- Disable it to specify a `DD-MM` start date and `HH:MM` start time, anchoring to a specific time (useful for annual lists for example that only change once per year)
- If you set the start time in the future, then you can still populate the collection in Plex now by pressing the red sync button on the collections tile.
