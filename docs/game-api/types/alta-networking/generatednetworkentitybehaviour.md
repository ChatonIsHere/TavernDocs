---
title: "GeneratedNetworkEntityBehaviour"
description: "abstract class GeneratedNetworkEntityBehaviour in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GeneratedNetworkEntityBehaviour

An **abstract class** in `Root.Township`, `Alta.Networking`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`ClusterGenerator`](/game-api/types/alta-world-generation/clustergenerator), [`LiquidContainer`](/game-api/types/alta-stats-effects/liquidcontainer), [`PageInstance`](/game-api/types/alta-items/pageinstance), [`DockByDefault`](/game-api/types/global-c-d/dockbydefault), [`MiningBaseGenerator`](/game-api/types/global-m-o/miningbasegenerator), [`Mould`](/game-api/types/global-m-o/mould), [`PhysicalMaterialPart`](/game-api/types/global-p/physicalmaterialpart), [`PotatoSapling`](/game-api/types/global-p/potatosapling), [`SpawnBuried`](/game-api/types/global-s/spawnburied)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected GeneratedNetworkEntityBehaviour()"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isgeneratingfirsttime" /><code>{"protected virtual bool IsGeneratingFirstTime { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-generate" /><code>{"protected abstract void Generate("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
