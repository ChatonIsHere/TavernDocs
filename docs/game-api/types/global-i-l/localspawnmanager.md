---
title: "LocalSpawnManager"
description: "Spawn manager for LocalNetworkScene: spawns and destroys prefabs locally with no networking."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LocalSpawnManager

A **class** in `Root.Township`, no namespace.

Spawn manager for `LocalNetworkScene`: spawns and destroys prefabs locally with no networking. Client-side spawn methods aren't implemented.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`SpawnManager`](/game-api/types/alta-networking/spawnmanager)
- **Documented in** [Spawning](/game-api/world/spawning)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LocalSpawnManager("}<Link to="/game-api/types/alta-networking/inetworkscene">{"INetworkScene"}</Link>{" networkScene, "}<Link to="/game-api/types/alta-networking/ilinkprovider">{"ILinkProvider"}</Link>{" linkProvider)"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-destroy" /><code>{"override void Destroy("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" networkEntity, bool isUnload = false)"}</code> | Runs the entity's destroy hooks, destroys embedded and child prefabs, then the game object. |
| <Link id="m-spawnasclient" /><code>{"override bool SpawnAsClient(uint prefabHash, uint entityIdentifier, uint[] embeddedIdentifiers, TransformSave transformSave, bool isSettingScale, out "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Not implemented; throws. |
| <Link id="m-spawnexisting" /><code>{"override void SpawnExisting("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> | Not implemented; throws. |
| <Link id="m-spawninternal" /><code>{"override "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" SpawnInternal(uint prefabHash)"}</code> | Instantiates the prefab with this hash, marks it and its embedded entities initialized, and turns off networking on its interactables. |
| <Link id="m-waitforspawn" /><code>{"override bool WaitForSpawn(uint entityIdentifier, "}<Link to="/game-api/types/alta-networking/entityspawnedhandler">{"EntitySpawnedHandler"}</Link>{" handler)"}</code> | Not implemented; throws. |
