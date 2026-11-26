---
title: "IRespawnSystem"
description: "The respawn shrine system: which shrine each player respawns at and how much fuel each shrine has."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IRespawnSystem

An **interface** in `Root.Township`, `ATT.Respawn`.

The respawn shrine system: which shrine each player respawns at and how much fuel each shrine has. Implemented by `RespawnSystem`, a network entity behaviour run by the server.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`IPlayerRespawnPositionProvider`](/mod/game-api/types/game-other-namespaces/iplayerrespawnpositionprovider)
- **Derived types** [`RespawnSystem`](/mod/game-api/types/game-other-namespaces/respawnsystem)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addsystemmodelchangedlistener" /><code><Link to="/mod/game-api/types/game-other-namespaces/irespawnsystemmodel">{"IRespawnSystemModel"}</Link>{" AddSystemModelChangedListener(Action<"}<Link to="/mod/game-api/types/game-other-namespaces/irespawnsystemmodel">{"IRespawnSystemModel"}</Link>{"> onSystemModelChanged)"}</code> | <span className="api-desc">Adds a listener called after each model sync, and returns the current model.</span> |
| <Link id="m-getactiveshrineidforplayer" /><code>{"Guid GetActiveShrineIdForPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">The shrine the player is bound to, or the global shrine's id if none.</span> |
| <Link id="m-getremainingpoweredtimeforshrinenormalized" /><code>{"float GetRemainingPoweredTimeForShrineNormalized(Guid shrineId)"}</code> | <span className="api-desc">Shrine fuel as a fraction of its capacity. 0 for the global shrine.</span> |
| <Link id="m-getshrinesubscriberids" /><code>{"IEnumerable<int> GetShrineSubscriberIds(Guid shrineId)"}</code> | <span className="api-desc">User ids of players bound to the shrine. Empty for the global shrine.</span> |
| <Link id="m-removesystemmodelchangedlistener" /><code>{"void RemoveSystemModelChangedListener(Action<"}<Link to="/mod/game-api/types/game-other-namespaces/irespawnsystemmodel">{"IRespawnSystemModel"}</Link>{"> onSystemModelChanged)"}</code> | <span className="api-desc">Removes a listener added with `AddSystemModelChangedListener`.</span> |
| <Link id="m-resetrespawnshrineforplayer" /><code>{"void ResetRespawnShrineForPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Unbinds the player from their shrine, so they respawn at the global one, and syncs.</span> |
| <Link id="m-setfuelforshrine" /><code>{"void SetFuelForShrine(Guid shrineId, float value)"}</code> | <span className="api-desc">Server: sets a shrine's fuel and syncs it.</span> |
| <Link id="m-setrespawnshrineforplayer" /><code>{"void SetRespawnShrineForPlayer(Guid shrineId, "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Binds the player to a shrine, unbinding them from their old one. Synced on the next model tick.</span> |

## Used in

Members of other types that take, return or hold a `IRespawnSystem`:

<div className="api-used-in">

[`RespawnBeaconController.Inject`](/mod/game-api/types/game-other-namespaces/respawnbeaconcontroller#m-inject), [`RespawnBeaconController.respawnSystem`](/mod/game-api/types/game-other-namespaces/respawnbeaconcontroller#m-respawnsystem), [`RespawnShrine.Inject`](/mod/game-api/types/game-other-namespaces/respawnshrine#m-inject), [`RespawnShrine.RespawnSystem`](/mod/game-api/types/game-other-namespaces/respawnshrine#m-respawnsystem).

</div>
