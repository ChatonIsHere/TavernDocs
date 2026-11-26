---
title: "RespawnSystem"
description: "The networked object that tracks respawn shrines: which shrine each player is subscribed to, shrine fuel, and where a player respawns."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RespawnSystem

A **class** in `Root.Township`, `ATT.Respawn`.

The networked object that tracks respawn shrines: which shrine each player is subscribed to, shrine fuel, and where a player respawns. The server burns fuel on a timer and syncs the model to clients. Get it as `IRespawnSystem` through dependency injection.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`IRespawnSystem`](/mod/game-api/types/game-other-namespaces/irespawnsystem), [`IPlayerRespawnPositionProvider`](/mod/game-api/types/game-other-namespaces/iplayerrespawnpositionprovider), [`ISavable<RespawnSystemSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<RespawnSystemSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`RespawnSystemSaveData`](/mod/game-api/types/game-other-namespaces/respawnsystemsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RespawnSystem()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-decrementfuelentry" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" decrementFuelEntry"}</code> | <span className="api-desc">Timeline entry for the repeating fuel tick.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-model" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/irespawnsystemmodel">{"IRespawnSystemModel"}</Link>{" model"}</code> | <span className="api-desc">The respawn system model with every shrine's fuel and subscribers. Saved and loaded with the entity.</span> |
| <Link id="m-syncmodeltoclients" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncModelToClients"}</code> | <span className="api-desc">Method sync (SyncB) that sends the model to clients.</span> |
| <Link id="m-systemmodelchanged" /><code>{"private Action<"}<Link to="/mod/game-api/types/game-other-namespaces/irespawnsystemmodel">{"IRespawnSystemModel"}</Link>{"> systemModelChanged"}</code> | <span className="api-desc">Listeners added with `AddSystemModelChangedListener`.</span> |
| <Link id="m-timeofpreviousfueldecrement" /><code>{"private float timeOfPreviousFuelDecrement"}</code> | <span className="api-desc">Time of the last fuel tick, used to work out how much fuel to take.</span> |
| <Link id="m-updatemodelentry" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" updateModelEntry"}</code> | <span className="api-desc">Timeline entry for the repeating model sync check.</span> |

</details>

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-systemsettings" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/irespawnsystemsettings">{"IRespawnSystemSettings"}</Link>{" SystemSettings { get; }"}</code> | <span className="api-desc">The global `RespawnSystemSettings`, with tick rates and per-shrine settings.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addsystemmodelchangedlistener" /><code><Link to="/mod/game-api/types/game-other-namespaces/irespawnsystemmodel">{"IRespawnSystemModel"}</Link>{" AddSystemModelChangedListener(Action<"}<Link to="/mod/game-api/types/game-other-namespaces/irespawnsystemmodel">{"IRespawnSystemModel"}</Link>{"> onSystemModelChanged)"}</code> | <span className="api-desc">Adds a listener called whenever the model is synced, and returns the current model.</span> |
| <Link id="m-getactiveshrineidforplayer" /><code>{"Guid GetActiveShrineIdForPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">The GUID of the shrine the player is subscribed to. The global shrine if they have none.</span> |
| <Link id="m-getremainingpoweredtimeforshrinenormalized" /><code>{"float GetRemainingPoweredTimeForShrineNormalized(Guid shrineId)"}</code> | <span className="api-desc">How much fuel time a shrine has left, 0 to 1.</span> |
| <Link id="m-getrespawnposition" /><code>{"Vector3 GetRespawnPosition("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, out bool isDefaultRespawn)"}</code> | <span className="api-desc">Where the player respawns: their shrine's spawn position. Also says whether that's the global (default) shrine.</span> |
| <Link id="m-getshrinesubscriberids" /><code>{"IEnumerable<int> GetShrineSubscriberIds(Guid shrineId)"}</code> | <span className="api-desc">The user IDs of players subscribed to a shrine.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the network method that syncs the model.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: starts the fuel consumption and model sync timers from `RespawnSystemSettings`.</span> |
| <Link id="m-load" /><code>{"void Load("}<Link to="/mod/game-api/types/game-other-namespaces/respawnsystemsavedata">{"RespawnSystemSaveData"}</Link>{" data, "}<Link to="/mod/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> | <span className="api-desc">Rebuilds the model from save data.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Syncs the model when a player spawns this object. It sends to every nearby player, not only the new one.</span> |
| <Link id="m-removesystemmodelchangedlistener" /><code>{"void RemoveSystemModelChangedListener(Action<"}<Link to="/mod/game-api/types/game-other-namespaces/irespawnsystemmodel">{"IRespawnSystemModel"}</Link>{"> onSystemModelChanged)"}</code> | <span className="api-desc">Removes a listener added with `AddSystemModelChangedListener`.</span> |
| <Link id="m-resetrespawnshrineforplayer" /><code>{"void ResetRespawnShrineForPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Unsubscribes the player from their shrine and syncs straight away.</span> |
| <Link id="m-save" /><code><Link to="/mod/game-api/types/game-other-namespaces/respawnsystemsavedata">{"RespawnSystemSaveData"}</Link>{" Save("}<Link to="/mod/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> | <span className="api-desc">Returns the model's save data.</span> |
| <Link id="m-setfuelforshrine" /><code>{"void SetFuelForShrine(Guid shrineId, float value)"}</code> | <span className="api-desc">Server: sets a shrine's fuel and syncs straight away.</span> |
| <Link id="m-setrespawnshrineforplayer" /><code>{"void SetRespawnShrineForPlayer(Guid shrineId, "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Moves the player's subscription to a shrine. Synced on the next model tick, not straight away.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Cancels the fuel and model update timers.</span> |
| <Link id="m-raisemodelchangedevent" /><code>{"private void RaiseModelChangedEvent()"}</code> | <span className="api-desc">Calls the model changed listeners with the current model.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Creates an empty model if none was loaded.</span> |
| <Link id="m-syncmodeltoclients-2" /><code>{"private void SyncModelToClients("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Sync handler: the model writes or reads itself on the stream, then listeners are told it changed.</span> |
| <Link id="m-tickfuelconsumption" /><code>{"private void TickFuelConsumption()"}</code> | <span className="api-desc">Server timer: takes fuel off shrines for the time since the last tick.</span> |
| <Link id="m-tickupdatemodel" /><code>{"private void TickUpdateModel()"}</code> | <span className="api-desc">Server timer: syncs the model to clients if it has changed.</span> |

</details>

## Used in

Members of other types that take, return or hold a `RespawnSystem`:

<div className="api-used-in">

[`GameLifetimeScope.respawnSystem`](/mod/game-api/types/assembly-other/gamelifetimescope#m-respawnsystem).

</div>
