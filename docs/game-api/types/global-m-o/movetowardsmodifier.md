---
title: "MoveTowardsModifier"
description: "Float modifier that moves its output toward the input value at a fixed speed, in fixed update."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MoveTowardsModifier

A **class** in `Root.Township`, no namespace.

Float modifier that moves its output toward the input value at a fixed speed, in fixed update.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`FloatModifier`](/game-api/types/global-e-h/floatmodifier)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MoveTowardsModifier()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentvalue" /><code>{"private float currentValue"}</code> | Current output value. |
| <Link id="m-speed" /><code>{"private float speed"}</code> | Units per second the value moves. |
| <Link id="m-target" /><code>{"private float target"}</code> | Value being moved toward. |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | Fixed update handle while moving. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-input" /><code>{"override void Input(float value)"}</code> | Sets a new target and starts moving if it changed. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Starts the target at the current value. |
| <Link id="m-movetowards" /><code>{"private void MoveTowards()"}</code> | Steps the value toward the target, outputs it, and stops once it arrives. |

</details>
