---
title: "LandmarkManager"
description: "Singleton network entity behind map landmarks: which markers exist and which each player is aware of or has discovered."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LandmarkManager

A **class** in `Root.Township`, `Alta.Map`.

Singleton network entity behind map landmarks: which markers exist and which each player is aware of or has discovered. The server work is done by its `ServerLandmarkManager`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`SingletonBehaviour<LandmarkManager>`](/game-api/types/assembly-other/singletonbehaviour-t), [`INetworkEntityBehaviour`](/game-api/types/alta-networking/inetworkentitybehaviour), [`ISavable<LandmarkManagerSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<LandmarkManagerSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`LandmarkManager`](/game-api/types/alta-world/landmarkmanager), [`LandmarkManagerSaveData`](/game-api/types/alta-world/landmarkmanagersavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LandmarkManager()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-changesync" /><code>{"private "}<Link to="/game-api/types/alta-networking/controlledwritesync">{"ControlledWriteSync"}</Link>{" changeSync"}</code> | Write sync on `SyncD` that sends landmark changes to clients. |
| <Link id="m-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | Backing field for `Entity`. |
| <Link id="m-initialsync" /><code>{"private "}<Link to="/game-api/types/alta-networking/controlledwritesync">{"ControlledWriteSync"}</Link>{" initialSync"}</code> | Write sync on `SyncC` that sends the full landmark state to a player. |
| <Link id="m-map" /><code>{"private "}<Link to="/game-api/types/alta-world/map">{"Map"}</Link>{" map"}</code> | The `Map` asset the landmarks belong to. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-clientlandmarkmanager" /><code><Link to="/game-api/types/alta-world/clientlandmarkmanager">{"ClientLandmarkManager"}</Link>{" "}<Link to="/game-api/types/alta-world/clientlandmarkmanager">{"ClientLandmarkManager"}</Link>{" { get; private set; }"}</code> | Client side state that reads landmark syncs. |
| <Link id="m-entity-2" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> | The network entity this manager sits on. |
| <Link id="m-serverlandmarkmanager" /><code><Link to="/game-api/types/alta-world/serverlandmarkmanager">{"ServerLandmarkManager"}</Link>{" "}<Link to="/game-api/types/alta-world/serverlandmarkmanager">{"ServerLandmarkManager"}</Link>{" { get; private set; }"}</code> | The server side manager. Null on clients. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awarefor" /><code>{"void AwareFor("}<Link to="/game-api/types/alta-world/landmark">{"Landmark"}</Link>{" landmark, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Server: makes the landmark show as aware (seen but not visited) on that player's map. |
| <Link id="m-deregister" /><code>{"static void Deregister("}<Link to="/game-api/types/alta-world/landmark">{"Landmark"}</Link>{" landmark)"}</code> | Server: removes a landmark's marker and takes it off players' maps. |
| <Link id="m-discoverfor" /><code>{"void DiscoverFor("}<Link to="/game-api/types/alta-world/landmark">{"Landmark"}</Link>{" landmark, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Server: marks the landmark discovered on that player's map. |
| <Link id="m-forcesync" /><code>{"static void ForceSync("}<Link to="/game-api/types/alta-world/landmark">{"Landmark"}</Link>{" landmark)"}</code> | Server: resends a landmark's position and icons to the players who can see it. |
| <Link id="m-register" /><code>{"static uint Register("}<Link to="/game-api/types/alta-world/landmark">{"Landmark"}</Link>{" landmark, bool isKeptAfterUnload)"}</code> | Server: registers a landmark and returns its marker index. Without a server manager it returns the landmark's own index. |
| <Link id="m-wipeplayersave" /><code>{"async Task WipePlayerSave(int identifier)"}</code> | Server: clears a player's saved landmark progress, keeping the reserved entries. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.Initialize()"}</code> | Explicit `INetworkEntityBehaviour` method; creates the `ClientLandmarkManager` and the two write syncs. |
| <Link id="m-initializeasserver" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Explicit `INetworkEntityBehaviour` method; server creates the `ServerLandmarkManager` if a save did not already. |
| <Link id="m-onconnected" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: loads the joining player's landmark data. |
| <Link id="m-ondisconnected" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.OnDisconnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: unloads the leaving player's landmark data. |

</details>
