---
title: "ResourceRequestExtensions"
description: "Lets you await a Unity ResourceRequest and get the loaded asset."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ResourceRequestExtensions

A **static class** in `Root.Township`, `Alta.Chunks`.

Lets you `await` a Unity `ResourceRequest` and get the loaded asset.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Attributes** `Extension`

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getawaiter" /><code>{"static TaskAwaiter<Object> GetAwaiter(ResourceRequest request)"}</code> | Awaiter that runs the request as a coroutine and returns its asset. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-waitfor" /><code>{"private static IEnumerator WaitFor(ResourceRequest request) (iterator)"}</code> | Coroutine that waits for the request to finish. |

</details>
