---
title: "AnimatedLayerAiHook"
description: "class AnimatedLayerAiHook in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnimatedLayerAiHook

A **class** in `Root.Township`, `Alta.Intelligence`.

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

| Member |
| --- |
| <Link id="m-islerp" /><code>{"private bool isLerp"}</code> |
| <Link id="m-layername" /><code>{"private string layerName"}</code> |
| <Link id="m-weightonend" /><code>{"private float weightOnEnd"}</code> |
| <Link id="m-weightonstart" /><code>{"private float weightOnStart"}</code> |
| <Link id="m-weights" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{", "}<Link to="/game-api/types/alta-networking/animatedlayerweight">{"AnimatedLayerWeight"}</Link>{"> weights"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-finishedorcancelled" /><code>{"protected override void FinishedOrCancelled("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> |
| <Link id="m-used" /><code>{"protected override void Used("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" active)"}</code> |
