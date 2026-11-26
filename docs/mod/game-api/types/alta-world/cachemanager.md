---
title: "CacheManager"
description: "Stores generated data (such as forest nodes) as cache files."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CacheManager

An **abstract class** in `Root.Township`, `Alta.Static`.

Stores generated data (such as forest nodes) as cache files. `Instance` is a `ServerCacheManager` on the server and a `ClientCacheManager` on clients.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Derived types** [`ClientCacheManager`](/mod/game-api/types/alta-world/clientcachemanager), [`ServerCacheManager`](/mod/game-api/types/global-s/servercachemanager)
- **Documented in** [Static objects](/mod/game-api/world/static-objects)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected CacheManager()"}</code> | Creates a `CacheManager` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/alta-world/cachemanager">{"CacheManager"}</Link>{" Instance { get; set; }"}</code> | The current cache manager. Set by `ServerHandler` or when joining a server. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cleancache" /><code>{"abstract Task CleanCache(string name)"}</code> | Deletes a cache by name. |
| <Link id="m-getcache" /><code>{"Task<T> GetCache<T>(string name, Func<Task<T>> generate)"}</code> | Returns a cache by name, generating it with the given function if it is missing. |
| <Link id="m-getcache-2" /><code>{"abstract Task<T> GetCache<T>(string name, Func<Task<T>> generate, Func<T> createEmpty)"}</code> | Returns a cache by name, generating it with the given function if it is missing. |
| <Link id="m-getcachename" /><code>{"static string GetCacheName(string context, "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, int seed)"}</code> | Builds a cache file name from the server ID, chunk, context and seed. |
| <Link id="m-handlecacherequest" /><code>{"abstract void HandleCacheRequest("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Handles a cache request message from a connection. |
