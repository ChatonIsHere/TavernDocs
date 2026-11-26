---
title: "RandomRotationModifier"
description: "Forest fill modifier asset that spins each spawn around Y by a random angle, and can flip it upside down half the time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RandomRotationModifier

A **class** in `Root.Township`, the global namespace.

Forest fill modifier asset that spins each spawn around Y by a random angle, and can flip it upside down half the time.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** [`SpawnModifierSpawnParameters`](/mod/game-api/types/global-s/spawnmodifierspawnparameters)
- **Derived types** [`RandomRotationModifier.Create`](/mod/game-api/types/global-q-r/randomrotationmodifier-create)
- **Nested types** [`Create`](/mod/game-api/types/global-q-r/randomrotationmodifier-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RandomRotationModifier()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isflippable" /><code>{"private bool isFlippable"}</code> | <span className="api-desc">Allows the random upside-down flip.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"override void Filter("}<Link to="/mod/game-api/types/alta-world-generation/forestfillcore-setup">{"ForestFillCore.Setup"}</Link>{" setup, ref "}<Link to="/mod/game-api/types/alta-world-generation/spawnparameters">{"SpawnParameters"}</Link>{" point, ref float weight)"}</code> | <span className="api-desc">Adds a random Y rotation, plus a 180 degree X flip on half the rolls if flippable.</span> |
