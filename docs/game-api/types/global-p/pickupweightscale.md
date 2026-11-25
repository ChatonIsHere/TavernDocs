---
title: "PickupWeightScale"
description: "class PickupWeightScale in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupWeightScale

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupWeightScale()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-containedpickups" /><code>{"private HashSet<"}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> containedPickups"}</code> |  |
| <Link id="m-gaugeprogressbar" /><code>{"private "}<Link to="/game-api/types/global-e-h/gaugeprogressbar">{"GaugeProgressBar"}</Link>{" gaugeProgressBar"}</code> |  |
| <Link id="m-maxweight" /><code>{"private float maxWeight"}</code> |  |
| <Link id="m-maxweightnotchposition" /><code>{"private float maxWeightNotchPosition"}</code> |  |
| <Link id="m-minweight" /><code>{"private float minWeight"}</code> |  |
| <Link id="m-players" /><code>{"private HashSet<"}<Link to="/game-api/types/global-p/playerweight">{"PlayerWeight"}</Link>{"> players"}</code> |  |
| <Link id="m-text" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" text"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-docked" /><code>{"private void Docked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg1, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" arg3)"}</code> |  |
| <Link id="m-dockeventweightupdate" /><code>{"private void DockEventWeightUpdate("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-grabbed" /><code>{"private void Grabbed("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickup, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> |  |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> |  |
| <Link id="m-updateweightdisplay" /><code>{"private void UpdateWeightDisplay()"}</code> |  |
| <Link id="m-updateweightdisplayinternal" /><code>{"private void UpdateWeightDisplayInternal()"}</code> |  |
