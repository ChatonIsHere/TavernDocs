---
title: "PositionLerp"
description: "Moves its object between two local positions by a progress value, for example from a UnityEvent."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PositionLerp

A **class** in `Root.Township`, the global namespace.

Moves its object between two local positions by a progress value, for example from a UnityEvent.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PositionLerp()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-position0" /><code>{"private Vector3 position0"}</code> | <span className="api-desc">Local position at progress 0.</span> |
| <Link id="m-position1" /><code>{"private Vector3 position1"}</code> | <span className="api-desc">Local position at progress 1.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setposition" /><code>{"void SetPosition(float progress)"}</code> | <span className="api-desc">Sets the local position between `position0` (0) and `position1` (1).</span> |
