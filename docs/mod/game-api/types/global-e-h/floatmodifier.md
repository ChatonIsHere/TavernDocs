---
title: "FloatModifier"
description: "Base for components that take a float, change it and pass it on through a float event."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FloatModifier

An **abstract class** in `Root.Township`, the global namespace.

Base for components that take a float, change it and pass it on through a float event. Subclasses include `LerpModifier` and `MoveTowardsModifier`.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`LerpModifier`](/mod/game-api/types/global-i-l/lerpmodifier), [`MoveTowardsModifier`](/mod/game-api/types/global-m-o/movetowardsmodifier)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected FloatModifier()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-output" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" output"}</code> | <span className="api-desc">Event that receives the modified value.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-input" /><code>{"abstract void Input(float value)"}</code> | <span className="api-desc">Receives a new input value. Subclasses decide when and what to output.</span> |
| <Link id="m-output-2" /><code>{"protected void Output(float value)"}</code> | <span className="api-desc">Invokes the `output` event with a value.</span> |
