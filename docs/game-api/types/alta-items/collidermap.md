---
title: "ColliderMap"
description: "Pairs a collider with an ImpactDetectorColliderModifier, so an ImpactDetector can treat hits on that collider differently."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ColliderMap

A **class** in `Root.Township`, `Alta.Impact`.

Pairs a collider with an `ImpactDetectorColliderModifier`, so an `ImpactDetector` can treat hits on that collider differently.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ColliderMap(Collider collider, "}<Link to="/game-api/types/alta-items/impactdetectorcollidermodifier">{"ImpactDetectorColliderModifier"}</Link>{" modifier)"}</code> | Creates a `ColliderMap` from `collider` and `modifier`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-collider" /><code>{"private Collider collider"}</code> | Backing field for `Collider`. |
| <Link id="m-modifier" /><code>{"private "}<Link to="/game-api/types/alta-items/impactdetectorcollidermodifier">{"ImpactDetectorColliderModifier"}</Link>{" modifier"}</code> | Backing field for `Modifier`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-collider-2" /><code>{"Collider Collider { get; }"}</code> | The collider. |
| <Link id="m-modifier-2" /><code><Link to="/game-api/types/alta-items/impactdetectorcollidermodifier">{"ImpactDetectorColliderModifier"}</Link>{" Modifier { get; }"}</code> | The modifier applied to hits on that collider. |

## Used in

Members of other types that take, return or hold a `ColliderMap`:

[`ImpactDetector.mappedColliders`](/game-api/types/alta-items/impactdetector#m-mappedcolliders).
