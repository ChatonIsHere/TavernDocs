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

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SetRenderQueue()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-renderqueue" /><code>{"protected int renderQueue"}</code> | <span className="api-desc">Render queue to set. Default 3000 (transparent).</span> |

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ischangingchildren" /><code>{"private bool isChangingChildren"}</code> | <span className="api-desc">Whether direct children are changed too. Default true.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected void Awake()"}</code> | <span className="api-desc">Applies the render queue to this object and, if `isChangingChildren`, to each direct child.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-setrenderqueues" /><code>{"private void SetRenderQueues(Transform objectToSet)"}</code> | <span className="api-desc">Sets the render queue on every material of every renderer on one transform. Uses `materials`, so materials are instanced.</span> |

</details>
