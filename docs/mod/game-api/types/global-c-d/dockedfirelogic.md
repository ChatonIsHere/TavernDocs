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
| <Link id="m-ctor" /><code>{"DockedFireLogic()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activatedbylogic" /><code>{"private bool activatedByLogic"}</code> | <span className="api-desc">Lets `ExternalUpdateFire` light or put out the fire.</span> |
| <Link id="m-correctifextinguished" /><code>{"private bool correctIfExtinguished"}</code> | <span className="api-desc">Inverts the value reported on dock, so an unlit fire counts as correct.</span> |
| <Link id="m-currentvalue" /><code>{"private bool currentValue"}</code> | <span className="api-desc">Last value sent through `onValueUpdated`.</span> |
| <Link id="m-fire" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/fire">{"Fire"}</Link>{" fire"}</code> | <span className="api-desc">The fire being watched, found on the docked item or set in the inspector.</span> |
| <Link id="m-onvalueupdated" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" onValueUpdated"}</code> | <span className="api-desc">Event raised with the new value whenever it changes.</span> |
| <Link id="m-placeitempuzzlelogic" /><code>{"private "}<Link to="/mod/game-api/types/global-p/placeitempuzzlelogic">{"PlaceItemPuzzleLogic"}</Link>{" placeItemPuzzleLogic"}</code> | <span className="api-desc">The puzzle whose dock is watched.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-externalupdatefire" /><code>{"void ExternalUpdateFire(bool value)"}</code> | <span className="api-desc">Lights or extinguishes the tracked fire from outside logic, only when `activatedByLogic` is set.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Subscribes to the starting fire (if set) and to the puzzle dock's docked and undocked events.</span> |
| <Link id="m-dockeditemcheck" /><code>{"private void DockedItemCheck("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">On dock, finds the `Fire` under the dock, subscribes to it and pushes its lit state (inverted when `correctIfExtinguished`).</span> |
| <Link id="m-undockeditemcheck" /><code>{"private void UndockedItemCheck("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">When the dock is empty, drops the tracked fire and reports false.</span> |
| <Link id="m-updatevalue" /><code>{"private void UpdateValue(bool value)"}</code> | <span className="api-desc">Stores the new state and invokes `onValueUpdated` only when it changed.</span> |

</details>
