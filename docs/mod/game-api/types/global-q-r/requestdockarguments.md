---
title: "RequestDockArguments"
description: "Network message for a pickup docking into or leaving a dock, sent by PickupDocker from client to server and from server to chunks."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RequestDockArguments

A **struct** in `Root.Township`, the global namespace.

Network message for a pickup docking into or leaving a dock, sent by `PickupDocker` from client to server and from server to chunks.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RequestDockArguments("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, bool isDocking, bool isFirstForced, bool isSnapping)"}</code> | <span className="api-desc">Creates a `RequestDockArguments` from `interactor`, `dockEntityIdentifier`, `isDocking`, `isFirstForced` and `isSnapping`.</span> |
| <Link id="m-ctor-2" /><code>{"RequestDockArguments("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, uint dockEntityIdentifier, bool isDocking, bool isFirstForced, bool isSnapping)"}</code> | <span className="api-desc">Creates a `RequestDockArguments` from `interactor`, `dockEntityIdentifier`, `isDocking`, `isFirstForced` and `isSnapping`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dock" /><code>{"private uint dock"}</code> | <span className="api-desc">Backing field for `Dock`.</span> |
| <Link id="m-interactor" /><code>{"private uint interactor"}</code> | <span className="api-desc">Backing field for `Interactor`.</span> |
| <Link id="m-isdock" /><code>{"private bool isDock"}</code> | <span className="api-desc">Whether a dock ID is sent.</span> |
| <Link id="m-isdocking" /><code>{"private bool isDocking"}</code> | <span className="api-desc">Backing field for `IsDocking`.</span> |
| <Link id="m-isfirstforced" /><code>{"private bool isFirstForced"}</code> | <span className="api-desc">Backing field for `IsFirstForced`.</span> |
| <Link id="m-isinteractor" /><code>{"private bool isInteractor"}</code> | <span className="api-desc">Whether an interactor ID is sent.</span> |
| <Link id="m-issnapping" /><code>{"private bool isSnapping"}</code> | <span className="api-desc">Backing field for `IsSnapping`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-dock-2" /><code>{"uint Dock { get; }"}</code> | <span className="api-desc">Entity ID of the dock, or 0 if none.</span> |
| <Link id="m-interactor-2" /><code>{"uint Interactor { get; }"}</code> | <span className="api-desc">Entity ID of the hand doing it, or 0 when the server sends it without one.</span> |
| <Link id="m-isdocking-2" /><code>{"bool IsDocking { get; }"}</code> | <span className="api-desc">True to dock, false to undock.</span> |
| <Link id="m-isfirstforced-2" /><code>{"bool IsFirstForced { get; }"}</code> | <span className="api-desc">Docking only: set when this pickup is, or becomes, the dock's main docked pickup.</span> |
| <Link id="m-issnapping-2" /><code>{"bool IsSnapping { get; }"}</code> | <span className="api-desc">Docking only: snap into place instantly instead of moving there.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Reads or writes the message. The two docking flags are only sent when docking.</span> |

## Used in

Members of other types that take, return or hold a `RequestDockArguments`:

<div className="api-used-in">

[`PickupDocker.requestDock`](/mod/game-api/types/alta-items/pickupdocker#m-requestdock), [`PickupDocker.RequestDock`](/mod/game-api/types/alta-items/pickupdocker#m-requestdock-2).

</div>
