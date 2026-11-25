---
title: "PickupDecay"
description: "Server-side decay timer for pickups, paused while held or docked."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupDecay

A **class** in `Root.Township`, no namespace.

Server-side decay timer for pickups, paused while held or docked.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`BasicDecay`](/game-api/types/global-a-b/basicdecay)
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupDecay()"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-pickudecaysettings" /><code><Link to="/game-api/types/global-p/pickupdecaysettings">{"PickupDecaySettings"}</Link>{" PickuDecaySettings { get; }"}</code> |  |
| <Link id="m-timermultiplier" /><code>{"protected override float TimerMultiplier { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-craftedaschild" /><code>{"private void CraftedAsChild("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" newRoot)"}</code> |  |
| <Link id="m-deregisterdecay" /><code>{"private void DeregisterDecay()"}</code> |  |
| <Link id="m-docked" /><code>{"private void Docked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-finishinitialize" /><code>{"protected override void FinishInitialize()"}</code> |  |
| <Link id="m-interactionended" /><code>{"private void InteractionEnded("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-interactionstarted" /><code>{"private void InteractionStarted("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-isdecayvalid" /><code>{"protected override bool IsDecayValid(bool isStarting)"}</code> |  |
| <Link id="m-registerdecay" /><code>{"private void RegisterDecay()"}</code> |  |
| <Link id="m-undocked" /><code>{"private void Undocked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
