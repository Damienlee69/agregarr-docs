---
title: Multi-source Collections
---

# Multi-source Collections

Multi-source collections let you blend multiple feeds into a single Plex collection.

## Getting Started

1. Select **Multiple Sources** as the collection type.
2. Click **Add Source** to insert at least two sources (the save button remains disabled until you do).

## Combine Modes

| Mode | Behaviour |
| --- | --- |
| List Order | All items from source 1, then all from source 2, etc. |
| Interleaved |Take 1st item from each source, then 2nd from each, etc. |
| Randomised | Shuffle all items randomly on every sync |
| Cycle Lists | Only one source active at a time, rotates each sync |

### Coming Soon Special Case

If every source is **Coming Soon**, the available combine modes change to **Release Date**, **Cycle Lists**, and **Randomised** so upcoming titles always stay ordered by launch date.

## Mixed Content Detection

Agregarr analyses validated custom URLs to detect when episodes and movies/shows are mixed. When a clash is found it automatically switches to **Cycle Lists** (the only safe mode).
