---
title: "DropTarget"
description: "Snap point for one specific pickup: fades a ghost in as it gets close, then locks it in place and fires events when it is near enough and lined up."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DropTarget

A **class** in `Root.Township`, no namespace.

Snap point for one specific pickup: fades a ghost in as it gets close, then locks it in place and fires events when it is near enough and lined up.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DropTarget()"}</code> |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-color" /><code>{"private Color color"}</code> | Original ghost colour; its alpha is the maximum fade. |
| <Link id="m-droppable" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" droppable"}</code> | The pickup that can snap here; cleared once it has. |
| <Link id="m-droppeddelayed" /><code>{"private UnityEvent droppedDelayed"}</code> | Event fired `eventDelay` seconds after the snap. |
| <Link id="m-droppedimmediate" /><code>{"private UnityEvent droppedImmediate"}</code> | Event fired as soon as the pickup snaps. |
| <Link id="m-eventdelay" /><code>{"private float eventDelay"}</code> | Seconds before `droppedDelayed` fires. |
| <Link id="m-ghost" /><code>{"private MeshRenderer ghost"}</code> | Optional renderer that shows where the pickup goes. |
| <Link id="m-ghostdistance" /><code>{"private float ghostDistance"}</code> | Distance at which the ghost starts to fade in. |
| <Link id="m-ghostmaterial" /><code>{"private Material ghostMaterial"}</code> | Instance of the ghost material whose alpha is changed. |
| <Link id="m-snapangle" /><code>{"private float snapAngle"}</code> | Largest rotation difference in degrees that still snaps. |
| <Link id="m-snapdistance" /><code>{"private float snapDistance"}</code> | Distance at which the pickup snaps. |

</details>

## Methods

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-calldelayed" /><code>{"private IEnumerator CallDelayed() (iterator)"}</code> | Coroutine that waits `eventDelay` seconds and then fires `droppedDelayed`. |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | Fades the ghost by distance and, inside the snap distance and angle, force-drops the pickup and parents it here frozen and non-interactable. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Cleans up the ghost material copy. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Takes a tracked copy of the ghost material and remembers its colour. |

</details>
