---
title: "LiquidVisualChunkDefinition"
description: "class LiquidVisualChunkDefinition in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidVisualChunkDefinition

A **class** in `Root.Township`, `Alta.Cooking`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`HashedGeneralValue<LiquidVisualChunkDefinition>`](/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`LiquidVisualChunkDefinition`](/game-api/types/alta-crafting/liquidvisualchunkdefinition)
- **Attributes** `HashedPath`
- **Documented in** [Cooking](/game-api/game-systems/cooking)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LiquidVisualChunkDefinition()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-amountvariation" /><code>{"private float amountVariation"}</code> |  |
| <Link id="m-assetpathformat" /><code>{"private const string AssetPathFormat"}</code> |  |
| <Link id="m-numberperserving" /><code>{"private int numberPerServing"}</code> |  |
| <Link id="m-pooledobjectdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" pooledObjectDefinition"}</code> |  |
| <Link id="m-size" /><code>{"private float size"}</code> |  |
| <Link id="m-sizevariation" /><code>{"private float sizeVariation"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getorcreate" /><code>{"static "}<Link to="/game-api/types/alta-crafting/liquidvisualchunkdefinition">{"LiquidVisualChunkDefinition"}</Link>{" GetOrCreate(string name, out bool wasCreated)"}</code> |  |
| <Link id="m-spawnvisuals" /><code>{"IEnumerable<"}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{"> SpawnVisuals(Transform targetTransform, float sizeMultiplier) (iterator)"}</code> |  |
| <Link id="m-getvaluewithrandomvariation" /><code>{"private float GetValueWithRandomVariation(float value, float variation)"}</code> |  |

## Used in

Members of other types that take, return or hold a `LiquidVisualChunkDefinition`:

[`CookableItem.chunkVisual`](/game-api/types/alta-crafting/cookableitem#m-chunkvisual), [`CookableItem.ChunkVisual`](/game-api/types/alta-crafting/cookableitem#m-chunkvisual-2), [`LiquidChunkVisuals.AddNewChunkVisuals`](/game-api/types/alta-crafting/liquidchunkvisuals#m-addnewchunkvisuals), [`LiquidChunkVisuals.CreateVisualForIngredient`](/game-api/types/alta-crafting/liquidchunkvisuals#m-createvisualforingredient), [`LiquidChunkVisuals.existingLiquidChunks`](/game-api/types/alta-crafting/liquidchunkvisuals#m-existingliquidchunks), [`LiquidChunkVisuals.RemoveChunkVisuals`](/game-api/types/alta-crafting/liquidchunkvisuals#m-removechunkvisuals), [`LiquidChunkVisuals.LiquidChunkData.Definition`](/game-api/types/alta-crafting/liquidchunkvisuals-liquidchunkdata#m-definition), [`StewManager.GetChunkVisuals`](/game-api/types/alta-crafting/stewmanager#m-getchunkvisuals), [`LiquidContainerSaveData.CustomData.chunks`](/game-api/types/alta-stats-effects/liquidcontainersavedata-customdata#m-chunks), [`LiquidData.chunkVisuals`](/game-api/types/alta-stats-effects/liquiddata#m-chunkvisuals), [`LiquidData.ChunkVisuals`](/game-api/types/alta-stats-effects/liquiddata#m-chunkvisuals-2), [`LiquidData.LiquidData`](/game-api/types/alta-stats-effects/liquiddata#m-ctor).
