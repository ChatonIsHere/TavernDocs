---
title: "StaticBoundsOverride"
description: "Fixed bounds for a prefab."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StaticBoundsOverride

A **class** in `Root.Township`, the global namespace.

Fixed bounds for a prefab. `GetPointerBounds` uses it instead of measuring renderers and colliders.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StaticBoundsOverride()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bounds" /><code>{"private Bounds bounds"}</code> | <span className="api-desc">Backing field for `Bounds`.</span> |
| <Link id="m-btnreset" /><code>{"private bool btnReset"}</code> | <span className="api-desc">Inspector button that calls `Reset`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bounds-2" /><code>{"Bounds Bounds { get; }"}</code> | <span className="api-desc">The override bounds.</span> |

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws the bounds as a wire box.</span> |
| <Link id="m-reset" /><code>{"private void Reset()"}</code> | <span className="api-desc">Sets the bounds from the object's renderers.</span> |

</details>
