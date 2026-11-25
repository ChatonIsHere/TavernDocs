---
title: "IRespawnSystemModel"
description: "interface IRespawnSystemModel in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IRespawnSystemModel

An **interface** in `Root.Township`, `ATT.Respawn`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** `IEnumerable<IRespawnShrineModel>`, `IEnumerable`
- **Derived types** [`RespawnSystemModel`](/game-api/types/game-other-namespaces/respawnsystemmodel)
- **Attributes** `DefaultMember`

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-globalshrineguid" /><code>{"Guid GlobalShrineGuid { get; }"}</code> |  |
| <Link id="m-hasmodelchanged" /><code>{"bool HasModelChanged { get; }"}</code> |  |
| <Link id="m-item" /><code><Link to="/game-api/types/game-other-namespaces/irespawnshrinemodel">{"IRespawnShrineModel"}</Link>{" this[Guid id] { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addsubscriber" /><code>{"bool AddSubscriber(Guid shrineId, int playerId)"}</code> |  |
| <Link id="m-decrementfuel" /><code>{"void DecrementFuel(float timeSinceLastDecrementInSeconds)"}</code> |  |
| <Link id="m-getactiveshrineidforplayer" /><code>{"Guid GetActiveShrineIdForPlayer(int playerId)"}</code> |  |
| <Link id="m-getremainingpoweredtimeforshrinenormalized" /><code>{"float GetRemainingPoweredTimeForShrineNormalized(Guid shrineId)"}</code> |  |
| <Link id="m-getsavedata" /><code><Link to="/game-api/types/game-other-namespaces/respawnsystemsavedata">{"RespawnSystemSaveData"}</Link>{" GetSaveData()"}</code> |  |
| <Link id="m-getshrinesubscriberids" /><code>{"IEnumerable<int> GetShrineSubscriberIds(Guid shrineId)"}</code> |  |
| <Link id="m-removesubscriber" /><code>{"bool RemoveSubscriber(Guid shrineId, int playerId)"}</code> |  |
| <Link id="m-setfuel" /><code>{"void SetFuel(Guid shrineId, float value)"}</code> |  |
| <Link id="m-synctoclients" /><code>{"void SyncToClients("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, ref "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |

## Used in

Members of other types that take, return or hold a `IRespawnSystemModel`:

[`GlobalRespawnShrine.OnModelChanged`](/game-api/types/game-other-namespaces/globalrespawnshrine#m-onmodelchanged), [`IRespawnBeaconController.OnModelChanged`](/game-api/types/game-other-namespaces/irespawnbeaconcontroller#m-onmodelchanged), [`IRespawnSystem.AddSystemModelChangedListener`](/game-api/types/game-other-namespaces/irespawnsystem#m-addsystemmodelchangedlistener), [`IRespawnSystem.RemoveSystemModelChangedListener`](/game-api/types/game-other-namespaces/irespawnsystem#m-removesystemmodelchangedlistener), [`PoweredRespawnShrine.OnModelChanged`](/game-api/types/game-other-namespaces/poweredrespawnshrine#m-onmodelchanged), [`RespawnBeaconController.OnModelChanged`](/game-api/types/game-other-namespaces/respawnbeaconcontroller#m-onmodelchanged), [`RespawnBeaconController.SpawnAllBeaconViews`](/game-api/types/game-other-namespaces/respawnbeaconcontroller#m-spawnallbeaconviews), [`RespawnShrine.OnModelChanged`](/game-api/types/game-other-namespaces/respawnshrine#m-onmodelchanged), [`RespawnSystem.AddSystemModelChangedListener`](/game-api/types/game-other-namespaces/respawnsystem#m-addsystemmodelchangedlistener), [`RespawnSystem.model`](/game-api/types/game-other-namespaces/respawnsystem#m-model), [`RespawnSystem.RemoveSystemModelChangedListener`](/game-api/types/game-other-namespaces/respawnsystem#m-removesystemmodelchangedlistener), [`RespawnSystem.systemModelChanged`](/game-api/types/game-other-namespaces/respawnsystem#m-systemmodelchanged).
