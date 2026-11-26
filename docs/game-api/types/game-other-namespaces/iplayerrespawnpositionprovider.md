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

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Derived types** [`DefaultPlayerRespawnPositionProvider`](/game-api/types/game-other-namespaces/defaultplayerrespawnpositionprovider), [`IRespawnSystem`](/game-api/types/game-other-namespaces/irespawnsystem), [`RespawnSystem`](/game-api/types/game-other-namespaces/respawnsystem)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getrespawnposition" /><code>{"Vector3 GetRespawnPosition("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, out bool isDefaultRespawn)"}</code> | Returns where the player respawns and whether that is the default (global) respawn rather than a powered shrine. |

## Used in

Members of other types that take, return or hold a `IPlayerRespawnPositionProvider`:

[`Player.Inject`](/game-api/types/global-p/player#m-inject), [`Player.respawnPositionProvider`](/game-api/types/global-p/player#m-respawnpositionprovider).
