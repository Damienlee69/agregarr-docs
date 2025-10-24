---
sidebar_position: 3
title: Creating Your First Collection
---

# Creating Your First Collection

Let's create a TMDB Trending collection as an example.

## Basic Setup

1. Click **+ Add Collection**
2. **Collection Type**: Select TMDB Lists
3. **Sub-Type**: Select Trending Today
4. **Libraries**: Select your Movies and/or TV libraries

## Collection Settings

### Title

Choose a preset name like "Trending Today" or enter your own.

:::tip
If you name collections the same in both Movies and TV libraries, Plex will link them together when viewing.
:::

### Visibility

Choose where the collection appears:
- **Home** - Main Plex Home screen
- **Recommended** - Recommended tab (if users haven't pinned your Library to their Home screen, this is the main section they will see when they view your Library)

Collections will always be visible in the Library and Collections Tabs.

### Max Items

How many items to show. Agregarr will fill the collection to this number even if you don't have all items yet. If new items get added, filled items will be removed on the next sync.

### Unwatched Only

Enable this to create a smart collection that only shows unwatched content. It creates two collections:
- Base collection (hidden, all items)
- Smart collection (visible, unwatched only)

Each user viewing the collection sees their own unwatched items.

### Posters

- **Auto-Poster**: Generate from a poster template (create templates in Posters oage or use Agregarr default)
- **Upload Custom**: Upload your own poster

### Time Restrictions

Schedule when the collection is visible:

- **Date ranges**: Oct 1 - Oct 31 for Halloween collections
- **Days of week**: Weekends only, specific days

When inactive, choose to either remove the collection entirely or just change its visibility.

### Custom Sync Schedule

This overrides the main sync schedule (default 12 hours), if you want the collection to be synced more or less frequently.

To configure the sync schedule from the defualt 12 hours, got to Settings → Jobs.

## Download Settings

### Enable Auto-Download

If you want Agregarr to automatically grab missing items from this collection.

### Filters

Control what gets downloaded:

**Position Limit**: Only download top 10 items (prevents downloading entire lists)

**Release Year**: Only download items newer than this year

**Season Count** (TV only): Max number of seasons (e.g. set to 10 to avoid talk shows, or use genre filters below)

**Genre**: Exclude specific genres

**Country**: Filter by origin country

### Download Method

**Radarr/Sonarr**:
- Select which server (if you have multiple)
- Choose quality profile
- Choose root folder

**Overseerr**:
- Enable/disable auto-approve
- Manual approval lets you review before downloading

## Preview and Save

Before saving, click **Preview** to see:
- All items in the collection
- Which you already have
- Manually download individual items if you don't want to use auto-download

Click **Save**, on the next scheduled sync the collection will be created in Plex, or you can press the red sync button next to the collection to sync just this collection to Plex now.

