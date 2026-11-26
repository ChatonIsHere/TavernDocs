---
title: "AnimatedLayerWeight"
description: "A networked Animator layer weight, synced as a 0 to 1 float."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnimatedLayerWeight

A **class** in `Root.Township`, `Alta.Networking.Animation`.

A networked `Animator` layer weight, synced as a 0 to 1 float. Set up by `NetworkAnimator`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`AnimatedValue<float>`](/game-api/types/alta-networking/animatedvalue-t)
- **Derived types** [`AnimatedLayerWeightLerp`](/game-api/types/alta-networking/animatedlayerweightlerp)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AnimatedLayerWeight(string name)"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-precision" /><code>{"protected float precision"}</code> | Precision used when sending the weight (default 0.01). |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize("}<Link to="/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" animator, int index)"}</code> | Binds to the animator layer and reads its current weight. |
| <Link id="m-serialize" /><code>{"protected override void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads the weight with `precision`; clients apply it to the animator on read. |
| <Link id="m-update" /><code>{"protected override void Update()"}</code> | Applies the weight to the animator layer. |

## Used in

Members of other types that take, return or hold a `AnimatedLayerWeight`:

[`AnimatedLayerAiHook.weights`](/game-api/types/alta-intelligence/animatedlayeraihook#m-weights), [`NetworkAnimator.GetLayerWeight`](/game-api/types/alta-networking/networkanimator#m-getlayerweight), [`NetworkAnimator.layerMap`](/game-api/types/alta-networking/networkanimator#m-layermap), [`NetworkAnimator.layers`](/game-api/types/alta-networking/networkanimator#m-layers).
