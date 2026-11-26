---
title: "GenerationStarter"
description: "Network entity that spawns a GenerationCore and runs procedural generation from a saved seed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GenerationStarter

A **class** in `Root.Township`, the global namespace.

Network entity that spawns a `GenerationCore` and runs procedural generation from a saved seed. The server generates and sends the seed so clients generate the same result.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<GenerationStartSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<GenerationStartSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`GenerationStartSaveData`](/mod/game-api/types/global-e-h/generationstartsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GenerationStarter()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-biome" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/generatedbiome">{"GeneratedBiome"}</Link>{" biome"}</code> | Biome being generated. |
| <Link id="m-core" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/generationcore">{"GenerationCore"}</Link>{" core"}</code> | The spawned generation core. |
| <Link id="m-isfirstthisruntime" /><code>{"private bool isFirstThisRuntime"}</code> | False when loaded from a save made in this same run. |
| <Link id="m-prefab" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/generationcore">{"GenerationCore"}</Link>{" prefab"}</code> | Generation core prefab to spawn. |
| <Link id="m-preset" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/biomepreset">{"BiomePreset"}</Link>{" preset"}</code> | Optional biome preset that sets the biome. |
| <Link id="m-seed" /><code>{"private int seed"}</code> | Random seed for generation. |
| <Link id="m-sync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | Method sync (`SpawnSeed`). |
| <Link id="m-terrainmodificationid" /><code>{"private uint terrainModificationId"}</code> | ID from `TerrainModificationRegister` that marks whether terrain changes need to be made. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the seed sync and creates the generation core as a child. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: picks a seed when first generating, then generates with it. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the seed and settings to a joining player. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-syncspawn" /><code>{"private void SyncSpawn("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Sync handler: sends the terrain ID, preset, seed and biome; clients generate the same result. |

</details>
