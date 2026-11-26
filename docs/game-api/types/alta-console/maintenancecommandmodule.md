---
title: "MaintenanceCommandModule"
description: "Console module maintenance: memory housekeeping commands (garbage collection, unloading unused Unity assets)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MaintenanceCommandModule

A **static class** in `Root.Township`, `Alta.Console.Commands`.

Console module `maintenance`: memory housekeeping commands (garbage collection, unloading unused Unity assets). Play mode only.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Attributes** `PlayOnly`, `Module`

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this module. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-garbagecollect" /><code>{"private static void GarbageCollect()"}</code> | `maintenance garbage` (alias `gc`): runs a full C# garbage collection, tracing memory before and after. |
| <Link id="m-unloadresources" /><code>{"private static void UnloadResources()"}</code> | `maintenance resources`: calls Unity's `Resources.UnloadUnusedAssets`. |

</details>
