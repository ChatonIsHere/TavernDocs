---
title: "PooledObjectSoundHook"
description: "Plays a sound at this position each time its pooled object is taken from the pool."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PooledObjectSoundHook

A **class** in `Root.Township`, the global namespace.

Plays a sound at this position each time its pooled object is taken from the pool.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PooledObjectSoundHook()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-pooledobject" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject"}</code> | The pooled object on this game object. |
| <Link id="m-soundeffectset" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" soundEffectSet"}</code> | Sound to play. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the pooled object's `Requested` event. |
| <Link id="m-playeffect" /><code>{"private void PlayEffect("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | Plays `soundEffectSet` at this position. |

</details>
