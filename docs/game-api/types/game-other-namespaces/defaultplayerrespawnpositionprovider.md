---
title: "DefaultPlayerRespawnPositionProvider"
description: "Default IPlayerRespawnPositionProvider: picks a random point from the current scene's respawn point."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DefaultPlayerRespawnPositionProvider

A **class** in `Root.Township`, `ATT.Respawn`.

Default `IPlayerRespawnPositionProvider`: picks a random point from the current scene's respawn point.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`IPlayerRespawnPositionProvider`](/game-api/types/game-other-namespaces/iplayerrespawnpositionprovider)
- **Attributes** `Preserve`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DefaultPlayerRespawnPositionProvider()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getrespawnposition" /><code>{"Vector3 GetRespawnPosition("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, out bool isDefaultRespawn)"}</code> | Returns a random position from the scene's respawn point, or zero if there is no scene. Always flags it as the default respawn. |
