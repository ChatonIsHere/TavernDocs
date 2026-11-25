---
title: ServerConfigFile
description: The base class for TavernLib's JSON files, with Read, Update and Tidy.
sidebar_position: 2
---

# ServerConfigFile

`TavernLib.Backend.Server.Configs.ServerConfigFile<T>` in `TavernLib.dll`. Both sides (it's just a file).

The base class every TavernLib config file uses. It reads a JSON file into a `T`, writes it back without ever leaving a half-written file, and lets one change happen at a time. You'll use it through [`TavernManager`](tavern-manager.md)'s files, and you can subclass it for your own mod's JSON file.

## Members

`public abstract class ServerConfigFile<T>(string filePath) where T : class, new()`

| Member | What it does |
| --- | --- |
| `T LastRead { get; }` | The object from the last good read. Before the first read it's `new T()`, the defaults. |
| `bool Readable { get; }` | `false` until the file has been read once, and again after any read fails. |
| `T Read()` | Reads the file into a new `T` and makes it `LastRead`. See below. |
| `virtual void ReadFromFile()` | Calls `Read()`. Some subclasses add to it (see [Server settings](server-settings.md#serversettingsconfig)). |
| `void Update(Func<T, bool> change)` | Reads the file, passes the result to `change`, and writes it back if `change` returns `true`. |
| `virtual void WriteToFile()` | Writes `LastRead` to the file. |
| `protected virtual bool Tidy(T config)` | Called after each read. Fix the object up and return `true` to have it written back. The base does nothing. |

### Read

- **Missing file:** writes `new T()` to it and returns that.
- **Empty or broken file:** logs `Could not read <name>: <why>`, sets `Readable` to `false` and throws. `LastRead` stays as it was. An unreadable file is never taken as an empty config.
- **Good file:** deserializes, calls `Tidy`, writes back if `Tidy` returned `true` (a failed write there is ignored, and the fixed object is still used), and returns it.

Every read gives a new object. If you kept a reference to an old `LastRead`, it doesn't change when the file does. Read `LastRead` again each time.

### Writes

A write goes to `<file>.tmp` first, then swaps it in with `File.Replace`, keeping the old file as `<file>.bak`. If the swap fails because the file is in use, it tries 10 times, 50 ms apart. The JSON is indented UTF-8 with no BOM.

### Update

`Update` holds the lock for the whole read, change and write, so two changes through the same object can't overwrite each other. If the read fails, it throws and `change` isn't called.

## Threading

Each object has its own lock around `Read`, `Update` and `WriteToFile`, so it's safe from any thread. TavernLib calls these from the main thread and from its login server's background tasks.

Every call reads or writes the disk, and a write can sleep while it retries. Don't call them every frame. Read `LastRead` there instead.

## Gotchas

:::warning[The lock is per object, not per file]

Two `ServerConfigFile` objects for the same file don't share a lock, and the Server launcher (another program) has no lock at all. To change one of TavernLib's files, use the object on `TavernManager`, which is the one TavernLib itself writes through. Never make your own `UserConfigFile` for `users.json`.

:::

- **`WriteToFile` writes `LastRead` as it is.** If `LastRead` is old, that throws away whatever changed in the file since, like a role the host just gave in the launcher. Use `Update` instead.
- **`change` can edit `LastRead` without saving it.** `Update` reads into `LastRead`, so if your `change` edits the object and then returns `false`, `LastRead` has your edit and the file doesn't. Return `true` whenever you changed anything.
- **Keep unknown keys.** TavernLib's classes have a private `[JsonExtensionData]` dictionary, so keys they don't know survive a write. Give your own `T` one too if anyone else edits your file.
- **`Read` isn't virtual.** Subclass extras that live in `ReadFromFile` don't run when you call `Read()`.
- You need a reference to `Newtonsoft.Json` (from the game's `Managed` folder) to use these, since `T`'s properties use its attributes.

## Your own config file

Subclassing gives your mod the same safe writes. Put the file in your mod's own folder, not in `TheModdingTavern`:

```csharp
using System;
using System.Collections.Generic;
using System.IO;
using MelonLoader.Utils;
using Newtonsoft.Json;
using TavernLib.Backend.Server.Configs;

public class ArenaSettings
{
    [JsonProperty("rounds")] public int Rounds { get; set; } = 3;
    [JsonProperty("banned_items")] public List<string> BannedItems { get; set; } = new();
}

public class ArenaSettingsFile(string path) : ServerConfigFile<ArenaSettings>(path)
{
    protected override bool Tidy(ArenaSettings settings)
    {
        if (settings.Rounds >= 1) return false;
        settings.Rounds = 1;
        return true;   // write the fixed value back
    }
}

public static class Arena
{
    public static readonly ArenaSettingsFile File =
        new(Path.Combine(MelonEnvironment.UserDataDirectory, "Arena", "arena.json"));

    public static void Load()
    {
        try { File.ReadFromFile(); }
        catch (Exception) { /* logged by TavernLib; LastRead keeps the defaults */ }
    }

    public static void AddBan(string item) =>
        File.Update(settings =>
        {
            if (settings.BannedItems.Contains(item)) return false;
            settings.BannedItems.Add(item);
            return true;
        });
}
```

Errors are logged under TavernLib's name, not your mod's. For player-facing settings, [MelonPreferences](../../mod/game-mods/mod-settings.md) is usually simpler.

## See also

- [TavernManager](tavern-manager.md)
