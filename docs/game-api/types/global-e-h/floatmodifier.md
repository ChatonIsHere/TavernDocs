---
title: "FloatModifier"
description: "Base for components that take a float, change it and pass it on through a float event."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FloatModifier

An **abstract class** in `Root.Township`, no namespace.

Base for components that take a float, change it and pass it on through a float event. Subclasses include `LerpModifier` and `MoveTowardsModifier`.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`LerpModifier`](/game-api/types/global-i-l/lerpmodifier), [`MoveTowardsModifier`](/game-api/types/global-m-o/movetowardsmodifier)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected FloatModifier()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-output" /><code>{"private "}<Link to="/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" output"}</code> | Event that receives the modified value. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-input" /><code>{"abstract void Input(float value)"}</code> | Receives a new input value. Subclasses decide when and what to output. |
| <Link id="m-output-2" /><code>{"protected void Output(float value)"}</code> | Invokes the `output` event with a value. |
