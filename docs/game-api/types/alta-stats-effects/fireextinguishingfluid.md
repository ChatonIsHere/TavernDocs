---
title: "FireExtinguishingFluid"
description: "Component on a fluid trigger that puts out fires on anything it touches."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FireExtinguishingFluid

A **class** in `Root.Township`, `Alta.Alchemy`.

Component on a fluid trigger that puts out fires on anything it touches.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Heat](/game-api/game-systems/heat)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FireExtinguishingFluid()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | Extinguishes every `Fire` under the touching collider's rigidbody, not instantly. |

</details>
