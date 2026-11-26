---
title: "MessageReceivePool"
description: "Thread-safe pool of 64 KB byte arrays for received network messages, so the receive path doesn't allocate a new buffer each time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MessageReceivePool

A **static class** in `Alta.NetworkTransport.Runtime`, `Alta.NetworkingTransport`.

Thread-safe pool of 64 KB byte arrays for received network messages, so the receive path doesn't allocate a new buffer each time.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-maximummessagesize" /><code>{"const int MaximumMessageSize"}</code> | <span className="api-desc">Size of every pooled buffer: 65535 bytes.</span> |
| <Link id="m-maximumpoolsize" /><code>{"const int MaximumPoolSize"}</code> | <span className="api-desc">Cap on pooled buffers (100). Buffers returned past it are dropped.</span> |

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ismonitoring" /><code>{"private static bool isMonitoring"}</code> | <span className="api-desc">When true, the editor logs a warning on a full pool. Always false in this build.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger Logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-pool" /><code>{"private static readonly ConcurrentBag<byte[]> Pool"}</code> | <span className="api-desc">The `ConcurrentBag` holding free buffers.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-get" /><code>{"static byte[] Get()"}</code> | <span className="api-desc">Takes a buffer from the pool, or allocates a new 65535-byte array if it is empty.</span> |
| <Link id="m-put" /><code>{"static void Put(byte[] bytes)"}</code> | <span className="api-desc">Returns a buffer to the pool unless it already holds more than 100. Callers include the server packet receivers.</span> |
