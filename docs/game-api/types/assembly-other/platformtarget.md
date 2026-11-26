---
title: "PlatformTarget"
description: "Flags for which platforms something targets: PC and Quest."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlatformTarget

An **enum** in `Alta.Platform`, no namespace.

Flags for which platforms something targets: `PC` and `Quest`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Attributes** `Flags`
- **Documented in** [Player](/game-api/networking/player#platformtarget)

## Values

| Member |
| --- |
| <Link id="m-pc" /><code>{"PC = 1"}</code> |
| <Link id="m-quest" /><code>{"Quest = 2"}</code> |

## Used in

Members of other types that take, return or hold a `PlatformTarget`:

[`RequestJoinMessage.platformTarget`](/game-api/types/alta-networking/requestjoinmessage#m-platformtarget), [`RequestJoinMessage.PlatformTarget`](/game-api/types/alta-networking/requestjoinmessage#m-platformtarget-2), [`RequestJoinMessage.RequestJoinMessage`](/game-api/types/alta-networking/requestjoinmessage#m-ctor-2), [`ServerHandler.platformTargets`](/game-api/types/alta-networking/serverhandler#m-platformtargets), [`ServerHandler.UserJoined`](/game-api/types/alta-networking/serverhandler#m-userjoined), [`ServerPlayerConnectionHandlerOld.CheckIfPlayerIsAllowed`](/game-api/types/alta-networking/serverplayerconnectionhandlerold#m-checkifplayerisallowed), [`ServerPlayerConnectionHandlerOld.CheckIfPlayerIsAllowedCustom`](/game-api/types/alta-networking/serverplayerconnectionhandlerold#m-checkifplayerisallowedcustom), [`ServerPlayerConnectionHandlerOld.PlayerAccepted`](/game-api/types/alta-networking/serverplayerconnectionhandlerold#m-playeraccepted), [`ServerPlayerConnectionHandlerOld.UserJoined`](/game-api/types/alta-networking/serverplayerconnectionhandlerold#m-userjoined), [`Player.InitializePlayerOnServer`](/game-api/types/global-p/player#m-initializeplayeronserver), [`Player.platformTarget`](/game-api/types/global-p/player#m-platformtarget), [`Player.PlatformTarget`](/game-api/types/global-p/player#m-platformtarget-2), [`Player.SetPlatformTarget`](/game-api/types/global-p/player#m-setplatformtarget), [`PlayerChunkManager.SetLoader`](/game-api/types/global-p/playerchunkmanager#m-setloader), [`PlayerSystemHandler.BeginInvoke`](/game-api/types/global-p/playersystemhandler#m-begininvoke), [`PlayerSystemHandler.Invoke`](/game-api/types/global-p/playersystemhandler#m-invoke).
