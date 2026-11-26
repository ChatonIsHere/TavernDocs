---
title: "MoveTowardsModifier"
description: "Float modifier that moves its output toward the input value at a fixed speed, in fixed update."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MoveTowardsModifier

A **class** in `Root.Township`, the global namespace.

Float modifier that moves its output toward the input value at a fixed speed, in fixed update.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`FloatModifier`](/mod/game-api/types/global-e-h/floatmodifier)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MoveTowardsModifier()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentvalue" /><code>{"private float currentValue"}</code> | <span className="api-desc">Current output value.</span> |
| <Link id="m-speed" /><code>{"private float speed"}</code> | <span className="api-desc">Units per second the value moves.</span> |
| <Link id="m-target" /><code>{"private float target"}</code> | <span className="api-desc">Value being moved toward.</span> |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | <span className="api-desc">Fixed update handle while moving.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-input" /><code>{"override void Input(float value)"}</code> | <span className="api-desc">Sets a new target and starts moving if it changed.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Starts the target at the current value.</span> |
| <Link id="m-movetowards" /><code>{"private void MoveTowards()"}</code> | <span className="api-desc">Steps the value toward the target, outputs it, and stops once it arrives.</span> |

</details>
