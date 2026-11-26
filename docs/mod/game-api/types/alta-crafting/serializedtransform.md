---
title: "SerializedTransform"
description: "A saved position, rotation and scale, used for crafting spawn offsets and piece positions."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SerializedTransform

A **class** in `Root.Township`, `Alta.Crafting`.

A saved position, rotation and scale, used for crafting spawn offsets and piece positions.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SerializedTransform()"}</code> | <span className="api-desc">Creates a `SerializedTransform` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | <span className="api-desc">Saved position.</span> |
| <Link id="m-rotation" /><code>{"Quaternion rotation"}</code> | <span className="api-desc">Saved rotation.</span> |
| <Link id="m-scale" /><code>{"Vector3 scale"}</code> | <span className="api-desc">Saved local scale.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-save" /><code>{"static "}<Link to="/mod/game-api/types/alta-crafting/serializedtransform">{"SerializedTransform"}</Link>{" Save(Transform transform)"}</code> | <span className="api-desc">Captures a transform's local values, or its position and rotation relative to a given matrix.</span> |
| <Link id="m-save-2" /><code>{"static "}<Link to="/mod/game-api/types/alta-crafting/serializedtransform">{"SerializedTransform"}</Link>{" Save(Transform transform, Matrix4x4 worldToLocal)"}</code> | <span className="api-desc">Captures a transform's local values, or its position and rotation relative to a given matrix.</span> |

## Used in

Members of other types that take, return or hold a `SerializedTransform`:

<div className="api-used-in">

[`GenericAssemblyPart.downHangingPosition`](/mod/game-api/types/alta-crafting/genericassemblypart#m-downhangingposition), [`GenericAssemblyPart.upHangingPosition`](/mod/game-api/types/alta-crafting/genericassemblypart#m-uphangingposition), [`GenericCraftingPieceDefinition.position`](/mod/game-api/types/alta-crafting/genericcraftingpiecedefinition#m-position), [`GenericCraftingRecipe.spawnOffset`](/mod/game-api/types/alta-crafting/genericcraftingrecipe#m-spawnoffset), [`GenericCraftingRecipe.SpawnOffset`](/mod/game-api/types/alta-crafting/genericcraftingrecipe#m-spawnoffset-2), [`NailSettings.nails`](/mod/game-api/types/alta-crafting/nailsettings#m-nails).

</div>
