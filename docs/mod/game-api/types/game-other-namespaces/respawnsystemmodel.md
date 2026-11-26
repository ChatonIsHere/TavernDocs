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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`IRespawnSystemModel`](/mod/game-api/types/game-other-namespaces/irespawnsystemmodel), `IEnumerable<IRespawnShrineModel>`, `IEnumerable`
- **Attributes** `DefaultMember`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RespawnSystemModel()"}</code> | Creates a `RespawnSystemModel` from `saveData`. |
| <Link id="m-ctor-2" /><code>{"RespawnSystemModel("}<Link to="/mod/game-api/types/game-other-namespaces/respawnsystemsavedata">{"RespawnSystemSaveData"}</Link>{" saveData)"}</code> | Creates a `RespawnSystemModel` from `saveData`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Class logger. |
| <Link id="m-respawnshrinemodels" /><code>{"private Dictionary<Guid, "}<Link to="/mod/game-api/types/game-other-namespaces/respawnshrinemodel">{"RespawnShrineModel"}</Link>{"> respawnShrineModels"}</code> | Shrine models by shrine ID. The global shrine is not in it. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-globalshrineguid" /><code>{"Guid GlobalShrineGuid { get; }"}</code> | Id of the global (default) shrine everyone falls back to. |
| <Link id="m-hasmodelchanged" /><code>{"bool HasModelChanged { get; private set; }"}</code> | True when something changed since the last sync was written. |
| <Link id="m-item" /><code><Link to="/mod/game-api/types/game-other-namespaces/irespawnshrinemodel">{"IRespawnShrineModel"}</Link>{" this[Guid id] { get; }"}</code> | The shrine model with this id. Throws for an unknown id. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addsubscriber" /><code>{"bool AddSubscriber(Guid shrineId, int playerId)"}</code> | Binds a player id to a shrine. Always true for the global shrine, which has no list. |
| <Link id="m-decrementfuel" /><code>{"void DecrementFuel(float timeSinceLastDecrementInSeconds)"}</code> | Burns fuel for shrines that have players bound. A shrine that runs dry loses all its players. |
| <Link id="m-getactiveshrineidforplayer" /><code>{"Guid GetActiveShrineIdForPlayer(int playerId)"}</code> | The shrine a player id is bound to, or the global shrine's id. |
| <Link id="m-getenumerator" /><code>{"IEnumerator<"}<Link to="/mod/game-api/types/game-other-namespaces/irespawnshrinemodel">{"IRespawnShrineModel"}</Link>{"> GetEnumerator()"}</code> | Enumerates the shrine models (not including the global shrine). |
| <Link id="m-getremainingpoweredtimeforshrinenormalized" /><code>{"float GetRemainingPoweredTimeForShrineNormalized(Guid shrineId)"}</code> | Fuel as a fraction of the shrine's capacity. 0 for the global shrine. |
| <Link id="m-getsavedata" /><code><Link to="/mod/game-api/types/game-other-namespaces/respawnsystemsavedata">{"RespawnSystemSaveData"}</Link>{" GetSaveData()"}</code> | Save data with the global shrine id and the shrines as JSON. |
| <Link id="m-getshrinesubscriberids" /><code>{"IEnumerable<int> GetShrineSubscriberIds(Guid shrineId)"}</code> | Player ids bound to a shrine. Empty for the global shrine. |
| <Link id="m-removesubscriber" /><code>{"bool RemoveSubscriber(Guid shrineId, int playerId)"}</code> | Unbinds a player id from a shrine. Always true for the global shrine. |
| <Link id="m-setfuel" /><code>{"void SetFuel(Guid shrineId, float value)"}</code> | Sets a shrine's fuel. |
| <Link id="m-synctoclients" /><code>{"void SyncToClients("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, ref "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads all shrines as a JSON string. Writing clears the changed and emptied flags. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> | Enumerates the shrine models (not including the global shrine). |
| <Link id="m-getshrinemodelsasjsonstring" /><code>{"private string GetShrineModelsAsJsonString()"}</code> | Serializes the shrine models dictionary to JSON. Used for both saving and the network sync. |
| <Link id="m-loadshrinemodelsfromjsonstring" /><code>{"private void LoadShrineModelsFromJsonString(string respawnShrineModelAsJsonString)"}</code> | Replaces the shrine models from JSON. Keeps the old ones and logs an error if it parses to null. |
| <Link id="m-resetemptiedshrineflags" /><code>{"private void ResetEmptiedShrineFlags()"}</code> | Clears every shrine's ran-out-of-fuel flag. Called after the server writes a sync. |

</details>
