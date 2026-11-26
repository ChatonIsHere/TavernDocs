---
title: "AttributeCurveValue"
description: "A CurveValue keyed by a BiomeAttribute: an animation curve tied to one biome attribute, used in world generation."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AttributeCurveValue

A **class** in `Root.Township`, the global namespace.

A `CurveValue` keyed by a `BiomeAttribute`: an animation curve tied to one biome attribute, used in world generation.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`CurveValue<BiomeAttribute>`](/mod/game-api/types/alta-utilities/curvevalue-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AttributeCurveValue()"}</code> | Creates an `AttributeCurveValue` from `topic` and `curve`. |
| <Link id="m-ctor-2" /><code>{"AttributeCurveValue("}<Link to="/mod/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" topic, AnimationCurve curve)"}</code> | Creates an `AttributeCurveValue` from `topic` and `curve`. |

## Used in

Members of other types that take, return or hold a `AttributeCurveValue`:

[`Section.attributeMultipliers`](/mod/game-api/types/alta-world-generation/section#m-attributemultipliers).
