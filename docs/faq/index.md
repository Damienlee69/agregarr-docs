---
sidebar_position: 2
title: FAQ
---

# Frequently Asked Questions

## General

**What is Agregarr?**

A Plex Collections Manager that automatically creates and syncs collections from sources like Trakt, IMDb, TMDb, and more.

**Is it free?**

Yes, completely free and open source (GPL-3.0).

**Do I need Plex Pass?**

Yes, you need Plex Pass to create Collections.

## Setup

**Can I use it with multiple Plex servers?**

You need separate Agregarr instances for each server.

**Does it work with Jellyfin/Emby?**

No, Plex only.

**How do I update?**

```bash
docker-compose down && docker-compose pull && docker-compose up -d
```

Your config persists in the volume.

## Collections

**How many collections can I create?**

No hard limit, just be mindful of too many Collection on the Home screen as this can require users to scroll too far before reaching the next Library.

**Can I reorder collections?**

Yes, drag and drop in Agregarr. Home/Recommended share ordering, and Library tab can be ordered independently.

**How often do lists sync?**

Default is 12 hours. Customizable globally or per-collection.

## Downloads

**Does Agregarr download content directly?**

No, it creates requests in Radarr/Sonarr/Overseerr which handle the actual downloading.

**Can I preview before downloading?**

Yes, use the Preview button when creating collections.

**How do I prevent downloading too much?**

Use position limits (top 5-10 only), release year filters, and preview before enabling.

## Getting Help

Still need help?

- [Discord Community](https://discord.gg/RfEPPRQJQ2)
- [GitHub Issues](https://github.com/agregarr/agregarr/issues)