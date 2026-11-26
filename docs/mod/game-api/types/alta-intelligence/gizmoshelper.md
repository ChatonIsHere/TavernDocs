---
title: "GizmosHelper"
description: "Editor debugging helper that draws a small sphere at a static position in the Scene view."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GizmosHelper

A **class** in `Root.Township`, `Alta.Intelligence`.

Editor debugging helper that draws a small sphere at a static position in the Scene view. Nothing in the code creates it.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GizmosHelper()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-position" /><code>{"static Vector3 position"}</code> | <span className="api-desc">Where the sphere is drawn. Set it from anywhere.</span> |

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-helper" /><code>{"private static "}<Link to="/mod/game-api/types/alta-intelligence/gizmoshelper">{"GizmosHelper"}</Link>{" helper"}</code> | <span className="api-desc">The single instance, made by `EnsureExist`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-ensureexist" /><code>{"static void EnsureExist()"}</code> | <span className="api-desc">Creates a "Gizmos Helper" GameObject with this component if there isn't one.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Clears the static instance if it's this one.</span> |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | <span className="api-desc">Draws a 0.1 radius sphere at `position`.</span> |

</details>
