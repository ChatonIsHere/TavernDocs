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

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Derived types** [`ClientSpawnManager`](/game-api/types/alta-networking/clientspawnmanager), [`ServerSpawnManager`](/game-api/types/alta-networking/serverspawnmanager), [`LocalSpawnManager`](/game-api/types/global-i-l/localspawnmanager)
- **Documented in** [Spawning](/game-api/world/spawning#spawnmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpawnManager("}<Link to="/game-api/types/alta-networking/inetworkscene">{"INetworkScene"}</Link>{" networkScene, "}<Link to="/game-api/types/alta-networking/ilinkprovider">{"ILinkProvider"}</Link>{" linkProvider)"}</code> | Creates a `SpawnManager` from `networkScene` and `linkProvider`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-defaultspawnedfolder" /><code>{"Transform DefaultSpawnedFolder { get; private set; }"}</code> | The transform spawned entities are parented under when they have no other parent, for example after being unembedded. |
| <Link id="m-linkprovider" /><code>{"protected "}<Link to="/game-api/types/alta-networking/ilinkprovider">{"ILinkProvider"}</Link>{" LinkProvider { get; private set; }"}</code> | Maps entity identifiers to `NetworkEntityLink` slots. |
| <Link id="m-networkscene" /><code>{"protected "}<Link to="/game-api/types/alta-networking/inetworkscene">{"INetworkScene"}</Link>{" NetworkScene { get; private set; }"}</code> | The network scene this spawner belongs to. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-destroy" /><code>{"abstract void Destroy("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" networkEntity, bool isUnload = false)"}</code> | Destroys an entity (or unloads it when `isUnload` is true). The server version also tells clients first. |
| <Link id="m-destroylocal" /><code>{"void DestroyLocal("}<Link to="/game-api/types/alta-networking/inetworkentity">{"INetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Destroys an entity on this machine only: raises its destroy events, frees its link and destroys its embedded and child entities. |
| <Link id="m-emptynetworkentitylink" /><code>{"void EmptyNetworkEntityLink("}<Link to="/game-api/types/alta-networking/inetworkentity">{"INetworkEntity"}</Link>{" entity)"}</code> | Frees the identifier link for an entity, if the link still points at it. |
| <Link id="m-onspawndestroy" /><code>{"void OnSpawnDestroy("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Destroys an entity locally (not an unload). |
| <Link id="m-onspawnunload" /><code>{"void OnSpawnUnload("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Destroys an entity locally as an unload, so save and destroy handlers see `isUnload` true. |
| <Link id="m-spawn" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Spawn("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> | Spawns a prefab by its hash through `SpawnInternal`. Logs an error and returns null for a null prefab. |
| <Link id="m-spawnasclient" /><code>{"abstract bool SpawnAsClient(uint prefabHash, uint entityIdentifier, uint[] embeddedIdentifiers, TransformSave transformSave, bool isSettingScale, out "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Spawns an entity the server told this client about, with the given identifier and transform. On the server it only returns an existing entity. |
| <Link id="m-spawnexisting-2" /><code>{"abstract void SpawnExisting("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> | Registers an already instantiated prefab as a network entity, giving it a link and initializing it. |
| <Link id="m-spawninternal" /><code>{"abstract "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" SpawnInternal(uint prefab)"}</code> | Spawns a prefab by hash. On the server it takes the next free identifier. |
| <Link id="m-waitforspawn" /><code>{"abstract bool WaitForSpawn(uint entityIdentifier, "}<Link to="/game-api/types/alta-networking/entityspawnedhandler">{"EntitySpawnedHandler"}</Link>{" handler)"}</code> | Calls the handler once the entity with that identifier exists. On the server it only calls it if the entity already exists. |
| <Link id="m-waitforspawnasync" /><code>{"async Task<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> WaitForSpawnAsync(uint entityIdentifier)"}</code> | Awaitable version of `WaitForSpawn`; returns at once if the entity already exists. |
| <Link id="m-cleanembedded" /><code>{"protected void CleanEmbedded("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> | Destroys the game objects of a prefab's embedded entities after the prefab itself is destroyed. |
| <Link id="m-destroychildprefabs" /><code>{"protected void DestroyChildPrefabs("}<Link to="/game-api/types/alta-networking/inetworkentity">{"INetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, bool isUnload)"}</code> | Handles child prefabs of a destroyed entity: on the server, child, creature and ignore save modes are destroyed too; others are unparented to `DefaultSpawnedFolder`. |
| <Link id="m-destroyembedded" /><code>{"protected void DestroyEmbedded("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, bool isUnload)"}</code> | Marks a prefab's embedded entities as being destroyed, raises their destroy events and frees their links. |
| <Link id="m-spawnexisting" /><code>{"protected void SpawnExisting("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, "}<Link to="/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" link, uint[] embeddedIdentifiers)"}</code> | Registers an already instantiated prefab as a network entity, giving it a link and initializing it. |
| <Link id="m-spawnlocal" /><code>{"protected "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" SpawnLocal(uint prefabHash, "}<Link to="/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" link, uint[] embeddedIdentifiers, TransformSave transformSave, bool isSettingScale)"}</code> | Instantiates a prefab by hash at a saved transform and initializes it, or returns the entity already in the link if it matches. |

## Used in

Members of other types that take, return or hold a `SpawnManager`:

[`DynamicChunkContentManager.spawnManager`](/game-api/types/alta-world/dynamicchunkcontentmanager#m-spawnmanager), [`CraftingTester.spawner`](/game-api/types/alta-crafting/craftingtester#m-spawner), [`INetworkScene.Spawner`](/game-api/types/alta-networking/inetworkscene#m-spawner), [`NetworkEntity.Spawner`](/game-api/types/alta-networking/networkentity#m-spawner), [`NetworkScene.Spawner`](/game-api/types/alta-networking/networkscene#m-spawner), [`LocalNetworkScene.Spawner`](/game-api/types/global-i-l/localnetworkscene#m-spawner), [`SpawnHelper.Manager`](/game-api/types/global-s/spawnhelper#m-manager).
