---
title: "SignPointPart"
description: "Generatable part for forest generation that turns a sign to point along the path towards one of the forest's entrance nodes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SignPointPart

A **class** in `Root.Township`, no namespace.

Generatable part for forest generation that turns a sign to point along the path towards one of the forest's entrance nodes.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`GeneratablePart`](/game-api/types/global-e-h/generatablepart)
- **Attributes** `AddComponentMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SignPointPart()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entranceindex" /><code>{"private int entranceIndex"}</code> | Index into the forest's node list of the node the sign points to. |
| <Link id="m-sign" /><code>{"private Transform sign"}</code> | The transform that gets rotated. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generatestatic" /><code>{"override void GenerateStatic("}<Link to="/game-api/types/global-e-h/generationcore">{"GenerationCore"}</Link>{" core, bool isModifyingTerrain)"}</code> | Pathfinds from this node to the chosen entrance and rotates `sign` to face the first step of that path. |
