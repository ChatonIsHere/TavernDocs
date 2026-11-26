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
| <Link id="m-ctor" /><code>{"PickupDockedFilter()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-docked" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickupdockedevent">{"PickupDockedEvent"}</Link>{" docked"}</code> | <span className="api-desc">Event fired when the pickup docks into a matching dock.</span> |
| <Link id="m-isinverted" /><code>{"private bool isInverted"}</code> | <span className="api-desc">When true, the filter matches every dock not in `onlyFor`.</span> |
| <Link id="m-onlyfor" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{"> onlyFor"}</code> | <span className="api-desc">Dock settings that count as a match.</span> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | <span className="api-desc">The pickup being watched.</span> |
| <Link id="m-undocked" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickupdockedevent">{"PickupDockedEvent"}</Link>{" undocked"}</code> | <span className="api-desc">Event fired when the pickup leaves a matching dock.</span> |

</details>

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the pickup's `Docked` and `Undocked` events.</span> |
| <Link id="m-ondocked" /><code>{"private void OnDocked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Fires `docked` if the dock's settings pass the filter.</span> |
| <Link id="m-onundocked" /><code>{"private void OnUndocked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Fires `undocked` if the dock's settings pass the filter.</span> |

</details>
