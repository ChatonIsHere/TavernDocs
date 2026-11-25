---
title: "WedgeChooser"
description: "class WedgeChooser in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WedgeChooser

A **class** in `Root.Township`, `Alta.Bezier`.

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

| Member |
| --- |
| <Link id="m-isreverse" /><code>{"private List<bool> isReverse"}</code> |
| <Link id="m-wedges" /><code>{"private "}<Link to="/game-api/types/alta-utilities/wedgechooser-wedge">{"WedgeChooser.Wedge"}</Link>{"[] wedges"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-getprefab" /><code>{"override GameObject GetPrefab(List<"}<Link to="/game-api/types/alta-utilities/splinedecorator-part">{"SplineDecorator.Part"}</Link>{"> parts, int index)"}</code> |
| <Link id="m-modify" /><code>{"override void Modify(List<"}<Link to="/game-api/types/alta-utilities/splinedecorator-part">{"SplineDecorator.Part"}</Link>{"> parts, int index, GameObject result)"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-findclosest" /><code>{"private "}<Link to="/game-api/types/alta-utilities/wedgechooser-wedge">{"WedgeChooser.Wedge"}</Link>{" FindClosest(float angle)"}</code> |
| <Link id="m-getrotation" /><code>{"private float GetRotation(Vector3 forward)"}</code> |

</details>
