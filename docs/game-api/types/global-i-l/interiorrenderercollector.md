---
title: "InteriorRendererCollector"
description: "Trigger that changes the LOD transition heights of LOD groups while they are inside it, and puts them back when they leave."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InteriorRendererCollector

A **class** in `Root.Township`, no namespace.

Trigger that changes the LOD transition heights of LOD groups while they are inside it, and puts them back when they leave.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"InteriorRendererCollector()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addedgroup" /><code>{"private List<LODGroup> addedGroup"}</code> | LOD groups currently changed by this trigger. |
| <Link id="m-lodmultiplier" /><code>{"private float lodMultiplier"}</code> | Strength of the change. Defaults to 3. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-lodmultiplier-2" /><code>{"protected float LodMultiplier { get; set; }"}</code> | Gets or sets `lodMultiplier`. |

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | Raises each LOD transition height of an entering group to the power one over `lodMultiplier`, once per group. |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> | Undoes the change when the group leaves. |

</details>
