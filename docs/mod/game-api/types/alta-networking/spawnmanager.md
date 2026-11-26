---
title: "SpawnManager"
description: "Base for the scene's spawner that instantiates network prefabs, links them to entity identifiers and tears them down."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnManager

An **abstract class** in `Root.Township`, `Alta.Networking`.

Base for the scene's spawner that instantiates network prefabs, links them to entity identifiers and tears them down. Subclasses are `ServerSpawnManager`, `ClientSpawnManager` and `LocalSpawnManager`; reach the current one through the network scene's `Spawner` or `SpawnHelper.Manager`.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Derived types** [`ClientSpawnManager`](/mod/game-api/types/alta-networking/clientspawnmanager), [`ServerSpawnManager`](/mod/game-api/types/alta-networking/serverspawnmanager), [`LocalSpawnManager`](/mod/game-api/types/global-i-l/localspawnmanager)
- **Documented in** [Spawning](/mod/game-api/world/spawning#spawnmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpawnManager("}<Link to="/mod/game-api/types/alta-networking/inetworkscene">{"INetworkScene"}</Link>{" networkScene, "}<Link to="/mod/game-api/types/alta-networking/ilinkprovider">{"ILinkProvider"}</Link>{" linkProvider)"}</code> | <span className="api-desc">Creates a `SpawnManager` from `networkScene` and `linkProvider`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-defaultspawnedfolder" /><code>{"Transform DefaultSpawnedFolder { get; private set; }"}</code> | <span className="api-desc">The transform spawned entities are parented under when they have no other parent, for example after being unembedded.</span> |
| <Link id="m-linkprovider" /><code>{"protected "}<Link to="/mod/game-api/types/alta-networking/ilinkprovider">{"ILinkProvider"}</Link>{" LinkProvider { get; private set; }"}</code> | <span className="api-desc">Maps entity identifiers to `NetworkEntityLink` slots.</span> |
| <Link id="m-networkscene" /><code>{"protected "}<Link to="/mod/game-api/types/alta-networking/inetworkscene">{"INetworkScene"}</Link>{" NetworkScene { get; private set; }"}</code> | <span className="api-desc">The network scene this spawner belongs to.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-destroy" /><code>{"abstract void Destroy("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" networkEntity, bool isUnload = false)"}</code> | <span className="api-desc">Destroys an entity (or unloads it when `isUnload` is true). The server version also tells clients first.</span> |
| <Link id="m-destroylocal" /><code>{"void DestroyLocal("}<Link to="/mod/game-api/types/alta-networking/inetworkentity">{"INetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Destroys an entity on this machine only: raises its destroy events, frees its link and destroys its embedded and child entities.</span> |
| <Link id="m-emptynetworkentitylink" /><code>{"void EmptyNetworkEntityLink("}<Link to="/mod/game-api/types/alta-networking/inetworkentity">{"INetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Frees the identifier link for an entity, if the link still points at it.</span> |
| <Link id="m-onspawndestroy" /><code>{"void OnSpawnDestroy("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Destroys an entity locally (not an unload).</span> |
| <Link id="m-onspawnunload" /><code>{"void OnSpawnUnload("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Destroys an entity locally as an unload, so save and destroy handlers see `isUnload` true.</span> |
| <Link id="m-spawn" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Spawn("}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> | <span className="api-desc">Spawns a prefab by its hash through `SpawnInternal`. Logs an error and returns null for a null prefab.</span> |
| <Link id="m-spawnasclient" /><code>{"abstract bool SpawnAsClient(uint prefabHash, uint entityIdentifier, uint[] embeddedIdentifiers, TransformSave transformSave, bool isSettingScale, out "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Spawns an entity the server told this client about, with the given identifier and transform. On the server it only returns an existing entity.</span> |
| <Link id="m-spawnexisting-2" /><code>{"abstract void SpawnExisting("}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> | <span className="api-desc">Registers an already instantiated prefab as a network entity, giving it a link and initializing it.</span> |
| <Link id="m-spawninternal" /><code>{"abstract "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" SpawnInternal(uint prefab)"}</code> | <span className="api-desc">Spawns a prefab by hash. On the server it takes the next free identifier.</span> |
| <Link id="m-waitforspawn" /><code>{"abstract bool WaitForSpawn(uint entityIdentifier, "}<Link to="/mod/game-api/types/alta-networking/entityspawnedhandler">{"EntitySpawnedHandler"}</Link>{" handler)"}</code> | <span className="api-desc">Calls the handler once the entity with that identifier exists. On the server it only calls it if the entity already exists.</span> |
| <Link id="m-waitforspawnasync" /><code>{"async Task<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> WaitForSpawnAsync(uint entityIdentifier)"}</code> | <span className="api-desc">Awaitable version of `WaitForSpawn`; returns at once if the entity already exists.</span> |
| <Link id="m-cleanembedded" /><code>{"protected void CleanEmbedded("}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> | <span className="api-desc">Destroys the game objects of a prefab's embedded entities after the prefab itself is destroyed.</span> |
| <Link id="m-destroychildprefabs" /><code>{"protected void DestroyChildPrefabs("}<Link to="/mod/game-api/types/alta-networking/inetworkentity">{"INetworkEntity"}</Link>{" entity, "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, bool isUnload)"}</code> | <span className="api-desc">Handles child prefabs of a destroyed entity: on the server, child, creature and ignore save modes are destroyed too; others are unparented to `DefaultSpawnedFolder`.</span> |
| <Link id="m-destroyembedded" /><code>{"protected void DestroyEmbedded("}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, bool isUnload)"}</code> | <span className="api-desc">Marks a prefab's embedded entities as being destroyed, raises their destroy events and frees their links.</span> |
| <Link id="m-spawnexisting" /><code>{"protected void SpawnExisting("}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, "}<Link to="/mod/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" link, uint[] embeddedIdentifiers)"}</code> | <span className="api-desc">Registers an already instantiated prefab as a network entity, giving it a link and initializing it.</span> |
| <Link id="m-spawnlocal" /><code>{"protected "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" SpawnLocal(uint prefabHash, "}<Link to="/mod/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" link, uint[] embeddedIdentifiers, TransformSave transformSave, bool isSettingScale)"}</code> | <span className="api-desc">Instantiates a prefab by hash at a saved transform and initializes it, or returns the entity already in the link if it matches.</span> |

## Used in

Members of other types that take, return or hold a `SpawnManager`:

<div className="api-used-in">

[`DynamicChunkContentManager.spawnManager`](/mod/game-api/types/alta-world/dynamicchunkcontentmanager#m-spawnmanager), [`CraftingTester.spawner`](/mod/game-api/types/alta-crafting/craftingtester#m-spawner), [`INetworkScene.Spawner`](/mod/game-api/types/alta-networking/inetworkscene#m-spawner), [`NetworkEntity.Spawner`](/mod/game-api/types/alta-networking/networkentity#m-spawner), [`NetworkScene.Spawner`](/mod/game-api/types/alta-networking/networkscene#m-spawner), [`LocalNetworkScene.Spawner`](/mod/game-api/types/global-i-l/localnetworkscene#m-spawner), [`SpawnHelper.Manager`](/mod/game-api/types/global-s/spawnhelper#m-manager).

</div>
