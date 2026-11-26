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

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-maximummessagesize" /><code>{"const int MaximumMessageSize"}</code> | Size of every pooled buffer: 65535 bytes. |
| <Link id="m-maximumpoolsize" /><code>{"const int MaximumPoolSize"}</code> | Cap on pooled buffers (100). Buffers returned past it are dropped. |

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ismonitoring" /><code>{"private static bool isMonitoring"}</code> | When true, the editor logs a warning on a full pool. Always false in this build. |
| <Link id="m-logger" /><code>{"private static readonly Logger Logger"}</code> | NLog logger for this class. |
| <Link id="m-pool" /><code>{"private static readonly ConcurrentBag<byte[]> Pool"}</code> | The `ConcurrentBag` holding free buffers. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-get" /><code>{"static byte[] Get()"}</code> | Takes a buffer from the pool, or allocates a new 65535-byte array if it is empty. |
| <Link id="m-put" /><code>{"static void Put(byte[] bytes)"}</code> | Returns a buffer to the pool unless it already holds more than 100. Callers include the server packet receivers. |
