---
sidebar_position: 1
title: Installation
---

# Installation

Agregarr runs in Docker. You'll need Docker installed and a running Plex Media Server. Plex Pass is required to promote Collections to the Home screen.

## Docker Compose (Recommended)

Create a `docker-compose.yml` file:

```yaml
services:
  agregarr:
    image: agregarr/agregarr:latest
    container_name: agregarr
    volumes:
      - /path/to/config:/app/config    #### Change to your config directory
    ports:
      - 7171:7171
    restart: unless-stopped
```

:::note Important
Change `/path/to/config` to your actual config directory, otherwise your settings won't persist after restarts!

Examples:
- Linux/macOS: `- /home/username/serverdata/configs/agregarr:/app/config`
- Windows: `- C:\serverdata\configs\agregarr:/app/config`
:::

Save the file as `docker-compose.yml`, using our above examples:
- Linux/macOS: `- /home/username/serverdata/docker-compose.yml`
- Windows: `- C:\serverdata\docker-compose.yml`

Navigate to the directory where you have stored you `docker-compose.yml` file:

#### Linux
```bash
cd
cd serverdata
docker-compose up -d
```

#### Windows
See the below example to navigate to the directory, open command prompt, and run `docker-compose.yml`


<video controls width="100%">
  <source src="/video/windows-setup.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>


Access Agregarr at `http://localhost:7171`

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

Your settings/database persist in the config volume. If after restart Agregarr is reset, it is because your volume is not mounted correctly.
