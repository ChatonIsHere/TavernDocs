---
title: "GeneratedNetworkEntityBehaviour"
description: "Base for an entity behaviour that builds its content procedurally when it first spawns on the server, rather than loading it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GeneratedNetworkEntityBehaviour

An **abstract class** in `Root.Township`, `Alta.Networking`.

Base for an entity behaviour that builds its content procedurally when it first spawns on the server, rather than loading it.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`ClusterGenerator`](/game-api/types/alta-world-generation/clustergenerator), [`LiquidContainer`](/game-api/types/alta-stats-effects/liquidcontainer), [`PageInstance`](/game-api/types/alta-items/pageinstance), [`DockByDefault`](/game-api/types/global-c-d/dockbydefault), [`MiningBaseGenerator`](/game-api/types/global-m-o/miningbasegenerator), [`Mould`](/game-api/types/global-m-o/mould), [`PhysicalMaterialPart`](/game-api/types/global-p/physicalmaterialpart), [`PotatoSapling`](/game-api/types/global-p/potatosapling), [`SpawnBuried`](/game-api/types/global-s/spawnburied)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected GeneratedNetworkEntityBehaviour()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isgeneratingfirsttime" /><code>{"protected virtual bool IsGeneratingFirstTime { get; }"}</code> | Override to true to also generate on the first load of a chunk that isn't generating. False by default. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: calls `Generate` if the spawn data says to generate (or it's the first chunk load and `IsGeneratingFirstTime` is set). |
| <Link id="m-generate" /><code>{"protected abstract void Generate("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Builds the content. Implement in subclasses. |
