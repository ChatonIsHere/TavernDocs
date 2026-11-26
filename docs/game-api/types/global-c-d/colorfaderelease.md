---
title: "ColorFadeRelease"
description: "Delayed pooled object that fades its particle systems' start and trail colour alpha to zero before going back to the pool."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ColorFadeRelease

A **class** in `Root.Township`, no namespace.

Delayed pooled object that fades its particle systems' start and trail colour alpha to zero before going back to the pool.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`DelayedPooledObject`](/game-api/types/global-c-d/delayedpooledobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ColorFadeRelease()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fadeoutduration" /><code>{"private float fadeOutDuration"}</code> | Seconds to fade out before the release delay. |
| <Link id="m-systemstochange" /><code>{"private ParticleSystem[] systemsToChange"}</code> | Particle systems that fade. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-delayrelease" /><code>{"protected override IEnumerator DelayRelease() (iterator)"}</code> | Fades alpha over `fadeOutDuration`, waits the release delay, then releases. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Resets alpha to full whenever it's taken from the pool. |
| <Link id="m-resetsystems" /><code>{"private void ResetSystems("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | Sets alpha back to 1. |
| <Link id="m-updatesystems" /><code>{"private void UpdateSystems(float alpha)"}</code> | Sets start colour and (if on) trail colour alpha on each system. |

</details>
