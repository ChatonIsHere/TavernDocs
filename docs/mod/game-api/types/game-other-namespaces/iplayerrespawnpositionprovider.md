---
title: "IPlayerRespawnPositionProvider"
description: "Gives the position a player respawns at."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPlayerRespawnPositionProvider

An **interface** in `Root.Township`, `ATT.Respawn`.

Gives the position a player respawns at. Implemented by `RespawnSystem` (shrine-based) and `DefaultPlayerRespawnPositionProvider` (the scene's respawn point).

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Derived types** [`DefaultPlayerRespawnPositionProvider`](/mod/game-api/types/game-other-namespaces/defaultplayerrespawnpositionprovider), [`IRespawnSystem`](/mod/game-api/types/game-other-namespaces/irespawnsystem), [`RespawnSystem`](/mod/game-api/types/game-other-namespaces/respawnsystem)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getrespawnposition" /><code>{"Vector3 GetRespawnPosition("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, out bool isDefaultRespawn)"}</code> | <span className="api-desc">Returns where the player respawns and whether that is the default (global) respawn rather than a powered shrine.</span> |

## Used in

Members of other types that take, return or hold a `IPlayerRespawnPositionProvider`:

<div className="api-used-in">

[`Player.Inject`](/mod/game-api/types/global-p/player#m-inject), [`Player.respawnPositionProvider`](/mod/game-api/types/global-p/player#m-respawnpositionprovider).

</div>
