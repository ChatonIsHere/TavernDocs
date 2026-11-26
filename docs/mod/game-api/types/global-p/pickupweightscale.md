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
| <Link id="m-ctor" /><code>{"PickupWeightScale()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-containedpickups" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> containedPickups"}</code> | <span className="api-desc">Pickups in the trigger.</span> |
| <Link id="m-gaugeprogressbar" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/gaugeprogressbar">{"GaugeProgressBar"}</Link>{" gaugeProgressBar"}</code> | <span className="api-desc">Gauge that shows the weight.</span> |
| <Link id="m-maxweight" /><code>{"private float maxWeight"}</code> | <span className="api-desc">Weight that maps to the max notch on the gauge.</span> |
| <Link id="m-maxweightnotchposition" /><code>{"private float maxWeightNotchPosition"}</code> | <span className="api-desc">Gauge fill (0 to 1) of the max weight notch.</span> |
| <Link id="m-minweight" /><code>{"private float minWeight"}</code> | <span className="api-desc">Unused minimum weight setting.</span> |
| <Link id="m-players" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/global-p/playerweight">{"PlayerWeight"}</Link>{"> players"}</code> | <span className="api-desc">Players standing in the trigger.</span> |
| <Link id="m-text" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" text"}</code> | <span className="api-desc">Optional text showing the total weight.</span> |

</details>

## Methods

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-docked" /><code>{"private void Docked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" arg3)"}</code> | <span className="api-desc">Stops counting a pickup once it docks somewhere, and refreshes.</span> |
| <Link id="m-dockeventweightupdate" /><code>{"private void DockEventWeightUpdate("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Refreshes the reading when something docks into or leaves a pickup on the scale.</span> |
| <Link id="m-grabbed" /><code>{"private void Grabbed("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickup, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Refreshes the reading when a pickup on the scale is grabbed or let go.</span> |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | <span className="api-desc">Starts tracking a pickup (not a crafted child) or player that enters, and hooks its events.</span> |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> | <span className="api-desc">Stops tracking a pickup or player that leaves, and unhooks its events.</span> |
| <Link id="m-updateweightdisplay" /><code>{"private void UpdateWeightDisplay()"}</code> | <span className="api-desc">Queues a reading update for later in the frame.</span> |
| <Link id="m-updateweightdisplayinternal" /><code>{"private void UpdateWeightDisplayInternal()"}</code> | <span className="api-desc">Sums the weight of tracked pickups that aren't held or docked, plus players, and updates the gauge and text.</span> |

</details>
