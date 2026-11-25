---
title: "ServerClientLandmarkManager"
description: "class ServerClientLandmarkManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerClientLandmarkManager

A **class** in `Root.Township`, `Alta.Map`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerClientLandmarkManager("}<Link to="/game-api/types/alta-world/serverlandmarkmanager">{"ServerLandmarkManager"}</Link>{" landmarkManager, "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/game-api/types/alta-networking/controlledwritesync">{"ControlledWriteSync"}</Link>{" initialSync, "}<Link to="/game-api/types/alta-networking/controlledwritesync">{"ControlledWriteSync"}</Link>{" changeSync)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-change" /><code>{"private "}<Link to="/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{" change"}</code> |  |
| <Link id="m-changesync" /><code>{"private "}<Link to="/game-api/types/alta-networking/controlledwritesync">{"ControlledWriteSync"}</Link>{" changeSync"}</code> |  |
| <Link id="m-initialsync" /><code>{"private "}<Link to="/game-api/types/alta-networking/controlledwritesync">{"ControlledWriteSync"}</Link>{" initialSync"}</code> |  |
| <Link id="m-landmarkmanager" /><code>{"private "}<Link to="/game-api/types/alta-world/serverlandmarkmanager">{"ServerLandmarkManager"}</Link>{" landmarkManager"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-save" /><code>{"private "}<Link to="/game-api/types/alta-world/landmarksaveformat">{"LandmarkSaveFormat"}</Link>{" save"}</code> |  |
| <Link id="m-serverfile" /><code>{"private "}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" serverFile"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-player" /><code><Link to="/game-api/types/global-p/player">{"Player"}</Link>{" "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-aware" /><code>{"void Aware("}<Link to="/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{" info, bool isSaving = true)"}</code> |  |
| <Link id="m-changesync-2" /><code>{"void ChangeSync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-discover" /><code>{"void Discover("}<Link to="/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{" info, bool isSaving = true)"}</code> |  |
| <Link id="m-initialsync-2" /><code>{"void InitialSync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-isawareordiscovered" /><code>{"bool IsAwareOrDiscovered("}<Link to="/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{" info)"}</code> |  |
| <Link id="m-remove" /><code>{"void Remove("}<Link to="/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{" info)"}</code> |  |
| <Link id="m-sync" /><code>{"void Sync("}<Link to="/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{" info)"}</code> |  |
| <Link id="m-unload" /><code>{"void Unload()"}</code> |  |
| <Link id="m-beginread" /><code>{"private async void BeginRead()"}</code> |  |

## Used in

Members of other types that take, return or hold a `ServerClientLandmarkManager`:

[`ServerLandmarkManager.clientManagers`](/game-api/types/alta-world/serverlandmarkmanager#m-clientmanagers).
