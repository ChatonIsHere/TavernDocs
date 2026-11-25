---
title: "SpawnManager"
description: "Get it from NetworkSceneManager.Current.Spawner, entity.Spawner or SpawnHelper.Manager."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnManager

An **abstract class** in `Root.Township`, `Alta.Networking`.

Get it from `NetworkSceneManager.Current.Spawner`, `entity.Spawner` or `SpawnHelper.Manager`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Derived types** [`ClientSpawnManager`](/game-api/types/alta-networking/clientspawnmanager), [`ServerSpawnManager`](/game-api/types/alta-networking/serverspawnmanager), [`LocalSpawnManager`](/game-api/types/global-i-l/localspawnmanager)
- **Documented in** [Spawning](/game-api/world/spawning#spawnmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpawnManager("}<Link to="/game-api/types/alta-networking/inetworkscene">{"INetworkScene"}</Link>{" networkScene, "}<Link to="/game-api/types/alta-networking/ilinkprovider">{"ILinkProvider"}</Link>{" linkProvider)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-defaultspawnedfolder" /><code>{"Transform DefaultSpawnedFolder { get; private set; }"}</code> |  |
| <Link id="m-linkprovider" /><code>{"protected "}<Link to="/game-api/types/alta-networking/ilinkprovider">{"ILinkProvider"}</Link>{" LinkProvider { get; private set; }"}</code> |  |
| <Link id="m-networkscene" /><code>{"protected "}<Link to="/game-api/types/alta-networking/inetworkscene">{"INetworkScene"}</Link>{" NetworkScene { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-destroy" /><code>{"abstract void Destroy("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" networkEntity, bool isUnload = false)"}</code> |  |
| <Link id="m-destroylocal" /><code>{"void DestroyLocal("}<Link to="/game-api/types/alta-networking/inetworkentity">{"INetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-emptynetworkentitylink" /><code>{"void EmptyNetworkEntityLink("}<Link to="/game-api/types/alta-networking/inetworkentity">{"INetworkEntity"}</Link>{" entity)"}</code> |  |
| <Link id="m-onspawndestroy" /><code>{"void OnSpawnDestroy("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |
| <Link id="m-onspawnunload" /><code>{"void OnSpawnUnload("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |
| <Link id="m-spawn" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Spawn("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> |  |
| <Link id="m-spawnasclient" /><code>{"abstract bool SpawnAsClient(uint prefabHash, uint entityIdentifier, uint[] embeddedIdentifiers, TransformSave transformSave, bool isSettingScale, out "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |
| <Link id="m-spawnexisting-2" /><code>{"abstract void SpawnExisting("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> |  |
| <Link id="m-spawninternal" /><code>{"abstract "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" SpawnInternal(uint prefab)"}</code> |  |
| <Link id="m-waitforspawn" /><code>{"abstract bool WaitForSpawn(uint entityIdentifier, "}<Link to="/game-api/types/alta-networking/entityspawnedhandler">{"EntitySpawnedHandler"}</Link>{" handler)"}</code> |  |
| <Link id="m-waitforspawnasync" /><code>{"async Task<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> WaitForSpawnAsync(uint entityIdentifier)"}</code> |  |
| <Link id="m-cleanembedded" /><code>{"protected void CleanEmbedded("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> |  |
| <Link id="m-destroychildprefabs" /><code>{"protected void DestroyChildPrefabs("}<Link to="/game-api/types/alta-networking/inetworkentity">{"INetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, bool isUnload)"}</code> |  |
| <Link id="m-destroyembedded" /><code>{"protected void DestroyEmbedded("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, bool isUnload)"}</code> |  |
| <Link id="m-spawnexisting" /><code>{"protected void SpawnExisting("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, "}<Link to="/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" link, uint[] embeddedIdentifiers)"}</code> |  |
| <Link id="m-spawnlocal" /><code>{"protected "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" SpawnLocal(uint prefabHash, "}<Link to="/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" link, uint[] embeddedIdentifiers, TransformSave transformSave, bool isSettingScale)"}</code> |  |

## Used in

Members of other types that take, return or hold a `SpawnManager`:

[`DynamicChunkContentManager.spawnManager`](/game-api/types/alta-world/dynamicchunkcontentmanager#m-spawnmanager), [`CraftingTester.spawner`](/game-api/types/alta-crafting/craftingtester#m-spawner), [`INetworkScene.Spawner`](/game-api/types/alta-networking/inetworkscene#m-spawner), [`NetworkEntity.Spawner`](/game-api/types/alta-networking/networkentity#m-spawner), [`NetworkScene.Spawner`](/game-api/types/alta-networking/networkscene#m-spawner), [`LocalNetworkScene.Spawner`](/game-api/types/global-i-l/localnetworkscene#m-spawner), [`SpawnHelper.Manager`](/game-api/types/global-s/spawnhelper#m-manager).
