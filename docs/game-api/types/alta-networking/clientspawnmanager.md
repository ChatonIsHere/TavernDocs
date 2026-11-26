---
title: "ClientSpawnManager"
description: "The client's spawn manager: spawns entities the server tells it about and runs callbacks waiting for an entity to arrive."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClientSpawnManager

A **class** in `Root.Township`, `Alta.Networking`.

The client's spawn manager: spawns entities the server tells it about and runs callbacks waiting for an entity to arrive. Spawning and destroying from the client are refused with an error.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`SpawnManager`](/game-api/types/alta-networking/spawnmanager)
- **Documented in** [Spawning](/game-api/world/spawning)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ClientSpawnManager("}<Link to="/game-api/types/alta-networking/networkscene">{"NetworkScene"}</Link>{" networkScene, "}<Link to="/game-api/types/alta-networking/ilinkprovider">{"ILinkProvider"}</Link>{" linkProvider)"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entityspawnedlisteners" /><code>{"private Dictionary<uint, "}<Link to="/game-api/types/global-t-x/trackedevent-t">{"TrackedEvent"}</Link>{"<"}<Link to="/game-api/types/alta-networking/entityspawnedhandler">{"EntitySpawnedHandler"}</Link>{">> entitySpawnedListeners"}</code> | Callbacks waiting for each entity identifier to spawn. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Logger for this class. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-destroy" /><code>{"override void Destroy("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" networkEntity, bool isUnload)"}</code> | Logs an error; clients cannot destroy entities. |
| <Link id="m-spawnasclient" /><code>{"override bool SpawnAsClient(uint prefabHash, uint entityIdentifier, uint[] embeddedIdentifiers, TransformSave transformSave, bool isSettingScale, out "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Spawns a server-sent entity locally with its identifier and embedded identifiers; returns false if it already exists or the link is fake. |
| <Link id="m-spawnexisting" /><code>{"override void SpawnExisting("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> | Logs an error; clients cannot spawn. |
| <Link id="m-spawninternal" /><code>{"override "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" SpawnInternal(uint prefab)"}</code> | Logs an error and returns null; clients cannot spawn. |
| <Link id="m-waitforspawn" /><code>{"override bool WaitForSpawn(uint entityIdentifier, "}<Link to="/game-api/types/alta-networking/entityspawnedhandler">{"EntitySpawnedHandler"}</Link>{" handler)"}</code> | Runs the handler now if the entity exists, otherwise queues it until the entity spawns. Returns true while waiting. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkspawnevent" /><code>{"private void CheckSpawnEvent("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> | After a spawn, runs any waiting callbacks for the new entity and its embedded entities. |
| <Link id="m-checkspawnevent-2" /><code>{"private void CheckSpawnEvent("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | After a spawn, runs any waiting callbacks for the new entity and its embedded entities. |
| <Link id="m-runspawnevent" /><code>{"private void RunSpawnEvent("}<Link to="/game-api/types/global-t-x/trackedevent-t">{"TrackedEvent"}</Link>{"<"}<Link to="/game-api/types/alta-networking/entityspawnedhandler">{"EntitySpawnedHandler"}</Link>{"> handler, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Starts `SpawnEvent` on the network scene for a waiting callback. |
| <Link id="m-spawnevent" /><code>{"private IEnumerator SpawnEvent("}<Link to="/game-api/types/global-t-x/trackedevent-t">{"TrackedEvent"}</Link>{"<"}<Link to="/game-api/types/alta-networking/entityspawnedhandler">{"EntitySpawnedHandler"}</Link>{"> handler, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity) (iterator)"}</code> | Coroutine: waits to the end of the frame, then runs and clears the waiting callbacks for the entity. |

</details>
