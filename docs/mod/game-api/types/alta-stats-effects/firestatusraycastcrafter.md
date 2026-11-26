---
title: "FireStatusRaycastCrafter"
description: "A RaycastCrafter that copies a fire's state onto what it crafts, so a lit item stays lit when it becomes the new object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FireStatusRaycastCrafter

A **class** in `Root.Township`, `Alta.Heat`.

A `RaycastCrafter` that copies a fire's state onto what it crafts, so a lit item stays lit when it becomes the new object.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`RaycastCrafter`](/mod/game-api/types/global-q-r/raycastcrafter)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FireStatusRaycastCrafter()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basefire" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/fire">{"Fire"}</Link>{" baseFire"}</code> | <span className="api-desc">The fire whose state is copied.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onspawn" /><code>{"protected override void OnSpawn("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" spawned)"}</code> | <span className="api-desc">Copies `baseFire`'s progress and enabled state to the first `Fire` found on the spawned entity.</span> |
