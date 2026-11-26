---
title: "SpecificSpawnItemTask"
description: "Game task asset that counts items produced by crafting or smelting, filtered by product and by recipe kind."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpecificSpawnItemTask

A **class** in `Root.Township`, the global namespace.

Game task asset that counts items produced by crafting or smelting, filtered by product and by recipe kind.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`HashSetAction<SpecificSpawnItemTaskArgument>`](/mod/game-api/types/global-e-h/hashsetaction-t)
- **Nested types** [`RecipeFilter`](/mod/game-api/types/global-s/specificspawnitemtask-recipefilter)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpecificSpawnItemTask()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-recipefilter" /><code>{"private "}<Link to="/mod/game-api/types/global-s/specificspawnitemtask-recipefilter">{"SpecificSpawnItemTask.RecipeFilter"}</Link>{" recipeFilter"}</code> | <span className="api-desc">Recipe kinds that count: followed, not followed, smelt, generic. All by default.</span> |
| <Link id="m-targetprefabs" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{"> targetPrefabs"}</code> | <span className="api-desc">Products that count. Empty means any.</span> |
| <Link id="m-targetprefabshashes" /><code>{"private HashSet<uint> targetPrefabsHashes"}</code> | <span className="api-desc">Hashes of `targetPrefabs`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channel" /><code>{"override "}<Link to="/mod/game-api/types/global-e-h/gameactionchannel">{"GameActionChannel"}</Link>{" Channel { get; }"}</code> | <span className="api-desc">Listens on the `SpawnItem` game action channel.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"protected override void Initialize()"}</code> | <span className="api-desc">Builds the hash set from `targetPrefabs`.</span> |
| <Link id="m-isvalid" /><code>{"protected override bool IsValid("}<Link to="/mod/game-api/types/global-s/specificspawnitemtaskargument">{"SpecificSpawnItemTaskArgument"}</Link>{" argument)"}</code> | <span className="api-desc">True when the recipe kind matches `recipeFilter` and the product is in `targetPrefabs` (or the list is empty).</span> |
