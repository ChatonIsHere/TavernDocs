---
title: "ToolBasedEffect"
description: "A pooled tool effect that fades a material's _Progress value between a minimum and maximum over a set time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ToolBasedEffect

A **class** in `Root.Township`, the global namespace.

A pooled tool effect that fades a material's `_Progress` value between a minimum and maximum over a set time. Subclass of `ToolBasedEffectBase`.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`ToolBasedEffectBase`](/mod/game-api/types/global-t-x/toolbasedeffectbase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ToolBasedEffect()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animationduration" /><code>{"private float animationDuration"}</code> | <span className="api-desc">Seconds the fade takes.</span> |
| <Link id="m-maxvalue" /><code>{"private float maxvalue"}</code> | <span className="api-desc">`_Progress` value at the hidden end of the fade (default 1).</span> |
| <Link id="m-minvalue" /><code>{"private float minValue"}</code> | <span className="api-desc">`_Progress` value at the shown end of the fade.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-animate" /><code>{"protected override IEnumerator Animate(bool isIn) (iterator)"}</code> | <span className="api-desc">Coroutine that lerps `_Progress` from max to min when going in, or min to max when going out, then cleans up and releases on the way out.</span> |
