---
title: "AnimatedLayerWeightLerp"
description: "class AnimatedLayerWeightLerp in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnimatedLayerWeightLerp

A **class** in `Root.Township`, `Alta.Networking.Animation`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`AnimatedLayerWeight`](/game-api/types/alta-networking/animatedlayerweight)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AnimatedLayerWeightLerp(string name)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-islerping" /><code>{"bool isLerping"}</code> |  |
| <Link id="m-lerpprogress" /><code>{"private float lerpProgress"}</code> |  |
| <Link id="m-snapthreshold" /><code>{"private float snapThreshold"}</code> |  |
| <Link id="m-target" /><code>{"private float target"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-guiname" /><code>{"override string GUIName { get; }"}</code> |  |
| <Link id="m-value" /><code>{"override float Value { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-lerp" /><code>{"void Lerp()"}</code> |  |
| <Link id="m-snap" /><code>{"void Snap(float value)"}</code> |  |

## Used in

Members of other types that take, return or hold a `AnimatedLayerWeightLerp`:

[`AttackDirectionAnimationLayerLerpSettings.LayerAnimation.animatedProperty`](/game-api/types/alta-intelligence/attackdirectionanimationlayerlerpsettings-layeranimation#m-animatedproperty), [`NetworkAnimator.GetLayerWeightLerp`](/game-api/types/alta-networking/networkanimator#m-getlayerweightlerp), [`NetworkAnimator.layerLerpMap`](/game-api/types/alta-networking/networkanimator#m-layerlerpmap), [`NetworkAnimator.layersLerp`](/game-api/types/alta-networking/networkanimator#m-layerslerp).
