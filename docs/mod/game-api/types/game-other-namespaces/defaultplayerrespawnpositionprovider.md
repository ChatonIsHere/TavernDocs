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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`IPlayerRespawnPositionProvider`](/mod/game-api/types/game-other-namespaces/iplayerrespawnpositionprovider)
- **Attributes** `Preserve`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DefaultPlayerRespawnPositionProvider()"}</code> | <span className="api-desc">Creates a `DefaultPlayerRespawnPositionProvider` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getrespawnposition" /><code>{"Vector3 GetRespawnPosition("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, out bool isDefaultRespawn)"}</code> | <span className="api-desc">Returns a random position from the scene's respawn point, or zero if there is no scene. Always flags it as the default respawn.</span> |
