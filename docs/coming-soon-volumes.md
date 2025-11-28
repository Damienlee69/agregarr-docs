---
sidebar_position: 6
title: Placeholder Docker Volumes
---

# Placeholders - Docker Volume Requirements

The **Placeholder creation** option creates placeholder files in your media directories so they appear in Plex before content is actually released for the **Coming Soon** collections, or for any content unavailable on your server from any list. This requires Agregarr to have filesystem access to the same media folders that Plex can scan.

Without proper volume mounting, Agregarr cannot write to your media folders and the Placeholder creation feature will not work.

You first need to mount your volumes in your docker-compose.yml file, replacing the paths to your actual paths (see below).

```yaml title="docker-compose.yaml"
services:
  agregarr:
    image: agregarr/agregarr:latest
    container_name: agregarr
    volumes:
      # Config path
      - /path/to/config:/app/config # Change /path/to/config to your actual config path

      // highlight-start
      # Placeholder paths
      # Linux/Mac: 
      - /path/to/movies:/data/movies # Change /path/to/movies to your actual movies folder path
      - /path/to/tv:/data/tv # Change /path/to/tv to your actual tv folder path

      # Windows:
      - E:\media\movies:/data/movies # Change E:\media\movies to your actual movies folder path
      - E:\media\tv:/data/tv # Change E:\media\tv to your actual tv folder path
      // highlight-end
    ports:
      - 7171:7171
    restart: unless-stopped
```

Then, under `Settings > Downloads > Placeholder Root Folders`, select the container path you created above, `/data/movies` for Movies, and `/data/tv` for TV Shows. That's it! Placeholders can now be created in Plex to show unreleased/unavailable content.

## Understanding Docker Volumes

Docker fundamentally runs each app in 'containers', this is an isolated environment and for it to see anything outside of its container, you must give it specific access. 

We do this by mounting 'volumes'. A volume in your `docker-compose.yml` file looks like

`- /mnt/media/movies:data/movies`  
  or for Windows  
`- E:\media\movies:data/movies`  

Where it is made up of two parts divided by the `:`

The first part `E:\media\movies` is your actual path in your local machine, this is what you would normally browse to in your computers file explorer. 

The second part `data/movies` is the containers path, which is what the container can see. When we mount a volume, all we are doing is telling the container that `/data/movies` is actually `E:\media\movies`. You can name the second part anything you want, for example

`- E:\media\movies:/banana`  
`- E:\media\tv:/orange/house`

is perfectly valid. You would then in Agregarr under Settings -> Downloads -> Placeholders Root Folder select `/banana` as your movies folder, and `/orange/house` as your tv folder.
