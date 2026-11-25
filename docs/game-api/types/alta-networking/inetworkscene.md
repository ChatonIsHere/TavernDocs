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

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Derived types** [`INetworkSceneInternal`](/game-api/types/alta-networking/inetworksceneinternal), [`NetworkScene`](/game-api/types/alta-networking/networkscene), [`LocalNetworkScene`](/game-api/types/global-i-l/localnetworkscene)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunksyncchannel" /><code><Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" ChunkSyncChannel { get; }"}</code> | Connection channel used for chunk sync. |
| <Link id="m-decaymultiplier" /><code>{"float DecayMultiplier { get; }"}</code> | The server's `DecayMultiplier` setting. |
| <Link id="m-embedded" /><code>{"List<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> Embedded { get; }"}</code> | Entities built into the scene rather than spawned. |
| <Link id="m-globalchunk" /><code><Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" GlobalChunk { get; }"}</code> | Chunk holding the scene's own entities (managers, fixtures, chunk entities). The server loads it at start and adds every player. |
| <Link id="m-hassavefiles" /><code>{"bool HasSaveFiles { get; }"}</code> | True if the server's `IsSaving` setting is on. |
| <Link id="m-iscustomizationenabled" /><code>{"bool IsCustomizationEnabled { get; }"}</code> | The server's `IsCustomizationEnabled` setting. |
| <Link id="m-issimpleserver" /><code>{"bool IsSimpleServer { get; set; }"}</code> | True for a server that targets Quest; the player limit is then at most 8. |
| <Link id="m-loadingcount" /><code>{"int LoadingCount { get; set; }"}</code> | Counter of things still loading. |
| <Link id="m-respawnpoint" /><code><Link to="/game-api/types/global-s/spawnarea">{"SpawnArea"}</Link>{" RespawnPoint { get; }"}</code> | Area where players respawn. |
| <Link id="m-spawner" /><code><Link to="/game-api/types/alta-networking/spawnmanager">{"SpawnManager"}</Link>{" Spawner { get; }"}</code> | The spawn manager, for spawning and destroying entities. |
| <Link id="m-spawnpoint" /><code>{"Transform SpawnPoint { get; }"}</code> | Default spawn transform. |
| <Link id="m-spawnratemultiplier" /><code>{"float SpawnRateMultiplier { get; }"}</code> | The server's `SpawningRateMultiplier` setting. |
| <Link id="m-voidchunk" /><code><Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" VoidChunk { get; }"}</code> | A parking chunk for bodies waiting for their destination to load. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-serverstarted" /><code>{"event Action ServerStarted"}</code> | Raised when the server has started. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getentity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" GetEntity(uint identifier)"}</code> | Finds an entity by identifier. |

## Used in

Members of other types that take, return or hold a `INetworkScene`:

[`DynamicChunkContentManager.scene`](/game-api/types/alta-world/dynamicchunkcontentmanager#m-scene), [`StreamerHelper.SerializePrefab`](/game-api/types/alta-world/streamerhelper#m-serializeprefab), [`StreamerHelper.WritePositionlessPrefab`](/game-api/types/alta-world/streamerhelper#m-writepositionlessprefab), [`LootHelper.Spawn`](/game-api/types/alta-world-generation/loothelper#m-spawn-2), [`EntityManager.EntityManager`](/game-api/types/alta-networking/entitymanager#m-ctor), [`EntityManager.networkScene`](/game-api/types/alta-networking/entitymanager#m-networkscene), [`NetworkEntity.EditorSafeScene`](/game-api/types/alta-networking/networkentity#m-editorsafescene), [`NetworkEntity.Initialize`](/game-api/types/alta-networking/networkentity#m-initialize), [`NetworkEntity.Scene`](/game-api/types/alta-networking/networkentity#m-scene), [`SpawnManager.NetworkScene`](/game-api/types/alta-networking/spawnmanager#m-networkscene), [`SpawnManager.SpawnManager`](/game-api/types/alta-networking/spawnmanager#m-ctor), [`StreamEntityExtensions.SerializeNetworkEntity`](/game-api/types/alta-networking/streamentityextensions#m-serializenetworkentity), [`PresetTree.GenerateRunTimeTree`](/game-api/types/alta-crafting/presettree#m-generateruntimetree), [`PresetTree.GenerateRunTimeTreeWithoutParent`](/game-api/types/alta-crafting/presettree#m-generateruntimetreewithoutparent), [`PresetTree.HandleEditorStep`](/game-api/types/alta-crafting/presettree#m-handleeditorstep), [`PresetTree.SpawnAndInitWoodcutTree`](/game-api/types/alta-crafting/presettree#m-spawnandinitwoodcuttree), [`LocalSpawnManager.LocalSpawnManager`](/game-api/types/global-i-l/localspawnmanager#m-ctor), [`NetworkSceneManager.Current`](/game-api/types/global-m-o/networkscenemanager#m-current), [`Player.Initialize`](/game-api/types/global-p/player#m-initialize).
