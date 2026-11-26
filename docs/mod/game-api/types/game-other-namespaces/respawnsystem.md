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
| <Link id="m-ctor" /><code>{"RespawnSystem()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-decrementfuelentry" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" decrementFuelEntry"}</code> | Timeline entry for the repeating fuel tick. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-model" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/irespawnsystemmodel">{"IRespawnSystemModel"}</Link>{" model"}</code> | The respawn system model with every shrine's fuel and subscribers. Saved and loaded with the entity. |
| <Link id="m-syncmodeltoclients" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncModelToClients"}</code> | Method sync (SyncB) that sends the model to clients. |
| <Link id="m-systemmodelchanged" /><code>{"private Action<"}<Link to="/mod/game-api/types/game-other-namespaces/irespawnsystemmodel">{"IRespawnSystemModel"}</Link>{"> systemModelChanged"}</code> | Listeners added with `AddSystemModelChangedListener`. |
| <Link id="m-timeofpreviousfueldecrement" /><code>{"private float timeOfPreviousFuelDecrement"}</code> | Time of the last fuel tick, used to work out how much fuel to take. |
| <Link id="m-updatemodelentry" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" updateModelEntry"}</code> | Timeline entry for the repeating model sync check. |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-systemsettings" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/irespawnsystemsettings">{"IRespawnSystemSettings"}</Link>{" SystemSettings { get; }"}</code> | The global `RespawnSystemSettings`, with tick rates and per-shrine settings. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addsystemmodelchangedlistener" /><code><Link to="/mod/game-api/types/game-other-namespaces/irespawnsystemmodel">{"IRespawnSystemModel"}</Link>{" AddSystemModelChangedListener(Action<"}<Link to="/mod/game-api/types/game-other-namespaces/irespawnsystemmodel">{"IRespawnSystemModel"}</Link>{"> onSystemModelChanged)"}</code> | Adds a listener called whenever the model is synced, and returns the current model. |
| <Link id="m-getactiveshrineidforplayer" /><code>{"Guid GetActiveShrineIdForPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | The GUID of the shrine the player is subscribed to. The global shrine if they have none. |
| <Link id="m-getremainingpoweredtimeforshrinenormalized" /><code>{"float GetRemainingPoweredTimeForShrineNormalized(Guid shrineId)"}</code> | How much fuel time a shrine has left, 0 to 1. |
| <Link id="m-getrespawnposition" /><code>{"Vector3 GetRespawnPosition("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, out bool isDefaultRespawn)"}</code> | Where the player respawns: their shrine's spawn position. Also says whether that's the global (default) shrine. |
| <Link id="m-getshrinesubscriberids" /><code>{"IEnumerable<int> GetShrineSubscriberIds(Guid shrineId)"}</code> | The user IDs of players subscribed to a shrine. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the network method that syncs the model. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: starts the fuel consumption and model sync timers from `RespawnSystemSettings`. |
| <Link id="m-load" /><code>{"void Load("}<Link to="/mod/game-api/types/game-other-namespaces/respawnsystemsavedata">{"RespawnSystemSaveData"}</Link>{" data, "}<Link to="/mod/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> | Rebuilds the model from save data. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Syncs the model when a player spawns this object. It sends to every nearby player, not only the new one. |
| <Link id="m-removesystemmodelchangedlistener" /><code>{"void RemoveSystemModelChangedListener(Action<"}<Link to="/mod/game-api/types/game-other-namespaces/irespawnsystemmodel">{"IRespawnSystemModel"}</Link>{"> onSystemModelChanged)"}</code> | Removes a listener added with `AddSystemModelChangedListener`. |
| <Link id="m-resetrespawnshrineforplayer" /><code>{"void ResetRespawnShrineForPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Unsubscribes the player from their shrine and syncs straight away. |
| <Link id="m-save" /><code><Link to="/mod/game-api/types/game-other-namespaces/respawnsystemsavedata">{"RespawnSystemSaveData"}</Link>{" Save("}<Link to="/mod/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> | Returns the model's save data. |
| <Link id="m-setfuelforshrine" /><code>{"void SetFuelForShrine(Guid shrineId, float value)"}</code> | Server: sets a shrine's fuel and syncs straight away. |
| <Link id="m-setrespawnshrineforplayer" /><code>{"void SetRespawnShrineForPlayer(Guid shrineId, "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Moves the player's subscription to a shrine. Synced on the next model tick, not straight away. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Cancels the fuel and model update timers. |
| <Link id="m-raisemodelchangedevent" /><code>{"private void RaiseModelChangedEvent()"}</code> | Calls the model changed listeners with the current model. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Creates an empty model if none was loaded. |
| <Link id="m-syncmodeltoclients-2" /><code>{"private void SyncModelToClients("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Sync handler: the model writes or reads itself on the stream, then listeners are told it changed. |
| <Link id="m-tickfuelconsumption" /><code>{"private void TickFuelConsumption()"}</code> | Server timer: takes fuel off shrines for the time since the last tick. |
| <Link id="m-tickupdatemodel" /><code>{"private void TickUpdateModel()"}</code> | Server timer: syncs the model to clients if it has changed. |

</details>

## Used in

Members of other types that take, return or hold a `RespawnSystem`:

[`GameLifetimeScope.respawnSystem`](/mod/game-api/types/assembly-other/gamelifetimescope#m-respawnsystem).
