---
title: "PickupDockScaleCompare"
description: "Debug component for a two-dock group that logs the weight difference between the docks when you press the 0 key."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupDockScaleCompare

A **class** in `Root.Township`, the global namespace.

Debug component for a two-dock group that logs the weight difference between the docks when you press the 0 key.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupDockScaleCompare()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Methods

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dock0check" /><code>{"private float Dock0Check()"}</code> | <span className="api-desc">Returns the first dock's stored weight: one item's raw weight times the quantity stored.</span> |
| <Link id="m-dock1check" /><code>{"private float Dock1Check()"}</code> | <span className="api-desc">Returns the second dock's stored weight, the same way as `Dock0Check`.</span> |
| <Link id="m-scalecompare" /><code>{"private float ScaleCompare(float dock0Weight, float dock1weight)"}</code> | <span className="api-desc">Logs and returns the first weight minus the second.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Empty.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Runs the comparison when the 0 key is pressed.</span> |

</details>
