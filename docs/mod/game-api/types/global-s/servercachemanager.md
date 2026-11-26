---
title: "ServerCacheManager"
description: "Server version of CacheManager: loads or generates cache files in the server's cache folder, and asks clients to confirm they have downloaded a cache."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerCacheManager

A **class** in `Root.Township`, the global namespace.

Server version of `CacheManager`: loads or generates cache files in the server's cache folder, and asks clients to confirm they have downloaded a cache.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`CacheManager`](/mod/game-api/types/alta-world/cachemanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerCacheManager()"}</code> | <span className="api-desc">Creates a `ServerCacheManager` with default values.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-generating" /><code>{"private Dictionary<string, Task> generating"}</code> | <span className="api-desc">Caches being generated right now, by name.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-requestedfiles" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{", Queue<ValueTuple<string, uint>>> requestedFiles"}</code> | <span className="api-desc">Queue of requested files per connection. Not used in this code.</span> |
| <Link id="m-serverchecks" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{", Dictionary<string, TaskCompletionSource<bool>>> serverChecks"}</code> | <span className="api-desc">Pending cache download checks per connection and cache name.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cleancache" /><code>{"override async Task CleanCache(string name)"}</code> | <span className="api-desc">Waits for any generation of the cache to finish, then deletes the file.</span> |
| <Link id="m-ensuredownloadedtoclient" /><code>{"async Task EnsureDownloadedToClient("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, string cache)"}</code> | <span className="api-desc">Sends a `FileCacheRequest` for a cache file to a client and waits for its answer. Throws if the client fails.</span> |
| <Link id="m-getcache" /><code>{"override async Task<T> GetCache<T>(string name, Func<Task<T>> generate, Func<T> createEmpty)"}</code> | <span className="api-desc">Reads a cache file if it exists; otherwise generates it, writes it to disk and returns it. Waits if it's already generating.</span> |
| <Link id="m-handlecacherequest" /><code>{"override void HandleCacheRequest("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Reads a client's reply to a cache request and completes the matching pending check.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-disconnected" /><code>{"private void Disconnected("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | <span className="api-desc">When a client disconnects, fails all its pending cache checks.</span> |

</details>
