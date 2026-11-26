---
title: "PickupDecay"
description: "Server-side decay timer for a loose pickup: it counts down only while the item sits untouched, not held, docked or crafted into something, then the item decays."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupDecay

A **class** in `Root.Township`, no namespace.

Server-side decay timer for a loose pickup: it counts down only while the item sits untouched, not held, docked or crafted into something, then the item decays. Settings come from `PickupDecaySettings`.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`BasicDecay`](/game-api/types/global-a-b/basicdecay)
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PickupDecay()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-pickudecaysettings" /><code><Link to="/game-api/types/global-p/pickupdecaysettings">{"PickupDecaySettings"}</Link>{" PickuDecaySettings { get; }"}</code> | The decay settings cast to `PickupDecaySettings`. Name misspelt in the game code. |
| <Link id="m-timermultiplier" /><code>{"protected override float TimerMultiplier { get; }"}</code> | `CraftedDecayTimeMultiplier` for crafted items when crafted decay is allowed, otherwise 1. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Disables decay for items spawned by a chunk's first load, until someone grabs them. |
| <Link id="m-finishinitialize" /><code>{"protected override void FinishInitialize()"}</code> | Watches crafting root changes and starts decay unless the item is a crafted child. |
| <Link id="m-isdecayvalid" /><code>{"protected override bool IsDecayValid(bool isStarting)"}</code> | Decay only runs if the item isn't held, docked or a crafted child, and the settings allow its crafted and kinematic state. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-craftedaschild" /><code>{"private void CraftedAsChild("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" newRoot)"}</code> | When the crafting root changes, stops decay if the item became part of another object, or restarts it if it's the root again. |
| <Link id="m-deregisterdecay" /><code>{"private void DeregisterDecay()"}</code> | Unhooks the grab and dock events. |
| <Link id="m-docked" /><code>{"private void Docked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Cancels the timer when docked. |
| <Link id="m-interactionended" /><code>{"private void InteractionEnded("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Restarts the timer from full once nobody holds the item. |
| <Link id="m-interactionstarted" /><code>{"private void InteractionStarted("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Enables decay and cancels the timer while held. |
| <Link id="m-registerdecay" /><code>{"private void RegisterDecay()"}</code> | Hooks grab and dock events and starts or continues the timer. |
| <Link id="m-undocked" /><code>{"private void Undocked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Restarts the timer from full when undocked and not held. |

</details>
