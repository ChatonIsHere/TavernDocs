---
title: "RandomScaleModifier"
description: "Forest fill modifier asset that gives each spawn a random uniform scale from a curve."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RandomScaleModifier

A **class** in `Root.Township`, no namespace.

Forest fill modifier asset that gives each spawn a random uniform scale from a curve.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** [`SpawnModifierSpawnParameters`](/game-api/types/global-s/spawnmodifierspawnparameters)
- **Derived types** [`RandomScaleModifier.Create`](/game-api/types/global-q-r/randomscalemodifier-create)
- **Nested types** [`Create`](/game-api/types/global-q-r/randomscalemodifier-create)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RandomScaleModifier()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-sizecurve" /><code>{"private AnimationCurve sizeCurve"}</code> | Maps a random 0 to 1 value to scale. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"override void Filter("}<Link to="/game-api/types/alta-world-generation/forestfillcore-setup">{"ForestFillCore.Setup"}</Link>{" setup, ref "}<Link to="/game-api/types/alta-world-generation/spawnparameters">{"SpawnParameters"}</Link>{" point, ref float weight)"}</code> | Sets the spawn's scale to the curve value at a random 0 to 1 input. Replaces any earlier scale. |
