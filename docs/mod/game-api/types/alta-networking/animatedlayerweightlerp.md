---
title: "AnimatedLayerWeightLerp"
description: "A networked layer weight that eases towards a new value instead of jumping."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnimatedLayerWeightLerp

A **class** in `Root.Township`, `Alta.Networking.Animation`.

A networked layer weight that eases towards a new value instead of jumping. Big changes past `snapThreshold` jump at once.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`AnimatedLayerWeight`](/mod/game-api/types/alta-networking/animatedlayerweight)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AnimatedLayerWeightLerp(string name)"}</code> | <span className="api-desc">Creates an `AnimatedLayerWeightLerp` from `name`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-islerping" /><code>{"bool isLerping"}</code> | <span className="api-desc">True while the weight is easing towards the target.</span> |

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lerpprogress" /><code>{"private float lerpProgress"}</code> | <span className="api-desc">Seconds to ease across the full 0 to 1 range (default 0.1).</span> |
| <Link id="m-snapthreshold" /><code>{"private float snapThreshold"}</code> | <span className="api-desc">Changes this large or larger jump at once. Off when 0 or less (the default -1).</span> |
| <Link id="m-target" /><code>{"private float target"}</code> | <span className="api-desc">The weight being eased towards.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-guiname" /><code>{"override string GUIName { get; }"}</code> | <span className="api-desc">Debug name with the target and whether it is easing.</span> |
| <Link id="m-value" /><code>{"override float Value { get; set; }"}</code> | <span className="api-desc">Setting it sets the target and starts easing (or snaps if the jump is past the threshold), marking the value changed for sync.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-lerp" /><code>{"void Lerp()"}</code> | <span className="api-desc">Moves the weight one frame's step towards the target and applies it. Call it each frame.</span> |
| <Link id="m-snap" /><code>{"void Snap(float value)"}</code> | <span className="api-desc">Sets the weight and target at once with no easing, marks it changed and applies it.</span> |

## Used in

Members of other types that take, return or hold a `AnimatedLayerWeightLerp`:

<div className="api-used-in">

[`AttackDirectionAnimationLayerLerpSettings.LayerAnimation.animatedProperty`](/mod/game-api/types/alta-intelligence/attackdirectionanimationlayerlerpsettings-layeranimation#m-animatedproperty), [`NetworkAnimator.GetLayerWeightLerp`](/mod/game-api/types/alta-networking/networkanimator#m-getlayerweightlerp), [`NetworkAnimator.layerLerpMap`](/mod/game-api/types/alta-networking/networkanimator#m-layerlerpmap), [`NetworkAnimator.layersLerp`](/mod/game-api/types/alta-networking/networkanimator#m-layerslerp).

</div>
