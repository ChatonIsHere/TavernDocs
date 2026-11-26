---
title: "MaterialInstantiator"
description: "Gives each renderer on its object its own copy of its material when it wakes, so changes do not affect other objects."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MaterialInstantiator

A **class** in `Root.Township`, the global namespace.

Gives each renderer on its object its own copy of its material when it wakes, so changes do not affect other objects.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MaterialInstantiator()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Replaces each renderer's shared material with a new copy.</span> |

</details>
