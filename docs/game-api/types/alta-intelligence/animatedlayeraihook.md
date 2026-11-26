---
title: "AnimatedLayerAiHook"
description: "AI hook that sets a networked animator layer weight on the creature when the action starts and another when it ends."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnimatedLayerAiHook

A **class** in `Root.Township`, `Alta.Intelligence`.

AI hook that sets a networked animator layer weight on the creature when the action starts and another when it ends.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`AiHook`](/game-api/types/alta-intelligence/aihook)
- **Documented in** [Actions and decisions](/game-api/creatures/actions-and-decisions)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AnimatedLayerAiHook()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-islerp" /><code>{"private bool isLerp"}</code> | Whether the weight blends to new values. Default true. |
| <Link id="m-layername" /><code>{"private string layerName"}</code> | Animator layer name. |
| <Link id="m-weightonend" /><code>{"private float weightOnEnd"}</code> | Weight set when the action ends. Default 1. |
| <Link id="m-weightonstart" /><code>{"private float weightOnStart"}</code> | Weight set when the action starts. Default 1. |
| <Link id="m-weights" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{", "}<Link to="/game-api/types/alta-networking/animatedlayerweight">{"AnimatedLayerWeight"}</Link>{"> weights"}</code> | The networked layer weight per creature, kept until the action ends. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-finishedorcancelled" /><code>{"protected override void FinishedOrCancelled("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> | Sets the layer weight to `weightOnEnd`. |
| <Link id="m-used" /><code>{"protected override void Used("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" active)"}</code> | Sets the layer weight to `weightOnStart`, lerped if `isLerp` is set. |
