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

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`ItemModifier`](/game-api/types/alta-utilities/itemmodifier)
- **Nested types** [`Wedge`](/game-api/types/alta-utilities/wedgechooser-wedge)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"WedgeChooser()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isreverse" /><code>{"private List<bool> isReverse"}</code> | Per-point flags recorded by `FindClosest`, saying which items to flip; cleared at the first point. |
| <Link id="m-wedges" /><code>{"private "}<Link to="/game-api/types/alta-utilities/wedgechooser-wedge">{"WedgeChooser.Wedge"}</Link>{"[] wedges"}</code> | The wedge options, each with a turn angle and its prefabs (and optional mirrored prefabs). |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getprefab" /><code>{"override GameObject GetPrefab(List<"}<Link to="/game-api/types/alta-utilities/splinedecorator-part">{"SplineDecorator.Part"}</Link>{"> parts, int index)"}</code> | Works out the average turn angle at this point from its neighbours and returns a random prefab from the closest wedge. |
| <Link id="m-modify" /><code>{"override void Modify(List<"}<Link to="/game-api/types/alta-utilities/splinedecorator-part">{"SplineDecorator.Part"}</Link>{"> parts, int index, GameObject result)"}</code> | Rotates the spawned item 180 degrees around Y if it was marked as reversed. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-findclosest" /><code>{"private "}<Link to="/game-api/types/alta-utilities/wedgechooser-wedge">{"WedgeChooser.Wedge"}</Link>{" FindClosest(float angle)"}</code> | Returns the wedge whose angle is closest to the turn angle and records whether that item should be flipped. |
| <Link id="m-getrotation" /><code>{"private float GetRotation(Vector3 forward)"}</code> | Converts a forward vector to its heading angle in degrees on the XZ plane. |

</details>
