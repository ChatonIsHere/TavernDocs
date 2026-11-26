---
title: "PickupWeightScale"
description: "A weighing scale: adds up the weight of loose pickups and players standing in its trigger and shows it on a gauge and text."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupWeightScale

A **class** in `Root.Township`, the global namespace.

A weighing scale: adds up the weight of loose pickups and players standing in its trigger and shows it on a gauge and text.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupWeightScale()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-containedpickups" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> containedPickups"}</code> | Pickups in the trigger. |
| <Link id="m-gaugeprogressbar" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/gaugeprogressbar">{"GaugeProgressBar"}</Link>{" gaugeProgressBar"}</code> | Gauge that shows the weight. |
| <Link id="m-maxweight" /><code>{"private float maxWeight"}</code> | Weight that maps to the max notch on the gauge. |
| <Link id="m-maxweightnotchposition" /><code>{"private float maxWeightNotchPosition"}</code> | Gauge fill (0 to 1) of the max weight notch. |
| <Link id="m-minweight" /><code>{"private float minWeight"}</code> | Unused minimum weight setting. |
| <Link id="m-players" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/global-p/playerweight">{"PlayerWeight"}</Link>{"> players"}</code> | Players standing in the trigger. |
| <Link id="m-text" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" text"}</code> | Optional text showing the total weight. |

</details>

## Methods

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-docked" /><code>{"private void Docked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" arg3)"}</code> | Stops counting a pickup once it docks somewhere, and refreshes. |
| <Link id="m-dockeventweightupdate" /><code>{"private void DockEventWeightUpdate("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Refreshes the reading when something docks into or leaves a pickup on the scale. |
| <Link id="m-grabbed" /><code>{"private void Grabbed("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickup, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Refreshes the reading when a pickup on the scale is grabbed or let go. |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | Starts tracking a pickup (not a crafted child) or player that enters, and hooks its events. |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> | Stops tracking a pickup or player that leaves, and unhooks its events. |
| <Link id="m-updateweightdisplay" /><code>{"private void UpdateWeightDisplay()"}</code> | Queues a reading update for later in the frame. |
| <Link id="m-updateweightdisplayinternal" /><code>{"private void UpdateWeightDisplayInternal()"}</code> | Sums the weight of tracked pickups that aren't held or docked, plus players, and updates the gauge and text. |

</details>
