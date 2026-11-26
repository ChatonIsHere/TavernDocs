---
title: "RandomRotationModifier"
description: "Forest fill modifier asset that spins each spawn around Y by a random angle, and can flip it upside down half the time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RandomRotationModifier

A **class** in `Root.Township`, no namespace.

Forest fill modifier asset that spins each spawn around Y by a random angle, and can flip it upside down half the time.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** [`SpawnModifierSpawnParameters`](/game-api/types/global-s/spawnmodifierspawnparameters)
- **Derived types** [`RandomRotationModifier.Create`](/game-api/types/global-q-r/randomrotationmodifier-create)
- **Nested types** [`Create`](/game-api/types/global-q-r/randomrotationmodifier-create)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RandomRotationModifier()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isflippable" /><code>{"private bool isFlippable"}</code> | Allows the random upside-down flip. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"override void Filter("}<Link to="/game-api/types/alta-world-generation/forestfillcore-setup">{"ForestFillCore.Setup"}</Link>{" setup, ref "}<Link to="/game-api/types/alta-world-generation/spawnparameters">{"SpawnParameters"}</Link>{" point, ref float weight)"}</code> | Adds a random Y rotation, plus a 180 degree X flip on half the rolls if flippable. |
