---
title: "InteriorRendererCollector"
description: "Trigger that changes the LOD transition heights of LOD groups while they are inside it, and puts them back when they leave."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InteriorRendererCollector

A **class** in `Root.Township`, the global namespace.

Trigger that changes the LOD transition heights of LOD groups while they are inside it, and puts them back when they leave.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InteriorRendererCollector()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addedgroup" /><code>{"private List<LODGroup> addedGroup"}</code> | <span className="api-desc">LOD groups currently changed by this trigger.</span> |
| <Link id="m-lodmultiplier" /><code>{"private float lodMultiplier"}</code> | <span className="api-desc">Strength of the change. Defaults to 3.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-lodmultiplier-2" /><code>{"protected float LodMultiplier { get; set; }"}</code> | <span className="api-desc">Gets or sets `lodMultiplier`.</span> |

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | <span className="api-desc">Raises each LOD transition height of an entering group to the power one over `lodMultiplier`, once per group.</span> |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> | <span className="api-desc">Undoes the change when the group leaves.</span> |

</details>
