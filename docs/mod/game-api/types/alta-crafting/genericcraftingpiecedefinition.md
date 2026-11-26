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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GenericCraftingPieceDefinition()"}</code> | <span className="api-desc">Creates a `GenericCraftingPieceDefinition` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-avoidsatlasing" /><code>{"bool avoidsAtlasing"}</code> | <span className="api-desc">Whether the piece's renderer skips texture atlasing.</span> |
| <Link id="m-collisionmesh" /><code>{"Mesh collisionMesh"}</code> | <span className="api-desc">Mesh used for the piece's collider.</span> |
| <Link id="m-defaultmaterial" /><code>{"Material defaultMaterial"}</code> | <span className="api-desc">Material shown before the piece is filled, probably.</span> |
| <Link id="m-failurehealth" /><code>{"float failureHealth"}</code> | <span className="api-desc">How much bad nailing the piece takes before it fails.</span> |
| <Link id="m-hash" /><code>{"int hash"}</code> | <span className="api-desc">Id of the piece within the recipe.</span> |
| <Link id="m-iscritical" /><code>{"bool isCritical"}</code> | <span className="api-desc">If true, failing this piece may also pop the other pieces of its level.</span> |
| <Link id="m-level" /><code>{"int level"}</code> | <span className="api-desc">Build level. All pieces of a level must be complete before the next level appears.</span> |
| <Link id="m-materialchannel" /><code><Link to="/mod/game-api/types/global-p/physicalmaterialchannel">{"PhysicalMaterialChannel"}</Link>{" materialChannel"}</code> | <span className="api-desc">Which material channel the piece's renderer uses.</span> |
| <Link id="m-mesh" /><code>{"Mesh mesh"}</code> | <span className="api-desc">Mesh shown for the piece.</span> |
| <Link id="m-minchiselhitdamagetofall" /><code>{"float minChiselHitDamageToFall"}</code> | <span className="api-desc">Server: a chisel hit above this knocks the piece off, if it can be removed.</span> |
| <Link id="m-nailsettings" /><code><Link to="/mod/game-api/types/alta-crafting/nailsettings">{"NailSettings"}</Link>{" nailSettings"}</code> | <span className="api-desc">Nails needed to fix the piece in place.</span> |
| <Link id="m-position" /><code><Link to="/mod/game-api/types/alta-crafting/serializedtransform">{"SerializedTransform"}</Link>{" position"}</code> | <span className="api-desc">Where the piece sits on the station.</span> |
| <Link id="m-resulthash" /><code>{"int resultHash"}</code> | <span className="api-desc">Id of the matching part on the finished item, used to copy materials over.</span> |
| <Link id="m-source" /><code><Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" source"}</code> | <span className="api-desc">The item that fills this piece.</span> |

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chancetopopbasedonfailurehealthratio" /><code>{"private AnimationCurve chanceToPopBasedOnFailureHealthRatio"}</code> | <span className="api-desc">Curve from lost failure health (0 to 1) to the chance the piece pops off; used by `GetChanceToPop`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getchancetopop" /><code>{"float GetChanceToPop(float currentFailureHealth)"}</code> | <span className="api-desc">Chance the piece pops off when a critical piece fails, from how much failure health it has lost.</span> |
| <Link id="m-getnewpiece" /><code><Link to="/mod/game-api/types/alta-crafting/genericcraftingpiece">{"GenericCraftingPiece"}</Link>{" GetNewPiece("}<Link to="/mod/game-api/types/alta-crafting/iproject">{"IProject"}</Link>{" project, Transform parent)"}</code> | <span className="api-desc">Takes a pooled piece, parents it and sets it up for a project.</span> |

## Used in

Members of other types that take, return or hold a `GenericCraftingPieceDefinition`:

<div className="api-used-in">

[`GenericCraftingPiece.definition`](/mod/game-api/types/alta-crafting/genericcraftingpiece#m-definition), [`GenericCraftingPiece.Setup`](/mod/game-api/types/alta-crafting/genericcraftingpiece#m-setup), [`GenericCraftingRecipe.GetDefinition`](/mod/game-api/types/alta-crafting/genericcraftingrecipe#m-getdefinition), [`GenericCraftingRecipe.pieces`](/mod/game-api/types/alta-crafting/genericcraftingrecipe#m-pieces), [`GenericCraftingRecipe.Pieces`](/mod/game-api/types/alta-crafting/genericcraftingrecipe#m-pieces-2).

</div>
