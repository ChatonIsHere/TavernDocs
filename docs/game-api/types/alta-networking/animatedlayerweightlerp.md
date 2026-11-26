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

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`AnimatedLayerWeight`](/game-api/types/alta-networking/animatedlayerweight)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AnimatedLayerWeightLerp(string name)"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-islerping" /><code>{"bool isLerping"}</code> | True while the weight is easing towards the target. |

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lerpprogress" /><code>{"private float lerpProgress"}</code> | Seconds to ease across the full 0 to 1 range (default 0.1). |
| <Link id="m-snapthreshold" /><code>{"private float snapThreshold"}</code> | Changes this large or larger jump at once. Off when 0 or less (the default -1). |
| <Link id="m-target" /><code>{"private float target"}</code> | The weight being eased towards. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-guiname" /><code>{"override string GUIName { get; }"}</code> | Debug name with the target and whether it is easing. |
| <Link id="m-value" /><code>{"override float Value { get; set; }"}</code> | Setting it sets the target and starts easing (or snaps if the jump is past the threshold), marking the value changed for sync. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-lerp" /><code>{"void Lerp()"}</code> | Moves the weight one frame's step towards the target and applies it. Call it each frame. |
| <Link id="m-snap" /><code>{"void Snap(float value)"}</code> | Sets the weight and target at once with no easing, marks it changed and applies it. |

## Used in

Members of other types that take, return or hold a `AnimatedLayerWeightLerp`:

[`AttackDirectionAnimationLayerLerpSettings.LayerAnimation.animatedProperty`](/game-api/types/alta-intelligence/attackdirectionanimationlayerlerpsettings-layeranimation#m-animatedproperty), [`NetworkAnimator.GetLayerWeightLerp`](/game-api/types/alta-networking/networkanimator#m-getlayerweightlerp), [`NetworkAnimator.layerLerpMap`](/game-api/types/alta-networking/networkanimator#m-layerlerpmap), [`NetworkAnimator.layersLerp`](/game-api/types/alta-networking/networkanimator#m-layerslerp).
