---
title: "RandomRotationPart"
description: "Generation part that spins its object by a random angle around a local axis when the static generation runs."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RandomRotationPart

A **class** in `Root.Township`, the global namespace.

Generation part that spins its object by a random angle around a local axis when the static generation runs.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** [`GeneratablePart`](/mod/game-api/types/global-e-h/generatablepart)
- **Attributes** `AddComponentMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RandomRotationPart()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-localaxis" /><code>{"private Vector3 localAxis"}</code> | Local axis to spin around. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generatestatic" /><code>{"override void GenerateStatic("}<Link to="/mod/game-api/types/global-e-h/generationcore">{"GenerationCore"}</Link>{" core, bool isModifyingTerrain)"}</code> | Rotates the transform by a random 0 to 360 degrees around `localAxis`. |
