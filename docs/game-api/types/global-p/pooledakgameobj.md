---
title: "PooledAkGameObj"
description: "A Wwise game object for pooled audio."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PooledAkGameObj

A **class** in `Root.Township`, no namespace.

A Wwise game object for pooled audio. It skips Wwise's usual registration in `Awake` and resets when its pooled object is released.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `AkGameObj`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PooledAkGameObj()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deactivate" /><code>{"void Deactivate("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" deactivated)"}</code> | Resets the position data and unregisters from Wwise. `PooledTempWwiseAudio` hooks it to its `Released` event. |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Empty, so the object isn't registered with Wwise on creation. |

## Used in

Members of other types that take, return or hold a `PooledAkGameObj`:

[`PooledTempWwiseAudio.akGameObj`](/game-api/types/global-p/pooledtempwwiseaudio#m-akgameobj).
