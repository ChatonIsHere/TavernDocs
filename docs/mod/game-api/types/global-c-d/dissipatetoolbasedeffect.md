---
title: "DissipateToolBasedEffect"
description: "Tool-based effect that fades its material's _Progress from 1 to 0 over a set time, then cleans up and returns to the pool."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DissipateToolBasedEffect

A **class** in `Root.Township`, the global namespace.

Tool-based effect that fades its material's `_Progress` from 1 to 0 over a set time, then cleans up and returns to the pool.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`ToolBasedEffectBase`](/mod/game-api/types/global-t-x/toolbasedeffectbase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DissipateToolBasedEffect()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animationduration" /><code>{"private float animationDuration"}</code> | Seconds the fade takes. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-animate" /><code>{"protected override IEnumerator Animate(bool isIn) (iterator)"}</code> | Fades the progress down over `animationDuration`, then releases. The direction argument is ignored. |
