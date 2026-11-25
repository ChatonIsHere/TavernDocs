---
title: Saving
description: How player saves and the world save work, where the files are, what a PlayerSave holds, and how to save or hold off saving from a mod.
sidebar_position: 13
---

# Saving

Server only. The server saves the world (chunks) and each player. Clients save nothing of the game.

## Where the files are

`AltaIO.ServersFolder` is `%APPDATA%\A Township Tale\Servers`, or `Servers` under the folder given with `/app_data_path`. Each server has a folder named after its id, so a TavernLib server (id `-1`) uses `Servers\-1\`. If an old-style folder named `<id> - <name>` exists, the game uses that instead.

| Path | What | Property |
| --- | --- | --- |
| `Servers\-1\` | The server's folder. | `ServerHandler.Current.SaveUtility.ServerFolder` |
| `Servers\-1\ServerConfiguration.json` | The game's server settings. | `ServerHandler.Current.ServerConfig` |
| `Servers\-1\Save\` | The save. | `SaveUtility.SaveFolder` |
| `Servers\-1\Save\Chunks\` | The world, per chunk. | `SaveUtility.ChunksFolder` |
| `Servers\-1\Save\Players\<id>\<id>` | One player's save. | `SaveUtility.PlayerSaveUtility.PlayerFolder` |
| `Servers\-1\Save\Cache\` | The file cache. | `SaveUtility.CacheFolder` |
| `Servers\-1\Logs\` | The game's logs. | `SaveUtility.LogsFolder` |

The folders are `IAltaFolder`s (`.Path`, `.GetSubfolder(name)`, `.GetFile(name)`) from `Alta.IO`. With `/remote_saves` the game can keep them in S3 or another folder; TavernLib servers don't use that.

```csharp
public static string SaveFolder() => ServerHandler.Current?.SaveUtility?.SaveFolder.Path;
```

## When saves happen

| When | What's saved | How |
| --- | --- | --- |
| Every `MinutesBetweenAutoSaving` minutes (5 by default), if `IsAutoSaving` | Every chunk, then every `IAutoSave` behaviour, then every player | `StreamerManager.Instance.SaveWorld(isInstant: false)`, spread over frames |
| A player leaves | That player | `ServerHandler.RemovePlayer`: `SaveControllerAndState`, then `WriteSave(isUnloading: true)` |
| The server stops | Everything, at once | `SaveWorld(isInstant: true)`, which blocks the main thread |

Nothing is saved when `ServerSettings.IsSaving` is off (`NetworkScene.HasSaveFiles` is `false`).

## Player saves

A player's save is a `PlayerSave` (`Alta.Utilities`), an `IAltaFileFormat`. The server loads it when the player is about to spawn (`SaveUtility.PlayerSaveUtility.Load(userId)`), and `Player.Save` gives it to you.

| `PlayerSave` member | What it holds |
| --- | --- |
| `int PlayerIdentifier` | The user id. |
| `PlayerSaveFileData Data` | `position` (where they were) and `home` (their respawn point, if set). |
| `Vector3 LastSafePosition` | The last safe spot their client reported. |
| `uint[] PrefabData`, `int PrefabBytes` | The body: what's in their hands, belt and back, and everything inside those. |
| `uint[] StateData`, `int StateBytes` | The player state stack. |
| `uint[] PlayerData`, `int PlayerBytes` | The `Player` entity's own savable parts. |
| `uint[] ProgressionData`, `int ProgressionBytes` | Skills and progression. |
| `uint[] CosmeticData`, `int CosmeticBytes` | Their look. |
| `ChunkVersioning PrefabChunkVersioning` | Which save format version the prefab data is in. |

The blobs are [Stream](stream.md) bits written by the game's saving system (`Alta.Saving.SavingSystem`), with a `ChunkVersioning` header. Reading them needs the same versioned code paths, so treat them as opaque.

### Who isn't saved

`Player.IsInSavableState(bool isSavingIfDead = false)` is `false`, and the save is skipped, when:

- there's no save file (saving off),
- the player is in `Fly` or `AutoCam` mode,
- they're in the character room (`Customization` state),
- their body is dead (unless `isSavingIfDead`),
- or anything has called `AddSaveBlocker` on them and not removed it.

When a player leaves while dead, `SaveControllerAndState` (called without `isSavingIfDead`) skips them, but `WriteSave` still writes the file, so what was copied in at the last successful save is what's kept. With `isSavingIfDead: true`, a dead player's saved position is set to their home.

### Saving from a mod

```csharp
private static readonly object Blocker = new object();

// Stop a player's save being written while your mod has them somewhere odd.
public static void HoldSaves(Player player) => player.AddSaveBlocker(Blocker);

public static void ReleaseSaves(Player player) => player.RemoveSaveBlocker(Blocker);

// Save one player now.
public static void SaveNow(Player player)
{
    if (!player.IsInSavableState()) return;
    player.SaveControllerAndState();
    player.WriteSave(isUnloading: false);
}

// The pass the autosave runs: every chunk, then every player.
public static async Task SaveEverything()
{
    if (StreamerManager.Instance == null) return;
    await StreamerManager.Instance.SaveWorld(isInstant: false);
}
```

- `SaveControllerAndState` copies the body, states and progression into `Player.Save`. `WriteSave` serializes the `Player` entity and starts writing the file (`IAltaFile.WriteAsync`).
- A save blocker is any object; the same object removes it. Remove it, or that player is never saved again until they rejoin.
- `Player.SaveAll()` saves every player. `SaveWorld` calls it at the end.
- `SaveWorld(isInstant: false)` returns at once if another save is running; `isInstant: true` cancels that and saves synchronously.

## Other types

| Type | What it is |
| --- | --- |
| `ServerSaveUtility` (`Alta.Utilities`) | The folders above. `static DeleteSave(GameServerInfo)`, `static GetConfig(GameServerInfo, name)`, `Unload()`. |
| `PlayerSaveUtility` (`Alta.Utilities`) | `Task<IAltaFile> Load(int userIdentifier)`, `bool Exists(int userIdentifier)`. |
| `StreamerManager` (no namespace) | `static Instance`, `StartAutoSave()`, `Task SaveWorld(bool isInstant)`, `static List<IAutoSave> AutoSavingBehaviours`. |
| `IAutoSave` | `void AutoSave()`. Add yours to `StreamerManager.AutoSavingBehaviours` to run in every world save. |
| `SavingSystem` (`Alta.Saving`) | The versioned save serializer: `LatestChunkVersioning`, `IsLoadingPlayerSave`, `Serialize`, `Load`, `WriteBasic<T>`, `ReadBasic<T>`. |
| `PlayerSaveData` | The starting inventory for new players (`InitialPlayerInventory` in the settings picks which). |
| `SaveMode` (`ATT.Saving`) | Per prefab: how an entity is saved (`Base`, `Child`, `Ignore`, `Player`, `Creature`). |
| `ServerWipeManager` | Wipes. `IsWiping` stops saves. |

Chunk saving itself (what a chunk writes, versioning, migration) belongs to the world area.

## See also

- [Player](player.md)
- [Server settings](server-settings.md)
- [Stream](stream.md)
- Host docs: [the game's folder](../../host/config-reference.md#the-games-folder)
