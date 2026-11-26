---
title: "ServerSpawnManager"
description: "The server's spawn manager: spawns entities with new identifiers and destroys them."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerSpawnManager

A **class** in `Root.Township`, `Alta.Networking`.

The server's spawn manager: spawns entities with new identifiers and destroys them.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`SpawnManager`](/mod/game-api/types/alta-networking/spawnmanager)
- **Documented in** [Spawning](/mod/game-api/world/spawning)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerSpawnManager("}<Link to="/mod/game-api/types/alta-networking/networkscene">{"NetworkScene"}</Link>{" networkScene, "}<Link to="/mod/game-api/types/alta-networking/ilinkprovider">{"ILinkProvider"}</Link>{" linkProvider)"}</code> | Creates a `ServerSpawnManager` from `networkScene` and `linkProvider`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-destroy" /><code>{"override void Destroy("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Prepares the entity for destruction and destroys it locally. |
| <Link id="m-spawnasclient" /><code>{"override bool SpawnAsClient(uint prefabHash, uint entityIdentifier, uint[] embeddedIdentifiers, TransformSave transformSave, bool isSettingScale, out "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Not used on the server: returns the existing entity if there is one, always returning false. |
| <Link id="m-spawnexisting" /><code>{"override void SpawnExisting("}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> | Registers an existing prefab instance with a new identifier. |
| <Link id="m-spawninternal" /><code>{"override "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" SpawnInternal(uint prefabHash)"}</code> | Spawns a prefab by hash with a new identifier. |
| <Link id="m-waitforspawn" /><code>{"override bool WaitForSpawn(uint entityIdentifier, "}<Link to="/mod/game-api/types/alta-networking/entityspawnedhandler">{"EntitySpawnedHandler"}</Link>{" handler)"}</code> | Runs the handler now if the entity exists; otherwise the handler is dropped. Always returns false. |
