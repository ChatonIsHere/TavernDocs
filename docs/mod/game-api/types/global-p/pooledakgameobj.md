---
title: "PooledAkGameObj"
description: "A Wwise game object for pooled audio."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PooledAkGameObj

A **class** in `Root.Township`, the global namespace.

A Wwise game object for pooled audio. It skips Wwise's usual registration in `Awake` and resets when its pooled object is released.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `AkGameObj`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PooledAkGameObj()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deactivate" /><code>{"void Deactivate("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" deactivated)"}</code> | <span className="api-desc">Resets the position data and unregisters from Wwise. `PooledTempWwiseAudio` hooks it to its `Released` event.</span> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Empty, so the object isn't registered with Wwise on creation.</span> |

## Used in

Members of other types that take, return or hold a `PooledAkGameObj`:

<div className="api-used-in">

[`PooledTempWwiseAudio.akGameObj`](/mod/game-api/types/global-p/pooledtempwwiseaudio#m-akgameobj).

</div>
