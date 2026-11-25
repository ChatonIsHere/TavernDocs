---
title: Server settings
description: The game's ServerSettings and ServerConfiguration.json, how they reload and sync to the in-game board, and the server info types.
sidebar_position: 14
---

# Server settings

The game's own server settings are `Alta.Utilities.ServerSettings`, kept in `Servers\-1\ServerConfiguration.json` (see [Saving](saving.md#where-the-files-are)). They're separate from TavernLib's `server_settings.json` (name, player limit, whitelist), which TavernLib reads itself; see TavernLib's [ServerSettings](../../tavernlib-api/config/server-settings.md) and the host [config reference](../../host/config-reference.md).

## Reading and watching them

Server only. `ServerHandler.Current.ServerConfig` is a `SettingsFileAccess<ServerSettings>`.

```csharp
var config = ServerHandler.Current?.ServerConfig;
if (config == null) return;

ServerSettings settings = config.Settings;
MelonLogger.Msg($"PvP: {settings.IsPVPEnabled}, autosave every {settings.MinutesBetweenAutoSaving} min");

config.SettingsChanged += changed => MelonLogger.Msg($"Settings changed, PvP now {changed.IsPVPEnabled}");
```

| `SettingsFileAccess<T>` member | What it does | Notes |
| --- | --- | --- |
| `T Settings { get; }` | The current settings. Waits for the file read to finish if one is running. | Read it each time: a reload makes a new object. |
| `event Action<T> SettingsChanged` | Raised after a load, a reload or `SetAllSettings`. | Dispatched to the main thread. |
| `event Action<ISettings> Changed` | | |
| `void SetAllSettings(T newSettings)` | Replace them, write the file, raise `SettingsChanged`. | |
| `void Save()`, `void SaveAsync()` | Write the file. | |
| `bool TryGet<TValue>(string name, out TValue value)` | One setting by name. | |
| `void NotifySettingsChanged()` | Raise `SettingsChanged`. | |

The file is watched with a `FileSystemWatcher`: when it's written to, the game reloads it. If it's missing, the game writes the defaults on first start. With `/db_settings`, settings come from a database instead (Alta's hosting).

Changing a property on `Settings` changes it in memory only, straight away, for code that reads it after. Some things read their setting once (the autosave interval at start-up, for example), so they won't see it until the next start. Call `Save()` to keep the change.

## ServerSettings

All instance properties with public getters and setters. Default values from the code.

| Group | Properties |
| --- | --- |
| Saving | `IsSaving` (true), `IsAutoSaving` (true), `MinutesBetweenAutoSaving` (5), `WipesWhenEmpty`, `HasRunRepairBoxFix` |
| Players | `PlayerLimit` (-1, no limit; TavernLib overrides it), `EmptyServerShutdownTimeInSeconds` (300), `HasAFKTimer` (true), `IsCustomizationEnabled` (true), `InitialPlayerInventory` (Default), `PlayerSmoothingLevel`, `PlayerLandmarkMode` |
| Death | `DropAllOnDeath`, `RespawnTimeSeconds` (4, nothing reads it), `DownedStateDuration` (60), `UnspentExperienceLostOnDeath`, `IsResetingHungerOnDeath`, `ImpactInvincibilityTime` (12, after a body is linked) |
| Combat | `IsPVPEnabled`, `PVPMultiplier` (0.1), `PVPCrippleMultiplier` (0.3), `DamageX` (1), `PlayerDamageTakenMultiplier` (1) |
| Survival | `HungerTick` (0.0005), `HungerDealsDamage` (true), `HealthRegenMultiplier` (1) |
| Time | `TimeSpeedMultiplier` (1), `IsAdvancingTimeWhenOffline` (true), `FixedDaytime` (-1, off) |
| Experience | `XPX`, `ForgingXPX`, `WoodcuttingXPX`, `MiningXPX`, `ChiselingXPX`, `CookingXPX`, `MeleeXPX`, `RangedXPX` (all 1), `CanOnlyBuySkillsAfterPracticing` (true) |
| World | `SpawningRateMultiplier` (1), `DecayMultiplier` (1), `CommunityStorageMultiplier` (1), `AvoidSpawnCollectedPages` (true), `HandoverRequireConfirmation` (true) |
| Physics | `IsUpdatingPhysicsFixedFrameCount` (true), `MinimumPhysicsFixedFramesPerSecond` (15), `MaximumPhysicsFixedFramesPerSecond` (45), `FPSForMinimumFixedFrameCount` (5), `FPSForMaximumFixedFrameCount` (20) |
| Board | `HasInGameSettings` (false): whether players get the in-game settings board |

`NetworkScene` reads a few of these for everyone: `HasSaveFiles` (`IsSaving`), `IsCustomizationEnabled`, `DecayMultiplier`, `SpawnRateMultiplier`.

## ServerSettingsSync (the in-game board)

`ATT.Character.QuickAccessMenu.ServerSettingsSync`, a `NetworkEntityBehaviour` on a scene entity. Both sides. `ServerSettingsSync.Instance` is the one in the scene.

- On join, the server tells each client whether the board is available (`IsMenuAvailable`, from `HasInGameSettings`).
- `Task<ServerSettings> RequestSettings()` on a client asks the server for the current settings.
- `SetSettings(ServerSettings)` on the server applies them; on a client it sends them to the server, which applies them with `SetAllSettings` (and logs the changes) **if `IsServerSyncPermitted(player)` is true**.
- In the game, `IsServerSyncPermitted` always returns `true`, so any player could change any setting. TavernLib postfixes it to allow only `owner` and `moderator` roles.

Settings go over the network as `SerializableServerSettings`.

## Server info types

| Type | Where | What it is |
| --- | --- | --- |
| `GameServerInfo` | `Alta.Api.DataTransferModels.Models.Responses`, in `Alta.Api.DataTransferModels.dll` | A server as Alta's API described it: `Identifier`, `Name`, `Description`, `SceneIndex`, `Target` (platform flags), `ServerStatus`, `PlayerLimit`, `CurrentPlayerCount`, `OnlinePlayers`, `FleetName`, `TransportSystem` and more. On the server, `ServerHandler.Current.ServerInfo`. On a client, `GameModeManager.CurrentGameServerInfo`. |
| `DevGameServerInfo` | no namespace | A `GameServerInfo` with a fixed `ConnectionInfo`, for joining by address. |
| `ConnectionInfo` | `Alta.Api.DataTransferModels.Models.Responses` | `Address`, `LocalAddress`, `GamePort` (1757), `WebServerPort`, `ConsolePort`, `LoggingPort`, `WebSocketPort`. |
| `JoinedServerInfo` | `Alta.Networking` | What the client knows about the server it joined: `static Current`, `Identifier`, `Name`, `ConnectionInfo`, `IsLocalServer`. |
| `ServerUtilities` | no namespace | `GetPublicIPAddress()` (asks Alta's API; now times out after about a minute), `GetLocalIPv4()`. |

`SceneIndex` picks the world: TavernLib's `/tutorialScene` forces 1, `/questScene` forces 4.

## See also

- [ServerHandler](server-handler.md)
- [Saving](saving.md)
- [Command-line flags](command-line.md)
