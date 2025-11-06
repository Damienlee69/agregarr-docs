---
sidebar_position: 2
title: FAQ
---

# Frequently Asked Questions

## General

**What is Agregarr?**

A Plex Collections Manager that automatically creates and syncs lists from sources like Trakt, IMDb, TMDb, and many more.
It also allows full control of visibility and order on the Plex Home screen, helping you create a more dynamic feel much like streaming services.

For example, you could add Trakt Trending, IMDb Top 250, and Networks Top 10 (Netflix, Apple TV etc) collections, which when selected to appear on the Home screen, would appear in Plex like below.

![Plex Sign-In](/img/home-preview.png)

**Is it free?**

Yes, completely free and open source (GPL-3.0).

**Do I need Plex Pass?**

Yes, you need Plex Pass to fully utilise Agregarr. Without Plex Pass, you can create collections but they will only be visible on the Collections and Library Tab.

**What's the difference between Agregarr and Kometa**

Agregarr is web-gui based while Kometa is yaml based. Agregarr is solely focused on Collections, while Kometa includes collections as one of its main features. Kometas original name "Plex Meta Manager" describes it's function that goes above what Agregarr offers, for metadata management Kometa is the only option.

## Setup

**Can I use it with multiple Plex servers?**

You need separate Agregarr instances for each server.

Add a new instance to your docker-compose, and change the name, container port and config path for the new instance

```yaml
services:
  agregarr1:
    image: agregarr/agregarr:latest
    container_name: agregarrexample1
    volumes:
      - /path/to/config1:/app/config   ### change this
    ports:
      - 7171:7171
    restart: unless-stopped
  agregarr2:
    image: agregarr/agregarr:latest
    container_name: agregarrexample2
    volumes:
      - /path/to/config2:/app/config   ### change this
    ports:
      - 7172:7171
    restart: unless-stopped
```

**Does it work with Jellyfin/Emby?**

No, Plex only.

**How do I update?**

```bash
docker-compose down && docker-compose pull && docker-compose up -d
```

Your config persists in the volume. If agregarr gets refreshed to its intial setup state after you restart, it is because your volume is not set correctly.

## Collections

**How many collections can I create?**

No limit, just be mindful of too many Collection on the Home screen as this can require users to scroll too far before reaching the next Library.

**Can I reorder collections?**

Yes, drag and drop in Agregarr. Home/Recommended share ordering, and Library tab can be ordered independently.

**How often do lists sync?**

Default is 12 hours. Customizable globally or per-collection.

## Downloads

**Can I preview which items are missing before downloading?**

Yes, use the Preview button when creating collections.

**How do I prevent downloading too much?**

Use position limits (top 5-10 only), release year filters, and preview before enabling.

## Getting Help

Still need help?

- [Discord Community](https://discord.gg/RfEPPRQJQ2)
- [GitHub Issues](https://github.com/agregarr/agregarr/issues)