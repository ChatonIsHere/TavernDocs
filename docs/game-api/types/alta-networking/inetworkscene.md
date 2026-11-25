---
title: "INetworkScene"
description: "interface INetworkScene in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# INetworkScene

An **interface** in `Root.Township`, `Alta.Networking`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Derived types** [`INetworkSceneInternal`](/game-api/types/alta-networking/inetworksceneinternal), [`NetworkScene`](/game-api/types/alta-networking/networkscene), [`LocalNetworkScene`](/game-api/types/global-i-l/localnetworkscene)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunksyncchannel" /><code><Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" ChunkSyncChannel { get; }"}</code> |  |
| <Link id="m-decaymultiplier" /><code>{"float DecayMultiplier { get; }"}</code> |  |
| <Link id="m-embedded" /><code>{"List<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> Embedded { get; }"}</code> |  |
| <Link id="m-globalchunk" /><code><Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" GlobalChunk { get; }"}</code> |  |
| <Link id="m-hassavefiles" /><code>{"bool HasSaveFiles { get; }"}</code> |  |
| <Link id="m-iscustomizationenabled" /><code>{"bool IsCustomizationEnabled { get; }"}</code> |  |
| <Link id="m-issimpleserver" /><code>{"bool IsSimpleServer { get; set; }"}</code> |  |
| <Link id="m-loadingcount" /><code>{"int LoadingCount { get; set; }"}</code> |  |
| <Link id="m-respawnpoint" /><code><Link to="/game-api/types/global-s/spawnarea">{"SpawnArea"}</Link>{" RespawnPoint { get; }"}</code> |  |
| <Link id="m-spawner" /><code><Link to="/game-api/types/alta-networking/spawnmanager">{"SpawnManager"}</Link>{" Spawner { get; }"}</code> |  |
| <Link id="m-spawnpoint" /><code>{"Transform SpawnPoint { get; }"}</code> |  |
| <Link id="m-spawnratemultiplier" /><code>{"float SpawnRateMultiplier { get; }"}</code> |  |
| <Link id="m-voidchunk" /><code><Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" VoidChunk { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-serverstarted" /><code>{"event Action ServerStarted"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getentity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" GetEntity(uint identifier)"}</code> |  |

## Used in

Members of other types that take, return or hold a `INetworkScene`:

[`DynamicChunkContentManager.scene`](/game-api/types/alta-world/dynamicchunkcontentmanager#m-scene), [`StreamerHelper.SerializePrefab`](/game-api/types/alta-world/streamerhelper#m-serializeprefab), [`StreamerHelper.WritePositionlessPrefab`](/game-api/types/alta-world/streamerhelper#m-writepositionlessprefab), [`LootHelper.Spawn`](/game-api/types/alta-world-generation/loothelper#m-spawn-2), [`EntityManager.EntityManager`](/game-api/types/alta-networking/entitymanager#m-ctor), [`EntityManager.networkScene`](/game-api/types/alta-networking/entitymanager#m-networkscene), [`NetworkEntity.EditorSafeScene`](/game-api/types/alta-networking/networkentity#m-editorsafescene), [`NetworkEntity.Initialize`](/game-api/types/alta-networking/networkentity#m-initialize), [`NetworkEntity.Scene`](/game-api/types/alta-networking/networkentity#m-scene), [`SpawnManager.NetworkScene`](/game-api/types/alta-networking/spawnmanager#m-networkscene), [`SpawnManager.SpawnManager`](/game-api/types/alta-networking/spawnmanager#m-ctor), [`StreamEntityExtensions.SerializeNetworkEntity`](/game-api/types/alta-networking/streamentityextensions#m-serializenetworkentity), [`PresetTree.GenerateRunTimeTree`](/game-api/types/alta-crafting/presettree#m-generateruntimetree), [`PresetTree.GenerateRunTimeTreeWithoutParent`](/game-api/types/alta-crafting/presettree#m-generateruntimetreewithoutparent), [`PresetTree.HandleEditorStep`](/game-api/types/alta-crafting/presettree#m-handleeditorstep), [`PresetTree.SpawnAndInitWoodcutTree`](/game-api/types/alta-crafting/presettree#m-spawnandinitwoodcuttree), [`LocalSpawnManager.LocalSpawnManager`](/game-api/types/global-i-l/localspawnmanager#m-ctor), [`NetworkSceneManager.Current`](/game-api/types/global-m-o/networkscenemanager#m-current), [`Player.Initialize`](/game-api/types/global-p/player#m-initialize).
