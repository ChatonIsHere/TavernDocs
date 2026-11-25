---
title: "ServerLandmarkManager"
description: "Server: holds every registered map marker and one tracker per connected player for what they know."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerLandmarkManager

A **class** in `Root.Township`, `Alta.Map`.

Server: holds every registered map marker and one tracker per connected player for what they know. Created by `LandmarkManager`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ServerLandmarkManager("}<Link to="/game-api/types/alta-networking/controlledwritesync">{"ControlledWriteSync"}</Link>{" initialSync, "}<Link to="/game-api/types/alta-networking/controlledwritesync">{"ControlledWriteSync"}</Link>{" changeSync, "}<Link to="/game-api/types/alta-world/map">{"Map"}</Link>{" map)"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-changesync" /><code>{"private "}<Link to="/game-api/types/alta-networking/controlledwritesync">{"ControlledWriteSync"}</Link>{" changeSync"}</code> |
| <Link id="m-clientmanagers" /><code>{"private Dictionary<int, "}<Link to="/game-api/types/alta-world/serverclientlandmarkmanager">{"ServerClientLandmarkManager"}</Link>{"> clientManagers"}</code> |
| <Link id="m-initialsync" /><code>{"private "}<Link to="/game-api/types/alta-networking/controlledwritesync">{"ControlledWriteSync"}</Link>{" initialSync"}</code> |
| <Link id="m-lastindex" /><code>{"private uint lastIndex"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-defaultstates" /><code>{"Dictionary<uint, "}<Link to="/game-api/types/alta-world/discoverystate">{"DiscoveryState"}</Link>{"> DefaultStates { get; }"}</code> | Markers that start aware or discovered for everyone, by index. |
| <Link id="m-markers" /><code>{"Dictionary<uint, "}<Link to="/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{"> Markers { get; }"}</code> | All registered markers by index. |
| <Link id="m-maxindex" /><code>{"uint MaxIndex { get; }"}</code> | One past the highest marker index handed out. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awarefor" /><code>{"void AwareFor("}<Link to="/game-api/types/alta-world/landmark">{"Landmark"}</Link>{" landmark, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Marks the landmark aware for one player. Logs errors for unregistered landmarks or players. |
| <Link id="m-deregister" /><code>{"void Deregister("}<Link to="/game-api/types/alta-world/landmark">{"Landmark"}</Link>{" landmark)"}</code> | Removes a marker and tells the players who had it. |
| <Link id="m-discoverfor" /><code>{"void DiscoverFor("}<Link to="/game-api/types/alta-world/landmark">{"Landmark"}</Link>{" landmark, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Marks the landmark discovered for one player. |
| <Link id="m-forcesync" /><code>{"void ForceSync("}<Link to="/game-api/types/alta-world/landmark">{"Landmark"}</Link>{" landmark)"}</code> | Updates a marker's position and icons from the landmark and resends it. |
| <Link id="m-load" /><code>{"void Load("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Creates the tracker for a player who joins. |
| <Link id="m-loadsave" /><code>{"void LoadSave("}<Link to="/game-api/types/alta-world/landmarkmanagersavedata">{"LandmarkManagerSaveData"}</Link>{" data)"}</code> | Restores saved markers. |
| <Link id="m-register" /><code>{"uint Register("}<Link to="/game-api/types/alta-world/landmark">{"Landmark"}</Link>{" landmark, bool isKeptAfterUnload)"}</code> | Adds a marker for the landmark, giving it a new index if it has none, and applies its default state to players. |
| <Link id="m-save" /><code><Link to="/game-api/types/alta-world/landmarkmanagersavedata">{"LandmarkManagerSaveData"}</Link>{" Save()"}</code> | Returns the markers that are kept after their landmark unloads. |
| <Link id="m-unload" /><code>{"void Unload("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Drops the tracker for a player who leaves. |

## Used in

Members of other types that take, return or hold a `ServerLandmarkManager`:

[`LandmarkManager.ServerLandmarkManager`](/game-api/types/alta-world/landmarkmanager#m-serverlandmarkmanager), [`ServerClientLandmarkManager.landmarkManager`](/game-api/types/alta-world/serverclientlandmarkmanager#m-landmarkmanager), [`ServerClientLandmarkManager.ServerClientLandmarkManager`](/game-api/types/alta-world/serverclientlandmarkmanager#m-ctor).
