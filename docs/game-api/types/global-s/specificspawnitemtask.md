---
title: "SpecificSpawnItemTask"
description: "class SpecificSpawnItemTask in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpecificSpawnItemTask

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`HashSetAction<SpecificSpawnItemTaskArgument>`](/game-api/types/global-e-h/hashsetaction-t)
- **Nested types** [`RecipeFilter`](/game-api/types/global-s/specificspawnitemtask-recipefilter)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SpecificSpawnItemTask()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-recipefilter" /><code>{"private "}<Link to="/game-api/types/global-s/specificspawnitemtask-recipefilter">{"SpecificSpawnItemTask.RecipeFilter"}</Link>{" recipeFilter"}</code> |
| <Link id="m-targetprefabs" /><code>{"private List<"}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{"> targetPrefabs"}</code> |
| <Link id="m-targetprefabshashes" /><code>{"private HashSet<uint> targetPrefabsHashes"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-channel" /><code>{"override "}<Link to="/game-api/types/global-e-h/gameactionchannel">{"GameActionChannel"}</Link>{" Channel { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"protected override void Initialize()"}</code> |
| <Link id="m-isvalid" /><code>{"protected override bool IsValid("}<Link to="/game-api/types/global-s/specificspawnitemtaskargument">{"SpecificSpawnItemTaskArgument"}</Link>{" argument)"}</code> |
