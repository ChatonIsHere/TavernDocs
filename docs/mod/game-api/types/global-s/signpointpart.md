---
title: "SignPointPart"
description: "Generatable part for forest generation that turns a sign to point along the path towards one of the forest's entrance nodes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SignPointPart

A **class** in `Root.Township`, the global namespace.

Generatable part for forest generation that turns a sign to point along the path towards one of the forest's entrance nodes.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`GeneratablePart`](/mod/game-api/types/global-e-h/generatablepart)
- **Attributes** `AddComponentMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SignPointPart()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entranceindex" /><code>{"private int entranceIndex"}</code> | <span className="api-desc">Index into the forest's node list of the node the sign points to.</span> |
| <Link id="m-sign" /><code>{"private Transform sign"}</code> | <span className="api-desc">The transform that gets rotated.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generatestatic" /><code>{"override void GenerateStatic("}<Link to="/mod/game-api/types/global-e-h/generationcore">{"GenerationCore"}</Link>{" core, bool isModifyingTerrain)"}</code> | <span className="api-desc">Pathfinds from this node to the chosen entrance and rotates `sign` to face the first step of that path.</span> |
