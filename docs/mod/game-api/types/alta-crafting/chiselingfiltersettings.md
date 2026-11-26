---
title: "ChiselingFilterSettings"
description: "Impactor filter asset that only lets a hit count when it lands on a ChiselingTool (directly or through attached crafting parts) that is touching a piece,..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChiselingFilterSettings

A **class** in `Root.Township`, `Alta.Carpentry`.

Impactor filter asset that only lets a hit count when it lands on a `ChiselingTool` (directly or through attached crafting parts) that is touching a piece, scaled by direction.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`ImpactorFilter`](/mod/game-api/types/alta-items/impactorfilter)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChiselingFilterSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkfilter" /><code>{"override bool CheckFilter("}<Link to="/mod/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{" contactPoint, out float multiplier)"}</code> | Passes when a chiseling tool on the hit object (or joined to it) is on a piece; the multiplier is how well the hit lines up with the chisel direction. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getbestchiselingtool" /><code>{"private void GetBestChiselingTool("}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" part, "}<Link to="/mod/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{" contactPoint, ref float bestMultiplier)"}</code> | Walks the crafting part's connected slots recursively to find the chisel that was hit and keeps the best direction multiplier. |

</details>
