---
title: "GenericCraftingPieceDefinition"
description: "One ghost piece in a generic crafting recipe: where it sits, its mesh, the item that fills it, its build level and how easily it breaks off."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GenericCraftingPieceDefinition

A **class** in `Root.Township`, `Alta.Crafting`.

One ghost piece in a generic crafting recipe: where it sits, its mesh, the item that fills it, its build level and how easily it breaks off.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GenericCraftingPieceDefinition()"}</code> | Creates a `GenericCraftingPieceDefinition` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-avoidsatlasing" /><code>{"bool avoidsAtlasing"}</code> | Whether the piece's renderer skips texture atlasing. |
| <Link id="m-collisionmesh" /><code>{"Mesh collisionMesh"}</code> | Mesh used for the piece's collider. |
| <Link id="m-defaultmaterial" /><code>{"Material defaultMaterial"}</code> | Material shown before the piece is filled, probably. |
| <Link id="m-failurehealth" /><code>{"float failureHealth"}</code> | How much bad nailing the piece takes before it fails. |
| <Link id="m-hash" /><code>{"int hash"}</code> | Id of the piece within the recipe. |
| <Link id="m-iscritical" /><code>{"bool isCritical"}</code> | If true, failing this piece may also pop the other pieces of its level. |
| <Link id="m-level" /><code>{"int level"}</code> | Build level. All pieces of a level must be complete before the next level appears. |
| <Link id="m-materialchannel" /><code><Link to="/game-api/types/global-p/physicalmaterialchannel">{"PhysicalMaterialChannel"}</Link>{" materialChannel"}</code> | Which material channel the piece's renderer uses. |
| <Link id="m-mesh" /><code>{"Mesh mesh"}</code> | Mesh shown for the piece. |
| <Link id="m-minchiselhitdamagetofall" /><code>{"float minChiselHitDamageToFall"}</code> | Server: a chisel hit above this knocks the piece off, if it can be removed. |
| <Link id="m-nailsettings" /><code><Link to="/game-api/types/alta-crafting/nailsettings">{"NailSettings"}</Link>{" nailSettings"}</code> | Nails needed to fix the piece in place. |
| <Link id="m-position" /><code><Link to="/game-api/types/alta-crafting/serializedtransform">{"SerializedTransform"}</Link>{" position"}</code> | Where the piece sits on the station. |
| <Link id="m-resulthash" /><code>{"int resultHash"}</code> | Id of the matching part on the finished item, used to copy materials over. |
| <Link id="m-source" /><code><Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" source"}</code> | The item that fills this piece. |

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chancetopopbasedonfailurehealthratio" /><code>{"private AnimationCurve chanceToPopBasedOnFailureHealthRatio"}</code> | Curve from lost failure health (0 to 1) to the chance the piece pops off; used by `GetChanceToPop`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getchancetopop" /><code>{"float GetChanceToPop(float currentFailureHealth)"}</code> | Chance the piece pops off when a critical piece fails, from how much failure health it has lost. |
| <Link id="m-getnewpiece" /><code><Link to="/game-api/types/alta-crafting/genericcraftingpiece">{"GenericCraftingPiece"}</Link>{" GetNewPiece("}<Link to="/game-api/types/alta-crafting/iproject">{"IProject"}</Link>{" project, Transform parent)"}</code> | Takes a pooled piece, parents it and sets it up for a project. |

## Used in

Members of other types that take, return or hold a `GenericCraftingPieceDefinition`:

[`GenericCraftingPiece.definition`](/game-api/types/alta-crafting/genericcraftingpiece#m-definition), [`GenericCraftingPiece.Setup`](/game-api/types/alta-crafting/genericcraftingpiece#m-setup), [`GenericCraftingRecipe.GetDefinition`](/game-api/types/alta-crafting/genericcraftingrecipe#m-getdefinition), [`GenericCraftingRecipe.pieces`](/game-api/types/alta-crafting/genericcraftingrecipe#m-pieces), [`GenericCraftingRecipe.Pieces`](/game-api/types/alta-crafting/genericcraftingrecipe#m-pieces-2).
