---
title: "StaticBoundsOverride"
description: "Fixed bounds for a prefab."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StaticBoundsOverride

A **class** in `Root.Township`, no namespace.

Fixed bounds for a prefab. `GetPointerBounds` uses it instead of measuring renderers and colliders.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StaticBoundsOverride()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bounds" /><code>{"private Bounds bounds"}</code> | Backing field for `Bounds`. |
| <Link id="m-btnreset" /><code>{"private bool btnReset"}</code> | Inspector button that calls `Reset`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bounds-2" /><code>{"Bounds Bounds { get; }"}</code> | The override bounds. |

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Draws the bounds as a wire box. |
| <Link id="m-reset" /><code>{"private void Reset()"}</code> | Sets the bounds from the object's renderers. |

</details>
