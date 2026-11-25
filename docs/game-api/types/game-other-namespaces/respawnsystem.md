---
title: "RespawnSystem"
description: "class RespawnSystem in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RespawnSystem

A **class** in `Root.Township`, `ATT.Respawn`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IRespawnSystem`](/game-api/types/game-other-namespaces/irespawnsystem), [`IPlayerRespawnPositionProvider`](/game-api/types/game-other-namespaces/iplayerrespawnpositionprovider), [`ISavable<RespawnSystemSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<RespawnSystemSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`RespawnSystemSaveData`](/game-api/types/game-other-namespaces/respawnsystemsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RespawnSystem()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-decrementfuelentry" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" decrementFuelEntry"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-model" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/irespawnsystemmodel">{"IRespawnSystemModel"}</Link>{" model"}</code> |  |
| <Link id="m-syncmodeltoclients" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncModelToClients"}</code> |  |
| <Link id="m-systemmodelchanged" /><code>{"private Action<"}<Link to="/game-api/types/game-other-namespaces/irespawnsystemmodel">{"IRespawnSystemModel"}</Link>{"> systemModelChanged"}</code> |  |
| <Link id="m-timeofpreviousfueldecrement" /><code>{"private float timeOfPreviousFuelDecrement"}</code> |  |
| <Link id="m-updatemodelentry" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" updateModelEntry"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-systemsettings" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/irespawnsystemsettings">{"IRespawnSystemSettings"}</Link>{" SystemSettings { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addsystemmodelchangedlistener" /><code><Link to="/game-api/types/game-other-namespaces/irespawnsystemmodel">{"IRespawnSystemModel"}</Link>{" AddSystemModelChangedListener(Action<"}<Link to="/game-api/types/game-other-namespaces/irespawnsystemmodel">{"IRespawnSystemModel"}</Link>{"> onSystemModelChanged)"}</code> |  |
| <Link id="m-getactiveshrineidforplayer" /><code>{"Guid GetActiveShrineIdForPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-getremainingpoweredtimeforshrinenormalized" /><code>{"float GetRemainingPoweredTimeForShrineNormalized(Guid shrineId)"}</code> |  |
| <Link id="m-getrespawnposition" /><code>{"Vector3 GetRespawnPosition("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, out bool isDefaultRespawn)"}</code> |  |
| <Link id="m-getshrinesubscriberids" /><code>{"IEnumerable<int> GetShrineSubscriberIds(Guid shrineId)"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-load" /><code>{"void Load("}<Link to="/game-api/types/game-other-namespaces/respawnsystemsavedata">{"RespawnSystemSaveData"}</Link>{" data, "}<Link to="/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-removesystemmodelchangedlistener" /><code>{"void RemoveSystemModelChangedListener(Action<"}<Link to="/game-api/types/game-other-namespaces/irespawnsystemmodel">{"IRespawnSystemModel"}</Link>{"> onSystemModelChanged)"}</code> |  |
| <Link id="m-resetrespawnshrineforplayer" /><code>{"void ResetRespawnShrineForPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-save" /><code><Link to="/game-api/types/game-other-namespaces/respawnsystemsavedata">{"RespawnSystemSaveData"}</Link>{" Save("}<Link to="/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> |  |
| <Link id="m-setfuelforshrine" /><code>{"void SetFuelForShrine(Guid shrineId, float value)"}</code> |  |
| <Link id="m-setrespawnshrineforplayer" /><code>{"void SetRespawnShrineForPlayer(Guid shrineId, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-raisemodelchangedevent" /><code>{"private void RaiseModelChangedEvent()"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |
| <Link id="m-syncmodeltoclients-2" /><code>{"private void SyncModelToClients("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-tickfuelconsumption" /><code>{"private void TickFuelConsumption()"}</code> |  |
| <Link id="m-tickupdatemodel" /><code>{"private void TickUpdateModel()"}</code> |  |

## Used in

Members of other types that take, return or hold a `RespawnSystem`:

[`GameLifetimeScope.respawnSystem`](/game-api/types/assembly-other/gamelifetimescope#m-respawnsystem).
