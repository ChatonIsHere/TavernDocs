---
title: "PickupDecay"
description: "Server-side decay timer for a loose pickup: it counts down only while the item sits untouched, not held, docked or crafted into something, then the item decays."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupDecay

A **class** in `Root.Township`, the global namespace.

Server-side decay timer for a loose pickup: it counts down only while the item sits untouched, not held, docked or crafted into something, then the item decays. Settings come from `PickupDecaySettings`.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`BasicDecay`](/mod/game-api/types/global-a-b/basicdecay)
- **Documented in** [Items, interaction and damage](/mod/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupDecay()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-pickudecaysettings" /><code><Link to="/mod/game-api/types/global-p/pickupdecaysettings">{"PickupDecaySettings"}</Link>{" PickuDecaySettings { get; }"}</code> | <span className="api-desc">The decay settings cast to `PickupDecaySettings`. Name misspelt in the game code.</span> |
| <Link id="m-timermultiplier" /><code>{"protected override float TimerMultiplier { get; }"}</code> | <span className="api-desc">`CraftedDecayTimeMultiplier` for crafted items when crafted decay is allowed, otherwise 1.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Disables decay for items spawned by a chunk's first load, until someone grabs them.</span> |
| <Link id="m-finishinitialize" /><code>{"protected override void FinishInitialize()"}</code> | <span className="api-desc">Watches crafting root changes and starts decay unless the item is a crafted child.</span> |
| <Link id="m-isdecayvalid" /><code>{"protected override bool IsDecayValid(bool isStarting)"}</code> | <span className="api-desc">Decay only runs if the item isn't held, docked or a crafted child, and the settings allow its crafted and kinematic state.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-craftedaschild" /><code>{"private void CraftedAsChild("}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" newRoot)"}</code> | <span className="api-desc">When the crafting root changes, stops decay if the item became part of another object, or restarts it if it's the root again.</span> |
| <Link id="m-deregisterdecay" /><code>{"private void DeregisterDecay()"}</code> | <span className="api-desc">Unhooks the grab and dock events.</span> |
| <Link id="m-docked" /><code>{"private void Docked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Cancels the timer when docked.</span> |
| <Link id="m-interactionended" /><code>{"private void InteractionEnded("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Restarts the timer from full once nobody holds the item.</span> |
| <Link id="m-interactionstarted" /><code>{"private void InteractionStarted("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Enables decay and cancels the timer while held.</span> |
| <Link id="m-registerdecay" /><code>{"private void RegisterDecay()"}</code> | <span className="api-desc">Hooks grab and dock events and starts or continues the timer.</span> |
| <Link id="m-undocked" /><code>{"private void Undocked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Restarts the timer from full when undocked and not held.</span> |

</details>
