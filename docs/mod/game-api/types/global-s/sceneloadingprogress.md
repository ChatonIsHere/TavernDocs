---
title: "SceneLoadingProgress"
description: "Fires a float event every frame with the current scene loading progress from AltaSceneManager.LoadProgress."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SceneLoadingProgress

A **class** in `Root.Township`, the global namespace.

Fires a float event every frame with the current scene loading progress from `AltaSceneManager.LoadProgress`. Used to drive loading bars.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SceneLoadingProgress()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onprogresschanged" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/floatunityevent">{"FloatUnityEvent"}</Link>{" onProgressChanged"}</code> | <span className="api-desc">Event that receives the load progress each frame.</span> |

</details>

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Invokes `onProgressChanged` with the current load progress.</span> |

</details>
