---
title: "CaveTeleporterManager"
description: "class CaveTeleporterManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CaveTeleporterManager

A **class** in `Root.Township`, `Alta.Caves`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<CaveTeleporterManagerData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<CaveTeleporterManagerData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`CaveTeleporterManagerData`](/game-api/types/alta-world-generation/caveteleportermanagerdata)
- **Documented in** [Caves](/game-api/world/caves)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CaveTeleporterManager()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-lastsoundeffect" /><code>{"private DateTime lastSoundEffect"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-synceffect" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/alta-world-generation/teleporteffectargument">{"TeleportEffectArgument"}</Link>{"> syncEffect"}</code> |  |
| <Link id="m-syncfull" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncFull"}</code> |  |
| <Link id="m-syncproxy" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncProxy"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-availablelayers" /><code>{"Dictionary<int, "}<Link to="/game-api/types/alta-world-generation/caveteleporterproxy">{"CaveTeleporterProxy"}</Link>{"> AvailableLayers { get; }"}</code> |  |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/alta-world-generation/caveteleportermanager">{"CaveTeleporterManager"}</Link>{" Instance { get; private set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onproxyupdatedfuel" /><code>{"static event Action<"}<Link to="/game-api/types/alta-world-generation/caveteleporterproxydata">{"CaveTeleporterProxyData"}</Link>{"> OnProxyUpdatedfuel"}</code> |  |
| <Link id="m-onsyncedfull" /><code>{"static event Action OnSyncedFull"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-consumefuel" /><code>{"static void ConsumeFuel(int layer, int cost)"}</code> |  |
| <Link id="m-getteleportposition" /><code>{"static Vector3 GetTeleportPosition(int layer)"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-register" /><code>{"static void Register(int layer, "}<Link to="/game-api/types/alta-world-generation/caveteleporter">{"CaveTeleporter"}</Link>{" teleporter)"}</code> |  |
| <Link id="m-requestconnection" /><code>{"static "}<Link to="/game-api/types/alta-world-generation/caveteleportconnection">{"CaveTeleportConnection"}</Link>{" RequestConnection(int fromLayer, int toLayer)"}</code> |  |
| <Link id="m-teleportplayer" /><code>{"static void TeleportPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, Vector3 toPosition, int toLayer, Action<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> finished)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-checkforlocalsoundcooldown" /><code>{"private bool CheckForLocalSoundCooldown()"}</code> |  |
| <Link id="m-delayteleport" /><code>{"private static void DelayTeleport("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/alta-world-generation/teleporteffectargument">{"TeleportEffectArgument"}</Link>{" argument, Action<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> finished)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-proxyupdatedfuel" /><code>{"private static void ProxyUpdatedFuel("}<Link to="/game-api/types/alta-world-generation/caveteleporterproxy">{"CaveTeleporterProxy"}</Link>{" proxy)"}</code> |  |
| <Link id="m-synceffect-2" /><code>{"private void SyncEffect("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-world-generation/teleporteffectargument">{"TeleportEffectArgument"}</Link>{" effectArgument)"}</code> |  |
| <Link id="m-syncfull-2" /><code>{"private void SyncFull("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncproxy-2" /><code>{"private void SyncProxy("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int layer)"}</code> |  |
| <Link id="m-wipecaves" /><code>{"private void WipeCaves()"}</code> |  |
