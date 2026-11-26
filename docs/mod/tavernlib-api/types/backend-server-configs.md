---
title: TavernLib.Backend.Server.Configs
description: Every type in the TavernLib.Backend.Server.Configs namespace.
sidebar_position: 9
---

# TavernLib.Backend.Server.Configs

Every type in `TavernLib.Backend.Server.Configs`, from TavernLib's own assembly. See [the overview](overview.md) for how these pages are made.

| Type | Kind | Public members | What it is |
| --- | --- | --- | --- |
| [`ModsList`](/mod/tavernlib-api/types/backend-server-configs/modslist) | class | 3 | A modlist file, as `/modlist` reads it: the mod ids, each optionally pinned to a version. Its `repos` and `untracked` keys are not read. |
| [`ModsListConfig`](/mod/tavernlib-api/types/backend-server-configs/modslistconfig) | class | 1 | The `ServerConfigFile` for a modlist file, read by `ModReconciler.ReconcileModList`. |
| [`ServerConfigFile<T>`](/mod/tavernlib-api/types/backend-server-configs/serverconfigfile-t) | abstract class | 6 | The base class for TavernLib's JSON files. Reads into a `T`, writes through a temp file with a `.bak`, and holds a per-object lock so changes don't interleave. Subclass it for your own mod's file. |
| [`ServerSettings`](/mod/tavernlib-api/types/backend-server-configs/serversettings) | class | 19 | The contents of `server_settings.json`. Unknown keys are kept. Read it through `TavernManager.ServerConfig`. |
| [`ServerSettingsConfig`](/mod/tavernlib-api/types/backend-server-configs/serversettingsconfig) | class | 2 | The `ServerConfigFile` for `server_settings.json`. Hashes plain passwords and makes a listing token when there is none. |
| [`TavernServer`](/mod/tavernlib-api/types/backend-server-configs/tavernserver) | class | 14 | The contents of `tavern_server.json`: the game, auth, web and console ports. Use the checked properties (`Game`, `Auth`, `Web`, `Console`), which fall back to the defaults. |
| [`TavernServerConfig`](/mod/tavernlib-api/types/backend-server-configs/tavernserverconfig) | class | 1 | The `ServerConfigFile` for `tavern_server.json`. |
| [`TrustedRepos`](/mod/tavernlib-api/types/backend-server-configs/trustedrepos) | class | 4 | The contents of `mod_repos.json`: the mod sources reconcile may pull from. Only `modmanager addrepo` adds one. |
| [`TrustedReposConfig`](/mod/tavernlib-api/types/backend-server-configs/trustedreposconfig) | class | 1 | The `ServerConfigFile` for `mod_repos.json`. |
| [`UserConfig`](/mod/tavernlib-api/types/backend-server-configs/userconfig) | class | 4 | The contents of `users.json`: registered players, and the whitelist and blacklist. Unknown keys are kept and written back. |
| [`UserConfig.ListConfig`](/mod/tavernlib-api/types/backend-server-configs/userconfig-listconfig) | class | 4 | A whitelist or blacklist in `users.json`. A player matches on any of their name, id or address. |
| [`UserConfig.User`](/mod/tavernlib-api/types/backend-server-configs/userconfig-user) | class | 9 | One registered player in `users.json`, made the first time they join through the auth port. On a client, `EntranceMessageHandler.LocalUser` uses it for the local player's roles. |
| [`UserConfigFile`](/mod/tavernlib-api/types/backend-server-configs/userconfigfile) | class | 5 | The `ServerConfigFile` for `users.json`, with lookups on the last read. Use the one on `TavernManager`, not a new one. |
| [`WhitelistRequestList`](/mod/tavernlib-api/types/backend-server-configs/whitelistrequestlist) | class | 2 | The contents of `whitelist_requests.json`: players who asked to be whitelisted from the launcher. |
| [`WhitelistRequestList.WhitelistRequest`](/mod/tavernlib-api/types/backend-server-configs/whitelistrequestlist-whitelistrequest) | class | 4 | One whitelist application. |
| [`WhitelistRequestsConfigFile`](/mod/tavernlib-api/types/backend-server-configs/whitelistrequestsconfigfile) | class | 1 | The `ServerConfigFile` for `whitelist_requests.json`. |
