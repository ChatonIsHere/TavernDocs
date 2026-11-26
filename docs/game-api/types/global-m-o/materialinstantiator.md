---
title: "MaterialInstantiator"
description: "Gives each renderer on its object its own copy of its material when it wakes, so changes do not affect other objects."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MaterialInstantiator

A **class** in `Root.Township`, no namespace.

Gives each renderer on its object its own copy of its material when it wakes, so changes do not affect other objects.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MaterialInstantiator()"}</code> |

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Replaces each renderer's shared material with a new copy. |

</details>
