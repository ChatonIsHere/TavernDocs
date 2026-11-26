---
title: "ResourcesCleanup"
description: "Runs Resources.UnloadUnusedAssets at the end of the frame, from a hidden object it makes on first use."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ResourcesCleanup

A **class** in `Root.Township`, the global namespace.

Runs `Resources.UnloadUnusedAssets` at the end of the frame, from a hidden object it makes on first use. Only one unload runs at a time.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ResourcesCleanup()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"private static "}<Link to="/mod/game-api/types/global-q-r/resourcescleanup">{"ResourcesCleanup"}</Link>{" instance"}</code> | <span className="api-desc">The cleanup object, made on first `Run`.</span> |
| <Link id="m-isunloading" /><code>{"private static bool isUnloading"}</code> | <span className="api-desc">True while an unload is in progress.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run" /><code>{"static void Run()"}</code> | <span className="api-desc">Starts an end-of-frame unload in play mode if one isn't already running.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Clears the unloading flag.</span> |
| <Link id="m-unloadatendofframe" /><code>{"private static IEnumerator UnloadAtEndOfFrame() (iterator)"}</code> | <span className="api-desc">Coroutine that waits for end of frame and unloads unused assets.</span> |

</details>
