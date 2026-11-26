---
title: "GenericAssemblyStation"
description: "Assembly station with a dock for a GenericAssemblyPart, set up or down."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GenericAssemblyStation

A **class** in `Root.Township`, `Alta.Crafting`.

Assembly station with a dock for a `GenericAssemblyPart`, set up or down. Offers crafting options for parts brought near it and lets you chisel parts off the docked item.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`DecraftingComponent`](/game-api/types/alta-crafting/decraftingcomponent), [`ISavable<GenericAssemblyStationData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<GenericAssemblyStationData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`GenericAssemblyStationData`](/game-api/types/alta-crafting/genericassemblystationdata)
- **Nested types** [`AssemblyPosition`](/game-api/types/alta-crafting/genericassemblystation-assemblyposition)
- **Documented in** [Crafting](/game-api/game-systems/crafting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GenericAssemblyStation()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addedchiselables" /><code>{"private List<"}<Link to="/game-api/types/alta-crafting/chiselable">{"Chiselable"}</Link>{"> addedChiselables"}</code> | `Chiselable` components added to the docked item's extra rigidbodies. |
| <Link id="m-dock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock"}</code> | The dock the assembly part goes into. |
| <Link id="m-dockedpart" /><code>{"private "}<Link to="/game-api/types/alta-crafting/genericassemblypart">{"GenericAssemblyPart"}</Link>{" dockedPart"}</code> | The docked assembly part, or null. |
| <Link id="m-downparent" /><code>{"private Transform downParent"}</code> | Snap point parent for the down position. |
| <Link id="m-isdockpositionup" /><code>{"private bool isDockPositionUp"}</code> | Whether the dock is in the up position. Saved. |
| <Link id="m-syncdockposition" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncDockPosition"}</code> | Message sync for the dock position. |
| <Link id="m-toremove" /><code>{"private static List<Rigidbody> toRemove"}</code> | Scratch list for trackers to drop. Shared by all stations. |
| <Link id="m-trackedparts" /><code>{"private Dictionary<Rigidbody, "}<Link to="/game-api/types/alta-crafting/craftingparttracker">{"CraftingPartTracker"}</Link>{"> trackedParts"}</code> | Crafting parts inside the trigger, by rigidbody. |
| <Link id="m-trackparts" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" trackParts"}</code> | Registered update method, while parts are tracked. |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> | Update module the tracking runs on. |
| <Link id="m-upparent" /><code>{"private Transform upParent"}</code> | Snap point parent for the up position. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-canpickupchangewhileadded" /><code>{"override bool CanPickupChangeWhileAdded { get; }"}</code> | True: the docked item can be decrafted even if it isn't crafted yet. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the dock position sync. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the dock position to a joining player if something is docked. |
| <Link id="m-triggerenter" /><code>{"void TriggerEnter(Collider other)"}</code> | Called by the trigger when a collider enters; tracks crafting parts while something is docked. |
| <Link id="m-triggerexit" /><code>{"void TriggerExit(Collider other)"}</code> | Called by the trigger when a collider leaves; cancels its pending connection with the docked part. |
| <Link id="m-validatecraftingpart" /><code>{"protected override bool ValidateCraftingPart("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" part)"}</code> | Refuses to knock off a part if any `IBlockDisassembly` on it says it can't be disassembled. |

<details>
<summary>12 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the dock's filter and dock events. |
| <Link id="m-calculatedockposition" /><code>{"private void CalculateDockPosition("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Picks up or down from the part's allowed positions, or from which is nearer the player's hand if both are allowed. |
| <Link id="m-createoption" /><code>{"private void CreateOption()"}</code> | Offers a crafting option between the docked part and a held part nearby. |
| <Link id="m-dockfilter" /><code>{"private void DockFilter("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool result)"}</code> | Only accepts pickups with a `GenericAssemblyPart`. |
| <Link id="m-fixposition" /><code>{"private void FixPosition("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" part, bool isLoad)"}</code> | Re-applies the dock position after the docked part is crafted or decrafted. |
| <Link id="m-getadditionalchiselables" /><code>{"private void GetAdditionalChiselables("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Makes the docked item's other rigidbodies hittable for decrafting too. |
| <Link id="m-insertpiece" /><code>{"private void InsertPiece("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Handler for docking: positions the part, syncs, and starts decrafting and crafting options. |
| <Link id="m-positiondock" /><code>{"private void PositionDock()"}</code> | Moves the dock's snap point to the up or down parent and sets the part's position. |
| <Link id="m-removepiece" /><code>{"private void RemovePiece("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Handler for undocking: removes the chiselables and any pending connection. |
| <Link id="m-setuptrackedparts" /><code>{"private void SetUpTrackedParts(Collider collider)"}</code> | Starts tracking a crafting part entering the trigger. |
| <Link id="m-syncdockposition-2" /><code>{"private void SyncDockPosition("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Network message for the up or down dock position. |
| <Link id="m-trackparts-2" /><code>{"private void TrackParts()"}</code> | Per-frame update while parts are near: offers options and drops trackers that are gone. |

</details>
