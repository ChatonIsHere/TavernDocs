---
title: "PhysicalMaterialChannel"
description: "Which of a physical material's material slots (A to F) to use."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PhysicalMaterialChannel

An **enum** in `Root.Township`, the global namespace.

Which of a physical material's material slots (A to F) to use. Forging, chiselling and the builder dock mostly ask for A.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)

## Values

| Member |
| --- |
| <Link id="m-a" /><code>{"A = 0"}</code> |
| <Link id="m-b" /><code>{"B = 1"}</code> |
| <Link id="m-c" /><code>{"C = 2"}</code> |
| <Link id="m-d" /><code>{"D = 3"}</code> |
| <Link id="m-e" /><code>{"E = 4"}</code> |
| <Link id="m-f" /><code>{"F = 5"}</code> |

## Used in

Members of other types that take, return or hold a `PhysicalMaterialChannel`:

[`ForgedModel<TB, TA>.UpdateMaterial`](/mod/game-api/types/alta-crafting/forgedmodel-tb-ta#m-updatematerial), [`MetalHeatPoint.UpdateMaterial`](/mod/game-api/types/alta-crafting/metalheatpoint#m-updatematerial), [`ChiselingTool.NewMaterial`](/mod/game-api/types/alta-crafting/chiselingtool#m-newmaterial), [`GenericCraftingPieceDefinition.materialChannel`](/mod/game-api/types/alta-crafting/genericcraftingpiecedefinition#m-materialchannel), [`PhysicalMaterial.GetMaterial`](/mod/game-api/types/global-p/physicalmaterial#m-getmaterial), [`PhysicalMaterial.GetNonAtlasedNonDeformingMaterial`](/mod/game-api/types/global-p/physicalmaterial#m-getnonatlasednondeformingmaterial), [`PhysicalMaterial.GetNonDeformingMaterial`](/mod/game-api/types/global-p/physicalmaterial#m-getnondeformingmaterial), [`PhysicalMaterialPart.materialChannel`](/mod/game-api/types/global-p/physicalmaterialpart#m-materialchannel), [`PhysicalMaterialPart.ChangedMaterial.BeginInvoke`](/mod/game-api/types/global-p/physicalmaterialpart-changedmaterial#m-begininvoke), [`PhysicalMaterialPart.ChangedMaterial.Invoke`](/mod/game-api/types/global-p/physicalmaterialpart-changedmaterial#m-invoke).
