---
title: "ServerClientLandmarkManager"
description: "Server: one player's landmark knowledge."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerClientLandmarkManager

A **class** in `Root.Township`, `Alta.Map`.

Server: one player's landmark knowledge. Loads their save file, sends their markers when they join and sends changes as they discover more.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerClientLandmarkManager("}<Link to="/mod/game-api/types/alta-world/serverlandmarkmanager">{"ServerLandmarkManager"}</Link>{" landmarkManager, "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/mod/game-api/types/alta-networking/controlledwritesync">{"ControlledWriteSync"}</Link>{" initialSync, "}<Link to="/mod/game-api/types/alta-networking/controlledwritesync">{"ControlledWriteSync"}</Link>{" changeSync)"}</code> | Creates a `ServerClientLandmarkManager` from `landmarkManager`, `player`, `initialSync` and `changeSync`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-change" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{" change"}</code> | The marker being sent by `ChangeSync`. |
| <Link id="m-changesync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/controlledwritesync">{"ControlledWriteSync"}</Link>{" changeSync"}</code> | Sync used for single marker changes. |
| <Link id="m-initialsync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/controlledwritesync">{"ControlledWriteSync"}</Link>{" initialSync"}</code> | Sync used for the join-time marker list. |
| <Link id="m-landmarkmanager" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/serverlandmarkmanager">{"ServerLandmarkManager"}</Link>{" landmarkManager"}</code> | The server landmark manager with all markers and default states. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Logger for sync warnings. |
| <Link id="m-save" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/landmarksaveformat">{"LandmarkSaveFormat"}</Link>{" save"}</code> | The player's loaded landmark save, null until loaded. |
| <Link id="m-serverfile" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" serverFile"}</code> | The player's landmark file. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-player" /><code><Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" { get; }"}</code> | The player this belongs to. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-aware" /><code>{"void Aware("}<Link to="/mod/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{" info, bool isSaving = true)"}</code> | Server: marks a landmark as known but not discovered, saves it, and syncs it if it has an aware icon. |
| <Link id="m-changesync-2" /><code>{"void ChangeSync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Server: writes one marker with the icon for its state. Rejects the message if a client sends it. |
| <Link id="m-discover" /><code>{"void Discover("}<Link to="/mod/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{" info, bool isSaving = true)"}</code> | Server: marks a landmark as discovered, saves it, and syncs it. |
| <Link id="m-initialsync-2" /><code>{"void InitialSync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Server: writes the default markers and every marker the player knows. Rejects the message if a client sends it. |
| <Link id="m-isawareordiscovered" /><code>{"bool IsAwareOrDiscovered("}<Link to="/mod/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{" info)"}</code> | True if the player's save has the landmark at all. |
| <Link id="m-remove" /><code>{"void Remove("}<Link to="/mod/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{" info)"}</code> | Server: forgets a landmark for the player, saves, and syncs the change. |
| <Link id="m-sync" /><code>{"void Sync("}<Link to="/mod/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{" info)"}</code> | Server: sends one marker to the player, skipped if their file is still loading. |
| <Link id="m-unload" /><code>{"void Unload()"}</code> | Queues the player's landmark file to unload. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-beginread" /><code>{"private async void BeginRead()"}</code> | Loads the player's landmark file, drops entries for markers that no longer exist, then sends the initial sync. |

</details>

## Used in

Members of other types that take, return or hold a `ServerClientLandmarkManager`:

[`ServerLandmarkManager.clientManagers`](/mod/game-api/types/alta-world/serverlandmarkmanager#m-clientmanagers).
