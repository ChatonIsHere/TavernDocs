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
| <Link id="m-ctor" /><code>{"GenerationStarter()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-biome" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/generatedbiome">{"GeneratedBiome"}</Link>{" biome"}</code> | <span className="api-desc">Biome being generated.</span> |
| <Link id="m-core" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/generationcore">{"GenerationCore"}</Link>{" core"}</code> | <span className="api-desc">The spawned generation core.</span> |
| <Link id="m-isfirstthisruntime" /><code>{"private bool isFirstThisRuntime"}</code> | <span className="api-desc">False when loaded from a save made in this same run.</span> |
| <Link id="m-prefab" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/generationcore">{"GenerationCore"}</Link>{" prefab"}</code> | <span className="api-desc">Generation core prefab to spawn.</span> |
| <Link id="m-preset" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/biomepreset">{"BiomePreset"}</Link>{" preset"}</code> | <span className="api-desc">Optional biome preset that sets the biome.</span> |
| <Link id="m-seed" /><code>{"private int seed"}</code> | <span className="api-desc">Random seed for generation.</span> |
| <Link id="m-sync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | <span className="api-desc">Method sync (`SpawnSeed`).</span> |
| <Link id="m-terrainmodificationid" /><code>{"private uint terrainModificationId"}</code> | <span className="api-desc">ID from `TerrainModificationRegister` that marks whether terrain changes need to be made.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the seed sync and creates the generation core as a child.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: picks a seed when first generating, then generates with it.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends the seed and settings to a joining player.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-syncspawn" /><code>{"private void SyncSpawn("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Sync handler: sends the terrain ID, preset, seed and biome; clients generate the same result.</span> |

</details>
