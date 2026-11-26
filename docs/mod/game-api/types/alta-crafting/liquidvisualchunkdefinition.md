---
title: "LiquidVisualChunkDefinition"
description: "An asset that spawns floating chunk visuals in a liquid (such as pieces in a stew), with random count and size variation."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidVisualChunkDefinition

A **class** in `Root.Township`, `Alta.Cooking`.

An asset that spawns floating chunk visuals in a liquid (such as pieces in a stew), with random count and size variation.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`HashedGeneralValue<LiquidVisualChunkDefinition>`](/mod/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`LiquidVisualChunkDefinition`](/mod/game-api/types/alta-crafting/liquidvisualchunkdefinition)
- **Attributes** `HashedPath`
- **Documented in** [Cooking](/mod/game-api/game-systems/cooking)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LiquidVisualChunkDefinition()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-amountvariation" /><code>{"private float amountVariation"}</code> | <span className="api-desc">Random variation in the count, as a share of `numberPerServing`. 0 by default.</span> |
| <Link id="m-assetpathformat" /><code>{"private const string AssetPathFormat"}</code> | <span className="api-desc">Editor asset path pattern for chunk definitions. `GetOrCreate` does nothing in this build.</span> |
| <Link id="m-numberperserving" /><code>{"private int numberPerServing"}</code> | <span className="api-desc">How many chunk visuals spawn per serving. 3 by default.</span> |
| <Link id="m-pooledobjectdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" pooledObjectDefinition"}</code> | <span className="api-desc">Pooled object spawned for each chunk visual.</span> |
| <Link id="m-size" /><code>{"private float size"}</code> | <span className="api-desc">Base scale of each chunk. 1 by default.</span> |
| <Link id="m-sizevariation" /><code>{"private float sizeVariation"}</code> | <span className="api-desc">Random variation in size, as a share of `size`. 0.1 by default.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getorcreate" /><code>{"static "}<Link to="/mod/game-api/types/alta-crafting/liquidvisualchunkdefinition">{"LiquidVisualChunkDefinition"}</Link>{" GetOrCreate(string name, out bool wasCreated)"}</code> | <span className="api-desc">Editor helper to find or create the asset by name. Returns null in this build.</span> |
| <Link id="m-spawnvisuals" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{"> SpawnVisuals(Transform targetTransform, float sizeMultiplier) (iterator)"}</code> | <span className="api-desc">Spawns pooled chunk objects under the target, about `numberPerServing` of them, each scaled by the random size times the multiplier.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getvaluewithrandomvariation" /><code>{"private float GetValueWithRandomVariation(float value, float variation)"}</code> | <span className="api-desc">Returns the value plus or minus a random share of itself, up to `variation`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `LiquidVisualChunkDefinition`:

<div className="api-used-in">

[`CookableItem.chunkVisual`](/mod/game-api/types/alta-crafting/cookableitem#m-chunkvisual), [`CookableItem.ChunkVisual`](/mod/game-api/types/alta-crafting/cookableitem#m-chunkvisual-2), [`LiquidChunkVisuals.AddNewChunkVisuals`](/mod/game-api/types/alta-crafting/liquidchunkvisuals#m-addnewchunkvisuals), [`LiquidChunkVisuals.CreateVisualForIngredient`](/mod/game-api/types/alta-crafting/liquidchunkvisuals#m-createvisualforingredient), [`LiquidChunkVisuals.existingLiquidChunks`](/mod/game-api/types/alta-crafting/liquidchunkvisuals#m-existingliquidchunks), [`LiquidChunkVisuals.RemoveChunkVisuals`](/mod/game-api/types/alta-crafting/liquidchunkvisuals#m-removechunkvisuals), [`LiquidChunkVisuals.LiquidChunkData.Definition`](/mod/game-api/types/alta-crafting/liquidchunkvisuals-liquidchunkdata#m-definition), [`StewManager.GetChunkVisuals`](/mod/game-api/types/alta-crafting/stewmanager#m-getchunkvisuals), [`LiquidContainerSaveData.CustomData.chunks`](/mod/game-api/types/alta-stats-effects/liquidcontainersavedata-customdata#m-chunks), [`LiquidData.chunkVisuals`](/mod/game-api/types/alta-stats-effects/liquiddata#m-chunkvisuals), [`LiquidData.ChunkVisuals`](/mod/game-api/types/alta-stats-effects/liquiddata#m-chunkvisuals-2), [`LiquidData.LiquidData`](/mod/game-api/types/alta-stats-effects/liquiddata#m-ctor).

</div>
