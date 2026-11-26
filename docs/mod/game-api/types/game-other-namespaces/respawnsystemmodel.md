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
| <Link id="m-ctor" /><code>{"RespawnSystemModel()"}</code> | <span className="api-desc">Creates a `RespawnSystemModel` from `saveData`.</span> |
| <Link id="m-ctor-2" /><code>{"RespawnSystemModel("}<Link to="/mod/game-api/types/game-other-namespaces/respawnsystemsavedata">{"RespawnSystemSaveData"}</Link>{" saveData)"}</code> | <span className="api-desc">Creates a `RespawnSystemModel` from `saveData`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Class logger.</span> |
| <Link id="m-respawnshrinemodels" /><code>{"private Dictionary<Guid, "}<Link to="/mod/game-api/types/game-other-namespaces/respawnshrinemodel">{"RespawnShrineModel"}</Link>{"> respawnShrineModels"}</code> | <span className="api-desc">Shrine models by shrine ID. The global shrine is not in it.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-globalshrineguid" /><code>{"Guid GlobalShrineGuid { get; }"}</code> | <span className="api-desc">Id of the global (default) shrine everyone falls back to.</span> |
| <Link id="m-hasmodelchanged" /><code>{"bool HasModelChanged { get; private set; }"}</code> | <span className="api-desc">True when something changed since the last sync was written.</span> |
| <Link id="m-item" /><code><Link to="/mod/game-api/types/game-other-namespaces/irespawnshrinemodel">{"IRespawnShrineModel"}</Link>{" this[Guid id] { get; }"}</code> | <span className="api-desc">The shrine model with this id. Throws for an unknown id.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addsubscriber" /><code>{"bool AddSubscriber(Guid shrineId, int playerId)"}</code> | <span className="api-desc">Binds a player id to a shrine. Always true for the global shrine, which has no list.</span> |
| <Link id="m-decrementfuel" /><code>{"void DecrementFuel(float timeSinceLastDecrementInSeconds)"}</code> | <span className="api-desc">Burns fuel for shrines that have players bound. A shrine that runs dry loses all its players.</span> |
| <Link id="m-getactiveshrineidforplayer" /><code>{"Guid GetActiveShrineIdForPlayer(int playerId)"}</code> | <span className="api-desc">The shrine a player id is bound to, or the global shrine's id.</span> |
| <Link id="m-getenumerator" /><code>{"IEnumerator<"}<Link to="/mod/game-api/types/game-other-namespaces/irespawnshrinemodel">{"IRespawnShrineModel"}</Link>{"> GetEnumerator()"}</code> | <span className="api-desc">Enumerates the shrine models (not including the global shrine).</span> |
| <Link id="m-getremainingpoweredtimeforshrinenormalized" /><code>{"float GetRemainingPoweredTimeForShrineNormalized(Guid shrineId)"}</code> | <span className="api-desc">Fuel as a fraction of the shrine's capacity. 0 for the global shrine.</span> |
| <Link id="m-getsavedata" /><code><Link to="/mod/game-api/types/game-other-namespaces/respawnsystemsavedata">{"RespawnSystemSaveData"}</Link>{" GetSaveData()"}</code> | <span className="api-desc">Save data with the global shrine id and the shrines as JSON.</span> |
| <Link id="m-getshrinesubscriberids" /><code>{"IEnumerable<int> GetShrineSubscriberIds(Guid shrineId)"}</code> | <span className="api-desc">Player ids bound to a shrine. Empty for the global shrine.</span> |
| <Link id="m-removesubscriber" /><code>{"bool RemoveSubscriber(Guid shrineId, int playerId)"}</code> | <span className="api-desc">Unbinds a player id from a shrine. Always true for the global shrine.</span> |
| <Link id="m-setfuel" /><code>{"void SetFuel(Guid shrineId, float value)"}</code> | <span className="api-desc">Sets a shrine's fuel.</span> |
| <Link id="m-synctoclients" /><code>{"void SyncToClients("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, ref "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes or reads all shrines as a JSON string. Writing clears the changed and emptied flags.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> | <span className="api-desc">Enumerates the shrine models (not including the global shrine).</span> |
| <Link id="m-getshrinemodelsasjsonstring" /><code>{"private string GetShrineModelsAsJsonString()"}</code> | <span className="api-desc">Serializes the shrine models dictionary to JSON. Used for both saving and the network sync.</span> |
| <Link id="m-loadshrinemodelsfromjsonstring" /><code>{"private void LoadShrineModelsFromJsonString(string respawnShrineModelAsJsonString)"}</code> | <span className="api-desc">Replaces the shrine models from JSON. Keeps the old ones and logs an error if it parses to null.</span> |
| <Link id="m-resetemptiedshrineflags" /><code>{"private void ResetEmptiedShrineFlags()"}</code> | <span className="api-desc">Clears every shrine's ran-out-of-fuel flag. Called after the server writes a sync.</span> |

</details>
