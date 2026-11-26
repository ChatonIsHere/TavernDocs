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

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`SingletonBehaviour<LandmarkManager>`](/mod/game-api/types/assembly-other/singletonbehaviour-t), [`INetworkEntityBehaviour`](/mod/game-api/types/alta-networking/inetworkentitybehaviour), [`ISavable<LandmarkManagerSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<LandmarkManagerSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`LandmarkManager`](/mod/game-api/types/alta-world/landmarkmanager), [`LandmarkManagerSaveData`](/mod/game-api/types/alta-world/landmarkmanagersavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LandmarkManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-changesync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/controlledwritesync">{"ControlledWriteSync"}</Link>{" changeSync"}</code> | <span className="api-desc">Write sync on `SyncD` that sends landmark changes to clients.</span> |
| <Link id="m-entity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | <span className="api-desc">Backing field for `Entity`.</span> |
| <Link id="m-initialsync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/controlledwritesync">{"ControlledWriteSync"}</Link>{" initialSync"}</code> | <span className="api-desc">Write sync on `SyncC` that sends the full landmark state to a player.</span> |
| <Link id="m-map" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/map">{"Map"}</Link>{" map"}</code> | <span className="api-desc">The `Map` asset the landmarks belong to.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-clientlandmarkmanager" /><code><Link to="/mod/game-api/types/alta-world/clientlandmarkmanager">{"ClientLandmarkManager"}</Link>{" "}<Link to="/mod/game-api/types/alta-world/clientlandmarkmanager">{"ClientLandmarkManager"}</Link>{" { get; private set; }"}</code> | <span className="api-desc">Client side state that reads landmark syncs.</span> |
| <Link id="m-entity-2" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> | <span className="api-desc">The network entity this manager sits on.</span> |
| <Link id="m-serverlandmarkmanager" /><code><Link to="/mod/game-api/types/alta-world/serverlandmarkmanager">{"ServerLandmarkManager"}</Link>{" "}<Link to="/mod/game-api/types/alta-world/serverlandmarkmanager">{"ServerLandmarkManager"}</Link>{" { get; private set; }"}</code> | <span className="api-desc">The server side manager. Null on clients.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awarefor" /><code>{"void AwareFor("}<Link to="/mod/game-api/types/alta-world/landmark">{"Landmark"}</Link>{" landmark, "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Server: makes the landmark show as aware (seen but not visited) on that player's map.</span> |
| <Link id="m-deregister" /><code>{"static void Deregister("}<Link to="/mod/game-api/types/alta-world/landmark">{"Landmark"}</Link>{" landmark)"}</code> | <span className="api-desc">Server: removes a landmark's marker and takes it off players' maps.</span> |
| <Link id="m-discoverfor" /><code>{"void DiscoverFor("}<Link to="/mod/game-api/types/alta-world/landmark">{"Landmark"}</Link>{" landmark, "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Server: marks the landmark discovered on that player's map.</span> |
| <Link id="m-forcesync" /><code>{"static void ForceSync("}<Link to="/mod/game-api/types/alta-world/landmark">{"Landmark"}</Link>{" landmark)"}</code> | <span className="api-desc">Server: resends a landmark's position and icons to the players who can see it.</span> |
| <Link id="m-register" /><code>{"static uint Register("}<Link to="/mod/game-api/types/alta-world/landmark">{"Landmark"}</Link>{" landmark, bool isKeptAfterUnload)"}</code> | <span className="api-desc">Server: registers a landmark and returns its marker index. Without a server manager it returns the landmark's own index.</span> |
| <Link id="m-wipeplayersave" /><code>{"async Task WipePlayerSave(int identifier)"}</code> | <span className="api-desc">Server: clears a player's saved landmark progress, keeping the reserved entries.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.Initialize()"}</code> | <span className="api-desc">Explicit `INetworkEntityBehaviour` method; creates the `ClientLandmarkManager` and the two write syncs.</span> |
| <Link id="m-initializeasserver" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Explicit `INetworkEntityBehaviour` method; server creates the `ServerLandmarkManager` if a save did not already.</span> |
| <Link id="m-onconnected" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: loads the joining player's landmark data.</span> |
| <Link id="m-ondisconnected" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.OnDisconnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: unloads the leaving player's landmark data.</span> |

</details>
