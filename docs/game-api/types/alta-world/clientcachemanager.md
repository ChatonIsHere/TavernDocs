---
title: "ClientCacheManager"
description: "class ClientCacheManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClientCacheManager

A **class** in `Root.Township`, `Alta.Static`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`CacheManager`](/game-api/types/alta-world/cachemanager)
- **Nested types** [`FileDownloader`](/game-api/types/alta-world/clientcachemanager-filedownloader)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClientCacheManager()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-downloaders" /><code>{"private Dictionary<string, "}<Link to="/game-api/types/alta-world/clientcachemanager-filedownloader">{"ClientCacheManager.FileDownloader"}</Link>{"> downloaders"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clean" /><code>{"static async void Clean(long limit = 200000000)"}</code> |  |
| <Link id="m-cleancache" /><code>{"override Task CleanCache(string name)"}</code> |  |
| <Link id="m-getcache" /><code>{"override async Task<T> GetCache<T>(string name, Func<Task<T>> generate, Func<T> createEmpty)"}</code> |  |
| <Link id="m-handlecacherequest" /><code>{"override async void HandleCacheRequest("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-downloadcache" /><code>{"private Task<"}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{"> DownloadCache(string name)"}</code> |  |
| <Link id="m-downloaderfinished" /><code>{"private void DownloaderFinished("}<Link to="/game-api/types/alta-world/clientcachemanager-filedownloader">{"ClientCacheManager.FileDownloader"}</Link>{" assembly, "}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" file)"}</code> |  |
