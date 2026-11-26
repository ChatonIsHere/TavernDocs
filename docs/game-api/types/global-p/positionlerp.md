---
title: "PositionLerp"
description: "Moves its object between two local positions by a progress value, for example from a UnityEvent."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PositionLerp

A **class** in `Root.Township`, no namespace.

Moves its object between two local positions by a progress value, for example from a UnityEvent.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PositionLerp()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-position0" /><code>{"private Vector3 position0"}</code> | Local position at progress 0. |
| <Link id="m-position1" /><code>{"private Vector3 position1"}</code> | Local position at progress 1. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setposition" /><code>{"void SetPosition(float progress)"}</code> | Sets the local position between `position0` (0) and `position1` (1). |
