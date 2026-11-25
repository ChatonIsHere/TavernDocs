---
title: "RespawnSystemModel"
description: "State of every respawn shrine (fuel and bound players), saved and sent to clients as JSON."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RespawnSystemModel

A **class** in `Root.Township`, `ATT.Respawn`.

State of every respawn shrine (fuel and bound players), saved and sent to clients as JSON. Made from the shrine list in `RespawnSystemSettings` or from a save.

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
| <Link id="m-globalshrineguid" /><code>{"Guid GlobalShrineGuid { get; }"}</code> | Id of the global (default) shrine everyone falls back to. |
| <Link id="m-hasmodelchanged" /><code>{"bool HasModelChanged { get; private set; }"}</code> | True when something changed since the last sync was written. |
| <Link id="m-item" /><code><Link to="/game-api/types/game-other-namespaces/irespawnshrinemodel">{"IRespawnShrineModel"}</Link>{" this[Guid id] { get; }"}</code> | The shrine model with this id. Throws for an unknown id. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addsubscriber" /><code>{"bool AddSubscriber(Guid shrineId, int playerId)"}</code> | Binds a player id to a shrine. Always true for the global shrine, which has no list. |
| <Link id="m-decrementfuel" /><code>{"void DecrementFuel(float timeSinceLastDecrementInSeconds)"}</code> | Burns fuel for shrines that have players bound. A shrine that runs dry loses all its players. |
| <Link id="m-getactiveshrineidforplayer" /><code>{"Guid GetActiveShrineIdForPlayer(int playerId)"}</code> | The shrine a player id is bound to, or the global shrine's id. |
| <Link id="m-getenumerator" /><code>{"IEnumerator<"}<Link to="/game-api/types/game-other-namespaces/irespawnshrinemodel">{"IRespawnShrineModel"}</Link>{"> GetEnumerator()"}</code> | Enumerates the shrine models (not including the global shrine). |
| <Link id="m-getremainingpoweredtimeforshrinenormalized" /><code>{"float GetRemainingPoweredTimeForShrineNormalized(Guid shrineId)"}</code> | Fuel as a fraction of the shrine's capacity. 0 for the global shrine. |
| <Link id="m-getsavedata" /><code><Link to="/game-api/types/game-other-namespaces/respawnsystemsavedata">{"RespawnSystemSaveData"}</Link>{" GetSaveData()"}</code> | Save data with the global shrine id and the shrines as JSON. |
| <Link id="m-getshrinesubscriberids" /><code>{"IEnumerable<int> GetShrineSubscriberIds(Guid shrineId)"}</code> | Player ids bound to a shrine. Empty for the global shrine. |
| <Link id="m-removesubscriber" /><code>{"bool RemoveSubscriber(Guid shrineId, int playerId)"}</code> | Unbinds a player id from a shrine. Always true for the global shrine. |
| <Link id="m-setfuel" /><code>{"void SetFuel(Guid shrineId, float value)"}</code> | Sets a shrine's fuel. |
| <Link id="m-synctoclients" /><code>{"void SyncToClients("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, ref "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads all shrines as a JSON string. Writing clears the changed and emptied flags. |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> | Enumerates the shrine models (not including the global shrine). |
| <Link id="m-getshrinemodelsasjsonstring" /><code>{"private string GetShrineModelsAsJsonString()"}</code> |  |
| <Link id="m-loadshrinemodelsfromjsonstring" /><code>{"private void LoadShrineModelsFromJsonString(string respawnShrineModelAsJsonString)"}</code> |  |
| <Link id="m-resetemptiedshrineflags" /><code>{"private void ResetEmptiedShrineFlags()"}</code> |  |
