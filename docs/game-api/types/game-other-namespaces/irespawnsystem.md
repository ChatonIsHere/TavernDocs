---
title: "IRespawnSystem"
description: "interface IRespawnSystem in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IRespawnSystem

An **interface** in `Root.Township`, `ATT.Respawn`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`IPlayerRespawnPositionProvider`](/game-api/types/game-other-namespaces/iplayerrespawnpositionprovider)
- **Derived types** [`RespawnSystem`](/game-api/types/game-other-namespaces/respawnsystem)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addsystemmodelchangedlistener" /><code><Link to="/game-api/types/game-other-namespaces/irespawnsystemmodel">{"IRespawnSystemModel"}</Link>{" AddSystemModelChangedListener(Action<"}<Link to="/game-api/types/game-other-namespaces/irespawnsystemmodel">{"IRespawnSystemModel"}</Link>{"> onSystemModelChanged)"}</code> |  |
| <Link id="m-getactiveshrineidforplayer" /><code>{"Guid GetActiveShrineIdForPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-getremainingpoweredtimeforshrinenormalized" /><code>{"float GetRemainingPoweredTimeForShrineNormalized(Guid shrineId)"}</code> |  |
| <Link id="m-getshrinesubscriberids" /><code>{"IEnumerable<int> GetShrineSubscriberIds(Guid shrineId)"}</code> |  |
| <Link id="m-removesystemmodelchangedlistener" /><code>{"void RemoveSystemModelChangedListener(Action<"}<Link to="/game-api/types/game-other-namespaces/irespawnsystemmodel">{"IRespawnSystemModel"}</Link>{"> onSystemModelChanged)"}</code> |  |
| <Link id="m-resetrespawnshrineforplayer" /><code>{"void ResetRespawnShrineForPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-setfuelforshrine" /><code>{"void SetFuelForShrine(Guid shrineId, float value)"}</code> |  |
| <Link id="m-setrespawnshrineforplayer" /><code>{"void SetRespawnShrineForPlayer(Guid shrineId, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |

## Used in

Members of other types that take, return or hold a `IRespawnSystem`:

[`RespawnBeaconController.Inject`](/game-api/types/game-other-namespaces/respawnbeaconcontroller#m-inject), [`RespawnBeaconController.respawnSystem`](/game-api/types/game-other-namespaces/respawnbeaconcontroller#m-respawnsystem), [`RespawnShrine.Inject`](/game-api/types/game-other-namespaces/respawnshrine#m-inject), [`RespawnShrine.RespawnSystem`](/game-api/types/game-other-namespaces/respawnshrine#m-respawnsystem).
