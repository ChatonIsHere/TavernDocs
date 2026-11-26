---
title: "SlidingDoor"
description: "A Door that opens by sliding a moving part to an offset position instead of swinging."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SlidingDoor

A **class** in `Root.Township`, the global namespace.

A `Door` that opens by sliding a moving part to an offset position instead of swinging.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`Door`](/mod/game-api/types/global-c-d/door)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SlidingDoor()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-duration" /><code>{"private float duration"}</code> | <span className="api-desc">Seconds a slide takes.</span> |
| <Link id="m-istransitioning" /><code>{"private bool isTransitioning"}</code> | <span className="api-desc">True while the slide coroutine is running.</span> |
| <Link id="m-movementcurve" /><code>{"private AnimationCurve movementCurve"}</code> | <span className="api-desc">Easing curve. It is evaluated but the result is unused, so the slide is linear.</span> |
| <Link id="m-movingpart" /><code>{"private Transform movingPart"}</code> | <span className="api-desc">The transform that slides.</span> |
| <Link id="m-offsetlocation" /><code>{"private Vector3 offsetLocation"}</code> | <span className="api-desc">Local position of the part when open.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: places the part at the open or closed position to match the saved state.</span> |
| <Link id="m-handlechange" /><code>{"protected override void HandleChange()"}</code> | <span className="api-desc">Starts the slide when the door's open state changes.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-changeopen" /><code>{"private IEnumerator ChangeOpen() (iterator)"}</code> | <span className="api-desc">Coroutine that slides the part to the open or closed position, repeating if the state changed meanwhile.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: places the part to match `IsOpen` outside play mode.</span> |

</details>
