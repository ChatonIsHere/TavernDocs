---
title: "PickupClamp"
description: "Component that finds the nearest loose crafted pickup within a sphere and passes it to onPickupClamped, for things like vices or clamps."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupClamp

A **class** in `Root.Township`, no namespace.

Component that finds the nearest loose crafted pickup within a sphere and passes it to `onPickupClamped`, for things like vices or clamps.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PickupClamp()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-castcenter" /><code>{"private Transform castCenter"}</code> | Centre of the search sphere. |
| <Link id="m-castradius" /><code>{"private float castRadius"}</code> | Radius of the search sphere. |
| <Link id="m-onpickupclamped" /><code>{"private "}<Link to="/game-api/types/global-p/pickupevent">{"PickupEvent"}</Link>{" onPickupClamped"}</code> | Event fired with the pickup that was found. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-enable" /><code>{"void Enable()"}</code> | Finds the closest non-kinematic, undocked, crafted pickup in range and fires `onPickupClamped` with it. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Draws the search sphere in the editor. |

</details>
