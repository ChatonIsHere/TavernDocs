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
| <Link id="m-ctor" /><code>{"ResourcesCleanup()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"private static "}<Link to="/mod/game-api/types/global-q-r/resourcescleanup">{"ResourcesCleanup"}</Link>{" instance"}</code> | The cleanup object, made on first `Run`. |
| <Link id="m-isunloading" /><code>{"private static bool isUnloading"}</code> | True while an unload is in progress. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run" /><code>{"static void Run()"}</code> | Starts an end-of-frame unload in play mode if one isn't already running. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Clears the unloading flag. |
| <Link id="m-unloadatendofframe" /><code>{"private static IEnumerator UnloadAtEndOfFrame() (iterator)"}</code> | Coroutine that waits for end of frame and unloads unused assets. |

</details>
