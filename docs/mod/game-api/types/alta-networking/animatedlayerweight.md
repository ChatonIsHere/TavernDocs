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

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`AnimatedValue<float>`](/mod/game-api/types/alta-networking/animatedvalue-t)
- **Derived types** [`AnimatedLayerWeightLerp`](/mod/game-api/types/alta-networking/animatedlayerweightlerp)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AnimatedLayerWeight(string name)"}</code> | <span className="api-desc">Creates an `AnimatedLayerWeight` from `name`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-precision" /><code>{"protected float precision"}</code> | <span className="api-desc">Precision used when sending the weight (default 0.01).</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize("}<Link to="/mod/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" animator, int index)"}</code> | <span className="api-desc">Binds to the animator layer and reads its current weight.</span> |
| <Link id="m-serialize" /><code>{"protected override void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes or reads the weight with `precision`; clients apply it to the animator on read.</span> |
| <Link id="m-update" /><code>{"protected override void Update()"}</code> | <span className="api-desc">Applies the weight to the animator layer.</span> |

## Used in

Members of other types that take, return or hold a `AnimatedLayerWeight`:

<div className="api-used-in">

[`AnimatedLayerAiHook.weights`](/mod/game-api/types/alta-intelligence/animatedlayeraihook#m-weights), [`NetworkAnimator.GetLayerWeight`](/mod/game-api/types/alta-networking/networkanimator#m-getlayerweight), [`NetworkAnimator.layerMap`](/mod/game-api/types/alta-networking/networkanimator#m-layermap), [`NetworkAnimator.layers`](/mod/game-api/types/alta-networking/networkanimator#m-layers).

</div>
