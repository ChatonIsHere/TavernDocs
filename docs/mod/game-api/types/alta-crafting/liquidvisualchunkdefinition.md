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
| <Link id="m-ctor" /><code>{"LiquidVisualChunkDefinition()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-amountvariation" /><code>{"private float amountVariation"}</code> | Random variation in the count, as a share of `numberPerServing`. 0 by default. |
| <Link id="m-assetpathformat" /><code>{"private const string AssetPathFormat"}</code> | Editor asset path pattern for chunk definitions. `GetOrCreate` does nothing in this build. |
| <Link id="m-numberperserving" /><code>{"private int numberPerServing"}</code> | How many chunk visuals spawn per serving. 3 by default. |
| <Link id="m-pooledobjectdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" pooledObjectDefinition"}</code> | Pooled object spawned for each chunk visual. |
| <Link id="m-size" /><code>{"private float size"}</code> | Base scale of each chunk. 1 by default. |
| <Link id="m-sizevariation" /><code>{"private float sizeVariation"}</code> | Random variation in size, as a share of `size`. 0.1 by default. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getorcreate" /><code>{"static "}<Link to="/mod/game-api/types/alta-crafting/liquidvisualchunkdefinition">{"LiquidVisualChunkDefinition"}</Link>{" GetOrCreate(string name, out bool wasCreated)"}</code> | Editor helper to find or create the asset by name. Returns null in this build. |
| <Link id="m-spawnvisuals" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{"> SpawnVisuals(Transform targetTransform, float sizeMultiplier) (iterator)"}</code> | Spawns pooled chunk objects under the target, about `numberPerServing` of them, each scaled by the random size times the multiplier. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getvaluewithrandomvariation" /><code>{"private float GetValueWithRandomVariation(float value, float variation)"}</code> | Returns the value plus or minus a random share of itself, up to `variation`. |

</details>

## Used in

Members of other types that take, return or hold a `LiquidVisualChunkDefinition`:

[`CookableItem.chunkVisual`](/mod/game-api/types/alta-crafting/cookableitem#m-chunkvisual), [`CookableItem.ChunkVisual`](/mod/game-api/types/alta-crafting/cookableitem#m-chunkvisual-2), [`LiquidChunkVisuals.AddNewChunkVisuals`](/mod/game-api/types/alta-crafting/liquidchunkvisuals#m-addnewchunkvisuals), [`LiquidChunkVisuals.CreateVisualForIngredient`](/mod/game-api/types/alta-crafting/liquidchunkvisuals#m-createvisualforingredient), [`LiquidChunkVisuals.existingLiquidChunks`](/mod/game-api/types/alta-crafting/liquidchunkvisuals#m-existingliquidchunks), [`LiquidChunkVisuals.RemoveChunkVisuals`](/mod/game-api/types/alta-crafting/liquidchunkvisuals#m-removechunkvisuals), [`LiquidChunkVisuals.LiquidChunkData.Definition`](/mod/game-api/types/alta-crafting/liquidchunkvisuals-liquidchunkdata#m-definition), [`StewManager.GetChunkVisuals`](/mod/game-api/types/alta-crafting/stewmanager#m-getchunkvisuals), [`LiquidContainerSaveData.CustomData.chunks`](/mod/game-api/types/alta-stats-effects/liquidcontainersavedata-customdata#m-chunks), [`LiquidData.chunkVisuals`](/mod/game-api/types/alta-stats-effects/liquiddata#m-chunkvisuals), [`LiquidData.ChunkVisuals`](/mod/game-api/types/alta-stats-effects/liquiddata#m-chunkvisuals-2), [`LiquidData.LiquidData`](/mod/game-api/types/alta-stats-effects/liquiddata#m-ctor).
