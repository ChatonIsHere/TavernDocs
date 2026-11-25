---
title: "GenericAssemblyStation"
description: "class GenericAssemblyStation in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GenericAssemblyStation

A **class** in `Root.Township`, `Alta.Crafting`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`DecraftingComponent`](/game-api/types/alta-crafting/decraftingcomponent), [`ISavable<GenericAssemblyStationData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<GenericAssemblyStationData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`GenericAssemblyStationData`](/game-api/types/alta-crafting/genericassemblystationdata)
- **Nested types** [`AssemblyPosition`](/game-api/types/alta-crafting/genericassemblystation-assemblyposition)
- **Documented in** [Crafting](/game-api/game-systems/crafting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GenericAssemblyStation()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-addedchiselables" /><code>{"private List<"}<Link to="/game-api/types/alta-crafting/chiselable">{"Chiselable"}</Link>{"> addedChiselables"}</code> |  |
| <Link id="m-dock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock"}</code> |  |
| <Link id="m-dockedpart" /><code>{"private "}<Link to="/game-api/types/alta-crafting/genericassemblypart">{"GenericAssemblyPart"}</Link>{" dockedPart"}</code> |  |
| <Link id="m-downparent" /><code>{"private Transform downParent"}</code> |  |
| <Link id="m-isdockpositionup" /><code>{"private bool isDockPositionUp"}</code> |  |
| <Link id="m-syncdockposition" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncDockPosition"}</code> |  |
| <Link id="m-toremove" /><code>{"private static List<Rigidbody> toRemove"}</code> |  |
| <Link id="m-trackedparts" /><code>{"private Dictionary<Rigidbody, "}<Link to="/game-api/types/alta-crafting/craftingparttracker">{"CraftingPartTracker"}</Link>{"> trackedParts"}</code> |  |
| <Link id="m-trackparts" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" trackParts"}</code> |  |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> |  |
| <Link id="m-upparent" /><code>{"private Transform upParent"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-canpickupchangewhileadded" /><code>{"override bool CanPickupChangeWhileAdded { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-triggerenter" /><code>{"void TriggerEnter(Collider other)"}</code> |  |
| <Link id="m-triggerexit" /><code>{"void TriggerExit(Collider other)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-calculatedockposition" /><code>{"private void CalculateDockPosition("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-createoption" /><code>{"private void CreateOption()"}</code> |  |
| <Link id="m-dockfilter" /><code>{"private void DockFilter("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool result)"}</code> |  |
| <Link id="m-fixposition" /><code>{"private void FixPosition("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" part, bool isLoad)"}</code> |  |
| <Link id="m-getadditionalchiselables" /><code>{"private void GetAdditionalChiselables("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |  |
| <Link id="m-insertpiece" /><code>{"private void InsertPiece("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-positiondock" /><code>{"private void PositionDock()"}</code> |  |
| <Link id="m-removepiece" /><code>{"private void RemovePiece("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-setuptrackedparts" /><code>{"private void SetUpTrackedParts(Collider collider)"}</code> |  |
| <Link id="m-syncdockposition-2" /><code>{"private void SyncDockPosition("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-trackparts-2" /><code>{"private void TrackParts()"}</code> |  |
| <Link id="m-validatecraftingpart" /><code>{"protected override bool ValidateCraftingPart("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" part)"}</code> |  |
