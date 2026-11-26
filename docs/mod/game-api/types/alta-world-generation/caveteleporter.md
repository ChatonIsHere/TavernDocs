---
title: "CaveTeleporter"
description: "A fuelled teleporter in the caves that sends a player to another layer (the surface by default) through CaveTeleporterManager."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CaveTeleporter

A **class** in `Root.Township`, `Alta.Caves`.

A fuelled teleporter in the caves that sends a player to another layer (the surface by default) through `CaveTeleporterManager`. Its layer is saved and synced; the teleport runs on the server.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<CaveTeleporterData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<CaveTeleporterData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`CaveTeleporterData`](/mod/game-api/types/alta-world-generation/caveteleporterdata), [`LevelSelectCaveTeleporter`](/mod/game-api/types/alta-world-generation/levelselectcaveteleporter)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CaveTeleporter()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentconnection" /><code>{"protected "}<Link to="/mod/game-api/types/alta-world-generation/caveteleportconnection">{"CaveTeleportConnection"}</Link>{" currentConnection"}</code> | The connection between this layer and the target layer. |
| <Link id="m-layer" /><code>{"protected int layer"}</code> | The cave layer this teleporter is on (0 is the surface). -1 until worked out. |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> | The class's NLog logger. |

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-costrenderer" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" costRenderer"}</code> | Text showing the fuel cost to teleport from here. Not set on a headless server. |
| <Link id="m-fueldock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" fuelDock"}</code> | Dock holding the teleporter's fuel. Optional; without it teleporting costs nothing here. |
| <Link id="m-handtrigger" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" handTrigger"}</code> | The interactable players touch to teleport. |
| <Link id="m-isvalidteleport" /><code>{"private bool isValidTeleport"}</code> | Whether the current connection is usable. |
| <Link id="m-isvalidteleportchanged" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boolevent">{"BoolEvent"}</Link>{" IsValidTeleportChanged"}</code> | Inspector event raised with true or false when the connection becomes usable or not. |
| <Link id="m-synclayer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncLayer"}</code> | Method sync that sends the layer to clients. |
| <Link id="m-teleporting" /><code>{"private readonly HashSet<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> teleporting"}</code> | Players whose teleport is in progress, so a second touch does nothing. |
| <Link id="m-teleporttotarget" /><code>{"private Transform teleportToTarget"}</code> | Transform marking where players arrive when teleporting to this teleporter's layer. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-quantitystored" /><code>{"int QuantityStored { get; }"}</code> | Fuel in the dock, or 0 if there is no dock. |
| <Link id="m-targetlayer" /><code>{"virtual int TargetLayer { get; }"}</code> | Layer this teleporter sends players to. 0 (the surface) unless overridden. |
| <Link id="m-teleporttotarget-2" /><code>{"Vector3 TeleportToTarget { get; }"}</code> | World position players arrive at when teleported to this teleporter. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-quantitychanged" /><code>{"event Action QuantityChanged"}</code> | Raised when the amount of fuel in the dock changes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addamount" /><code>{"void AddAmount(int fuelQuantity)"}</code> | Spawns fuel and docks the given quantity into the fuel dock. |
| <Link id="m-destroyamount" /><code>{"void DestroyAmount(int amount)"}</code> | Removes fuel from the dock. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Blocks hand interaction while the connection is invalid and sets up the layer sync. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: next frame, works out the layer and registers with the teleporter manager. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the layer to a joining player. |
| <Link id="m-teleport" /><code>{"void Teleport("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Server: if there is enough fuel, takes it, uses fuel at the other end and moves the player to the target layer. |
| <Link id="m-updatelayerexternal" /><code>{"void UpdateLayerExternal()"}</code> | Works out the layer again and re-registers. For callers outside the class. |
| <Link id="m-initializeconnection" /><code>{"protected virtual void InitializeConnection()"}</code> | Gets the connection from this layer to `TargetLayer` from the manager. |
| <Link id="m-updateconnection" /><code>{"protected void UpdateConnection("}<Link to="/mod/game-api/types/alta-world-generation/caveteleportconnection">{"CaveTeleportConnection"}</Link>{" connection)"}</code> | Switches to a connection, updates validity and shows its cost. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allowinteract" /><code>{"private void AllowInteract("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Lets the player use the teleporter again once their teleport has finished. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the fuel dock's quantity change to this teleporter's `QuantityChanged` event. |
| <Link id="m-connectionvalidchanged" /><code>{"private void ConnectionValidChanged(bool isValid)"}</code> | Updates whether the teleport is usable and raises `IsValidTeleportChanged` when that changes. |
| <Link id="m-handfilter" /><code>{"private void HandFilter("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | Interaction filter on the hand trigger: blocks use while there is no valid connection. |
| <Link id="m-onquantitychanged" /><code>{"private void OnQuantityChanged()"}</code> | Raises `QuantityChanged` when the fuel dock's amount changes. |
| <Link id="m-synclayer-2" /><code>{"private void SyncLayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Network sync of the teleporter's layer. Clients set up their connection once they receive it. |
| <Link id="m-updatelayer" /><code>{"private void UpdateLayer()"}</code> | Server: works out the layer from the chunk's `CaveLayerStreamer` if unset (0 if none), registers with `CaveTeleporterManager` and syncs the layer. |

</details>

## Used in

Members of other types that take, return or hold a `CaveTeleporter`:

[`CaveTeleporterManager.Register`](/mod/game-api/types/alta-world-generation/caveteleportermanager#m-register), [`CaveTeleporterProxy.RegisterTeleporter`](/mod/game-api/types/alta-world-generation/caveteleporterproxy#m-registerteleporter), [`CaveTeleporterProxy.teleporter`](/mod/game-api/types/alta-world-generation/caveteleporterproxy#m-teleporter).
