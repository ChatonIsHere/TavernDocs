---
title: TavernLib.Patches
description: Every type in the TavernLib.Patches namespace.
sidebar_position: 13
---

# TavernLib.Patches

Every type in `TavernLib.Patches`, from TavernLib's own assembly. See [the overview](overview.md) for how these pages are made.

| Type | Kind | Public members | What it is |
| --- | --- | --- | --- |
| [`CommandResultPatches`](/tavernlib-api/types/patches/commandresultpatches) | static class | 3 | Harmony patches on `CommandService.HandleMatchedCommand` and `PlayerListConverter.ConvertFrom`, so every console command's result reads properly: a player list that matched nobody is refused, and a thrown error shows its own message. |
| [`CommandSecurityPatches`](/tavernlib-api/types/patches/commandsecuritypatches) | class | 5 | Harmony patches on the game's console and API checks: they turn off wrist-menu command routing and the TCP remote console, and skip the Alta permission and identity checks. Mostly matters on a server. |
| [`ConsoleEventsPatch`](/tavernlib-api/types/patches/consoleeventspatch) | class | 3 | Harmony patches that raise the game's `ConsoleEvents.PlayerJoined` and `PlayerLeft` events when a player joins or leaves. Server. |
| [`ConsoleTokenPatches`](/tavernlib-api/types/patches/consoletokenpatches) | static class | 7 | Harmony patches on the game's websocket console (`ServerConsoleManager`, `WebSocketCommandHandler`, `CommandPart`, `CommandResult`) that put TavernLib's console tokens in charge of logins, named token limits and the token log. Server only. |
| [`ConsoleTokenPatches.RefusedLoginFilter`](/tavernlib-api/types/patches/consoletokenpatches-refusedloginfilter) | private class | 2 | A private NLog filter that drops the game's log lines that print the whole text of a refused console token. Added to every logging rule by `ConsoleTokenPatches.Start`. |
| [`CosmeticsPatches`](/tavernlib-api/types/patches/cosmeticspatches) | class | 2 | Postfixes `ServerHostingGameMode.OnStartSucceeded` to load every cosmetic into memory once the server has started. Server. |
| [`EventPatches`](/tavernlib-api/types/patches/eventpatches) | class | 2 | The Harmony patch behind `TavernEvents.SocketCreated`: a postfix on the `Alta.Networking.Socket` constructor. Both sides. |
| [`ForestResetPatches`](/tavernlib-api/types/patches/forestresetpatches) | static class | 3 | Patches `ForestGenerator.Wipe` so a forest reset clears the forest and moves players out but keeps the running seed, saving the new seed for the next start. Server. Steps aside if another mod also prefixes `Wipe`. |
| [`ForestResetPatches.DeleteOldCaches`](/tavernlib-api/types/patches/forestresetpatches-deleteoldcaches) | static class | 2 | Postfixes `ForestGenerator`'s explicit `Load` method to delete forest and river cache files named after any other seed, left over from a reset. Server. |
| [`ForestResetPatches.SaveQueuedSeed`](/tavernlib-api/types/patches/forestresetpatches-savequeuedseed) | static class | 2 | Postfixes `ForestGenerator`'s explicit `Save` method so the save holds a queued reset's new seed, and the next start builds that forest. Server. |
| [`GameCommandPatches`](/tavernlib-api/types/patches/gamecommandpatches) | static class | 6 | Patches for game console commands that answered Success having done nothing: `time set`, `time ofday`, `settings possible`, `select move/rotate exact`, `wacky destroy` and `world caves teleport`. Applied by hand in `OnLateInitializeMelon`, not by attribute. |
| [`GarbageCollectIntervalPatch`](/tavernlib-api/types/patches/garbagecollectintervalpatch) | class | 2 | Patches `GarbageCollectTimer.Start` to set the timer's interval from `garbage_collection_timer` in `server_settings.json`. Server. |
| [`JoinRejectionRecorder`](/tavernlib-api/types/patches/joinrejectionrecorder) | static class | 4 | Client patches on `JoinServerPipeline` and `JoinResult` that record a server's mod refusal in `last_rejection.json` and hand over to the launcher to install the mods and rejoin. Also owns the Quick join preference. |
| [`MessageExpanderPatch`](/tavernlib-api/types/patches/messageexpanderpatch) | class | 3 | Replaces the game's network message type header with an 8-bit one, for 256 message types, so TavernLib and mods have room for their own. It changes the wire format, so server and client both need it. |
| [`PlayerJoinFilter`](/tavernlib-api/types/patches/playerjoinfilter) | static class | 2 | Replaces the server's join request handler (prefix on `ServerPlayerConnectionHandlerOld.InitializeConnection`) with TavernLib's checks: Fly mode, account token, blacklist and whitelist, mod parity, then the game's `CheckApproved`. Server. |
| [`PlayerLimitPatch`](/tavernlib-api/types/patches/playerlimitpatch) | class | 2 | Postfixes the `ServerHandler.PlayerLimit` getter so the limit comes from `server_settings.json`. Server. |
| [`SceneIndexPatches`](/tavernlib-api/types/patches/sceneindexpatches) | class | 2 | Forces the scene a client joins from `/tutorialScene` or `/questScene`, with a postfix on the `JoinedServerGameMode` constructor. Client. |
| [`SelectFixPatch`](/tavernlib-api/types/patches/selectfixpatch) | static class | 1 | A MonoMod hook (applied in `Tavern.OnLateInitializeMelon`) that replaces `SelectionCommandModule.FindObjects`, the object search behind `select find`. Server. |
| [`SelectFixPatch.FindObjects`](/tavernlib-api/types/patches/selectfixpatch-findobjects) | delegate | 4 | The delegate for the original `SelectionCommandModule.FindObjects`, handed to `SelectionFix` by the hook. |
| [`ServerPortPatches`](/tavernlib-api/types/patches/serverportpatches) | static class | 3 | Moves the game's hard-coded web server (1761) and websocket console (1760) to `web_port` and `console_port` in `tavern_server.json`, so two servers can share an address. Server. |
| [`ServerSettingsRolePatch`](/tavernlib-api/types/patches/serversettingsrolepatch) | class | 3 | Sends each joining player their roles and limits who may change server settings from the settings board to owners and moderators. Server. |
| [`StatNamePatch`](/tavernlib-api/types/patches/statnamepatch) | class | 2 | Prefixes `StatManager.Awake` to rename the stat definition with hash 44538 from `damageprotection` to `crippledamageprotection`, whose name clashes with another stat. Runs once. |
| [`TeenyPatches`](/tavernlib-api/types/patches/teenypatches) | class | 13 | Small Harmony patches that let the game run without Alta's services: local cosmetic presets, free cosmetics only, local server joins, TavernLib's join token check and an always-online flag. Both sides. |
