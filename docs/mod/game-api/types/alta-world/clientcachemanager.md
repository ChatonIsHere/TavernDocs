---
title: "ClientCacheManager"
description: "Client side CacheManager: reads cache files from the local cache folder and downloads missing ones over HTTP from the joined server's web server (port 1761..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClientCacheManager

A **class** in `Root.Township`, `Alta.Static`.

Client side `CacheManager`: reads cache files from the local cache folder and downloads missing ones over HTTP from the joined server's web server (port 1761 by default).

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`CacheManager`](/mod/game-api/types/alta-world/cachemanager)
- **Nested types** [`FileDownloader`](/mod/game-api/types/alta-world/clientcachemanager-filedownloader)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClientCacheManager()"}</code> | <span className="api-desc">Creates a `ClientCacheManager` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-downloaders" /><code>{"private Dictionary<string, "}<Link to="/mod/game-api/types/alta-world/clientcachemanager-filedownloader">{"ClientCacheManager.FileDownloader"}</Link>{"> downloaders"}</code> | <span className="api-desc">Downloads in progress, by file name.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Logger for this class.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clean" /><code>{"static async void Clean(long limit = 200000000)"}</code> | <span className="api-desc">Deletes the oldest accessed cache files until the cache folder is under the limit (200 MB by default). Runs once when the class loads.</span> |
| <Link id="m-cleancache" /><code>{"override Task CleanCache(string name)"}</code> | <span className="api-desc">Deletes one named cache file if it exists.</span> |
| <Link id="m-getcache" /><code>{"override async Task<T> GetCache<T>(string name, Func<Task<T>> generate, Func<T> createEmpty)"}</code> | <span className="api-desc">Loads a named cache from disk, downloading it first if needed. Returns null if the download fails or no `createEmpty` is given.</span> |
| <Link id="m-handlecacherequest" /><code>{"override async void HandleCacheRequest("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Handles the server asking the client to have a cache ready: downloads it if missing, then replies whether it succeeded.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-downloadcache" /><code>{"private Task<"}<Link to="/mod/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{"> DownloadCache(string name)"}</code> | <span className="api-desc">Starts a download of a named cache file, or returns the one already running. Tries three times, waiting longer each time.</span> |
| <Link id="m-downloaderfinished" /><code>{"private void DownloaderFinished("}<Link to="/mod/game-api/types/alta-world/clientcachemanager-filedownloader">{"ClientCacheManager.FileDownloader"}</Link>{" assembly, "}<Link to="/mod/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" file)"}</code> | <span className="api-desc">Forgets a finished downloader.</span> |

</details>
