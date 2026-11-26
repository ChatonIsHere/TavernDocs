---
title: "SetNetworkPrefabModifier"
description: "Forest fill spawn modifier that replaces each spawn point's prefab with one picked from a pipeline."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SetNetworkPrefabModifier

A **class** in `Root.Township`, no namespace.

Forest fill spawn modifier that replaces each spawn point's prefab with one picked from a pipeline. Created as a generation asset.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`SpawnModifierSpawnParameters`](/game-api/types/global-s/spawnmodifierspawnparameters)
- **Derived types** [`SetNetworkPrefabModifier.Create`](/game-api/types/global-s/setnetworkprefabmodifier-create)
- **Nested types** [`Create`](/game-api/types/global-s/setnetworkprefabmodifier-create)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SetNetworkPrefabModifier()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-prefab" /><code>{"private "}<Link to="/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" prefab"}</code> | Object pipeline that gives a `NetworkPrefab`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"override void Filter("}<Link to="/game-api/types/alta-world-generation/forestfillcore-setup">{"ForestFillCore.Setup"}</Link>{" setup, ref "}<Link to="/game-api/types/alta-world-generation/spawnparameters">{"SpawnParameters"}</Link>{" point, ref float weight)"}</code> | Sets the point's prefab to the result of `prefab` with default spawn data. |
