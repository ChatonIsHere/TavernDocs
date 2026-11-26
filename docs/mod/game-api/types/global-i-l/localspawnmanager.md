---
title: "LocalSpawnManager"
description: "Spawn manager for LocalNetworkScene: spawns and destroys prefabs locally with no networking."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LocalSpawnManager

A **class** in `Root.Township`, the global namespace.

Spawn manager for `LocalNetworkScene`: spawns and destroys prefabs locally with no networking. Client-side spawn methods aren't implemented.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`SpawnManager`](/mod/game-api/types/alta-networking/spawnmanager)
- **Documented in** [Spawning](/mod/game-api/world/spawning)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LocalSpawnManager("}<Link to="/mod/game-api/types/alta-networking/inetworkscene">{"INetworkScene"}</Link>{" networkScene, "}<Link to="/mod/game-api/types/alta-networking/ilinkprovider">{"ILinkProvider"}</Link>{" linkProvider)"}</code> | <span className="api-desc">Creates a `LocalSpawnManager` from `networkScene` and `linkProvider`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-destroy" /><code>{"override void Destroy("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" networkEntity, bool isUnload = false)"}</code> | <span className="api-desc">Runs the entity's destroy hooks, destroys embedded and child prefabs, then the game object.</span> |
| <Link id="m-spawnasclient" /><code>{"override bool SpawnAsClient(uint prefabHash, uint entityIdentifier, uint[] embeddedIdentifiers, TransformSave transformSave, bool isSettingScale, out "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Not implemented; throws.</span> |
| <Link id="m-spawnexisting" /><code>{"override void SpawnExisting("}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> | <span className="api-desc">Not implemented; throws.</span> |
| <Link id="m-spawninternal" /><code>{"override "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" SpawnInternal(uint prefabHash)"}</code> | <span className="api-desc">Instantiates the prefab with this hash, marks it and its embedded entities initialized, and turns off networking on its interactables.</span> |
| <Link id="m-waitforspawn" /><code>{"override bool WaitForSpawn(uint entityIdentifier, "}<Link to="/mod/game-api/types/alta-networking/entityspawnedhandler">{"EntitySpawnedHandler"}</Link>{" handler)"}</code> | <span className="api-desc">Not implemented; throws.</span> |
