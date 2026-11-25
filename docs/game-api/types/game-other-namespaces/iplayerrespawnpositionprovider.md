---
title: "IPlayerRespawnPositionProvider"
description: "interface IPlayerRespawnPositionProvider in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPlayerRespawnPositionProvider

An **interface** in `Root.Township`, `ATT.Respawn`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Derived types** [`DefaultPlayerRespawnPositionProvider`](/game-api/types/game-other-namespaces/defaultplayerrespawnpositionprovider), [`IRespawnSystem`](/game-api/types/game-other-namespaces/irespawnsystem), [`RespawnSystem`](/game-api/types/game-other-namespaces/respawnsystem)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getrespawnposition" /><code>{"Vector3 GetRespawnPosition("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, out bool isDefaultRespawn)"}</code> |  |

## Used in

Members of other types that take, return or hold a `IPlayerRespawnPositionProvider`:

[`Player.Inject`](/game-api/types/global-p/player#m-inject), [`Player.respawnPositionProvider`](/game-api/types/global-p/player#m-respawnpositionprovider).
