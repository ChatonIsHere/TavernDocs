---
title: "RespawnSystemModel"
description: "class RespawnSystemModel in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RespawnSystemModel

A **class** in `Root.Township`, `ATT.Respawn`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`IRespawnSystemModel`](/game-api/types/game-other-namespaces/irespawnsystemmodel), `IEnumerable<IRespawnShrineModel>`, `IEnumerable`
- **Attributes** `DefaultMember`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RespawnSystemModel()"}</code> |  |
| <Link id="m-ctor-2" /><code>{"RespawnSystemModel("}<Link to="/game-api/types/game-other-namespaces/respawnsystemsavedata">{"RespawnSystemSaveData"}</Link>{" saveData)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-respawnshrinemodels" /><code>{"private Dictionary<Guid, "}<Link to="/game-api/types/game-other-namespaces/respawnshrinemodel">{"RespawnShrineModel"}</Link>{"> respawnShrineModels"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-globalshrineguid" /><code>{"Guid GlobalShrineGuid { get; }"}</code> |  |
| <Link id="m-hasmodelchanged" /><code>{"bool HasModelChanged { get; private set; }"}</code> |  |
| <Link id="m-item" /><code><Link to="/game-api/types/game-other-namespaces/irespawnshrinemodel">{"IRespawnShrineModel"}</Link>{" this[Guid id] { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addsubscriber" /><code>{"bool AddSubscriber(Guid shrineId, int playerId)"}</code> |  |
| <Link id="m-decrementfuel" /><code>{"void DecrementFuel(float timeSinceLastDecrementInSeconds)"}</code> |  |
| <Link id="m-getactiveshrineidforplayer" /><code>{"Guid GetActiveShrineIdForPlayer(int playerId)"}</code> |  |
| <Link id="m-getenumerator" /><code>{"IEnumerator<"}<Link to="/game-api/types/game-other-namespaces/irespawnshrinemodel">{"IRespawnShrineModel"}</Link>{"> GetEnumerator()"}</code> |  |
| <Link id="m-getremainingpoweredtimeforshrinenormalized" /><code>{"float GetRemainingPoweredTimeForShrineNormalized(Guid shrineId)"}</code> |  |
| <Link id="m-getsavedata" /><code><Link to="/game-api/types/game-other-namespaces/respawnsystemsavedata">{"RespawnSystemSaveData"}</Link>{" GetSaveData()"}</code> |  |
| <Link id="m-getshrinesubscriberids" /><code>{"IEnumerable<int> GetShrineSubscriberIds(Guid shrineId)"}</code> |  |
| <Link id="m-removesubscriber" /><code>{"bool RemoveSubscriber(Guid shrineId, int playerId)"}</code> |  |
| <Link id="m-setfuel" /><code>{"void SetFuel(Guid shrineId, float value)"}</code> |  |
| <Link id="m-synctoclients" /><code>{"void SyncToClients("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, ref "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> |  |
| <Link id="m-getshrinemodelsasjsonstring" /><code>{"private string GetShrineModelsAsJsonString()"}</code> |  |
| <Link id="m-loadshrinemodelsfromjsonstring" /><code>{"private void LoadShrineModelsFromJsonString(string respawnShrineModelAsJsonString)"}</code> |  |
| <Link id="m-resetemptiedshrineflags" /><code>{"private void ResetEmptiedShrineFlags()"}</code> |  |
