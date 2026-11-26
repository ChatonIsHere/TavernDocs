---
title: "INetworkEntity"
description: "The core of a networked entity as seen by the networking code."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# INetworkEntity

An **interface** in `Root.Township`, `Alta.Networking`.

The core of a networked entity as seen by the networking code. `NetworkEntity` implements it.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Derived types** [`NetworkEntity`](/mod/game-api/types/alta-networking/networkentity), [`IPlayer`](/mod/game-api/types/alta-networking/iplayer), [`Player`](/mod/game-api/types/global-p/player)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-identifier" /><code>{"uint Identifier { get; }"}</code> | The entity's network identifier. |
| <Link id="m-isbeingdestroyed" /><code>{"bool IsBeingDestroyed { get; set; }"}</code> | True once destruction has started. |
| <Link id="m-issendingmessages" /><code>{"bool IsSendingMessages { get; set; }"}</code> | Whether the entity sends its messages. |
| <Link id="m-messagehandler" /><code><Link to="/mod/game-api/types/alta-networking/entitymessagehandler">{"EntityMessageHandler"}</Link>{" MessageHandler { get; }"}</code> | Handles the entity's messages by `EntityMessageType`. |
| <Link id="m-playersspawnedfor" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> PlayersSpawnedFor { get; }"}</code> | Players this entity has been spawned for. |
| <Link id="m-positionchunk" /><code><Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" PositionChunk { get; }"}</code> | The chunk its position is written against: the chunking parent's chunk, or its own. |
| <Link id="m-prefab" /><code><Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" Prefab { get; }"}</code> | The entity's network prefab. |
| <Link id="m-safename" /><code>{"string SafeName { get; }"}</code> | A name for logs that works even if the object is destroyed. |
| <Link id="m-spawnindex" /><code><Link to="/mod/game-api/types/alta-networking/spawnindex">{"SpawnIndex"}</Link>{" "}<Link to="/mod/game-api/types/alta-networking/spawnindex">{"SpawnIndex"}</Link>{" { get; }"}</code> | Spawn counter used to ignore stale destroy messages. |
| <Link id="m-transform" /><code>{"Transform Transform { get; }"}</code> | The entity's transform. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-destroyedbyscene" /><code>{"event "}<Link to="/mod/game-api/types/alta-networking/entitydespawnedhandler">{"EntityDespawnedHandler"}</Link>{" DestroyedByScene"}</code> | Raised when the scene destroys or unloads the entity. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroyedbyscene" /><code>{"void OnDestroyedByScene(bool isUnload)"}</code> | Called when the scene destroys the entity; the flag says if it is an unload. |
| <Link id="m-startcoroutine" /><code><Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" StartCoroutine(IEnumerator enumerator)"}</code> | Starts a coroutine tied to the entity. |

## Used in

Members of other types that take, return or hold a `INetworkEntity`:

[`Chunk.SerializeEntityPosition`](/mod/game-api/types/alta-world/chunk#m-serializeentityposition), [`BaseSync.BaseSync`](/mod/game-api/types/alta-networking/basesync#m-ctor), [`BaseSync.entity`](/mod/game-api/types/alta-networking/basesync#m-entity), [`ClientSync.ClientSync`](/mod/game-api/types/alta-networking/clientsync#m-ctor), [`EntityMessageHandler.entity`](/mod/game-api/types/alta-networking/entitymessagehandler#m-entity), [`EntityMessageHandler.EntityMessageHandler`](/mod/game-api/types/alta-networking/entitymessagehandler#m-ctor), [`InternalMessage.SendToPlayers`](/mod/game-api/types/alta-networking/internalmessage#m-sendtoplayers), [`InternalMessage.SendToServer`](/mod/game-api/types/alta-networking/internalmessage#m-sendtoserver), [`MethodSync.MethodSync`](/mod/game-api/types/alta-networking/methodsync#m-ctor), [`SceneEntityMessage.entity`](/mod/game-api/types/alta-networking/sceneentitymessage#m-entity), [`SceneEntityMessage.Entity`](/mod/game-api/types/alta-networking/sceneentitymessage#m-entity-2), [`SceneEntityMessage.Set`](/mod/game-api/types/alta-networking/sceneentitymessage#m-set), [`ServerSync.ServerSync`](/mod/game-api/types/alta-networking/serversync#m-ctor), [`SpawnManager.DestroyChildPrefabs`](/mod/game-api/types/alta-networking/spawnmanager#m-destroychildprefabs), [`SpawnManager.DestroyLocal`](/mod/game-api/types/alta-networking/spawnmanager#m-destroylocal), [`SpawnManager.EmptyNetworkEntityLink`](/mod/game-api/types/alta-networking/spawnmanager#m-emptynetworkentitylink), [`Sync.entity`](/mod/game-api/types/alta-networking/sync#m-entity), [`Sync.Sync`](/mod/game-api/types/alta-networking/sync#m-ctor), [`SyncFactory.Create`](/mod/game-api/types/alta-networking/syncfactory#m-create).
