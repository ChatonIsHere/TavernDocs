---
title: "PickupDockingChecker"
description: "Tracks which dock a held pickup is hovering over, fires hover events, plays haptics and auto docks."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupDockingChecker

A **class** in `Root.Township`, the global namespace.

Tracks which dock a held pickup is hovering over, fires hover events, plays haptics and auto docks. Each `Pickup` creates one; it runs while a local player holds it.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupDockingChecker("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Creates a `PickupDockingChecker` from `pickup`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkeddocks" /><code>{"private static HashSet<"}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> checkedDocks"}</code> | Shared scratch set so each dock is only checked once per search. |
| <Link id="m-currentcheckingcoroutine" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" currentCheckingCoroutine"}</code> | The running hover coroutine. |
| <Link id="m-interactoroverdock" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactorOverDock"}</code> | The interactor that is over the current dock. |
| <Link id="m-lastundocktime" /><code>{"private float lastUndockTime"}</code> | Time left on the cooldown after undocking, in seconds. |
| <Link id="m-overdock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" overDock"}</code> | Backing field for `DockCandidate`. |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | The pickup being checked. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-dockcandidate" /><code><Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" DockCandidate { get; }"}</code> | The dock the pickup is currently hovering over, or null. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-hoveroverdockended" /><code>{"event "}<Link to="/mod/game-api/types/alta-items/pickupdockinteractionhandler">{"PickupDockInteractionHandler"}</Link>{" HoverOverDockEnded"}</code> | Fires when the pickup stops hovering over a dock. |
| <Link id="m-hoveroverdockstarted" /><code>{"event "}<Link to="/mod/game-api/types/alta-items/pickupdockinteractionhandler">{"PickupDockInteractionHandler"}</Link>{" HoverOverDockStarted"}</code> | Fires when the pickup starts hovering over a dock. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearcurrentdock" /><code>{"void ClearCurrentDock()"}</code> | Drops the hovered dock and lowers its hover count. |
| <Link id="m-forcedockcheck" /><code>{"void ForceDockCheck()"}</code> | Runs one hover check straight away. |
| <Link id="m-startcheckingfordock" /><code>{"void StartCheckingForDock()"}</code> | Restarts the hover coroutine. Called by `Pickup` when a local interactor grabs it. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkautodock" /><code>{"private void CheckAutoDock("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Docks the pickup into the hovered dock if that dock docks automatically, the interactor is local and the undock cooldown is over. |
| <Link id="m-checkhover" /><code>{"private IEnumerator CheckHover() (iterator)"}</code> | Coroutine that updates the hovered dock every frame while the pickup is held, then clears it. |
| <Link id="m-getclosestdock" /><code>{"private int GetClosestDock(out "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" closest, out "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Finds the nearest allowed dock overlapping any of the pickup's interactors. Returns how many allowed docks it found. |
| <Link id="m-onhoverended" /><code>{"private void OnHoverEnded("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Raises `HoverOverDockEnded`. |
| <Link id="m-onhoverstarted" /><code>{"private void OnHoverStarted("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Raises `HoverOverDockStarted`. |
| <Link id="m-resetlastundockedtime" /><code>{"private void ResetLastUndockedTime("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Starts a 0.1 second cooldown after the pickup is undocked, so it isn't auto docked straight back. |
| <Link id="m-updateoverdock" /><code>{"private void UpdateOverDock()"}</code> | Works out the closest dock, fires hover start and end events, plays haptics and updates hover counts. |

</details>

## Used in

Members of other types that take, return or hold a `PickupDockingChecker`:

[`Pickup.dockingChecker`](/mod/game-api/types/global-p/pickup#m-dockingchecker).
