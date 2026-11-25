---
title: "ServerLandmarkManager"
description: "class ServerLandmarkManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerLandmarkManager

A **class** in `Root.Township`, `Alta.Map`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerLandmarkManager("}<Link to="/game-api/types/alta-networking/controlledwritesync">{"ControlledWriteSync"}</Link>{" initialSync, "}<Link to="/game-api/types/alta-networking/controlledwritesync">{"ControlledWriteSync"}</Link>{" changeSync, "}<Link to="/game-api/types/alta-world/map">{"Map"}</Link>{" map)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-changesync" /><code>{"private "}<Link to="/game-api/types/alta-networking/controlledwritesync">{"ControlledWriteSync"}</Link>{" changeSync"}</code> |  |
| <Link id="m-clientmanagers" /><code>{"private Dictionary<int, "}<Link to="/game-api/types/alta-world/serverclientlandmarkmanager">{"ServerClientLandmarkManager"}</Link>{"> clientManagers"}</code> |  |
| <Link id="m-initialsync" /><code>{"private "}<Link to="/game-api/types/alta-networking/controlledwritesync">{"ControlledWriteSync"}</Link>{" initialSync"}</code> |  |
| <Link id="m-lastindex" /><code>{"private uint lastIndex"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-defaultstates" /><code>{"Dictionary<uint, "}<Link to="/game-api/types/alta-world/discoverystate">{"DiscoveryState"}</Link>{"> DefaultStates { get; }"}</code> |  |
| <Link id="m-markers" /><code>{"Dictionary<uint, "}<Link to="/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{"> Markers { get; }"}</code> |  |
| <Link id="m-maxindex" /><code>{"uint MaxIndex { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awarefor" /><code>{"void AwareFor("}<Link to="/game-api/types/alta-world/landmark">{"Landmark"}</Link>{" landmark, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-deregister" /><code>{"void Deregister("}<Link to="/game-api/types/alta-world/landmark">{"Landmark"}</Link>{" landmark)"}</code> |  |
| <Link id="m-discoverfor" /><code>{"void DiscoverFor("}<Link to="/game-api/types/alta-world/landmark">{"Landmark"}</Link>{" landmark, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-forcesync" /><code>{"void ForceSync("}<Link to="/game-api/types/alta-world/landmark">{"Landmark"}</Link>{" landmark)"}</code> |  |
| <Link id="m-load" /><code>{"void Load("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-loadsave" /><code>{"void LoadSave("}<Link to="/game-api/types/alta-world/landmarkmanagersavedata">{"LandmarkManagerSaveData"}</Link>{" data)"}</code> |  |
| <Link id="m-register" /><code>{"uint Register("}<Link to="/game-api/types/alta-world/landmark">{"Landmark"}</Link>{" landmark, bool isKeptAfterUnload)"}</code> |  |
| <Link id="m-save" /><code><Link to="/game-api/types/alta-world/landmarkmanagersavedata">{"LandmarkManagerSaveData"}</Link>{" Save()"}</code> |  |
| <Link id="m-unload" /><code>{"void Unload("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ServerLandmarkManager`:

[`LandmarkManager.ServerLandmarkManager`](/game-api/types/alta-world/landmarkmanager#m-serverlandmarkmanager), [`ServerClientLandmarkManager.landmarkManager`](/game-api/types/alta-world/serverclientlandmarkmanager#m-landmarkmanager), [`ServerClientLandmarkManager.ServerClientLandmarkManager`](/game-api/types/alta-world/serverclientlandmarkmanager#m-ctor).
