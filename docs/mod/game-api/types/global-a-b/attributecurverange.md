---
title: "AttributeCurveRange"
description: "A curve and value range for one biome attribute, as a serializable CurveRange of BiomeAttribute."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AttributeCurveRange

A **class** in `Root.Township`, the global namespace.

A curve and value range for one biome attribute, as a serializable `CurveRange` of `BiomeAttribute`.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`CurveRange<BiomeAttribute>`](/mod/game-api/types/alta-utilities/curverange-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AttributeCurveRange()"}</code> | <span className="api-desc">Creates an `AttributeCurveRange` from `topic`, `curve`, `value1` and `value2`.</span> |
| <Link id="m-ctor-2" /><code>{"AttributeCurveRange("}<Link to="/mod/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" topic, AnimationCurve curve, float value1, float value2)"}</code> | <span className="api-desc">Creates an `AttributeCurveRange` from `topic`, `curve`, `value1` and `value2`.</span> |

## Used in

Members of other types that take, return or hold a `AttributeCurveRange`:

<div className="api-used-in">

[`Distribution<TThis, T, TItem, TFestivityGroup>.globalMultipliers`](/mod/game-api/types/alta-world-generation/distribution-tthis-t-titem-tfestivitygroup#m-globalmultipliers), [`Distribution<TThis, T, TItem, TFestivityGroup>.BaseItem.multipliers`](/mod/game-api/types/alta-world-generation/distribution-tthis-t-titem-tfestivitygroup-baseitem#m-multipliers), [`Element.attributeWeightings`](/mod/game-api/types/alta-world-generation/element#m-attributeweightings), [`AttributeEvaluation.GetEfficiency`](/mod/game-api/types/global-a-b/attributeevaluation#m-getefficiency), [`AttributeUsage.multipliers`](/mod/game-api/types/global-a-b/attributeusage#m-multipliers).

</div>
