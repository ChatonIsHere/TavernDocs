---
title: "CaveTeleporterManager"
description: "Singleton network entity that tracks the cave teleporter on each cave layer and its fuel, and moves players between them."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CaveTeleporterManager

A **class** in `Root.Township`, `Alta.Caves`.

Singleton network entity that tracks the cave teleporter on each cave layer and its fuel, and moves players between them. The server saves and syncs it; it resets on a cave wipe.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<CaveTeleporterManagerData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<CaveTeleporterManagerData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`CaveTeleporterManagerData`](/game-api/types/alta-world-generation/caveteleportermanagerdata)
- **Documented in** [Caves](/game-api/world/caves)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CaveTeleporterManager()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lastsoundeffect" /><code>{"private DateTime lastSoundEffect"}</code> | When the local teleport sound last played, for the cooldown. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-synceffect" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/alta-world-generation/teleporteffectargument">{"TeleportEffectArgument"}</Link>{"> syncEffect"}</code> | Message sync for teleport effects. |
| <Link id="m-syncfull" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncFull"}</code> | Message sync for the full layer list. |
| <Link id="m-syncproxy" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncProxy"}</code> | Message sync for a single layer's fuel. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-availablelayers" /><code>{"Dictionary<int, "}<Link to="/game-api/types/alta-world-generation/caveteleporterproxy">{"CaveTeleporterProxy"}</Link>{"> AvailableLayers { get; }"}</code> | Teleporter proxies by cave layer, each holding the destination position and fuel. |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/alta-world-generation/caveteleportermanager">{"CaveTeleporterManager"}</Link>{" Instance { get; private set; }"}</code> | The manager in the scene, set on `Awake`. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onproxyupdatedfuel" /><code>{"static event Action<"}<Link to="/game-api/types/alta-world-generation/caveteleporterproxydata">{"CaveTeleporterProxyData"}</Link>{"> OnProxyUpdatedfuel"}</code> | Raised when a layer's fuel changes. |
| <Link id="m-onsyncedfull" /><code>{"static event Action OnSyncedFull"}</code> | Client: raised after the full layer list arrives, and on a cave wipe. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-consumefuel" /><code>{"static void ConsumeFuel(int layer, int cost)"}</code> | Takes fuel from a layer's teleporter. |
| <Link id="m-getteleportposition" /><code>{"static Vector3 GetTeleportPosition(int layer)"}</code> | Where a teleport to a layer lands, or a random `OutsideCave` spawn point if that layer has no teleporter. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the full, per-layer and effect syncs. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Hooks the cave wipe, which clears every layer but 0. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends every layer's fuel to a joining player. |
| <Link id="m-register" /><code>{"static void Register(int layer, "}<Link to="/game-api/types/alta-world-generation/caveteleporter">{"CaveTeleporter"}</Link>{" teleporter)"}</code> | Adds a teleporter for a layer. If the layer already has one, the fuel is matched to the lower of the two. |
| <Link id="m-requestconnection" /><code>{"static "}<Link to="/game-api/types/alta-world-generation/caveteleportconnection">{"CaveTeleportConnection"}</Link>{" RequestConnection(int fromLayer, int toLayer)"}</code> | Works out a connection and fuel costs between two layers. Empty for the same layer or an unknown start layer. |
| <Link id="m-teleportplayer" /><code>{"static void TeleportPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, Vector3 toPosition, int toLayer, Action<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> finished)"}</code> | Server: plays the departure effect, waits the teleport delay, then moves the player and briefly protects them from impacts. |

<details>
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Sets `Instance` to this. |
| <Link id="m-checkforlocalsoundcooldown" /><code>{"private bool CheckForLocalSoundCooldown()"}</code> | Client: returns false if the local teleport sound played too recently, otherwise records the time and returns true. |
| <Link id="m-delayteleport" /><code>{"private static void DelayTeleport("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/alta-world-generation/teleporteffectargument">{"TeleportEffectArgument"}</Link>{" argument, Action<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> finished)"}</code> | Server: after the teleport delay, moves the player to the chunk at the target, plays the arrival effect and grants impact invincibility. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unhooks from the server cave wipe event. |
| <Link id="m-proxyupdatedfuel" /><code>{"private static void ProxyUpdatedFuel("}<Link to="/game-api/types/alta-world-generation/caveteleporterproxy">{"CaveTeleporterProxy"}</Link>{" proxy)"}</code> | Runs when a layer's fuel changes: raises `OnProxyUpdatedfuel` and, on the server, syncs that layer's fuel to clients. |
| <Link id="m-synceffect-2" /><code>{"private void SyncEffect("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-world-generation/teleporteffectargument">{"TeleportEffectArgument"}</Link>{" effectArgument)"}</code> | Network message for teleport effects: on clients plays the effect and sound, and fades the screen for the teleporting player on departure. |
| <Link id="m-syncfull-2" /><code>{"private void SyncFull("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Network message that sends every layer's fuel; clients rebuild `AvailableLayers` and raise `OnSyncedFull`. |
| <Link id="m-syncproxy-2" /><code>{"private void SyncProxy("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int layer)"}</code> | Network message that sends one layer's fuel; clients update it and raise `OnProxyUpdatedfuel`. |
| <Link id="m-wipecaves" /><code>{"private void WipeCaves()"}</code> | Server: on a cave wipe, drops every layer except layer 0 and resyncs clients. |

</details>
