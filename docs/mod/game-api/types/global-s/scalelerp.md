---
title: "ScaleLerp"
description: "Sets a uniform local scale between two values from a 0 to 1 progress value."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ScaleLerp

A **class** in `Root.Township`, the global namespace.

Sets a uniform local scale between two values from a 0 to 1 progress value. Driven by events.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ScaleLerp()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-scale0" /><code>{"private float scale0"}</code> | <span className="api-desc">Scale at progress 0.</span> |
| <Link id="m-scale1" /><code>{"private float scale1"}</code> | <span className="api-desc">Scale at progress 1.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setscale" /><code>{"void SetScale(float progress)"}</code> | <span className="api-desc">Sets the local scale to the lerp of `scale0` and `scale1` by `progress`.</span> |
