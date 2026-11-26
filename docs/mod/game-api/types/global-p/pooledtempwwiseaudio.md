---
title: "PooledTempWwiseAudio"
description: "A pooled object for a temporary Wwise sound emitter."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PooledTempWwiseAudio

A **class** in `Root.Township`, the global namespace.

A pooled object for a temporary Wwise sound emitter. Deactivates its `AkGameObj` when released back to the pool.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`PooledObject`](/mod/game-api/types/global-p/pooledobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PooledTempWwiseAudio()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-akgameobj" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledakgameobj">{"PooledAkGameObj"}</Link>{" akGameObj"}</code> | Backing field for `AkGameObj`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-akgameobj-2" /><code>{"AkGameObj AkGameObj { get; }"}</code> | The Wwise game object sounds are posted on. |

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks release so the Wwise object is deactivated. |

</details>

## Used in

Members of other types that take, return or hold a `PooledTempWwiseAudio`:

[`AudioManager.GetSoundEventObject`](/mod/game-api/types/global-a-b/audiomanager#m-getsoundeventobject), [`AudioManager.PlayInternalOneShot`](/mod/game-api/types/global-a-b/audiomanager#m-playinternaloneshot).
