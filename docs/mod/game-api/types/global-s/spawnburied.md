---
title: "SpawnBuried"
description: "A dig spot that holds a buried item: the server spawns an item under it, keeps it kinematic and parented, and digging pulls it up."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnBuried

A **class** in `Root.Township`, the global namespace.

A dig spot that holds a buried item: the server spawns an item under it, keeps it kinematic and parented, and digging pulls it up. Saved with the item as a child.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`GeneratedNetworkEntityBehaviour`](/mod/game-api/types/alta-networking/generatednetworkentitybehaviour), [`ISavable<SpawnBuriedSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<SpawnBuriedSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase), [`IDigable`](/mod/game-api/types/global-i-l/idigable)
- **Derived types** [`SpawnBuriedSaveData`](/mod/game-api/types/global-s/spawnburiedsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpawnBuried()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-pulluppickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pullpickup">{"PullPickup"}</Link>{" pullUpPickup"}</code> | <span className="api-desc">The pull handle that lifts the item out when dug.</span> |
| <Link id="m-spawndistribution" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{" spawnDistribution"}</code> | <span className="api-desc">Weighted set of prefabs to bury. Used before `spawnPrefab` if set.</span> |
| <Link id="m-spawneditem" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" spawnedItem"}</code> | <span className="api-desc">The buried item's interactable.</span> |
| <Link id="m-spawnprefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" spawnPrefab"}</code> | <span className="api-desc">Fixed prefab to bury when there is no distribution.</span> |
| <Link id="m-synctarget" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncTarget"}</code> | <span className="api-desc">Method sync used to send the buried entity's ID.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the message sync that tells clients which entity is buried here. It reuses the `PotionCapRemoved` message type.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: spawns an item if none was loaded.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends the buried item's ID to a player who joins.</span> |
| <Link id="m-releasespawned" /><code>{"void ReleaseSpawned()"}</code> | <span className="api-desc">Frees the item (unparents, re-enables physics, restores save mode) and destroys the dig spot.</span> |
| <Link id="m-spawn" /><code>{"void Spawn()"}</code> | <span className="api-desc">Server: spawns a random prefab from `spawnDistribution`, or `spawnPrefab` if there is none.</span> |
| <Link id="m-generate" /><code>{"protected override void Generate("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Spawns the buried item when the spot is first generated.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dig" /><code>{"private void IDigable.Dig(float diggingDamage)"}</code> | <span className="api-desc">Called by digging tools. Pulls the buried item up through `pullUpPickup`.</span> |
| <Link id="m-diggingtoolhit" /><code>{"private void IDigable.DiggingToolHit()"}</code> | <span className="api-desc">Empty.</span> |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | <span className="api-desc">Draws a small green sphere at the spot.</span> |
| <Link id="m-registerchild" /><code>{"private void RegisterChild("}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent, int childIndex)"}</code> | <span className="api-desc">Load callback: takes the saved child pickup as the buried item.</span> |
| <Link id="m-registerentity" /><code>{"private void RegisterEntity("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" spawnedBehaviour)"}</code> | <span className="api-desc">Parents the spawned entity here, registers it as the buried item and, on a real server, syncs it to the chunk.</span> |
| <Link id="m-registerpickup" /><code>{"private void RegisterPickup()"}</code> | <span className="api-desc">Makes the item a saved child, freezes its physics, applies its `BuriedItemTag` offset and pull distance, and hands it to the pull pickup.</span> |
| <Link id="m-synctarget-2" /><code>{"private void SyncTarget("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes or reads the buried entity's ID; clients wait for that entity to spawn then register it.</span> |

</details>
