---
title: "ClientSpawnManager"
description: "class ClientSpawnManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClientSpawnManager

A **class** in `Root.Township`, `Alta.Networking`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`SpawnManager`](/game-api/types/alta-networking/spawnmanager)
- **Documented in** [Spawning](/game-api/world/spawning)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClientSpawnManager("}<Link to="/game-api/types/alta-networking/networkscene">{"NetworkScene"}</Link>{" networkScene, "}<Link to="/game-api/types/alta-networking/ilinkprovider">{"ILinkProvider"}</Link>{" linkProvider)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-entityspawnedlisteners" /><code>{"private Dictionary<uint, "}<Link to="/game-api/types/global-t-x/trackedevent-t">{"TrackedEvent"}</Link>{"<"}<Link to="/game-api/types/alta-networking/entityspawnedhandler">{"EntitySpawnedHandler"}</Link>{">> entitySpawnedListeners"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-destroy" /><code>{"override void Destroy("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" networkEntity, bool isUnload)"}</code> |  |
| <Link id="m-spawnasclient" /><code>{"override bool SpawnAsClient(uint prefabHash, uint entityIdentifier, uint[] embeddedIdentifiers, TransformSave transformSave, bool isSettingScale, out "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |
| <Link id="m-spawnexisting" /><code>{"override void SpawnExisting("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> |  |
| <Link id="m-spawninternal" /><code>{"override "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" SpawnInternal(uint prefab)"}</code> |  |
| <Link id="m-waitforspawn" /><code>{"override bool WaitForSpawn(uint entityIdentifier, "}<Link to="/game-api/types/alta-networking/entityspawnedhandler">{"EntitySpawnedHandler"}</Link>{" handler)"}</code> |  |
| <Link id="m-checkspawnevent" /><code>{"private void CheckSpawnEvent("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> |  |
| <Link id="m-checkspawnevent-2" /><code>{"private void CheckSpawnEvent("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |
| <Link id="m-runspawnevent" /><code>{"private void RunSpawnEvent("}<Link to="/game-api/types/global-t-x/trackedevent-t">{"TrackedEvent"}</Link>{"<"}<Link to="/game-api/types/alta-networking/entityspawnedhandler">{"EntitySpawnedHandler"}</Link>{"> handler, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |
| <Link id="m-spawnevent" /><code>{"private IEnumerator SpawnEvent("}<Link to="/game-api/types/global-t-x/trackedevent-t">{"TrackedEvent"}</Link>{"<"}<Link to="/game-api/types/alta-networking/entityspawnedhandler">{"EntitySpawnedHandler"}</Link>{"> handler, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity) (iterator)"}</code> |  |
