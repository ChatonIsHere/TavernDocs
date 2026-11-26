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

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SerializedTransform()"}</code> | Creates a `SerializedTransform` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | Saved position. |
| <Link id="m-rotation" /><code>{"Quaternion rotation"}</code> | Saved rotation. |
| <Link id="m-scale" /><code>{"Vector3 scale"}</code> | Saved local scale. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-save" /><code>{"static "}<Link to="/game-api/types/alta-crafting/serializedtransform">{"SerializedTransform"}</Link>{" Save(Transform transform)"}</code> | Captures a transform's local values, or its position and rotation relative to a given matrix. |
| <Link id="m-save-2" /><code>{"static "}<Link to="/game-api/types/alta-crafting/serializedtransform">{"SerializedTransform"}</Link>{" Save(Transform transform, Matrix4x4 worldToLocal)"}</code> | Captures a transform's local values, or its position and rotation relative to a given matrix. |

## Used in

Members of other types that take, return or hold a `SerializedTransform`:

[`GenericAssemblyPart.downHangingPosition`](/game-api/types/alta-crafting/genericassemblypart#m-downhangingposition), [`GenericAssemblyPart.upHangingPosition`](/game-api/types/alta-crafting/genericassemblypart#m-uphangingposition), [`GenericCraftingPieceDefinition.position`](/game-api/types/alta-crafting/genericcraftingpiecedefinition#m-position), [`GenericCraftingRecipe.spawnOffset`](/game-api/types/alta-crafting/genericcraftingrecipe#m-spawnoffset), [`GenericCraftingRecipe.SpawnOffset`](/game-api/types/alta-crafting/genericcraftingrecipe#m-spawnoffset-2), [`NailSettings.nails`](/game-api/types/alta-crafting/nailsettings#m-nails).
