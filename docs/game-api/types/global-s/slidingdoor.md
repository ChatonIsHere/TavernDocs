---
title: "SlidingDoor"
description: "A Door that opens by sliding a moving part to an offset position instead of swinging."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SlidingDoor

A **class** in `Root.Township`, no namespace.

A `Door` that opens by sliding a moving part to an offset position instead of swinging.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`Door`](/game-api/types/global-c-d/door)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SlidingDoor()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-duration" /><code>{"private float duration"}</code> | Seconds a slide takes. |
| <Link id="m-istransitioning" /><code>{"private bool isTransitioning"}</code> | True while the slide coroutine is running. |
| <Link id="m-movementcurve" /><code>{"private AnimationCurve movementCurve"}</code> | Easing curve. It is evaluated but the result is unused, so the slide is linear. |
| <Link id="m-movingpart" /><code>{"private Transform movingPart"}</code> | The transform that slides. |
| <Link id="m-offsetlocation" /><code>{"private Vector3 offsetLocation"}</code> | Local position of the part when open. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: places the part at the open or closed position to match the saved state. |
| <Link id="m-handlechange" /><code>{"protected override void HandleChange()"}</code> | Starts the slide when the door's open state changes. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-changeopen" /><code>{"private IEnumerator ChangeOpen() (iterator)"}</code> | Coroutine that slides the part to the open or closed position, repeating if the state changed meanwhile. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: places the part to match `IsOpen` outside play mode. |

</details>
