---
title: "PickupDockingChecker"
description: "class PickupDockingChecker in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupDockingChecker

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupDockingChecker("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-checkeddocks" /><code>{"private static HashSet<"}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> checkedDocks"}</code> |  |
| <Link id="m-currentcheckingcoroutine" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" currentCheckingCoroutine"}</code> |  |
| <Link id="m-interactoroverdock" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactorOverDock"}</code> |  |
| <Link id="m-lastundocktime" /><code>{"private float lastUndockTime"}</code> |  |
| <Link id="m-overdock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" overDock"}</code> |  |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-dockcandidate" /><code><Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" DockCandidate { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-hoveroverdockended" /><code>{"event "}<Link to="/game-api/types/alta-items/pickupdockinteractionhandler">{"PickupDockInteractionHandler"}</Link>{" HoverOverDockEnded"}</code> |  |
| <Link id="m-hoveroverdockstarted" /><code>{"event "}<Link to="/game-api/types/alta-items/pickupdockinteractionhandler">{"PickupDockInteractionHandler"}</Link>{" HoverOverDockStarted"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearcurrentdock" /><code>{"void ClearCurrentDock()"}</code> |  |
| <Link id="m-forcedockcheck" /><code>{"void ForceDockCheck()"}</code> |  |
| <Link id="m-startcheckingfordock" /><code>{"void StartCheckingForDock()"}</code> |  |
| <Link id="m-checkautodock" /><code>{"private void CheckAutoDock("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-checkhover" /><code>{"private IEnumerator CheckHover() (iterator)"}</code> |  |
| <Link id="m-getclosestdock" /><code>{"private int GetClosestDock(out "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" closest, out "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-onhoverended" /><code>{"private void OnHoverEnded("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-onhoverstarted" /><code>{"private void OnHoverStarted("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-resetlastundockedtime" /><code>{"private void ResetLastUndockedTime("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-updateoverdock" /><code>{"private void UpdateOverDock()"}</code> |  |

## Used in

Members of other types that take, return or hold a `PickupDockingChecker`:

[`Pickup.dockingChecker`](/game-api/types/global-p/pickup#m-dockingchecker).
