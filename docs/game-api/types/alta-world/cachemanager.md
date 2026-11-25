---
title: "CacheManager"
description: "Generates or loads cached data by name (GetCache)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CacheManager

An **abstract class** in `Root.Township`, `Alta.Static`.

Generates or loads cached data by name (`GetCache`).

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Derived types** [`ClientCacheManager`](/game-api/types/alta-world/clientcachemanager), [`ServerCacheManager`](/game-api/types/global-s/servercachemanager)
- **Documented in** [Static objects](/game-api/world/static-objects)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected CacheManager()"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/alta-world/cachemanager">{"CacheManager"}</Link>{" Instance { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cleancache" /><code>{"abstract Task CleanCache(string name)"}</code> |  |
| <Link id="m-getcache" /><code>{"Task<T> GetCache<T>(string name, Func<Task<T>> generate)"}</code> |  |
| <Link id="m-getcache-2" /><code>{"abstract Task<T> GetCache<T>(string name, Func<Task<T>> generate, Func<T> createEmpty)"}</code> |  |
| <Link id="m-getcachename" /><code>{"static string GetCacheName(string context, "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, int seed)"}</code> |  |
| <Link id="m-handlecacherequest" /><code>{"abstract void HandleCacheRequest("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
