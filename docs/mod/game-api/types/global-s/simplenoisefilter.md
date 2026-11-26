---
title: "SimpleNoiseFilter"
description: "Forest spawn point modifier asset that scales each point's spawn weight by simplex noise, giving patchy placement."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SimpleNoiseFilter

A **class** in `Root.Township`, the global namespace.

Forest spawn point modifier asset that scales each point's spawn weight by simplex noise, giving patchy placement.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`SpawnModifierPoint`](/mod/game-api/types/global-s/spawnmodifierpoint)
- **Derived types** [`SimpleNoiseFilter.Create`](/mod/game-api/types/global-s/simplenoisefilter-create)
- **Nested types** [`Create`](/mod/game-api/types/global-s/simplenoisefilter-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SimpleNoiseFilter()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-scale" /><code>{"private float scale"}</code> | Multiplier on point coordinates before sampling noise. Larger means smaller patches. |
| <Link id="m-seed" /><code>{"private Vector2 seed"}</code> | Offset into the noise so different filters give different patterns. |
| <Link id="m-valuecurve" /><code>{"private AnimationCurve valueCurve"}</code> | Maps the 0 to 1 noise value to a weight multiplier. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"override void Filter("}<Link to="/mod/game-api/types/alta-world-generation/forestfillcore-setup">{"ForestFillCore.Setup"}</Link>{" setup, ref "}<Link to="/mod/game-api/types/alta-world-generation/pointedge">{"PointEdge"}</Link>{" point, ref float weight)"}</code> | Multiplies the point's weight by `valueCurve` applied to the forest's noise at the point. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Picks a random seed in the editor if none is set. |

</details>
