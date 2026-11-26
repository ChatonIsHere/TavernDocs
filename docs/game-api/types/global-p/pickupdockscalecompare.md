---
title: "PickupDockScaleCompare"
description: "Debug component for a two-dock group that logs the weight difference between the docks when you press the 0 key."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupDockScaleCompare

A **class** in `Root.Township`, no namespace.

Debug component for a two-dock group that logs the weight difference between the docks when you press the 0 key.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupDockScaleCompare()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Methods

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dock0check" /><code>{"private float Dock0Check()"}</code> | Returns the first dock's stored weight: one item's raw weight times the quantity stored. |
| <Link id="m-dock1check" /><code>{"private float Dock1Check()"}</code> | Returns the second dock's stored weight, the same way as `Dock0Check`. |
| <Link id="m-scalecompare" /><code>{"private float ScaleCompare(float dock0Weight, float dock1weight)"}</code> | Logs and returns the first weight minus the second. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Empty. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Runs the comparison when the 0 key is pressed. |

</details>
