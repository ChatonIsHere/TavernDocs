---
title: "PlatformTarget"
description: "Flags for which platforms something targets: PC and Quest."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlatformTarget

An **enum** in `Alta.Platform`, the global namespace.

Flags for which platforms something targets: `PC` and `Quest`.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Attributes** `Flags`
- **Documented in** [Player](/mod/game-api/networking/player#platformtarget)

## Values

| Member |
| --- |
| <Link id="m-pc" /><code>{"PC = 1"}</code> |
| <Link id="m-quest" /><code>{"Quest = 2"}</code> |

## Used in

Members of other types that take, return or hold a `PlatformTarget`:

<div className="api-used-in">

[`RequestJoinMessage.platformTarget`](/mod/game-api/types/alta-networking/requestjoinmessage#m-platformtarget), [`RequestJoinMessage.PlatformTarget`](/mod/game-api/types/alta-networking/requestjoinmessage#m-platformtarget-2), [`RequestJoinMessage.RequestJoinMessage`](/mod/game-api/types/alta-networking/requestjoinmessage#m-ctor-2), [`ServerHandler.platformTargets`](/mod/game-api/types/alta-networking/serverhandler#m-platformtargets), [`ServerHandler.UserJoined`](/mod/game-api/types/alta-networking/serverhandler#m-userjoined), [`ServerPlayerConnectionHandlerOld.CheckIfPlayerIsAllowed`](/mod/game-api/types/alta-networking/serverplayerconnectionhandlerold#m-checkifplayerisallowed), [`ServerPlayerConnectionHandlerOld.CheckIfPlayerIsAllowedCustom`](/mod/game-api/types/alta-networking/serverplayerconnectionhandlerold#m-checkifplayerisallowedcustom), [`ServerPlayerConnectionHandlerOld.PlayerAccepted`](/mod/game-api/types/alta-networking/serverplayerconnectionhandlerold#m-playeraccepted), [`ServerPlayerConnectionHandlerOld.UserJoined`](/mod/game-api/types/alta-networking/serverplayerconnectionhandlerold#m-userjoined), [`Player.InitializePlayerOnServer`](/mod/game-api/types/global-p/player#m-initializeplayeronserver), [`Player.platformTarget`](/mod/game-api/types/global-p/player#m-platformtarget), [`Player.PlatformTarget`](/mod/game-api/types/global-p/player#m-platformtarget-2), [`Player.SetPlatformTarget`](/mod/game-api/types/global-p/player#m-setplatformtarget), [`PlayerChunkManager.SetLoader`](/mod/game-api/types/global-p/playerchunkmanager#m-setloader), [`PlayerSystemHandler.BeginInvoke`](/mod/game-api/types/global-p/playersystemhandler#m-begininvoke), [`PlayerSystemHandler.Invoke`](/mod/game-api/types/global-p/playersystemhandler#m-invoke).

</div>
