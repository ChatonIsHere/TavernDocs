---
title: "CommunalStorage"
description: "class CommunalStorage in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CommunalStorage

A **class** in `Root.Township`, `Alta.Inventory`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<CommunalStorageData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<CommunalStorageData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase), [`IOperateOnWipe`](/game-api/types/global-i-l/ioperateonwipe)
- **Derived types** [`CommunalStorageData`](/game-api/types/alta-items/communalstoragedata)
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CommunalStorage()"}</code> |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-filterdock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" filterDock"}</code> |
| <Link id="m-interactables" /><code>{"private "}<Link to="/game-api/types/global-i-l/longholdinteractable">{"LongHoldInteractable"}</Link>{"[] interactables"}</code> |
| <Link id="m-interactionrestrictor" /><code>{"private "}<Link to="/game-api/types/global-p/playerinteractionrestrictor">{"PlayerInteractionRestrictor"}</Link>{" interactionRestrictor"}</code> |
| <Link id="m-internaldock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" internalDock"}</code> |
| <Link id="m-isnotunique" /><code>{"private bool isNotUnique"}</code> |
| <Link id="m-localallowance" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" localAllowance"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-refundquantity" /><code>{"private int refundQuantity"}</code> |
| <Link id="m-uniqueidentifier" /><code>{"private "}<Link to="/game-api/types/alta-items/communalstorageuniqueidentifier">{"CommunalStorageUniqueIdentifier"}</Link>{" uniqueIdentifier"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-fillup" /><code>{"void FillUp()"}</code> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |

<details>
<summary>10 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-delayload" /><code>{"private async void DelayLoad()"}</code> |
| <Link id="m-dockfilter" /><code>{"private void DockFilter("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool result)"}</code> |
| <Link id="m-filterinteraction" /><code>{"private void FilterInteraction("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> |
| <Link id="m-graball" /><code>{"private void GrabAll("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-grabsingle" /><code>{"private void GrabSingle("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-markchunk" /><code>{"private void MarkChunk("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |
| <Link id="m-refund" /><code>{"private async void Refund("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |
| <Link id="m-updateallowance" /><code>{"private void UpdateAllowance()"}</code> |
| <Link id="m-wipeoperation" /><code>{"private void IOperateOnWipe.WipeOperation()"}</code> |

</details>
