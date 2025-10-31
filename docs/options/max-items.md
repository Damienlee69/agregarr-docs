---
sidebar_position: 7
title: Max Items
---

# Max Items

Max Items caps how many titles Agregarr keeps in the collection.

## How It Works

- Agregarr tries to fill the collection to the set number from items from the list.
- Only the absolute number of items will be considered for missing items
- When the source provides fewer items than the limit, the collection simply contains everything available.
- Multi-source collections apply the limit after combining feeds, so all sources contribute to a single capped list.
