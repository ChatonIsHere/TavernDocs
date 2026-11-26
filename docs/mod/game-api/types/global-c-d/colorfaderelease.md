---
title: "ColorFadeRelease"
description: "Delayed pooled object that fades its particle systems' start and trail colour alpha to zero before going back to the pool."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ColorFadeRelease

A **class** in `Root.Township`, the global namespace.

Delayed pooled object that fades its particle systems' start and trail colour alpha to zero before going back to the pool.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`DelayedPooledObject`](/mod/game-api/types/global-c-d/delayedpooledobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ColorFadeRelease()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fadeoutduration" /><code>{"private float fadeOutDuration"}</code> | <span className="api-desc">Seconds to fade out before the release delay.</span> |
| <Link id="m-systemstochange" /><code>{"private ParticleSystem[] systemsToChange"}</code> | <span className="api-desc">Particle systems that fade.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-delayrelease" /><code>{"protected override IEnumerator DelayRelease() (iterator)"}</code> | <span className="api-desc">Fades alpha over `fadeOutDuration`, waits the release delay, then releases.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Resets alpha to full whenever it's taken from the pool.</span> |
| <Link id="m-resetsystems" /><code>{"private void ResetSystems("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | <span className="api-desc">Sets alpha back to 1.</span> |
| <Link id="m-updatesystems" /><code>{"private void UpdateSystems(float alpha)"}</code> | <span className="api-desc">Sets start colour and (if on) trail colour alpha on each system.</span> |

</details>
