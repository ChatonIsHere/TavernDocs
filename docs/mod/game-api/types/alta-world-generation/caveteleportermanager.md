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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<CaveTeleporterManagerData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<CaveTeleporterManagerData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`CaveTeleporterManagerData`](/mod/game-api/types/alta-world-generation/caveteleportermanagerdata)
- **Documented in** [Caves](/mod/game-api/world/caves)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CaveTeleporterManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lastsoundeffect" /><code>{"private DateTime lastSoundEffect"}</code> | <span className="api-desc">When the local teleport sound last played, for the cooldown.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Logger for this class.</span> |
| <Link id="m-synceffect" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/alta-world-generation/teleporteffectargument">{"TeleportEffectArgument"}</Link>{"> syncEffect"}</code> | <span className="api-desc">Message sync for teleport effects.</span> |
| <Link id="m-syncfull" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncFull"}</code> | <span className="api-desc">Message sync for the full layer list.</span> |
| <Link id="m-syncproxy" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncProxy"}</code> | <span className="api-desc">Message sync for a single layer's fuel.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-availablelayers" /><code>{"Dictionary<int, "}<Link to="/mod/game-api/types/alta-world-generation/caveteleporterproxy">{"CaveTeleporterProxy"}</Link>{"> AvailableLayers { get; }"}</code> | <span className="api-desc">Teleporter proxies by cave layer, each holding the destination position and fuel.</span> |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/alta-world-generation/caveteleportermanager">{"CaveTeleporterManager"}</Link>{" Instance { get; private set; }"}</code> | <span className="api-desc">The manager in the scene, set on `Awake`.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onproxyupdatedfuel" /><code>{"static event Action<"}<Link to="/mod/game-api/types/alta-world-generation/caveteleporterproxydata">{"CaveTeleporterProxyData"}</Link>{"> OnProxyUpdatedfuel"}</code> | <span className="api-desc">Raised when a layer's fuel changes.</span> |
| <Link id="m-onsyncedfull" /><code>{"static event Action OnSyncedFull"}</code> | <span className="api-desc">Client: raised after the full layer list arrives, and on a cave wipe.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-consumefuel" /><code>{"static void ConsumeFuel(int layer, int cost)"}</code> | <span className="api-desc">Takes fuel from a layer's teleporter.</span> |
| <Link id="m-getteleportposition" /><code>{"static Vector3 GetTeleportPosition(int layer)"}</code> | <span className="api-desc">Where a teleport to a layer lands, or a random `OutsideCave` spawn point if that layer has no teleporter.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the full, per-layer and effect syncs.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Hooks the cave wipe, which clears every layer but 0.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends every layer's fuel to a joining player.</span> |
| <Link id="m-register" /><code>{"static void Register(int layer, "}<Link to="/mod/game-api/types/alta-world-generation/caveteleporter">{"CaveTeleporter"}</Link>{" teleporter)"}</code> | <span className="api-desc">Adds a teleporter for a layer. If the layer already has one, the fuel is matched to the lower of the two.</span> |
| <Link id="m-requestconnection" /><code>{"static "}<Link to="/mod/game-api/types/alta-world-generation/caveteleportconnection">{"CaveTeleportConnection"}</Link>{" RequestConnection(int fromLayer, int toLayer)"}</code> | <span className="api-desc">Works out a connection and fuel costs between two layers. Empty for the same layer or an unknown start layer.</span> |
| <Link id="m-teleportplayer" /><code>{"static void TeleportPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, Vector3 toPosition, int toLayer, Action<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> finished)"}</code> | <span className="api-desc">Server: plays the departure effect, waits the teleport delay, then moves the player and briefly protects them from impacts.</span> |

<details className="api-private">
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Sets `Instance` to this.</span> |
| <Link id="m-checkforlocalsoundcooldown" /><code>{"private bool CheckForLocalSoundCooldown()"}</code> | <span className="api-desc">Client: returns false if the local teleport sound played too recently, otherwise records the time and returns true.</span> |
| <Link id="m-delayteleport" /><code>{"private static void DelayTeleport("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/alta-world-generation/teleporteffectargument">{"TeleportEffectArgument"}</Link>{" argument, Action<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> finished)"}</code> | <span className="api-desc">Server: after the teleport delay, moves the player to the chunk at the target, plays the arrival effect and grants impact invincibility.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unhooks from the server cave wipe event.</span> |
| <Link id="m-proxyupdatedfuel" /><code>{"private static void ProxyUpdatedFuel("}<Link to="/mod/game-api/types/alta-world-generation/caveteleporterproxy">{"CaveTeleporterProxy"}</Link>{" proxy)"}</code> | <span className="api-desc">Runs when a layer's fuel changes: raises `OnProxyUpdatedfuel` and, on the server, syncs that layer's fuel to clients.</span> |
| <Link id="m-synceffect-2" /><code>{"private void SyncEffect("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-world-generation/teleporteffectargument">{"TeleportEffectArgument"}</Link>{" effectArgument)"}</code> | <span className="api-desc">Network message for teleport effects: on clients plays the effect and sound, and fades the screen for the teleporting player on departure.</span> |
| <Link id="m-syncfull-2" /><code>{"private void SyncFull("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Network message that sends every layer's fuel; clients rebuild `AvailableLayers` and raise `OnSyncedFull`.</span> |
| <Link id="m-syncproxy-2" /><code>{"private void SyncProxy("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int layer)"}</code> | <span className="api-desc">Network message that sends one layer's fuel; clients update it and raise `OnProxyUpdatedfuel`.</span> |
| <Link id="m-wipecaves" /><code>{"private void WipeCaves()"}</code> | <span className="api-desc">Server: on a cave wipe, drops every layer except layer 0 and resyncs clients.</span> |

</details>
