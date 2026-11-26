---
title: Settings and files
description: SettingsManager and GameSettings, the SettingsFileAccess file watcher, AltaIO's folders, AltaFile, PlayerPreferences and GlobalSettings assets.
sidebar_position: 11
---

# Settings and files

Where the game keeps its settings and files, and the helpers it uses to read and write them. Both sides. Server settings themselves (`ServerHandler.Current.ServerConfig`) are on [Server settings](../networking/server-settings.md) in the Networking area, and [Game systems](../game-systems/overview.md) lists which systems read them.

## SettingsManager

`Alta.Utilities.SettingsManager` in `Root.Township`. Static members, plus an instance that VContainer hands out as `ISettingsManager`.

| Member | What it is | Notes |
| --- | --- | --- |
| `static SettingsFileAccess<GameSettings> GameConfig { get; }` | The player's game settings: `GameConfiguration.json` in `AltaIO.StorageFolder` (`%APPDATA%\A Township Tale`). | Made on first use. |
| `static SettingsFileAccess<LauncherSettings> LauncherConfig { get; }` | `LauncherSettings.json` in the game folder. Only `CameraPhotosPath`. | |
| `static bool GetSettingsFromString(string settingsName, out ISettingsFileAccess access)` | `game` gives `GameConfig`; `server` gives the running server's settings. | What the `settings` commands use. Logs an error for anything else. |

```csharp
#pragma warning disable CS0618 // GameSettings is marked obsolete but is still what GameConfig holds
GameSettings settings = SettingsManager.GameConfig.Settings;
MelonLogger.Msg($"Smooth locomotion: {settings.IsUsingSmoothLocomotion}");
SettingsManager.GameConfig.SettingsChanged += changed => MelonLogger.Msg("GameConfiguration.json changed");
#pragma warning restore CS0618
```

## GameSettings

`Alta.Utilities.GameSettings : Settings, ICloneable` in `Root.Township`. Marked `[Obsolete("Use GlobalConstants instead.")]`, but it's still what `GameConfig` holds and the game still reads it everywhere. Suppress warning CS0618 where you use it.

Mostly client comfort and controls (locomotion, rotation, haptics, volumes, resolution scales, accessibility). The player-facing list is on [Game settings](../../../help/game-settings.md); three fields matter to modders:

- `ModsDirectoryPath` (`mods_directory_path` in the JSON): the folder for the game's own script mods.
- `ApiEndpoint`: which web API to use, unless a command-line flag picks one.
- `LogSettingsPath`: never used (see [Logging](logging.md)).

The getters are good Harmony targets to force a setting without touching the player's file. Rover's `EarlyPatches` forces smooth locomotion and head-relative movement this way for its bots.

## SettingsFileAccess

`Alta.Utilities.SettingsFileAccess<TSettings> : ISettingsFileAccess, ISettings` in `Root.Township`, where `TSettings : ISettings, ICloneable, new()`.

When it's made it:

1. loads defaults from a `Resources` text asset called `<name>_Defaults` (or `new TSettings()` without one),
2. reads `<name>.json` in the background through an `AltaFile`, writing the defaults out if there's no file,
3. watches the file with a `FileSystemWatcher`, and reads it again whenever it's changed on disk.

| Member | What it is | Notes |
| --- | --- | --- |
| `TSettings Settings { get; }` | The current settings. | If the file is still being read, this waits for it, on your thread. |
| `event Action<TSettings> SettingsChanged`, `event Action<ISettings> Changed` | After each read, and after `SetAllSettings`. | Raised through `MainThreadDispatcher.Run`, so on the main thread, a frame later. |
| `bool TryGet<TValue>(string name, out TValue value)` | Reads a property by name. | Throws on a wrong type rather than returning false. |
| `void Save()`, `async void SaveAsync()` | Writes the file. `SaveAsync` waits for any read to finish first. | `Save` refuses (logs an error) while a read is running. |
| `void SetAllSettings(TSettings newSettings)` | Replaces everything, saves, raises the events. | |
| `void ChangeFile(IAltaFolder folder, string name = null)` | Points it at another file. | |
| `new SettingsFileAccess<TSettings>()` | A dummy with defaults and no file. | |

Your own edits to `GameConfiguration.json` (by hand or from a mod) are picked up by the watcher. Each read also reloads `NLog.config` (a quirk covered in [Logging](logging.md)).

The base class `Alta.Core.Settings.Settings` (in `Township.Core.Runtime`) builds a getter for each public property, which is what `TryGet` uses. Write your own settings class on it if you want the same file handling for your mod, or just use MelonPreferences.

## AltaIO

`Alta.Utilities.AltaIO` in `Alta.IO`. Static folders, set up the first time anything touches the class.

| Folder | Default path | Notes |
| --- | --- | --- |
| `StorageFolder` | `%APPDATA%\A Township Tale` | `/app_data_path <folder>` moves it. With `/remote_saves`, it's a folder that mirrors to another place or to S3. |
| `PersistentStorageFolder` | `StorageFolder\data` | |
| `ServersFolder` | `StorageFolder\Servers` | Server saves. |
| `ClientFolder` | `StorageFolder\Client` | Where a client's `logs` folder goes. |
| `CacheFolder` | `ClientFolder\Cache` | |
| `GameFolder` | The install folder (parent of `A Township Tale_Data`) | |

Every `AltaFolder` creates its directory if it doesn't exist. `GetSubfolder(name)` does the same, so this makes and returns a folder for your mod:

```csharp
// %APPDATA%\A Township Tale\Client unless /app_data_path moves it
return AltaIO.ClientFolder.GetSubfolder("HelloTavern").Path;
```

`/remote_saves gcs <path>` (Google Cloud) isn't handled: `StorageFolder` stays null and everything that uses it fails.

### IAltaFolder and IAltaFile

The game's save system goes through these. `IAltaFolder` has `Path`, `Name`, `Parent`, `AllFiles`, `AllSubFolders`, `GetFile(name)`, `FileExists`, `GetSubfolder`, `SubfolderExists`, `RemoveFile`, `RemoveSubFolder`, `Delete`, `UnloadAllFiles`.

`IAltaFile` holds an `IAltaFileFormat` (`Content`) and reads and writes it:

- `Task<T> ReadAsync<T>()` reads in the background.
- `void WriteAsync()` clones the content and writes it on a thread-pool thread, to a `temp` file that then replaces the real one and keeps the old one as a `backup` file next to it.
- `FinishReading()`, `FinishWriting()` and `static AltaFile.FinishAllWriting()` wait. The game calls `FinishAllWriting` at the end of shutdown.

`IAltaFileFormat` is an abstract class (despite the `I`): `ReadFrom(FileInfo, Stream)`, `WriteTo(Stream, CancellationToken)`, `Clone()`. `JsonAltaFormat<T>` and `TextFileFormat` are the simple ones.

## PlayerPreferences

`PlayerPreferences` in `Alta.IO` (no namespace, static). The game's replacement for Unity's `PlayerPrefs`: a dictionary saved to `player.prefs` in `StorageFolder`.

`HasKey`, `RemoveKey`, `SetFloat`, `SetInt`, `SetBool`, `SetString`, `GetFloat`, `GetInt`, `GetString`, `GetBool`, `DeleteAll`, `SaveToDisk`. It's written on quit, and when the game calls `SaveToDisk`.

- Reading a key as the wrong type throws an `InvalidCastException`.
- It holds the login tokens (`access_token`, `refresh_token`, `identity_token`, `offline_token`). Don't log its contents.
- `PlayerPreferenceBool`, `PlayerPreferenceFloat`, `PlayerPreferenceInt` and `PlayerPreferenceString` wrap one key each; `PlayerSettingsNames` lists the game's key names.

## GlobalSettings

`Alta.Global.GlobalSettings<T>` in `Alta.Global.Runtime`. The game's design data as `ScriptableObject` assets: `MenuSettings`, `NetworkingSettings`, `SmoothLocomotionSettings`, `PickupTypeSettings` and many more. Read one with `GlobalSettings<MenuSettings>.Instance`.

- `Instance` is set by a `GlobalSettingsInitializer` in the first scene, which calls `InitializeInstance()` on each asset it lists. Before that, `Instance` is null (in a build, the editor fallback returns null).
- They're shared assets. Changing a field changes it for everything that reads it, until the game restarts. Code that copied a value earlier won't see your change.
- `GlobalSettings<TConcrete, TInterface>` is the same behind an interface. Its `SetMock(TInterface)` stores a mock that `Instance` never returns, so it does nothing.
- `[GlobalSettings(string filePath)]` on a class says where its asset lives; it's for the editor.

## See also

- [Startup and app state](startup-and-app-state.md) for `/app_data_path` and the other flags.
- [Logging](logging.md) for where logs are written.
