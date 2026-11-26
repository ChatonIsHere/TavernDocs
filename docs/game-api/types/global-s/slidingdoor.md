---
title: "SlidingDoor"
description: "class SlidingDoor in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SlidingDoor

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`Door`](/game-api/types/global-c-d/door)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SlidingDoor()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-duration" /><code>{"private float duration"}</code> |
| <Link id="m-istransitioning" /><code>{"private bool isTransitioning"}</code> |
| <Link id="m-movementcurve" /><code>{"private AnimationCurve movementCurve"}</code> |
| <Link id="m-movingpart" /><code>{"private Transform movingPart"}</code> |
| <Link id="m-offsetlocation" /><code>{"private Vector3 offsetLocation"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |
| <Link id="m-handlechange" /><code>{"protected override void HandleChange()"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-changeopen" /><code>{"private IEnumerator ChangeOpen() (iterator)"}</code> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |

</details>
