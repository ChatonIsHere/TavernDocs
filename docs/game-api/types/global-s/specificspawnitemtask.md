---
title: "SpecificSpawnItemTask"
description: "Game task asset that counts items produced by crafting or smelting, filtered by product and by recipe kind."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpecificSpawnItemTask

A **class** in `Root.Township`, no namespace.

Game task asset that counts items produced by crafting or smelting, filtered by product and by recipe kind.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`HashSetAction<SpecificSpawnItemTaskArgument>`](/game-api/types/global-e-h/hashsetaction-t)
- **Nested types** [`RecipeFilter`](/game-api/types/global-s/specificspawnitemtask-recipefilter)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpecificSpawnItemTask()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-recipefilter" /><code>{"private "}<Link to="/game-api/types/global-s/specificspawnitemtask-recipefilter">{"SpecificSpawnItemTask.RecipeFilter"}</Link>{" recipeFilter"}</code> | Recipe kinds that count: followed, not followed, smelt, generic. All by default. |
| <Link id="m-targetprefabs" /><code>{"private List<"}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{"> targetPrefabs"}</code> | Products that count. Empty means any. |
| <Link id="m-targetprefabshashes" /><code>{"private HashSet<uint> targetPrefabsHashes"}</code> | Hashes of `targetPrefabs`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channel" /><code>{"override "}<Link to="/game-api/types/global-e-h/gameactionchannel">{"GameActionChannel"}</Link>{" Channel { get; }"}</code> | Listens on the `SpawnItem` game action channel. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"protected override void Initialize()"}</code> | Builds the hash set from `targetPrefabs`. |
| <Link id="m-isvalid" /><code>{"protected override bool IsValid("}<Link to="/game-api/types/global-s/specificspawnitemtaskargument">{"SpecificSpawnItemTaskArgument"}</Link>{" argument)"}</code> | True when the recipe kind matches `recipeFilter` and the product is in `targetPrefabs` (or the list is empty). |
