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

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** `IEnumerable<IRespawnShrineModel>`, `IEnumerable`
- **Derived types** [`RespawnSystemModel`](/game-api/types/game-other-namespaces/respawnsystemmodel)
- **Attributes** `DefaultMember`

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-globalshrineguid" /><code>{"Guid GlobalShrineGuid { get; }"}</code> | Id of the global (default) shrine that players use when not subscribed elsewhere. |
| <Link id="m-hasmodelchanged" /><code>{"bool HasModelChanged { get; }"}</code> | True when fuel or subscribers changed since the last sync to clients. |
| <Link id="m-item" /><code><Link to="/game-api/types/game-other-namespaces/irespawnshrinemodel">{"IRespawnShrineModel"}</Link>{" this[Guid id] { get; }"}</code> | The shrine model with the given id. Throws if there is none. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addsubscriber" /><code>{"bool AddSubscriber(Guid shrineId, int playerId)"}</code> | Subscribes a player id to a shrine. Always true for the global shrine, which keeps no list. |
| <Link id="m-decrementfuel" /><code>{"void DecrementFuel(float timeSinceLastDecrementInSeconds)"}</code> | Burns fuel on every shrine with subscribers. A shrine that runs out loses all its subscribers. |
| <Link id="m-getactiveshrineidforplayer" /><code>{"Guid GetActiveShrineIdForPlayer(int playerId)"}</code> | The shrine a player is subscribed to, or the global shrine if none. |
| <Link id="m-getremainingpoweredtimeforshrinenormalized" /><code>{"float GetRemainingPoweredTimeForShrineNormalized(Guid shrineId)"}</code> | Fuel left as a fraction of the shrine's capacity. 0 for the global shrine. |
| <Link id="m-getsavedata" /><code><Link to="/game-api/types/game-other-namespaces/respawnsystemsavedata">{"RespawnSystemSaveData"}</Link>{" GetSaveData()"}</code> | Builds save data: the global shrine id and all shrine models as JSON. |
| <Link id="m-getshrinesubscriberids" /><code>{"IEnumerable<int> GetShrineSubscriberIds(Guid shrineId)"}</code> | Player ids subscribed to a shrine. Empty for the global shrine. |
| <Link id="m-removesubscriber" /><code>{"bool RemoveSubscriber(Guid shrineId, int playerId)"}</code> | Unsubscribes a player id from a shrine. Always true for the global shrine. |
| <Link id="m-setfuel" /><code>{"void SetFuel(Guid shrineId, float value)"}</code> | Sets a shrine's fuel and marks the model changed. |
| <Link id="m-synctoclients" /><code>{"void SyncToClients("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, ref "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads all shrine models as a JSON string. Writing clears the changed flag. |

## Used in

Members of other types that take, return or hold a `IRespawnSystemModel`:

[`GlobalRespawnShrine.OnModelChanged`](/game-api/types/game-other-namespaces/globalrespawnshrine#m-onmodelchanged), [`IRespawnBeaconController.OnModelChanged`](/game-api/types/game-other-namespaces/irespawnbeaconcontroller#m-onmodelchanged), [`IRespawnSystem.AddSystemModelChangedListener`](/game-api/types/game-other-namespaces/irespawnsystem#m-addsystemmodelchangedlistener), [`IRespawnSystem.RemoveSystemModelChangedListener`](/game-api/types/game-other-namespaces/irespawnsystem#m-removesystemmodelchangedlistener), [`PoweredRespawnShrine.OnModelChanged`](/game-api/types/game-other-namespaces/poweredrespawnshrine#m-onmodelchanged), [`RespawnBeaconController.OnModelChanged`](/game-api/types/game-other-namespaces/respawnbeaconcontroller#m-onmodelchanged), [`RespawnBeaconController.SpawnAllBeaconViews`](/game-api/types/game-other-namespaces/respawnbeaconcontroller#m-spawnallbeaconviews), [`RespawnShrine.OnModelChanged`](/game-api/types/game-other-namespaces/respawnshrine#m-onmodelchanged), [`RespawnSystem.AddSystemModelChangedListener`](/game-api/types/game-other-namespaces/respawnsystem#m-addsystemmodelchangedlistener), [`RespawnSystem.model`](/game-api/types/game-other-namespaces/respawnsystem#m-model), [`RespawnSystem.RemoveSystemModelChangedListener`](/game-api/types/game-other-namespaces/respawnsystem#m-removesystemmodelchangedlistener), [`RespawnSystem.systemModelChanged`](/game-api/types/game-other-namespaces/respawnsystem#m-systemmodelchanged).
