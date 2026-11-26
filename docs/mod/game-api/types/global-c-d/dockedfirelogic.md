---
title: "DockedFireLogic"
description: "Puzzle helper that watches the fire on an item docked in a PlaceItemPuzzleLogic dock and raises a bool event when it lights or goes out."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DockedFireLogic

A **class** in `Root.Township`, the global namespace.

Puzzle helper that watches the fire on an item docked in a `PlaceItemPuzzleLogic` dock and raises a bool event when it lights or goes out.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DockedFireLogic()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activatedbylogic" /><code>{"private bool activatedByLogic"}</code> | Lets `ExternalUpdateFire` light or put out the fire. |
| <Link id="m-correctifextinguished" /><code>{"private bool correctIfExtinguished"}</code> | Inverts the value reported on dock, so an unlit fire counts as correct. |
| <Link id="m-currentvalue" /><code>{"private bool currentValue"}</code> | Last value sent through `onValueUpdated`. |
| <Link id="m-fire" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/fire">{"Fire"}</Link>{" fire"}</code> | The fire being watched, found on the docked item or set in the inspector. |
| <Link id="m-onvalueupdated" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" onValueUpdated"}</code> | Event raised with the new value whenever it changes. |
| <Link id="m-placeitempuzzlelogic" /><code>{"private "}<Link to="/mod/game-api/types/global-p/placeitempuzzlelogic">{"PlaceItemPuzzleLogic"}</Link>{" placeItemPuzzleLogic"}</code> | The puzzle whose dock is watched. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-externalupdatefire" /><code>{"void ExternalUpdateFire(bool value)"}</code> | Lights or extinguishes the tracked fire from outside logic, only when `activatedByLogic` is set. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Subscribes to the starting fire (if set) and to the puzzle dock's docked and undocked events. |
| <Link id="m-dockeditemcheck" /><code>{"private void DockedItemCheck("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | On dock, finds the `Fire` under the dock, subscribes to it and pushes its lit state (inverted when `correctIfExtinguished`). |
| <Link id="m-undockeditemcheck" /><code>{"private void UndockedItemCheck("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | When the dock is empty, drops the tracked fire and reports false. |
| <Link id="m-updatevalue" /><code>{"private void UpdateValue(bool value)"}</code> | Stores the new state and invokes `onValueUpdated` only when it changed. |

</details>
