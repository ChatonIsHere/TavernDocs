---
title: "SpawnBuried"
description: "class SpawnBuried in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnBuried

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`GeneratedNetworkEntityBehaviour`](/game-api/types/alta-networking/generatednetworkentitybehaviour), [`ISavable<SpawnBuriedSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<SpawnBuriedSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase), [`IDigable`](/game-api/types/global-i-l/idigable)
- **Derived types** [`SpawnBuriedSaveData`](/game-api/types/global-s/spawnburiedsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpawnBuried()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-pulluppickup" /><code>{"private "}<Link to="/game-api/types/global-p/pullpickup">{"PullPickup"}</Link>{" pullUpPickup"}</code> |  |
| <Link id="m-spawndistribution" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{" spawnDistribution"}</code> |  |
| <Link id="m-spawneditem" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" spawnedItem"}</code> |  |
| <Link id="m-spawnprefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" spawnPrefab"}</code> |  |
| <Link id="m-synctarget" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncTarget"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-releasespawned" /><code>{"void ReleaseSpawned()"}</code> |  |
| <Link id="m-spawn" /><code>{"void Spawn()"}</code> |  |
| <Link id="m-dig" /><code>{"private void IDigable.Dig(float diggingDamage)"}</code> |  |
| <Link id="m-diggingtoolhit" /><code>{"private void IDigable.DiggingToolHit()"}</code> |  |
| <Link id="m-generate" /><code>{"protected override void Generate("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> |  |
| <Link id="m-registerchild" /><code>{"private void RegisterChild("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent, int childIndex)"}</code> |  |
| <Link id="m-registerentity" /><code>{"private void RegisterEntity("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" spawnedBehaviour)"}</code> |  |
| <Link id="m-registerpickup" /><code>{"private void RegisterPickup()"}</code> |  |
| <Link id="m-synctarget-2" /><code>{"private void SyncTarget("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
