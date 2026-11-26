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

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`ClusterGenerator`](/mod/game-api/types/alta-world-generation/clustergenerator), [`LiquidContainer`](/mod/game-api/types/alta-stats-effects/liquidcontainer), [`PageInstance`](/mod/game-api/types/alta-items/pageinstance), [`DockByDefault`](/mod/game-api/types/global-c-d/dockbydefault), [`MiningBaseGenerator`](/mod/game-api/types/global-m-o/miningbasegenerator), [`Mould`](/mod/game-api/types/global-m-o/mould), [`PhysicalMaterialPart`](/mod/game-api/types/global-p/physicalmaterialpart), [`PotatoSapling`](/mod/game-api/types/global-p/potatosapling), [`SpawnBuried`](/mod/game-api/types/global-s/spawnburied)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected GeneratedNetworkEntityBehaviour()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isgeneratingfirsttime" /><code>{"protected virtual bool IsGeneratingFirstTime { get; }"}</code> | <span className="api-desc">Override to true to also generate on the first load of a chunk that isn't generating. False by default.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: calls `Generate` if the spawn data says to generate (or it's the first chunk load and `IsGeneratingFirstTime` is set).</span> |
| <Link id="m-generate" /><code>{"protected abstract void Generate("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Builds the content. Implement in subclasses.</span> |
