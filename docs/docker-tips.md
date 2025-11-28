---
sidebar_position: 4
title: Docker Tips & Windows Setup
---

## Windows quick start (Docker Desktop)

1. Install WSL 2: `wsl --install` (run in PowerShell as Administrator)
2. Install Docker Desktop from [docker.com](https://www.docker.com/products/docker-desktop/)
3. Create config folders such as `C:\serverdata\configs\agregarr`
5. Place a `docker-compose.yml` in the parent folder `C:\serverdata`, open command prompt, and run `docker compose up -d`.

**Notes**
- Docker Desktop is excellent for Agregarr, Overseerr, and similar non I/O intensive services, however because of the mixed file systems (Linux/Windows), it performs poorly for I/O intensive apps (Plex, Sonarr, Radarr, SABnzbd etc), so run these natively in Windows.
- Update containers with `docker compose pull && docker compose up -d`.

## Running more than one instance of Agregarr (for multiple Plex servers)

- Map each instance to a different port (7171, 7172, ...).
- Give every instance its own config volume.
- Use unique container names.

```yaml
services:
  agregarr1:
    image: agregarr/agregarr:latest
    container_name: agregarr1
    volumes:
      - /path/to/config1:/app/config
    ports:
      - 7171:7171
    restart: unless-stopped
  agregarr2:
    image: agregarr/agregarr:latest
    container_name: agregarr2
    volumes:
      - /path/to/config2:/app/config
    ports:
      - 7172:7171
    restart: unless-stopped
```
You can do this for any docker container!

## Companion apps

- Overseerr – request management.
- Profilarr – share quality profiles across *arr services.
- Maintainerr – monitor and clean the library.
- Cloudflared – expose services through Cloudflare Tunnel.

## Example `docker-compose.yml`

Update paths and environment variables as needed. Replace the Cloudflared values with your own.

```yaml
services:
  agregarr:
    image: agregarr/agregarr:latest
    container_name: agregarr
    ports:
      - 7171:7171
    volumes:
      - C:\serverdata\configs\agregarr:/app/config # change this
    environment:
      - TZ=Pacific/Auckland # change this
    restart: unless-stopped

  overseerr:
    image: sctx/overseerr:develop
    container_name: overseerr
    ports:
      - 5055:5055
    volumes:
      - C:\serverdata\configs\overseerr:/app/config # change this
    environment:
      - TZ=Pacific/Auckland # change this
    restart: unless-stopped

  profilarr:
    image: santiagosayshey/profilarr:latest
    container_name: profilarr
    ports:
      - 6868:6868
    volumes:
      - C:\serverdata\configs\profilarr:/config # change this
    environment:
      - TZ=Pacific/Auckland # change this
    restart: unless-stopped

  maintainerr:
    image: ghcr.io/jorenn92/maintainerr:latest
    container_name: maintainerr
    ports:
      - 6246:6246
    volumes:
      - C:\serverdata\configs\maintainerr:/opt/data # change this
    environment:
      - TZ=Pacific/Auckland # change this
    restart: unless-stopped

  cloudflared:
    image: cloudflare/cloudflared:latest
    container_name: cloudflare-tunnel
    command: tunnel run homeserver-tunnel # change this
    environment:
      - CLOUDFLARE_TUNNEL_TOKEN=434f3vjnk3j4k34njnk3j4qj # change me
    volumes:
      - C:\serverdata\configs\cloudflared:/etc/cloudflared # change this
    restart: unless-stopped
```
