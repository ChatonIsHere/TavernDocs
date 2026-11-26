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

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`AiHook`](/mod/game-api/types/alta-intelligence/aihook)
- **Documented in** [Actions and decisions](/mod/game-api/creatures/actions-and-decisions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AnimatedLayerAiHook()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-islerp" /><code>{"private bool isLerp"}</code> | <span className="api-desc">Whether the weight blends to new values. Default true.</span> |
| <Link id="m-layername" /><code>{"private string layerName"}</code> | <span className="api-desc">Animator layer name.</span> |
| <Link id="m-weightonend" /><code>{"private float weightOnEnd"}</code> | <span className="api-desc">Weight set when the action ends. Default 1.</span> |
| <Link id="m-weightonstart" /><code>{"private float weightOnStart"}</code> | <span className="api-desc">Weight set when the action starts. Default 1.</span> |
| <Link id="m-weights" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{", "}<Link to="/mod/game-api/types/alta-networking/animatedlayerweight">{"AnimatedLayerWeight"}</Link>{"> weights"}</code> | <span className="api-desc">The networked layer weight per creature, kept until the action ends.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-finishedorcancelled" /><code>{"protected override void FinishedOrCancelled("}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> | <span className="api-desc">Sets the layer weight to `weightOnEnd`.</span> |
| <Link id="m-used" /><code>{"protected override void Used("}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" active)"}</code> | <span className="api-desc">Sets the layer weight to `weightOnStart`, lerped if `isLerp` is set.</span> |
