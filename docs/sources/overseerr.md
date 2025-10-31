---
title: Overseerr Requests
---

# Overseerr Requests

Overseerr collections show request content from Overseerr.

## Prerequisites

1. Open **Settings → Sources → Overseerr** in Agregarr.
2. Enter your Overseerr hostname/IP, port, SSL preference, optional URL base, and API key (found in Overseerr → Settings → General → API Key).
3. Test the connection, then save.

## Sub-types

| Option | Description | Visibility behaviour |
| --- | --- | --- |
| Individual Users | Creates one collection per Overseerr user (excluding the server owner). | Agregarr restricts visibility to the Library tab only |
| Server Owner | Shows requests made by the server owner. | Only the owner’s Plex home option is available|
| Global | Aggregates all Overseerr requests into a single collection. | Full visibility control is available. |

## How it Works

- Collections list the most recent available requests
- Labels and restrictions are used so that only the target user sees their own collection (server owner sees all collections)