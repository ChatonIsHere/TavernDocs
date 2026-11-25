---
title: "INetworkEntity"
description: "interface INetworkEntity in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# INetworkEntity

An **interface** in `Root.Township`, `Alta.Networking`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Derived types** [`NetworkEntity`](/game-api/types/alta-networking/networkentity), [`IPlayer`](/game-api/types/alta-networking/iplayer), [`Player`](/game-api/types/global-p/player)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-identifier" /><code>{"uint Identifier { get; }"}</code> |  |
| <Link id="m-isbeingdestroyed" /><code>{"bool IsBeingDestroyed { get; set; }"}</code> |  |
| <Link id="m-issendingmessages" /><code>{"bool IsSendingMessages { get; set; }"}</code> |  |
| <Link id="m-messagehandler" /><code><Link to="/game-api/types/alta-networking/entitymessagehandler">{"EntityMessageHandler"}</Link>{" MessageHandler { get; }"}</code> |  |
| <Link id="m-playersspawnedfor" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> PlayersSpawnedFor { get; }"}</code> |  |
| <Link id="m-positionchunk" /><code><Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" PositionChunk { get; }"}</code> |  |
| <Link id="m-prefab" /><code><Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" Prefab { get; }"}</code> |  |
| <Link id="m-safename" /><code>{"string SafeName { get; }"}</code> |  |
| <Link id="m-spawnindex" /><code><Link to="/game-api/types/alta-networking/spawnindex">{"SpawnIndex"}</Link>{" "}<Link to="/game-api/types/alta-networking/spawnindex">{"SpawnIndex"}</Link>{" { get; }"}</code> |  |
| <Link id="m-transform" /><code>{"Transform Transform { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-destroyedbyscene" /><code>{"event "}<Link to="/game-api/types/alta-networking/entitydespawnedhandler">{"EntityDespawnedHandler"}</Link>{" DestroyedByScene"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroyedbyscene" /><code>{"void OnDestroyedByScene(bool isUnload)"}</code> |  |
| <Link id="m-startcoroutine" /><code><Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" StartCoroutine(IEnumerator enumerator)"}</code> |  |

## Used in

Members of other types that take, return or hold a `INetworkEntity`:

[`Chunk.SerializeEntityPosition`](/game-api/types/alta-world/chunk#m-serializeentityposition), [`BaseSync.BaseSync`](/game-api/types/alta-networking/basesync#m-ctor), [`BaseSync.entity`](/game-api/types/alta-networking/basesync#m-entity), [`ClientSync.ClientSync`](/game-api/types/alta-networking/clientsync#m-ctor), [`EntityMessageHandler.entity`](/game-api/types/alta-networking/entitymessagehandler#m-entity), [`EntityMessageHandler.EntityMessageHandler`](/game-api/types/alta-networking/entitymessagehandler#m-ctor), [`InternalMessage.SendToPlayers`](/game-api/types/alta-networking/internalmessage#m-sendtoplayers), [`InternalMessage.SendToServer`](/game-api/types/alta-networking/internalmessage#m-sendtoserver), [`MethodSync.MethodSync`](/game-api/types/alta-networking/methodsync#m-ctor), [`SceneEntityMessage.entity`](/game-api/types/alta-networking/sceneentitymessage#m-entity), [`SceneEntityMessage.Entity`](/game-api/types/alta-networking/sceneentitymessage#m-entity-2), [`SceneEntityMessage.Set`](/game-api/types/alta-networking/sceneentitymessage#m-set), [`ServerSync.ServerSync`](/game-api/types/alta-networking/serversync#m-ctor), [`SpawnManager.DestroyChildPrefabs`](/game-api/types/alta-networking/spawnmanager#m-destroychildprefabs), [`SpawnManager.DestroyLocal`](/game-api/types/alta-networking/spawnmanager#m-destroylocal), [`SpawnManager.EmptyNetworkEntityLink`](/game-api/types/alta-networking/spawnmanager#m-emptynetworkentitylink), [`Sync.entity`](/game-api/types/alta-networking/sync#m-entity), [`Sync.Sync`](/game-api/types/alta-networking/sync#m-ctor), [`SyncFactory.Create`](/game-api/types/alta-networking/syncfactory#m-create).
