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

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerLandmarkManager("}<Link to="/mod/game-api/types/alta-networking/controlledwritesync">{"ControlledWriteSync"}</Link>{" initialSync, "}<Link to="/mod/game-api/types/alta-networking/controlledwritesync">{"ControlledWriteSync"}</Link>{" changeSync, "}<Link to="/mod/game-api/types/alta-world/map">{"Map"}</Link>{" map)"}</code> | <span className="api-desc">Creates a `ServerLandmarkManager` from `initialSync`, `changeSync` and `map`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-changesync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/controlledwritesync">{"ControlledWriteSync"}</Link>{" changeSync"}</code> | <span className="api-desc">Write sync used to send landmark changes to clients. Passed to each player's client manager.</span> |
| <Link id="m-clientmanagers" /><code>{"private Dictionary<int, "}<Link to="/mod/game-api/types/alta-world/serverclientlandmarkmanager">{"ServerClientLandmarkManager"}</Link>{"> clientManagers"}</code> | <span className="api-desc">Per-player landmark managers, keyed by the player's user id. Added in `Load`, removed in `Unload`.</span> |
| <Link id="m-initialsync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/controlledwritesync">{"ControlledWriteSync"}</Link>{" initialSync"}</code> | <span className="api-desc">Write sync used to send a player all landmarks when they load. Passed to each client manager.</span> |
| <Link id="m-lastindex" /><code>{"private uint lastIndex"}</code> | <span className="api-desc">Highest landmark index handed out so far. Starts at the map's first non-reserved index.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-defaultstates" /><code>{"Dictionary<uint, "}<Link to="/mod/game-api/types/alta-world/discoverystate">{"DiscoveryState"}</Link>{"> DefaultStates { get; }"}</code> | <span className="api-desc">Markers that start aware or discovered for everyone, by index.</span> |
| <Link id="m-markers" /><code>{"Dictionary<uint, "}<Link to="/mod/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{"> Markers { get; }"}</code> | <span className="api-desc">All registered markers by index.</span> |
| <Link id="m-maxindex" /><code>{"uint MaxIndex { get; }"}</code> | <span className="api-desc">One past the highest marker index handed out.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awarefor" /><code>{"void AwareFor("}<Link to="/mod/game-api/types/alta-world/landmark">{"Landmark"}</Link>{" landmark, "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Marks the landmark aware for one player. Logs errors for unregistered landmarks or players.</span> |
| <Link id="m-deregister" /><code>{"void Deregister("}<Link to="/mod/game-api/types/alta-world/landmark">{"Landmark"}</Link>{" landmark)"}</code> | <span className="api-desc">Removes a marker and tells the players who had it.</span> |
| <Link id="m-discoverfor" /><code>{"void DiscoverFor("}<Link to="/mod/game-api/types/alta-world/landmark">{"Landmark"}</Link>{" landmark, "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Marks the landmark discovered for one player.</span> |
| <Link id="m-forcesync" /><code>{"void ForceSync("}<Link to="/mod/game-api/types/alta-world/landmark">{"Landmark"}</Link>{" landmark)"}</code> | <span className="api-desc">Updates a marker's position and icons from the landmark and resends it.</span> |
| <Link id="m-load" /><code>{"void Load("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Creates the tracker for a player who joins.</span> |
| <Link id="m-loadsave" /><code>{"void LoadSave("}<Link to="/mod/game-api/types/alta-world/landmarkmanagersavedata">{"LandmarkManagerSaveData"}</Link>{" data)"}</code> | <span className="api-desc">Restores saved markers.</span> |
| <Link id="m-register" /><code>{"uint Register("}<Link to="/mod/game-api/types/alta-world/landmark">{"Landmark"}</Link>{" landmark, bool isKeptAfterUnload)"}</code> | <span className="api-desc">Adds a marker for the landmark, giving it a new index if it has none, and applies its default state to players.</span> |
| <Link id="m-save" /><code><Link to="/mod/game-api/types/alta-world/landmarkmanagersavedata">{"LandmarkManagerSaveData"}</Link>{" Save()"}</code> | <span className="api-desc">Returns the markers that are kept after their landmark unloads.</span> |
| <Link id="m-unload" /><code>{"void Unload("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Drops the tracker for a player who leaves.</span> |

## Used in

Members of other types that take, return or hold a `ServerLandmarkManager`:

<div className="api-used-in">

[`LandmarkManager.ServerLandmarkManager`](/mod/game-api/types/alta-world/landmarkmanager#m-serverlandmarkmanager), [`ServerClientLandmarkManager.landmarkManager`](/mod/game-api/types/alta-world/serverclientlandmarkmanager#m-landmarkmanager), [`ServerClientLandmarkManager.ServerClientLandmarkManager`](/mod/game-api/types/alta-world/serverclientlandmarkmanager#m-ctor).

</div>
