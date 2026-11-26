---
title: "SetRenderQueue"
description: "Component that sets the render queue on the materials of its renderers on Awake, and on its direct children if enabled."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SetRenderQueue

A **class** in `Root.Township`, `Alta.Utilities`.

Component that sets the render queue on the materials of its renderers on `Awake`, and on its direct children if enabled.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SetRenderQueue()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-renderqueue" /><code>{"protected int renderQueue"}</code> | Render queue to set. Default 3000 (transparent). |

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ischangingchildren" /><code>{"private bool isChangingChildren"}</code> | Whether direct children are changed too. Default true. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected void Awake()"}</code> | Applies the render queue to this object and, if `isChangingChildren`, to each direct child. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-setrenderqueues" /><code>{"private void SetRenderQueues(Transform objectToSet)"}</code> | Sets the render queue on every material of every renderer on one transform. Uses `materials`, so materials are instanced. |

</details>
