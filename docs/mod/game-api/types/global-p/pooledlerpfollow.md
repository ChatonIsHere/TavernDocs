---
title: "PooledLerpFollow"
description: "A LerpFollow on a pooled object that restarts each time the object is taken from the pool, by default following its new parent."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PooledLerpFollow

A **class** in `Root.Township`, the global namespace.

A `LerpFollow` on a pooled object that restarts each time the object is taken from the pool, by default following its new parent.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`LerpFollow`](/mod/game-api/types/global-i-l/lerpfollow)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PooledLerpFollow()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-issettingtargettoparent" /><code>{"private bool isSettingTargetToParent"}</code> | Whether to follow the parent transform (default true). |
| <Link id="m-targetpooledobject" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" targetPooledObject"}</code> | The pooled object whose requests restart the lerp. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-stoplerp" /><code>{"void StopLerp()"}</code> | Stops following and disables the component. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the pooled object's `Requested` event. |
| <Link id="m-restart" /><code>{"private void Restart("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | Resets the start position and waits a frame before starting the lerp. |
| <Link id="m-waitforsetup" /><code>{"private IEnumerator WaitForSetup() (iterator)"}</code> | Coroutine: at end of frame, sets the target to the parent if wanted and starts the lerp. |

</details>
