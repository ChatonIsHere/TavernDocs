---
title: "DropTarget"
description: "Snap point for one specific pickup: fades a ghost in as it gets close, then locks it in place and fires events when it is near enough and lined up."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DropTarget

A **class** in `Root.Township`, the global namespace.

Snap point for one specific pickup: fades a ghost in as it gets close, then locks it in place and fires events when it is near enough and lined up.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DropTarget()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-color" /><code>{"private Color color"}</code> | <span className="api-desc">Original ghost colour; its alpha is the maximum fade.</span> |
| <Link id="m-droppable" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" droppable"}</code> | <span className="api-desc">The pickup that can snap here; cleared once it has.</span> |
| <Link id="m-droppeddelayed" /><code>{"private UnityEvent droppedDelayed"}</code> | <span className="api-desc">Event fired `eventDelay` seconds after the snap.</span> |
| <Link id="m-droppedimmediate" /><code>{"private UnityEvent droppedImmediate"}</code> | <span className="api-desc">Event fired as soon as the pickup snaps.</span> |
| <Link id="m-eventdelay" /><code>{"private float eventDelay"}</code> | <span className="api-desc">Seconds before `droppedDelayed` fires.</span> |
| <Link id="m-ghost" /><code>{"private MeshRenderer ghost"}</code> | <span className="api-desc">Optional renderer that shows where the pickup goes.</span> |
| <Link id="m-ghostdistance" /><code>{"private float ghostDistance"}</code> | <span className="api-desc">Distance at which the ghost starts to fade in.</span> |
| <Link id="m-ghostmaterial" /><code>{"private Material ghostMaterial"}</code> | <span className="api-desc">Instance of the ghost material whose alpha is changed.</span> |
| <Link id="m-snapangle" /><code>{"private float snapAngle"}</code> | <span className="api-desc">Largest rotation difference in degrees that still snaps.</span> |
| <Link id="m-snapdistance" /><code>{"private float snapDistance"}</code> | <span className="api-desc">Distance at which the pickup snaps.</span> |

</details>

## Methods

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-calldelayed" /><code>{"private IEnumerator CallDelayed() (iterator)"}</code> | <span className="api-desc">Coroutine that waits `eventDelay` seconds and then fires `droppedDelayed`.</span> |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | <span className="api-desc">Fades the ghost by distance and, inside the snap distance and angle, force-drops the pickup and parents it here frozen and non-interactable.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Cleans up the ghost material copy.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Takes a tracked copy of the ghost material and remembers its colour.</span> |

</details>
