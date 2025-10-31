---
sidebar_position: 7
title: Pre-existing Collections & Default Hubs
---

# Pre-existing Collections & Default Hubs

Agregarr can manage collections and hubs that already exist in your Plex library, giving you control over their visibility and ordering alongside your Agregarr-created collections.

## Pre-existing Collections

These are collections that already exist in your Plex library - created manually in Plex, imported from elsewhere, or created by other tools.

### Discovering Pre-existing Collections

Agregarr automatically discovers collections in your Plex libraries:

1. Collections are scanned from your Plex server
2. Any collection not created by Agregarr is marked as "pre-existing"
3. These appear in their respective screens with a "Pre-existing" badge

### Managing Pre-existing Collections

You can control how pre-existing collections appear in your Plex libraries:

**Visibility Settings:**
- **Users Home** - Show/hide on the main Plex home screen for regular users
- **Server Owner Home** - Show/hide on the home screen for the Plex server owner
- **Recommended** - Show/hide in the Library Recommended tab
- **Library Tab** - Promote to the Promoted Section or keep in A-Z section

:::note
Pre-existing collections always exist in Plex - Agregarr only controls their visibility and ordering. To remove a pre-existing collection from Agregarr, delete it from Plex, click the Discover button, and then click Clean Up Missing Collections
:::

**Reordering:**
- Drag and drop alongside Agregarr collections
- Independent ordering for each context (Home/Recommended, Library)
- Reordering works the same as regular collections
- Pre-existing collections are intially imported in the A-Z section of the Library tab and will not have its sort title altered in Plex unless promoted using the up arrow button.

**Custom Posters:**
- Upload custom posters to replace the existing poster
- Apply poster templates
- Changes are stored in Agregarr and synced to Plex

### What You Cannot Do

Pre-existing collections are **read-only** in terms of content:
- Cannot add or remove items from the collection
- Cannot change the collection name
- Cannot delete the collection through Agregarr

To modify the collection itself, use Plex directly. Changes will be reflected in Agregarr on the next sync.

### Use Cases

**Smart Collections:**
- Use the powerful Smart Collections feature to creatre collections based off existing content on your server from a wide variety of options including genre, actor, producer, country, release date, resolution etc etc.

**Legacy Collections:**
- Collections created before using Agregarr
- Collections from other collections management apps

## Default Plex Hubs

Default hubs are the built-in collections that Plex automatically creates, such as Recently Added, Top Unwatched, Library Playlists, etc

### Managing Default Hubs

You have the same visibility and ordering controls:

**Visibility Settings:**
- **Users Home** - Show/hide on user home screens
- **Server Owner Home** - Show/hide on server owner home screen
- **Recommended** - Show/hide in the Recommended tab

**Reordering:**
- Drag and drop to position hubs
- Mix with Agregarr collections and pre-existing collections
- Independent ordering per context

**Time Restrictions:**
- Apply time-based restrictions to when hubs appear
- Example: Show "Top Unwatched" only on Mon, Wed, Fri, Sun

### Hub Linking

Some hubs can be **linked** across libraries:

**What is Hub Linking?**
- When the same hub exists in multiple libraries (Movies + TV)
- Linked hubs share settings
- If hubs are detected as having different settings on import, they will be unlinked.

## Combining All Three Types

In practice, your Plex libraries might have a mix:

1. **Agregarr Collections** - Collections created from Agregarr
2. **Pre-existing Collections** - Smart collection created in Plex
3. **Default Plex Hubs** - Built-in Plex collections

All three types can be:
- Ordered together in any arrangement
- Shown/hidden independently
- Managed from a single interface in Agregarr

This gives you complete control over how users experience your Plex library.
