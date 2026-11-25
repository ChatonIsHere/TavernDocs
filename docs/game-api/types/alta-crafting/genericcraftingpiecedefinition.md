---
title: "GenericCraftingPieceDefinition"
description: "class GenericCraftingPieceDefinition in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GenericCraftingPieceDefinition

A **class** in `Root.Township`, `Alta.Crafting`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GenericCraftingPieceDefinition()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-avoidsatlasing" /><code>{"bool avoidsAtlasing"}</code> |  |
| <Link id="m-collisionmesh" /><code>{"Mesh collisionMesh"}</code> |  |
| <Link id="m-defaultmaterial" /><code>{"Material defaultMaterial"}</code> |  |
| <Link id="m-failurehealth" /><code>{"float failureHealth"}</code> |  |
| <Link id="m-hash" /><code>{"int hash"}</code> |  |
| <Link id="m-iscritical" /><code>{"bool isCritical"}</code> |  |
| <Link id="m-level" /><code>{"int level"}</code> |  |
| <Link id="m-materialchannel" /><code><Link to="/game-api/types/global-p/physicalmaterialchannel">{"PhysicalMaterialChannel"}</Link>{" materialChannel"}</code> |  |
| <Link id="m-mesh" /><code>{"Mesh mesh"}</code> |  |
| <Link id="m-minchiselhitdamagetofall" /><code>{"float minChiselHitDamageToFall"}</code> |  |
| <Link id="m-nailsettings" /><code><Link to="/game-api/types/alta-crafting/nailsettings">{"NailSettings"}</Link>{" nailSettings"}</code> |  |
| <Link id="m-position" /><code><Link to="/game-api/types/alta-crafting/serializedtransform">{"SerializedTransform"}</Link>{" position"}</code> |  |
| <Link id="m-resulthash" /><code>{"int resultHash"}</code> |  |
| <Link id="m-source" /><code><Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" source"}</code> |  |
| <Link id="m-chancetopopbasedonfailurehealthratio" /><code>{"private AnimationCurve chanceToPopBasedOnFailureHealthRatio"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getchancetopop" /><code>{"float GetChanceToPop(float currentFailureHealth)"}</code> |  |
| <Link id="m-getnewpiece" /><code><Link to="/game-api/types/alta-crafting/genericcraftingpiece">{"GenericCraftingPiece"}</Link>{" GetNewPiece("}<Link to="/game-api/types/alta-crafting/iproject">{"IProject"}</Link>{" project, Transform parent)"}</code> |  |

## Used in

Members of other types that take, return or hold a `GenericCraftingPieceDefinition`:

[`GenericCraftingPiece.definition`](/game-api/types/alta-crafting/genericcraftingpiece#m-definition), [`GenericCraftingPiece.Setup`](/game-api/types/alta-crafting/genericcraftingpiece#m-setup), [`GenericCraftingRecipe.GetDefinition`](/game-api/types/alta-crafting/genericcraftingrecipe#m-getdefinition), [`GenericCraftingRecipe.pieces`](/game-api/types/alta-crafting/genericcraftingrecipe#m-pieces), [`GenericCraftingRecipe.Pieces`](/game-api/types/alta-crafting/genericcraftingrecipe#m-pieces-2).
