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
| <Link id="m-ctor" /><code>{"PickupDockingChecker("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">Creates a `PickupDockingChecker` from `pickup`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkeddocks" /><code>{"private static HashSet<"}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> checkedDocks"}</code> | <span className="api-desc">Shared scratch set so each dock is only checked once per search.</span> |
| <Link id="m-currentcheckingcoroutine" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" currentCheckingCoroutine"}</code> | <span className="api-desc">The running hover coroutine.</span> |
| <Link id="m-interactoroverdock" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactorOverDock"}</code> | <span className="api-desc">The interactor that is over the current dock.</span> |
| <Link id="m-lastundocktime" /><code>{"private float lastUndockTime"}</code> | <span className="api-desc">Time left on the cooldown after undocking, in seconds.</span> |
| <Link id="m-overdock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" overDock"}</code> | <span className="api-desc">Backing field for `DockCandidate`.</span> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | <span className="api-desc">The pickup being checked.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-dockcandidate" /><code><Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" DockCandidate { get; }"}</code> | <span className="api-desc">The dock the pickup is currently hovering over, or null.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-hoveroverdockended" /><code>{"event "}<Link to="/mod/game-api/types/alta-items/pickupdockinteractionhandler">{"PickupDockInteractionHandler"}</Link>{" HoverOverDockEnded"}</code> | <span className="api-desc">Fires when the pickup stops hovering over a dock.</span> |
| <Link id="m-hoveroverdockstarted" /><code>{"event "}<Link to="/mod/game-api/types/alta-items/pickupdockinteractionhandler">{"PickupDockInteractionHandler"}</Link>{" HoverOverDockStarted"}</code> | <span className="api-desc">Fires when the pickup starts hovering over a dock.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearcurrentdock" /><code>{"void ClearCurrentDock()"}</code> | <span className="api-desc">Drops the hovered dock and lowers its hover count.</span> |
| <Link id="m-forcedockcheck" /><code>{"void ForceDockCheck()"}</code> | <span className="api-desc">Runs one hover check straight away.</span> |
| <Link id="m-startcheckingfordock" /><code>{"void StartCheckingForDock()"}</code> | <span className="api-desc">Restarts the hover coroutine. Called by `Pickup` when a local interactor grabs it.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkautodock" /><code>{"private void CheckAutoDock("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Docks the pickup into the hovered dock if that dock docks automatically, the interactor is local and the undock cooldown is over.</span> |
| <Link id="m-checkhover" /><code>{"private IEnumerator CheckHover() (iterator)"}</code> | <span className="api-desc">Coroutine that updates the hovered dock every frame while the pickup is held, then clears it.</span> |
| <Link id="m-getclosestdock" /><code>{"private int GetClosestDock(out "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" closest, out "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Finds the nearest allowed dock overlapping any of the pickup's interactors. Returns how many allowed docks it found.</span> |
| <Link id="m-onhoverended" /><code>{"private void OnHoverEnded("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Raises `HoverOverDockEnded`.</span> |
| <Link id="m-onhoverstarted" /><code>{"private void OnHoverStarted("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Raises `HoverOverDockStarted`.</span> |
| <Link id="m-resetlastundockedtime" /><code>{"private void ResetLastUndockedTime("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Starts a 0.1 second cooldown after the pickup is undocked, so it isn't auto docked straight back.</span> |
| <Link id="m-updateoverdock" /><code>{"private void UpdateOverDock()"}</code> | <span className="api-desc">Works out the closest dock, fires hover start and end events, plays haptics and updates hover counts.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PickupDockingChecker`:

<div className="api-used-in">

[`Pickup.dockingChecker`](/mod/game-api/types/global-p/pickup#m-dockingchecker).

</div>
