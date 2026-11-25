---
title: "GenerationStarter"
description: "class GenerationStarter in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GenerationStarter

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<GenerationStartSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<GenerationStartSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`GenerationStartSaveData`](/game-api/types/global-e-h/generationstartsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GenerationStarter()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-biome" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/generatedbiome">{"GeneratedBiome"}</Link>{" biome"}</code> |  |
| <Link id="m-core" /><code>{"private "}<Link to="/game-api/types/global-e-h/generationcore">{"GenerationCore"}</Link>{" core"}</code> |  |
| <Link id="m-isfirstthisruntime" /><code>{"private bool isFirstThisRuntime"}</code> |  |
| <Link id="m-prefab" /><code>{"private "}<Link to="/game-api/types/global-e-h/generationcore">{"GenerationCore"}</Link>{" prefab"}</code> |  |
| <Link id="m-preset" /><code>{"private "}<Link to="/game-api/types/global-a-b/biomepreset">{"BiomePreset"}</Link>{" preset"}</code> |  |
| <Link id="m-seed" /><code>{"private int seed"}</code> |  |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> |  |
| <Link id="m-terrainmodificationid" /><code>{"private uint terrainModificationId"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-syncspawn" /><code>{"private void SyncSpawn("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
