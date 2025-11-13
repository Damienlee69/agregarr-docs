---
sidebar_position: 6
title: Coming Soon Docker Volumes
---

# Coming Soon - Docker Volume Requirements

The **Coming Soon** feature creates placeholder files in your media directories so they appear in Plex before content is actually released. This requires Agregarr to have filesystem access to the same media folders that Radarr and Sonarr use.

## Why Volume Mounting is Required

When you create a Coming Soon collection, Agregarr needs to:
1. Create placeholder video files in your Radarr/Sonarr media directories
2. Trigger a Plex library scan to discover the placeholders
3. Apply overlay posters to mark them as "Coming Soon"

Without proper volume mounting, Agregarr cannot write to your media folders and the Coming Soon feature will not work.

## Understanding Path Matching

The key requirement is: **Agregarr must be able to access the same paths that Radarr and Sonarr report**.

For example:
- If Radarr reports its root folder as `C:\data\movies`
- Then Agregarr must also be able to access files at `mnt/c/data/movies`

- If Radarr reports its root folder as `/data/movies`
- Then Agregarr must also be able to access files at `/data/movies`

## Docker Compose Examples

### Linux / macOS Setup

```yaml
services:
  radarr:
    image: lscr.io/linuxserver/radarr:latest
    container_name: radarr
    volumes:
      - /mnt/media/movies:/data/movies  # Host path : Container path
    # ... other config

  sonarr:
    image: lscr.io/linuxserver/sonarr:latest
    container_name: sonarr
    volumes:
      - /mnt/media/tv:/data/tv  # Host path : Container path
    # ... other config

  agregarr:
    image: agregarr/agregarr:latest
    container_name: agregarr
    volumes:
      - /path/to/agregarr/config:/app/config
      - /mnt/media/movies:/data/movies  # Same container path as Radarr
      - /mnt/media/tv:/data/tv          # Same container path as Sonarr
    # ... other config
```

**Key Points:**
- The **container path** (right side) must match across all containers
- The **host path** (left side) should be the same folder your media is stored in
- Use the same paths that your Radarr/Sonarr containers use

### Windows Setup

Windows has unique considerations because of how Docker Desktop uses WSL2 (Windows Subsystem for Linux). The setup depends on whether you're running Radarr/Sonarr natively on Windows or in Docker.

#### Scenario A: Native Windows Radarr/Sonarr (Most Common)

If you're running Radarr and Sonarr as **native Windows applications** (not in Docker), they will report Windows paths like `E:\media\movies`. Agregarr running in Docker needs to access these same folders via WSL2 mount paths.

```yaml
services:
  agregarr:
    image: agregarr/agregarr:latest
    container_name: agregarr
    volumes:
      - C:\configs\agregarr:/app/config
      - E:\media\movies:/mnt/e/media/movies  # Windows path : WSL2 mount path
      - E:\media\tv:/mnt/e/media/tv          # Windows path : WSL2 mount path
    # ... other config
```

**How it works:**
1. Native Radarr reports: `E:\media\movies`
2. Agregarr's path translation auto-converts `E:\` to `/mnt/e/`
3. Docker volume maps `E:\media\movies` to `/mnt/e/media/movies` inside the container
4. Agregarr can now access the files at the translated path

**Key Points:**
- Use Windows drive letters on the **left** side: `E:\media\movies`
- Use WSL2 mount paths on the **right** side: `/mnt/e/media/movies`
- The drive letter becomes `/mnt/{lowercase-letter}/`: `C:\` → `/mnt/c/`, `E:\` → `/mnt/e/`
- Agregarr's built-in path translation handles the conversion automatically

#### Scenario B: All Docker Containers on Windows

If you're running Radarr, Sonarr, AND Agregarr all in Docker on Windows, you need consistent WSL2 paths across all containers.

```yaml
services:
  radarr:
    image: lscr.io/linuxserver/radarr:latest
    container_name: radarr
    volumes:
      - E:\media\movies:/mnt/e/media/movies  # Windows path : WSL2 mount path
    # ... other config

  sonarr:
    image: lscr.io/linuxserver/sonarr:latest
    container_name: sonarr
    volumes:
      - E:\media\tv:/mnt/e/media/tv  # Windows path : WSL2 mount path
    # ... other config

  agregarr:
    image: agregarr/agregarr:latest
    container_name: agregarr
    volumes:
      - C:\configs\agregarr:/app/config
      - E:\media\movies:/mnt/e/media/movies  # Same container path as Radarr
      - E:\media\tv:/mnt/e/media/tv          # Same container path as Sonarr
    # ... other config
```

**Key Points:**
- All containers see the same path: `/mnt/e/media/movies`
- No path translation needed since paths already match
- WSL2 mount format is consistent across all containers
