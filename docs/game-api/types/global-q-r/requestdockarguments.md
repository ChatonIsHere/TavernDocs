---
title: "RequestDockArguments"
description: "struct RequestDockArguments in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RequestDockArguments

A **struct** in `Root.Township`, no namespace.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RequestDockArguments("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, bool isDocking, bool isFirstForced, bool isSnapping)"}</code> |
| <Link id="m-ctor-2" /><code>{"RequestDockArguments("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, uint dockEntityIdentifier, bool isDocking, bool isFirstForced, bool isSnapping)"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-dock" /><code>{"private uint dock"}</code> |
| <Link id="m-interactor" /><code>{"private uint interactor"}</code> |
| <Link id="m-isdock" /><code>{"private bool isDock"}</code> |
| <Link id="m-isdocking" /><code>{"private bool isDocking"}</code> |
| <Link id="m-isfirstforced" /><code>{"private bool isFirstForced"}</code> |
| <Link id="m-isinteractor" /><code>{"private bool isInteractor"}</code> |
| <Link id="m-issnapping" /><code>{"private bool isSnapping"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-dock-2" /><code>{"uint Dock { get; }"}</code> |
| <Link id="m-interactor-2" /><code>{"uint Interactor { get; }"}</code> |
| <Link id="m-isdocking-2" /><code>{"bool IsDocking { get; }"}</code> |
| <Link id="m-isfirstforced-2" /><code>{"bool IsFirstForced { get; }"}</code> |
| <Link id="m-issnapping-2" /><code>{"bool IsSnapping { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |

## Used in

Members of other types that take, return or hold a `RequestDockArguments`:

[`PickupDocker.requestDock`](/game-api/types/alta-items/pickupdocker#m-requestdock), [`PickupDocker.RequestDock`](/game-api/types/alta-items/pickupdocker#m-requestdock-2).
