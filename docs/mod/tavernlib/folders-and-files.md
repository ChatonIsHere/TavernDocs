---
title: Folders and files
description: Where TavernLib keeps its files, and where your mod should keep its own.
---

# Folders and files

`TavernDirectories` has the paths TavernLib uses, so your mod doesn't have to work them out:

```csharp
using TavernLib;

string tavern = TavernDirectories.ModdingTavern;     // %APPDATA%\TheModdingTavern
string users = TavernDirectories.Users;              // ...\users.json
string settings = TavernDirectories.ServerSettings;  // ...\server_settings.json
string gameData = TavernDirectories.ATTSave;         // %APPDATA%\A Township Tale
```

| Property | Path |
| --- | --- |
| `AppData` | `%APPDATA%` (inside the Wine prefix on Linux) |
| `ATTSave` | `%APPDATA%\A Township Tale`, the game's own folder with saves and logs |
| `ModdingTavern` | `%APPDATA%\TheModdingTavern`, TavernLib's config |
| `ServerSettings` | `server_settings.json` |
| `Users` | `users.json` |
| `TavernServer` | `tavern_server.json`, the ports |
| `ModRepos` | `mod_repos.json`, added mod sources |
| `WhitelistRequests` | `whitelist_requests.json` |

See [Config reference](../../host/config-reference.md) for what's in each.

Read these, don't write them. TavernLib and the Server launcher both write to them, and a half-written file from your mod can break a server. If you need to change something, use the console or ask for an API.

## Your own files

Keep your mod's files in MelonLoader's `UserData` folder in the game folder, in a folder named after your mod:

```csharp
using MelonLoader.Utils;

string mine = System.IO.Path.Combine(MelonEnvironment.UserDataDirectory, "HelloTavern");
System.IO.Directory.CreateDirectory(mine);
```

For settings, use [MelonPreferences](../game-mods/mod-settings.md) instead of your own file.
