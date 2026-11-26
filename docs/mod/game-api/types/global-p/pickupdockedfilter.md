---
title: "PickupDockedFilter"
description: "Component that re-fires a pickup's docked and undocked events only for certain dock settings (or all except them when inverted)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupDockedFilter

A **class** in `Root.Township`, the global namespace.

Component that re-fires a pickup's docked and undocked events only for certain dock settings (or all except them when inverted).

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupDockedFilter()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-docked" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickupdockedevent">{"PickupDockedEvent"}</Link>{" docked"}</code> | Event fired when the pickup docks into a matching dock. |
| <Link id="m-isinverted" /><code>{"private bool isInverted"}</code> | When true, the filter matches every dock not in `onlyFor`. |
| <Link id="m-onlyfor" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{"> onlyFor"}</code> | Dock settings that count as a match. |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | The pickup being watched. |
| <Link id="m-undocked" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickupdockedevent">{"PickupDockedEvent"}</Link>{" undocked"}</code> | Event fired when the pickup leaves a matching dock. |

</details>

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the pickup's `Docked` and `Undocked` events. |
| <Link id="m-ondocked" /><code>{"private void OnDocked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Fires `docked` if the dock's settings pass the filter. |
| <Link id="m-onundocked" /><code>{"private void OnUndocked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Fires `undocked` if the dock's settings pass the filter. |

</details>
