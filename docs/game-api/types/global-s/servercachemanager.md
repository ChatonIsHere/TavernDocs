---
title: "ServerCacheManager"
description: "class ServerCacheManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerCacheManager

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`CacheManager`](/game-api/types/alta-world/cachemanager)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ServerCacheManager()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-generating" /><code>{"private Dictionary<string, Task> generating"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-requestedfiles" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{", Queue<ValueTuple<string, uint>>> requestedFiles"}</code> |
| <Link id="m-serverchecks" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{", Dictionary<string, TaskCompletionSource<bool>>> serverChecks"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-cleancache" /><code>{"override async Task CleanCache(string name)"}</code> |
| <Link id="m-ensuredownloadedtoclient" /><code>{"async Task EnsureDownloadedToClient("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, string cache)"}</code> |
| <Link id="m-getcache" /><code>{"override async Task<T> GetCache<T>(string name, Func<Task<T>> generate, Func<T> createEmpty)"}</code> |
| <Link id="m-handlecacherequest" /><code>{"override void HandleCacheRequest("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-disconnected" /><code>{"private void Disconnected("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> |

</details>
