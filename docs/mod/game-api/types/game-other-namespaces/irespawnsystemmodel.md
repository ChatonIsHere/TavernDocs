---
title: "IRespawnSystemModel"
description: "The respawn shrines' state: fuel per shrine and which players are subscribed to which shrine."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IRespawnSystemModel

An **interface** in `Root.Township`, `ATT.Respawn`.

The respawn shrines' state: fuel per shrine and which players are subscribed to which shrine. `RespawnSystem` owns it, ticks it on the server and syncs it to clients as JSON.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** `IEnumerable<IRespawnShrineModel>`, `IEnumerable`
- **Derived types** [`RespawnSystemModel`](/mod/game-api/types/game-other-namespaces/respawnsystemmodel)
- **Attributes** `DefaultMember`

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-globalshrineguid" /><code>{"Guid GlobalShrineGuid { get; }"}</code> | <span className="api-desc">Id of the global (default) shrine that players use when not subscribed elsewhere.</span> |
| <Link id="m-hasmodelchanged" /><code>{"bool HasModelChanged { get; }"}</code> | <span className="api-desc">True when fuel or subscribers changed since the last sync to clients.</span> |
| <Link id="m-item" /><code><Link to="/mod/game-api/types/game-other-namespaces/irespawnshrinemodel">{"IRespawnShrineModel"}</Link>{" this[Guid id] { get; }"}</code> | <span className="api-desc">The shrine model with the given id. Throws if there is none.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addsubscriber" /><code>{"bool AddSubscriber(Guid shrineId, int playerId)"}</code> | <span className="api-desc">Subscribes a player id to a shrine. Always true for the global shrine, which keeps no list.</span> |
| <Link id="m-decrementfuel" /><code>{"void DecrementFuel(float timeSinceLastDecrementInSeconds)"}</code> | <span className="api-desc">Burns fuel on every shrine with subscribers. A shrine that runs out loses all its subscribers.</span> |
| <Link id="m-getactiveshrineidforplayer" /><code>{"Guid GetActiveShrineIdForPlayer(int playerId)"}</code> | <span className="api-desc">The shrine a player is subscribed to, or the global shrine if none.</span> |
| <Link id="m-getremainingpoweredtimeforshrinenormalized" /><code>{"float GetRemainingPoweredTimeForShrineNormalized(Guid shrineId)"}</code> | <span className="api-desc">Fuel left as a fraction of the shrine's capacity. 0 for the global shrine.</span> |
| <Link id="m-getsavedata" /><code><Link to="/mod/game-api/types/game-other-namespaces/respawnsystemsavedata">{"RespawnSystemSaveData"}</Link>{" GetSaveData()"}</code> | <span className="api-desc">Builds save data: the global shrine id and all shrine models as JSON.</span> |
| <Link id="m-getshrinesubscriberids" /><code>{"IEnumerable<int> GetShrineSubscriberIds(Guid shrineId)"}</code> | <span className="api-desc">Player ids subscribed to a shrine. Empty for the global shrine.</span> |
| <Link id="m-removesubscriber" /><code>{"bool RemoveSubscriber(Guid shrineId, int playerId)"}</code> | <span className="api-desc">Unsubscribes a player id from a shrine. Always true for the global shrine.</span> |
| <Link id="m-setfuel" /><code>{"void SetFuel(Guid shrineId, float value)"}</code> | <span className="api-desc">Sets a shrine's fuel and marks the model changed.</span> |
| <Link id="m-synctoclients" /><code>{"void SyncToClients("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, ref "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes or reads all shrine models as a JSON string. Writing clears the changed flag.</span> |

## Used in

Members of other types that take, return or hold a `IRespawnSystemModel`:

<div className="api-used-in">

[`GlobalRespawnShrine.OnModelChanged`](/mod/game-api/types/game-other-namespaces/globalrespawnshrine#m-onmodelchanged), [`IRespawnBeaconController.OnModelChanged`](/mod/game-api/types/game-other-namespaces/irespawnbeaconcontroller#m-onmodelchanged), [`IRespawnSystem.AddSystemModelChangedListener`](/mod/game-api/types/game-other-namespaces/irespawnsystem#m-addsystemmodelchangedlistener), [`IRespawnSystem.RemoveSystemModelChangedListener`](/mod/game-api/types/game-other-namespaces/irespawnsystem#m-removesystemmodelchangedlistener), [`PoweredRespawnShrine.OnModelChanged`](/mod/game-api/types/game-other-namespaces/poweredrespawnshrine#m-onmodelchanged), [`RespawnBeaconController.OnModelChanged`](/mod/game-api/types/game-other-namespaces/respawnbeaconcontroller#m-onmodelchanged), [`RespawnBeaconController.SpawnAllBeaconViews`](/mod/game-api/types/game-other-namespaces/respawnbeaconcontroller#m-spawnallbeaconviews), [`RespawnShrine.OnModelChanged`](/mod/game-api/types/game-other-namespaces/respawnshrine#m-onmodelchanged), [`RespawnSystem.AddSystemModelChangedListener`](/mod/game-api/types/game-other-namespaces/respawnsystem#m-addsystemmodelchangedlistener), [`RespawnSystem.model`](/mod/game-api/types/game-other-namespaces/respawnsystem#m-model), [`RespawnSystem.RemoveSystemModelChangedListener`](/mod/game-api/types/game-other-namespaces/respawnsystem#m-removesystemmodelchangedlistener), [`RespawnSystem.systemModelChanged`](/mod/game-api/types/game-other-namespaces/respawnsystem#m-systemmodelchanged).

</div>
