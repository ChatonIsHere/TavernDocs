---
title: "CommunalStorage"
description: "A shared storage dock that players take from by holding an interactable, limited by a PlayerInteractionRestrictor allowance."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CommunalStorage

A **class** in `Root.Township`, `Alta.Inventory`.

A shared storage dock that players take from by holding an interactable, limited by a `PlayerInteractionRestrictor` allowance. Its stock survives server wipes through `GlobalCommunalStorageValues`. Server runs it; clients show the allowance.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<CommunalStorageData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<CommunalStorageData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase), [`IOperateOnWipe`](/mod/game-api/types/global-i-l/ioperateonwipe)
- **Derived types** [`CommunalStorageData`](/mod/game-api/types/alta-items/communalstoragedata)
- **Documented in** [Items, interaction and damage](/mod/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CommunalStorage()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-filterdock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" filterDock"}</code> | <span className="api-desc">Dock holding a sample item that decides what the internal dock accepts.</span> |
| <Link id="m-interactables" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/longholdinteractable">{"LongHoldInteractable"}</Link>{"[] interactables"}</code> | <span className="api-desc">Hold interactables players use to take items.</span> |
| <Link id="m-interactionrestrictor" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerinteractionrestrictor">{"PlayerInteractionRestrictor"}</Link>{" interactionRestrictor"}</code> | <span className="api-desc">Tracks how many items each player may still take.</span> |
| <Link id="m-internaldock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" internalDock"}</code> | <span className="api-desc">The dock that holds the stock.</span> |
| <Link id="m-isnotunique" /><code>{"private bool isNotUnique"}</code> | <span className="api-desc">True when there is no unique identifier, so pre-wipe stock is saved and loaded by item instead.</span> |
| <Link id="m-localallowance" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" localAllowance"}</code> | <span className="api-desc">Text that shows the local player's remaining allowance.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Logger for this class.</span> |
| <Link id="m-refundquantity" /><code>{"private int refundQuantity"}</code> | <span className="api-desc">How much allowance the next refund gives back; set to a pouch's contents when a pouch is docked.</span> |
| <Link id="m-uniqueidentifier" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/communalstorageuniqueidentifier">{"CommunalStorageUniqueIdentifier"}</Link>{" uniqueIdentifier"}</code> | <span className="api-desc">Identifier used to save and load this storage's stock across wipes; saved with the entity.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fillup" /><code>{"void FillUp()"}</code> | <span className="api-desc">Server: fills the internal dock to 150 items, spawning one from the filter dock's item if empty. Used by a progress console command.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Client: hooks dock and allowance changes to update the allowance text.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: hooks short and long holds to the grab methods, refunds on docking, starts `DelayLoad` and marks the chunk for pre-wipe work.</span> |

<details className="api-private">
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Adds the interaction filter to each hold interactable and, if there is a filter dock, a dock filter to the internal dock.</span> |
| <Link id="m-delayload" /><code>{"private async void DelayLoad()"}</code> | <span className="api-desc">Server: loads the stock saved before a wipe for this storage's unique identifier and adds it to the internal dock.</span> |
| <Link id="m-dockfilter" /><code>{"private void DockFilter("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool result)"}</code> | <span className="api-desc">Only lets items into the internal dock if the filter dock would accept them.</span> |
| <Link id="m-filterinteraction" /><code>{"private void FilterInteraction("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | <span className="api-desc">Blocks taking when the dock is empty or the player has no allowance left.</span> |
| <Link id="m-graball" /><code>{"private void GrabAll("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Server, on long hold: takes as many items as the allowance and pouch limit allow and puts them in the player's hand.</span> |
| <Link id="m-grabsingle" /><code>{"private void GrabSingle("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Server, on short hold: uses one allowance and puts one item in the player's hand.</span> |
| <Link id="m-markchunk" /><code>{"private void MarkChunk("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Marks the entity's chunk as needing a pre-wipe operation so `WipeOperation` runs.</span> |
| <Link id="m-refund" /><code>{"private async void Refund("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">When an item is docked back, gives the player's allowance back (for a pouch, its whole contents) and adds any pre-wipe stock saved for it.</span> |
| <Link id="m-updateallowance" /><code>{"private void UpdateAllowance()"}</code> | <span className="api-desc">Shows how many items the local player can still take, or clears the text when empty.</span> |
| <Link id="m-wipeoperation" /><code>{"private void IOperateOnWipe.WipeOperation()"}</code> | <span className="api-desc">Before a wipe, saves the stored quantity globally by unique identifier, or by item if the storage has none.</span> |

</details>
