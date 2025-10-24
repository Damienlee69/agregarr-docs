---
sidebar_position: 1
title: Downloads & Integration
---

# Downloads & Integration

Agregarr can automatically download missing items from collections via Radarr, Sonarr, or Overseerr.

## Setup

### Radarr/Sonarr

1. Go to Settings → Downloads
2. Click Add Radarr (or Add Sonarr)
3. Enter URL (e.g., `http://192.168.0.236:7878`)
4. Enter API key (from Radarr/Sonarr Settings → General)
5. Test and save

You can add multiple Radarr/Sonarr instances.

### Overseerr

Already configured if you set it up in Sources.

## Tagging Strategy

Choose how downloads are indentified

|Setting|Overseerr user|Radarr/Sonarr tag|
|-------|------|------|
|Single|Aggregarr|agregarr|
|Per-Source|IMDbAgregarr|imdb-agregarr|
|Per-Collection|IMDbTop250Agregarr|imdb-top-250-agregarr|

**Recommended**: Per-Source - tracks which source is requesting without being too granular.

## Collection Download Settings

When creating a collection:

### Enable Downloads

Toggle "Grab Missing Items" on/off

### Filters

**Position Limit**: Only download top 5-10 items (prevents downloading entire lists)

**Release Year**: Only downloads items with release dates newer than this year

**Season Count** (TV): Excludes TV shows with more than this many seasons

**Genre**: Exclude items that match any selected genre

**Country**: Excludes items that match any selected origin country

### Download Method

**Radarr/Sonarr**:
- Choose server (if multiple)
- Select quality profile
- Select root folder

**Overseerr**:
- Auto-approve: Yes/No
- Uses Overseerr request workflow