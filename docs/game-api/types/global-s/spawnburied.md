---
title: "SpawnBuried"
description: "A dig spot that holds a buried item: the server spawns an item under it, keeps it kinematic and parented, and digging pulls it up."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnBuried

A **class** in `Root.Township`, no namespace.

A dig spot that holds a buried item: the server spawns an item under it, keeps it kinematic and parented, and digging pulls it up. Saved with the item as a child.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`GeneratedNetworkEntityBehaviour`](/game-api/types/alta-networking/generatednetworkentitybehaviour), [`ISavable<SpawnBuriedSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<SpawnBuriedSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase), [`IDigable`](/game-api/types/global-i-l/idigable)
- **Derived types** [`SpawnBuriedSaveData`](/game-api/types/global-s/spawnburiedsavedata)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SpawnBuried()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-pulluppickup" /><code>{"private "}<Link to="/game-api/types/global-p/pullpickup">{"PullPickup"}</Link>{" pullUpPickup"}</code> | The pull handle that lifts the item out when dug. |
| <Link id="m-spawndistribution" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{" spawnDistribution"}</code> | Weighted set of prefabs to bury. Used before `spawnPrefab` if set. |
| <Link id="m-spawneditem" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" spawnedItem"}</code> | The buried item's interactable. |
| <Link id="m-spawnprefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" spawnPrefab"}</code> | Fixed prefab to bury when there is no distribution. |
| <Link id="m-synctarget" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncTarget"}</code> | Method sync used to send the buried entity's ID. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the message sync that tells clients which entity is buried here. It reuses the `PotionCapRemoved` message type. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: spawns an item if none was loaded. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the buried item's ID to a player who joins. |
| <Link id="m-releasespawned" /><code>{"void ReleaseSpawned()"}</code> | Frees the item (unparents, re-enables physics, restores save mode) and destroys the dig spot. |
| <Link id="m-spawn" /><code>{"void Spawn()"}</code> | Server: spawns a random prefab from `spawnDistribution`, or `spawnPrefab` if there is none. |
| <Link id="m-generate" /><code>{"protected override void Generate("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Spawns the buried item when the spot is first generated. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dig" /><code>{"private void IDigable.Dig(float diggingDamage)"}</code> | Called by digging tools. Pulls the buried item up through `pullUpPickup`. |
| <Link id="m-diggingtoolhit" /><code>{"private void IDigable.DiggingToolHit()"}</code> | Empty. |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | Draws a small green sphere at the spot. |
| <Link id="m-registerchild" /><code>{"private void RegisterChild("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent, int childIndex)"}</code> | Load callback: takes the saved child pickup as the buried item. |
| <Link id="m-registerentity" /><code>{"private void RegisterEntity("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" spawnedBehaviour)"}</code> | Parents the spawned entity here, registers it as the buried item and, on a real server, syncs it to the chunk. |
| <Link id="m-registerpickup" /><code>{"private void RegisterPickup()"}</code> | Makes the item a saved child, freezes its physics, applies its `BuriedItemTag` offset and pull distance, and hands it to the pull pickup. |
| <Link id="m-synctarget-2" /><code>{"private void SyncTarget("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads the buried entity's ID; clients wait for that entity to spawn then register it. |

</details>
