---
title: Internals
description: TavernLib's other public types, the game methods it patches, and its logger.
sidebar_position: 13
---

# Internals

Everything here is TavernLib's own working parts. It's public, but not made for mods, and can change in any release. It's listed so you know what's there, and which game methods TavernLib has already patched before you patch them too.

## Game methods TavernLib patches

If you patch one of these, your patch runs alongside TavernLib's. "Skips the original" means TavernLib's prefix returns `false`, so the game's own body never runs (your prefix still does, and your postfix sees TavernLib's result).

### Both sides

| Method | Patch | What it does |
| --- | --- | --- |
| `Alta.Networking.Socket` constructor | Postfix | Raises [`SocketCreated`](events.md). |
| `MessageProcessor.ProcessSingleMessageFromData` | Prefix, skips the original | 8-bit message types. See [Network messages](network-messages.md). |
| `OutgoingPacketManager.StartSerialize` | Prefix, skips the original | The same, for sending. |
| `StatManager.Awake` | Prefix | Renames a stat whose name clashes (`damageprotection` to `crippledamageprotection`), once. |
| `ApiAccess.IsConnectedToInternetInternal` | Postfix | Always `true`. |
| `CommandSync.RouteCommand` | Prefix, skips the original | Drops wrist-menu console commands: a server would run them at once, a client would send them to the server. TavernLib's own comment isn't sure it's needed. |
| `Player.SyncCosmetics` | Prefix, skips the original | TavernLib's own version. On the server it copies the cosmetics straight from the player's save. |
| `SelectionCommandModule.FindObjects` | MonoMod `Hook` | Replaces the object search behind `select`. Applied in `OnLateInitializeMelon`. |
| Several console commands | Prefix or postfix | See [Console](console.md#what-else-tavernlib-does-to-the-console). Applied in `OnLateInitializeMelon`. |

### Server

| Method | Patch | What it does |
| --- | --- | --- |
| `ServerPlayerConnectionHandlerOld.InitializeConnection` | Prefix, skips the original | The original only sets `CheckApproved` as the `RequestJoin` handler. TavernLib sets its own instead: Fly mode check, account token check, mod parity, then it calls the game's `CheckApproved` itself. So `CheckApproved` still runs, with its wipe-lock refusal and its "Already connected" check. |
| `ServerPlayerConnectionHandlerOld.CheckIfPlayerIsAllowedCustom` | Prefix, skips the original | Accepts a join token with one user id that matches the join, refuses the join if the server is full, and sets the player's status from their roles. Nothing else: see below. |
| `ServerPlayerConnectionHandlerOld` constructor | Postfix | Raises the game's `ConsoleEvents.PlayerLeft` when a player leaves. |
| `Player.InitializePlayerOnServer` | Postfix (twice) | Raises `ConsoleEvents.PlayerJoined`, and sends the player their roles. |
| `ServerHandler.PlayerLimit` getter | Postfix | `max_players`. See [Server settings](config/server-settings.md#the-player-limit). |
| `ServerSettingsSync.IsServerSyncPermitted` | Postfix | Only `owner` and `moderator` may change settings from the settings board. |
| `ServerHostingGameMode.OnStartSucceeded` | Postfix | Loads every cosmetic into memory once. |
| `GarbageCollectTimer.Start` | Prefix | Sets its interval from `garbage_collection_timer`. |
| `WebServerThread` constructor | Prefix | Moves the web server to `web_port`. |
| `WebSocketRemoteConsole.Start` | Transpiler | Moves the console to `console_port`. |
| `ServerConsoleManager.ValidateConsoleToken` | Prefix, skips the original, and a postfix | TavernLib's console token check. The postfix puts TavernLib's verdict back, so another mod's prefix can't change it. |
| `WebSocketCommandHandler.ProcessAuthorization` | Prefix and finalizer | Marks a login as coming through the websocket console. |
| `CommandPart.RequirementsAreMet` | Postfix | The named token gate. See [Console](console.md#named-token-paths). |
| `CommandService.HandleMatchedCommand` | Prefix (can skip) and postfix | Refuses empty player lists, unwraps command errors. |
| `PlayerListConverter.ConvertFrom` | Postfix | Remembers what was typed for a player list, for the "No online player matches" refusal. |
| `WebSocketCommandHandler.TryLogConsoleCommandExecutionWithEventStream` | Prefix | Logs and redacts console commands. |
| `CommandResult.Log` | Prefix, skips for the `token` module | Keeps token text out of the game's log. |
| `ServerConsoleManager.StartRemoteConsole` | Postfix | Closes the game's `remoteConsole`. |
| `WebSocketCommandHandler.GetCurrentServerPermissionsForLoggedInUser` | Prefix, skips the original | Every console login gets console permission. |
| `LowLevelApiClient.ValidateIdentityToken` | Prefix, skips the original | Always valid: there's no Alta to ask. |
| `PurchasedList.ValidatePlayersOwnedItems` | Prefix, skips the original | Every cosmetic is allowed when the server checks a player's look after customizing. |
| `ConfirmJoinMessage` constructor | Postfix | Logs refused joins. |

#### What the join check no longer does

A Tavern server's id is `-1`, so `CheckApproved` calls `CheckIfPlayerIsAllowedCustom`, not the Alta-backed `CheckIfPlayerIsAllowed`. The game's version of it did all of these. TavernLib's replacement only keeps the player limit:

| Game check | On a TavernLib server |
| --- | --- |
| Player limit (`CheckConnectionLimit`: connection count against `ServerHandler.PlayerLimit`) | Checked, with the game's message "Reached player limit of: N". See [Server settings](config/server-settings.md#the-player-limit). |
| Game version (`BuildVersion.CurrentVersion` against the client's) | Not checked. TavernLib's mod parity check doesn't look at the game version. |
| The game's own allow list (`server.Config.IsPlayerAllowed`, when `IsUsingConfig`) | Not checked. TavernLib's whitelist and blacklist in `users.json` are checked on the auth port and again in its join filter. |
| Already on the server (a `Player` with that id) | Covered by `CheckApproved`'s own "Already connected" check, which looks at connections. |
| Fly mode only for `Developer` status | Replaced by TavernLib's Fly mode check (`owner`, `moderator` or `fly` role). |

If you want one of these back, postfix `CheckIfPlayerIsAllowedCustom` (it's `protected virtual` and `async`, so patch the returned `Task<PlayerJoinResult>`, and reach it through att-stubs' publicized `Root.Township` or `AccessTools`).

### Client

| Method | Patch | What it does |
| --- | --- | --- |
| `UserApiClient.GetAllCosmeticsPresets`, `CreateCosmeticsPreset`, `DeleteCosmeticPreset` | Prefix, skips the original | Keeps presets in `A Township Tale\presets`. |
| `PurchasedList.Refresh` | Prefix, skips the original | Owned and available cosmetics are just the free-for-all set. |
| `PurchasedList.UpdateCurrentRotation` | Not applied | Meant to empty the store rotation, but the method has neither a `Prefix` name nor `[HarmonyPrefix]`, so Harmony never uses it. TavernEssentials patches it instead. |
| `ReturnToMainMenuAction.LetGoValid` | Prefix, skips the original | Quits the game instead of going back to the menu. |
| `ApplicationStartupManager.RunStartupActions` | Prefix, skips with `/join_local_server` | Joins the server from the command line. |
| `MenuSettings.LocalGameServerInfo` | Postfix | Points a local server join at the right scene and ports. |
| `JoinedServerGameMode` constructor | Postfix | Forces the scene from `/questScene` or `/tutorialScene`. |
| `JoinServerPipeline.OnServerRejectedRequest` | Prefix | Records a mod refusal. |
| `JoinServerPipeline.AttemptToConnectToServer` | Prefix, skips when handing over | Quits for the launcher to install mods, when it's rejoining a server that just refused you. |
| `JoinResult.ErrorMessage` getter | Postfix | Shows TavernLib's refusal reason. |

## Patching from a plugin

TavernLib applies its attribute patches when the plugin loads, but applies `GameCommandPatches` in `OnLateInitializeMelon`. Its notes say why: patching a game method compiles it, and if that method calls into the Unity engine and is compiled before the engine has registered those calls, Mono keeps them missing for good. On their test server every transform access then failed and the server never finished loading.

That only matters for plugins, which start before Unity is up. A mod's patches are applied after, so they're fine. If you write a plugin, patch game code that touches the engine in `OnLateInitializeMelon` or later.

## The log helper

`TavernLib.TavernLogger` is `internal`, so mods can't call it. It writes through TavernLib's own `MelonLogger.Instance` as `[Type.Method]: message`, with `WARNING` and `ERROR` prefixes, working out the caller from the stack (and the real method for an `async` one). Use your own mod's `LoggerInstance` instead, so lines show under your mod's name.

TavernEssentials' log guard finds it by name (`TavernLib.TavernLogger`, private `Log`) to filter what it writes. That's an example of depending on internals: it has to cope with the method being gone.

## Other public types

| Type | What it is |
| --- | --- |
| `TavernLib.Tavern` | The `MelonPlugin` itself. `const string Version` (see [Which TavernLib is running](overview.md#which-tavernlib-is-running)). |
| `TavernLib.Backend.BackendUtils` | `HashDigest(string)` (SHA-256, lower-case hex), `TokenUrlSafe(int)`, `TavernApi` (the listing URL) and `ServerUri`. |
| `TavernLib.Backend.NativeHttp` | A blocking HTTP client for mod downloads: `GetString`, `Download`. Never on the main thread. |
| `TavernLib.Backend.WindowsProxy` | `CreateSystemProxy()`, Windows' proxy settings for `NativeHttp`. |
| `TavernLib.Backend.Server.ServerBackup` | Timed world backups on headless servers. `ServerDirectory` is `ATTSave\Servers\-1`. |
| `TavernLib.Backend.Server.ServerListingController` | Sends the server to Community Servers every few seconds, from a background loop. |
| `TavernLib.Backend.Server.ServerListingPayload` | What's sent to the listing. |
| `TavernLib.Debugging.LogArchiver` | `ArchiveLogNow()`, `ShouldAutoArchive()`: moves `unity-log.csv` into `Archives`. |
| `TavernLib.Debugging.DebugHelper` | The `/debug_helper` service. Its constructor is internal. |
| `TavernLib.ModulePorts.PlayerCommandModule`, `ChunkCommandModule`, `DocumentModule`, `ModsCommandModule`, `TokenCommandModule` | Console modules. `PlayerCommandModule` has some answer types (`StatValue`, `StatDefinitionInfo`, `ProgressionCommandModule.PathXp`, `SkillRow`). |
| `TavernLib.Patches.*` | The patch classes above. A few have public helpers (`ServerPortPatches.ConsolePort()`, `JoinRejectionRecorder.InitQuickJoin()`) that TavernLib calls itself. |

`internal` and out of reach: `AuthManager`, `AuthLimits`, `AuthPayloads`, `JoinRules`, `ConsoleAuth`, `ConsoleTokenStore`, `ConsoleTokenLog`, `MelonModFolders`, `NLogCatcher`, `TavernLogger`.

## See also

- [TavernLib API](overview.md#stable-api-and-internals)
- [Known patch points](../game-api/patching/known-patch-points.md) for what other mods patch
- [Joining a server](../game-api/networking/joining.md#what-tavernlib-changes) for the join checks from the game's side
