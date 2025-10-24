---
sidebar_position: 1
title: Installation
---

# Installation

Agregarr runs in Docker. You'll need Docker installed and a running Plex Media Server.

## Docker Compose (Recommended)

Create a `docker-compose.yml` file:

```yaml
services:
  agregarr:
    image: agregarr/agregarr:latest
    container_name: agregarr
    volumes:
      - /path/to/config:/app/config
    ports:
      - 7171:7171
    restart: unless-stopped
```

:::note Important
Change `/path/to/config` to your actual config directory, otherwise your settings won't persist after restarts!

Examples:
- Linux/macOS: `/home/username/agregarr/config`
- Windows: `C:\agregarr\config`
:::

Start Agregarr:

```bash
docker-compose up -d
```

Access it at `http://localhost:7171`

## Docker Run

If you prefer docker run instead of compose:

```bash
docker run -d \
  --name agregarr \
  -p 7171:7171 \
  -v /path/to/config:/app/config \
  --restart unless-stopped \
  agregarr/agregarr:latest
```

## Updating

### Docker Compose

```bash
docker-compose down
docker-compose pull
docker-compose up -d
```

### Docker Run

```bash
docker stop agregarr
docker rm agregarr
docker pull agregarr/agregarr:latest
# Run the docker run command again
```

Your settings/database persist in the config volume, so updates are safe.
