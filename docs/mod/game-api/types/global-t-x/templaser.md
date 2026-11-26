---
title: "TempLaser"
description: "Prototype light emitter: raycasts forward each frame and tells any ILightDetectorTemp it hits when the beam starts and stops hitting it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TempLaser

A **class** in `Root.Township`, the global namespace.

Prototype light emitter: raycasts forward each frame and tells any `ILightDetectorTemp` it hits when the beam starts and stops hitting it.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`, [`ILightEmitterTemp`](/mod/game-api/types/global-i-l/ilightemittertemp)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TempLaser()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-distance" /><code>{"private float distance"}</code> | <span className="api-desc">Ray length.</span> |
| <Link id="m-mask" /><code>{"private LayerMask mask"}</code> | <span className="api-desc">Layers the ray hits.</span> |
| <Link id="m-olddetector" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/ilightdetectortemp">{"ILightDetectorTemp"}</Link>{" oldDetector"}</code> | <span className="api-desc">Detector hit last frame.</span> |

</details>

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Raycasts forward and calls `BeginHit` or `EndHit` when the hit detector changes.</span> |

</details>
