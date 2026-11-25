---
title: "CaveTeleporter"
description: "class CaveTeleporter in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CaveTeleporter

A **class** in `Root.Township`, `Alta.Caves`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<CaveTeleporterData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<CaveTeleporterData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`CaveTeleporterData`](/game-api/types/alta-world-generation/caveteleporterdata), [`LevelSelectCaveTeleporter`](/game-api/types/alta-world-generation/levelselectcaveteleporter)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CaveTeleporter()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-costrenderer" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" costRenderer"}</code> |  |
| <Link id="m-currentconnection" /><code>{"protected "}<Link to="/game-api/types/alta-world-generation/caveteleportconnection">{"CaveTeleportConnection"}</Link>{" currentConnection"}</code> |  |
| <Link id="m-fueldock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" fuelDock"}</code> |  |
| <Link id="m-handtrigger" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" handTrigger"}</code> |  |
| <Link id="m-isvalidteleport" /><code>{"private bool isValidTeleport"}</code> |  |
| <Link id="m-isvalidteleportchanged" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolevent">{"BoolEvent"}</Link>{" IsValidTeleportChanged"}</code> |  |
| <Link id="m-layer" /><code>{"protected int layer"}</code> |  |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> |  |
| <Link id="m-synclayer" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncLayer"}</code> |  |
| <Link id="m-teleporting" /><code>{"private readonly HashSet<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> teleporting"}</code> |  |
| <Link id="m-teleporttotarget" /><code>{"private Transform teleportToTarget"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-quantitystored" /><code>{"int QuantityStored { get; }"}</code> |  |
| <Link id="m-targetlayer" /><code>{"virtual int TargetLayer { get; }"}</code> |  |
| <Link id="m-teleporttotarget-2" /><code>{"Vector3 TeleportToTarget { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-quantitychanged" /><code>{"event Action QuantityChanged"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addamount" /><code>{"void AddAmount(int fuelQuantity)"}</code> |  |
| <Link id="m-destroyamount" /><code>{"void DestroyAmount(int amount)"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-teleport" /><code>{"void Teleport("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-updatelayerexternal" /><code>{"void UpdateLayerExternal()"}</code> |  |
| <Link id="m-allowinteract" /><code>{"private void AllowInteract("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-connectionvalidchanged" /><code>{"private void ConnectionValidChanged(bool isValid)"}</code> |  |
| <Link id="m-handfilter" /><code>{"private void HandFilter("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> |  |
| <Link id="m-initializeconnection" /><code>{"protected virtual void InitializeConnection()"}</code> |  |
| <Link id="m-onquantitychanged" /><code>{"private void OnQuantityChanged()"}</code> |  |
| <Link id="m-synclayer-2" /><code>{"private void SyncLayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-updateconnection" /><code>{"protected void UpdateConnection("}<Link to="/game-api/types/alta-world-generation/caveteleportconnection">{"CaveTeleportConnection"}</Link>{" connection)"}</code> |  |
| <Link id="m-updatelayer" /><code>{"private void UpdateLayer()"}</code> |  |

## Used in

Members of other types that take, return or hold a `CaveTeleporter`:

[`CaveTeleporterManager.Register`](/game-api/types/alta-world-generation/caveteleportermanager#m-register), [`CaveTeleporterProxy.RegisterTeleporter`](/game-api/types/alta-world-generation/caveteleporterproxy#m-registerteleporter), [`CaveTeleporterProxy.teleporter`](/game-api/types/alta-world-generation/caveteleporterproxy#m-teleporter).
