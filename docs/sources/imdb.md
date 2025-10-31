---
title: IMDb Lists
---

# IMDb Lists

The IMDb source uses IMDb’s public charts without needing an API key.

## Sub-types

| Option | Description | Notes |
| --- | --- | --- |
| Top 250 | IMDb Top 250 chart | Works for both movies and TV; Agregarr picks the correct feed based on your libraries. |
| Popular (Meter) | Daily popularity ranking | Mirrors IMDb’s MOVIEmeter or TVmeter. |
| Custom List | Any public IMDb list | Paste a URL such as `https://www.imdb.com/list/ls123456789/` and validate it. |
| Random Lists | Rotates through curated IMDb lists | Configure `/config/random-lists/imdb.txt` or let Agregarr auto-discover. |

## Random Lists

Enable the **Random Lists** sub-type to highlight a different list on each sync:

- Edit `/config/random-lists/imdb.txt`, set `enabled=true`, and add one IMDb list URL per line to control the rotation.
- If the file remains disabled, Agregarr falls back to its discovery cache of popular, high-quality lists and refreshes the catalogue roughly once a month.

