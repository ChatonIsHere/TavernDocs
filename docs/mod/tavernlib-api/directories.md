---
title: Folders
description: TavernDirectories, every path it gives you, and which ones TavernLib still uses.
sidebar_position: 7
---

# Folders

`TavernLib.TavernDirectories` in `TavernLib.dll`. Both sides.

The paths TavernLib uses, so your mod doesn't have to build them. The how-to, with where your own mod's files should go, is [Folders and files](../tavernlib/folders-and-files.md).

## Members

`public static class TavernDirectories`. Every member is a `static string` property, worked out each time you read it. None of them create the folder or file.

| Property | Path | Used by TavernLib |
| --- | --- | --- |
| `AppData` | `Environment.GetFolderPath(SpecialFolder.ApplicationData)`, so `%APPDATA%`. Inside the Wine prefix on Linux. | |
| `ATTSave` | `AppData\A Township Tale`, the game's own folder: worlds, logs, presets | Server backups, cosmetic presets |
| `ModdingTavern` | `AppData\TheModdingTavern`, TavernLib's and the launcher's config | Everything below |
| `ServerSettings` | `ModdingTavern\server_settings.json` | Server |
| `Users` | `ModdingTavern\users.json` | Server |
| `TavernServer` | `ModdingTavern\tavern_server.json`, the ports | Server |
| `WhitelistRequests` | `ModdingTavern\whitelist_requests.json` | Server |
| `ModRepos` | `ModdingTavern\mod_repos.json`, mod sources added with `modmanager addrepo` | Server |
| `LastRejection` | `ModdingTavern\last_rejection.json`, why a server last refused you | Client |
| `LauncherPath` | `ModdingTavern\launcher_path.txt`, where the launcher is. The launcher writes it. | Client |
| `QuickJoin` | `ModdingTavern\quick_join`. Quick join is on while this file exists. | Client |
| `Blacklist` | `ModdingTavern\blacklist.json` | No. The blacklist is in `users.json` now. |
| `Whitelist` | `ModdingTavern\whitelist.json` | No. The whitelist is in `users.json` now. |

Some of TavernLib's files have no property. Their paths are in [Files](files.md).

One more path lives elsewhere: `TavernLib.Backend.Server.ServerBackup.ServerDirectory` is `ATTSave\Servers\-1`, the server's world folder.

## Example

```csharp
using System.IO;
using TavernLib;

public static class Paths
{
    public static bool HasPlayed => File.Exists(TavernDirectories.Users);
    public static string Presets => Path.Combine(TavernDirectories.ATTSave, "presets");
}
```

## Gotchas

- Read these files, don't write them, unless the page for that file says how. The Server launcher writes several of them too. See [Config files](config/tavern-manager.md).
- They're per Windows user (or per Wine prefix), not per game folder. Two game installs on one PC share them.
- In Docker and on panels, the host maps `TheModdingTavern` to `tavern-config`. The paths still work from inside the game. See [Config reference](../../host/config-reference.md#where-the-files-are).

## See also

- [Files](files.md)
- [Where files live](../../help/where-files-live.md)
