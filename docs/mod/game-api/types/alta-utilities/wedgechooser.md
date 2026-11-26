---
title: "WedgeChooser"
description: "Item modifier for a SplineDecorator that picks a prefab for each point by how sharply the spline turns there, flipping it 180 degrees for left turns where..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WedgeChooser

A **class** in `Root.Township`, `Alta.Bezier`.

Item modifier for a `SplineDecorator` that picks a prefab for each point by how sharply the spline turns there, flipping it 180 degrees for left turns where needed.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`ItemModifier`](/mod/game-api/types/alta-utilities/itemmodifier)
- **Nested types** [`Wedge`](/mod/game-api/types/alta-utilities/wedgechooser-wedge)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WedgeChooser()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isreverse" /><code>{"private List<bool> isReverse"}</code> | <span className="api-desc">Per-point flags recorded by `FindClosest`, saying which items to flip; cleared at the first point.</span> |
| <Link id="m-wedges" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/wedgechooser-wedge">{"WedgeChooser.Wedge"}</Link>{"[] wedges"}</code> | <span className="api-desc">The wedge options, each with a turn angle and its prefabs (and optional mirrored prefabs).</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getprefab" /><code>{"override GameObject GetPrefab(List<"}<Link to="/mod/game-api/types/alta-utilities/splinedecorator-part">{"SplineDecorator.Part"}</Link>{"> parts, int index)"}</code> | <span className="api-desc">Works out the average turn angle at this point from its neighbours and returns a random prefab from the closest wedge.</span> |
| <Link id="m-modify" /><code>{"override void Modify(List<"}<Link to="/mod/game-api/types/alta-utilities/splinedecorator-part">{"SplineDecorator.Part"}</Link>{"> parts, int index, GameObject result)"}</code> | <span className="api-desc">Rotates the spawned item 180 degrees around Y if it was marked as reversed.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-findclosest" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/wedgechooser-wedge">{"WedgeChooser.Wedge"}</Link>{" FindClosest(float angle)"}</code> | <span className="api-desc">Returns the wedge whose angle is closest to the turn angle and records whether that item should be flipped.</span> |
| <Link id="m-getrotation" /><code>{"private float GetRotation(Vector3 forward)"}</code> | <span className="api-desc">Converts a forward vector to its heading angle in degrees on the XZ plane.</span> |

</details>
