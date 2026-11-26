---
title: "INetworkScene"
description: "The networked scene: the spawner, the special chunks and a few server settings everyone can read."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# INetworkScene

An **interface** in `Root.Township`, `Alta.Networking`.

The networked scene: the spawner, the special chunks and a few server settings everyone can read. `NetworkSceneManager.Current` is the one in use.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Derived types** [`INetworkSceneInternal`](/mod/game-api/types/alta-networking/inetworksceneinternal), [`NetworkScene`](/mod/game-api/types/alta-networking/networkscene), [`LocalNetworkScene`](/mod/game-api/types/global-i-l/localnetworkscene)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunksyncchannel" /><code><Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" ChunkSyncChannel { get; }"}</code> | <span className="api-desc">Connection channel used for chunk sync.</span> |
| <Link id="m-decaymultiplier" /><code>{"float DecayMultiplier { get; }"}</code> | <span className="api-desc">The server's `DecayMultiplier` setting.</span> |
| <Link id="m-embedded" /><code>{"List<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> Embedded { get; }"}</code> | <span className="api-desc">Entities built into the scene rather than spawned.</span> |
| <Link id="m-globalchunk" /><code><Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" GlobalChunk { get; }"}</code> | <span className="api-desc">Chunk holding the scene's own entities (managers, fixtures, chunk entities). The server loads it at start and adds every player.</span> |
| <Link id="m-hassavefiles" /><code>{"bool HasSaveFiles { get; }"}</code> | <span className="api-desc">True if the server's `IsSaving` setting is on.</span> |
| <Link id="m-iscustomizationenabled" /><code>{"bool IsCustomizationEnabled { get; }"}</code> | <span className="api-desc">The server's `IsCustomizationEnabled` setting.</span> |
| <Link id="m-issimpleserver" /><code>{"bool IsSimpleServer { get; set; }"}</code> | <span className="api-desc">True for a server that targets Quest; the player limit is then at most 8.</span> |
| <Link id="m-loadingcount" /><code>{"int LoadingCount { get; set; }"}</code> | <span className="api-desc">Counter of things still loading.</span> |
| <Link id="m-respawnpoint" /><code><Link to="/mod/game-api/types/global-s/spawnarea">{"SpawnArea"}</Link>{" RespawnPoint { get; }"}</code> | <span className="api-desc">Area where players respawn.</span> |
| <Link id="m-spawner" /><code><Link to="/mod/game-api/types/alta-networking/spawnmanager">{"SpawnManager"}</Link>{" Spawner { get; }"}</code> | <span className="api-desc">The spawn manager, for spawning and destroying entities.</span> |
| <Link id="m-spawnpoint" /><code>{"Transform SpawnPoint { get; }"}</code> | <span className="api-desc">Default spawn transform.</span> |
| <Link id="m-spawnratemultiplier" /><code>{"float SpawnRateMultiplier { get; }"}</code> | <span className="api-desc">The server's `SpawningRateMultiplier` setting.</span> |
| <Link id="m-voidchunk" /><code><Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" VoidChunk { get; }"}</code> | <span className="api-desc">A parking chunk for bodies waiting for their destination to load.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-serverstarted" /><code>{"event Action ServerStarted"}</code> | <span className="api-desc">Raised when the server has started.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getentity" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" GetEntity(uint identifier)"}</code> | <span className="api-desc">Finds an entity by identifier.</span> |

## Used in

Members of other types that take, return or hold a `INetworkScene`:

<div className="api-used-in">

[`DynamicChunkContentManager.scene`](/mod/game-api/types/alta-world/dynamicchunkcontentmanager#m-scene), [`StreamerHelper.SerializePrefab`](/mod/game-api/types/alta-world/streamerhelper#m-serializeprefab), [`StreamerHelper.WritePositionlessPrefab`](/mod/game-api/types/alta-world/streamerhelper#m-writepositionlessprefab), [`LootHelper.Spawn`](/mod/game-api/types/alta-world-generation/loothelper#m-spawn-2), [`EntityManager.EntityManager`](/mod/game-api/types/alta-networking/entitymanager#m-ctor), [`EntityManager.networkScene`](/mod/game-api/types/alta-networking/entitymanager#m-networkscene), [`NetworkEntity.EditorSafeScene`](/mod/game-api/types/alta-networking/networkentity#m-editorsafescene), [`NetworkEntity.Initialize`](/mod/game-api/types/alta-networking/networkentity#m-initialize), [`NetworkEntity.Scene`](/mod/game-api/types/alta-networking/networkentity#m-scene), [`SpawnManager.NetworkScene`](/mod/game-api/types/alta-networking/spawnmanager#m-networkscene), [`SpawnManager.SpawnManager`](/mod/game-api/types/alta-networking/spawnmanager#m-ctor), [`StreamEntityExtensions.SerializeNetworkEntity`](/mod/game-api/types/alta-networking/streamentityextensions#m-serializenetworkentity), [`PresetTree.GenerateRunTimeTree`](/mod/game-api/types/alta-crafting/presettree#m-generateruntimetree), [`PresetTree.GenerateRunTimeTreeWithoutParent`](/mod/game-api/types/alta-crafting/presettree#m-generateruntimetreewithoutparent), [`PresetTree.HandleEditorStep`](/mod/game-api/types/alta-crafting/presettree#m-handleeditorstep), [`PresetTree.SpawnAndInitWoodcutTree`](/mod/game-api/types/alta-crafting/presettree#m-spawnandinitwoodcuttree), [`LocalSpawnManager.LocalSpawnManager`](/mod/game-api/types/global-i-l/localspawnmanager#m-ctor), [`NetworkSceneManager.Current`](/mod/game-api/types/global-m-o/networkscenemanager#m-current), [`Player.Initialize`](/mod/game-api/types/global-p/player#m-initialize).

</div>
