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
| <Link id="m-identifier" /><code>{"uint Identifier { get; }"}</code> | <span className="api-desc">The entity's network identifier.</span> |
| <Link id="m-isbeingdestroyed" /><code>{"bool IsBeingDestroyed { get; set; }"}</code> | <span className="api-desc">True once destruction has started.</span> |
| <Link id="m-issendingmessages" /><code>{"bool IsSendingMessages { get; set; }"}</code> | <span className="api-desc">Whether the entity sends its messages.</span> |
| <Link id="m-messagehandler" /><code><Link to="/mod/game-api/types/alta-networking/entitymessagehandler">{"EntityMessageHandler"}</Link>{" MessageHandler { get; }"}</code> | <span className="api-desc">Handles the entity's messages by `EntityMessageType`.</span> |
| <Link id="m-playersspawnedfor" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> PlayersSpawnedFor { get; }"}</code> | <span className="api-desc">Players this entity has been spawned for.</span> |
| <Link id="m-positionchunk" /><code><Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" PositionChunk { get; }"}</code> | <span className="api-desc">The chunk its position is written against: the chunking parent's chunk, or its own.</span> |
| <Link id="m-prefab" /><code><Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" Prefab { get; }"}</code> | <span className="api-desc">The entity's network prefab.</span> |
| <Link id="m-safename" /><code>{"string SafeName { get; }"}</code> | <span className="api-desc">A name for logs that works even if the object is destroyed.</span> |
| <Link id="m-spawnindex" /><code><Link to="/mod/game-api/types/alta-networking/spawnindex">{"SpawnIndex"}</Link>{" "}<Link to="/mod/game-api/types/alta-networking/spawnindex">{"SpawnIndex"}</Link>{" { get; }"}</code> | <span className="api-desc">Spawn counter used to ignore stale destroy messages.</span> |
| <Link id="m-transform" /><code>{"Transform Transform { get; }"}</code> | <span className="api-desc">The entity's transform.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-destroyedbyscene" /><code>{"event "}<Link to="/mod/game-api/types/alta-networking/entitydespawnedhandler">{"EntityDespawnedHandler"}</Link>{" DestroyedByScene"}</code> | <span className="api-desc">Raised when the scene destroys or unloads the entity.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroyedbyscene" /><code>{"void OnDestroyedByScene(bool isUnload)"}</code> | <span className="api-desc">Called when the scene destroys the entity; the flag says if it is an unload.</span> |
| <Link id="m-startcoroutine" /><code><Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" StartCoroutine(IEnumerator enumerator)"}</code> | <span className="api-desc">Starts a coroutine tied to the entity.</span> |

## Used in

Members of other types that take, return or hold a `INetworkEntity`:

<div className="api-used-in">

[`Chunk.SerializeEntityPosition`](/mod/game-api/types/alta-world/chunk#m-serializeentityposition), [`BaseSync.BaseSync`](/mod/game-api/types/alta-networking/basesync#m-ctor), [`BaseSync.entity`](/mod/game-api/types/alta-networking/basesync#m-entity), [`ClientSync.ClientSync`](/mod/game-api/types/alta-networking/clientsync#m-ctor), [`EntityMessageHandler.entity`](/mod/game-api/types/alta-networking/entitymessagehandler#m-entity), [`EntityMessageHandler.EntityMessageHandler`](/mod/game-api/types/alta-networking/entitymessagehandler#m-ctor), [`InternalMessage.SendToPlayers`](/mod/game-api/types/alta-networking/internalmessage#m-sendtoplayers), [`InternalMessage.SendToServer`](/mod/game-api/types/alta-networking/internalmessage#m-sendtoserver), [`MethodSync.MethodSync`](/mod/game-api/types/alta-networking/methodsync#m-ctor), [`SceneEntityMessage.entity`](/mod/game-api/types/alta-networking/sceneentitymessage#m-entity), [`SceneEntityMessage.Entity`](/mod/game-api/types/alta-networking/sceneentitymessage#m-entity-2), [`SceneEntityMessage.Set`](/mod/game-api/types/alta-networking/sceneentitymessage#m-set), [`ServerSync.ServerSync`](/mod/game-api/types/alta-networking/serversync#m-ctor), [`SpawnManager.DestroyChildPrefabs`](/mod/game-api/types/alta-networking/spawnmanager#m-destroychildprefabs), [`SpawnManager.DestroyLocal`](/mod/game-api/types/alta-networking/spawnmanager#m-destroylocal), [`SpawnManager.EmptyNetworkEntityLink`](/mod/game-api/types/alta-networking/spawnmanager#m-emptynetworkentitylink), [`Sync.entity`](/mod/game-api/types/alta-networking/sync#m-entity), [`Sync.Sync`](/mod/game-api/types/alta-networking/sync#m-ctor), [`SyncFactory.Create`](/mod/game-api/types/alta-networking/syncfactory#m-create).

</div>
