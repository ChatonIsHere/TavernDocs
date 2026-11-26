---
title: "RequestDockArguments"
description: "Network message for a pickup docking into or leaving a dock, sent by PickupDocker from client to server and from server to chunks."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RequestDockArguments

A **struct** in `Root.Township`, no namespace.

Network message for a pickup docking into or leaving a dock, sent by `PickupDocker` from client to server and from server to chunks.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RequestDockArguments("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, bool isDocking, bool isFirstForced, bool isSnapping)"}</code> | Creates a `RequestDockArguments` from `interactor`, `dockEntityIdentifier`, `isDocking`, `isFirstForced` and `isSnapping`. |
| <Link id="m-ctor-2" /><code>{"RequestDockArguments("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, uint dockEntityIdentifier, bool isDocking, bool isFirstForced, bool isSnapping)"}</code> | Creates a `RequestDockArguments` from `interactor`, `dockEntityIdentifier`, `isDocking`, `isFirstForced` and `isSnapping`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dock" /><code>{"private uint dock"}</code> | Backing field for `Dock`. |
| <Link id="m-interactor" /><code>{"private uint interactor"}</code> | Backing field for `Interactor`. |
| <Link id="m-isdock" /><code>{"private bool isDock"}</code> | Whether a dock ID is sent. |
| <Link id="m-isdocking" /><code>{"private bool isDocking"}</code> | Backing field for `IsDocking`. |
| <Link id="m-isfirstforced" /><code>{"private bool isFirstForced"}</code> | Backing field for `IsFirstForced`. |
| <Link id="m-isinteractor" /><code>{"private bool isInteractor"}</code> | Whether an interactor ID is sent. |
| <Link id="m-issnapping" /><code>{"private bool isSnapping"}</code> | Backing field for `IsSnapping`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-dock-2" /><code>{"uint Dock { get; }"}</code> | Entity ID of the dock, or 0 if none. |
| <Link id="m-interactor-2" /><code>{"uint Interactor { get; }"}</code> | Entity ID of the hand doing it, or 0 when the server sends it without one. |
| <Link id="m-isdocking-2" /><code>{"bool IsDocking { get; }"}</code> | True to dock, false to undock. |
| <Link id="m-isfirstforced-2" /><code>{"bool IsFirstForced { get; }"}</code> | Docking only: set when this pickup is, or becomes, the dock's main docked pickup. |
| <Link id="m-issnapping-2" /><code>{"bool IsSnapping { get; }"}</code> | Docking only: snap into place instantly instead of moving there. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes the message. The two docking flags are only sent when docking. |

## Used in

Members of other types that take, return or hold a `RequestDockArguments`:

[`PickupDocker.requestDock`](/game-api/types/alta-items/pickupdocker#m-requestdock), [`PickupDocker.RequestDock`](/game-api/types/alta-items/pickupdocker#m-requestdock-2).
