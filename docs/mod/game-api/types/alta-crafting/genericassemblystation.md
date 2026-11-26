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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`DecraftingComponent`](/mod/game-api/types/alta-crafting/decraftingcomponent), [`ISavable<GenericAssemblyStationData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<GenericAssemblyStationData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`GenericAssemblyStationData`](/mod/game-api/types/alta-crafting/genericassemblystationdata)
- **Nested types** [`AssemblyPosition`](/mod/game-api/types/alta-crafting/genericassemblystation-assemblyposition)
- **Documented in** [Crafting](/mod/game-api/game-systems/crafting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GenericAssemblyStation()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addedchiselables" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-crafting/chiselable">{"Chiselable"}</Link>{"> addedChiselables"}</code> | <span className="api-desc">`Chiselable` components added to the docked item's extra rigidbodies.</span> |
| <Link id="m-dock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock"}</code> | <span className="api-desc">The dock the assembly part goes into.</span> |
| <Link id="m-dockedpart" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/genericassemblypart">{"GenericAssemblyPart"}</Link>{" dockedPart"}</code> | <span className="api-desc">The docked assembly part, or null.</span> |
| <Link id="m-downparent" /><code>{"private Transform downParent"}</code> | <span className="api-desc">Snap point parent for the down position.</span> |
| <Link id="m-isdockpositionup" /><code>{"private bool isDockPositionUp"}</code> | <span className="api-desc">Whether the dock is in the up position. Saved.</span> |
| <Link id="m-syncdockposition" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncDockPosition"}</code> | <span className="api-desc">Message sync for the dock position.</span> |
| <Link id="m-toremove" /><code>{"private static List<Rigidbody> toRemove"}</code> | <span className="api-desc">Scratch list for trackers to drop. Shared by all stations.</span> |
| <Link id="m-trackedparts" /><code>{"private Dictionary<Rigidbody, "}<Link to="/mod/game-api/types/alta-crafting/craftingparttracker">{"CraftingPartTracker"}</Link>{"> trackedParts"}</code> | <span className="api-desc">Crafting parts inside the trigger, by rigidbody.</span> |
| <Link id="m-trackparts" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" trackParts"}</code> | <span className="api-desc">Registered update method, while parts are tracked.</span> |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> | <span className="api-desc">Update module the tracking runs on.</span> |
| <Link id="m-upparent" /><code>{"private Transform upParent"}</code> | <span className="api-desc">Snap point parent for the up position.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-canpickupchangewhileadded" /><code>{"override bool CanPickupChangeWhileAdded { get; }"}</code> | <span className="api-desc">True: the docked item can be decrafted even if it isn't crafted yet.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Creates the dock position sync.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends the dock position to a joining player if something is docked.</span> |
| <Link id="m-triggerenter" /><code>{"void TriggerEnter(Collider other)"}</code> | <span className="api-desc">Called by the trigger when a collider enters; tracks crafting parts while something is docked.</span> |
| <Link id="m-triggerexit" /><code>{"void TriggerExit(Collider other)"}</code> | <span className="api-desc">Called by the trigger when a collider leaves; cancels its pending connection with the docked part.</span> |
| <Link id="m-validatecraftingpart" /><code>{"protected override bool ValidateCraftingPart("}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" part)"}</code> | <span className="api-desc">Refuses to knock off a part if any `IBlockDisassembly` on it says it can't be disassembled.</span> |

<details className="api-private">
<summary>12 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the dock's filter and dock events.</span> |
| <Link id="m-calculatedockposition" /><code>{"private void CalculateDockPosition("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Picks up or down from the part's allowed positions, or from which is nearer the player's hand if both are allowed.</span> |
| <Link id="m-createoption" /><code>{"private void CreateOption()"}</code> | <span className="api-desc">Offers a crafting option between the docked part and a held part nearby.</span> |
| <Link id="m-dockfilter" /><code>{"private void DockFilter("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool result)"}</code> | <span className="api-desc">Only accepts pickups with a `GenericAssemblyPart`.</span> |
| <Link id="m-fixposition" /><code>{"private void FixPosition("}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" part, bool isLoad)"}</code> | <span className="api-desc">Re-applies the dock position after the docked part is crafted or decrafted.</span> |
| <Link id="m-getadditionalchiselables" /><code>{"private void GetAdditionalChiselables("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">Makes the docked item's other rigidbodies hittable for decrafting too.</span> |
| <Link id="m-insertpiece" /><code>{"private void InsertPiece("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Handler for docking: positions the part, syncs, and starts decrafting and crafting options.</span> |
| <Link id="m-positiondock" /><code>{"private void PositionDock()"}</code> | <span className="api-desc">Moves the dock's snap point to the up or down parent and sets the part's position.</span> |
| <Link id="m-removepiece" /><code>{"private void RemovePiece("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Handler for undocking: removes the chiselables and any pending connection.</span> |
| <Link id="m-setuptrackedparts" /><code>{"private void SetUpTrackedParts(Collider collider)"}</code> | <span className="api-desc">Starts tracking a crafting part entering the trigger.</span> |
| <Link id="m-syncdockposition-2" /><code>{"private void SyncDockPosition("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Network message for the up or down dock position.</span> |
| <Link id="m-trackparts-2" /><code>{"private void TrackParts()"}</code> | <span className="api-desc">Per-frame update while parts are near: offers options and drops trackers that are gone.</span> |

</details>
