---
title: Troubleshooting
description: Fixes for common problems building, loading and publishing mods.
---

# Modding troubleshooting

## Building

- **"Set GameDir to an A Township Tale install with MelonLoader".** `GameDir` is empty or wrong. It has to be the folder with `A Township Tale.exe` in it, with Setup run on it (so there's a `MelonLoader` folder), or an att-stubs checkout. Check `Local.props`, or pass `-p:GameDir=...`.
- **A type or namespace can't be found.** Add a `Reference` for the assembly it's in. With att-stubs `main`, it might not be there at all. Try the `full` branch.
- **It builds against att-stubs but not against the game.** You're using a private member that att-stubs makes public. See [Private members are public](game-mods/game-files-or-stubs.md#private-members-are-public).
- **"The reference assemblies for .NETFramework,Version=v4.8 were not found".** Install the .NET Framework 4.8 Developer Pack, or Visual Studio's ".NET desktop development" workload.

## Loading

Check `MelonLoader\Latest.log` in the game folder first. It says what loaded and what didn't, and why.

- **Your mod isn't in the log at all.** It's not in `Mods`, or it's in a folder MelonLoader skips (names starting with `.` or `~`). For testing, put the DLL straight in `Mods`.
- **"Could not load file or assembly".** Your mod needs a DLL the game doesn't have. Make it a [library](publishing/manifest-reference.md#libraries), or for testing put it in `UserLibs`. Check you set `Private="false"` on game references, so you're not shipping your own copy of a game DLL.
- **It loads twice.** You have a loose copy in `Mods` and an installed copy from a mod source. Remove the loose one.
- **It works in the game but not on the server, or the other way round.** Check your [side check](tavernlib/client-server-or-both.md#telling-them-apart-in-code), and that your manifest lists both targets.
- **Your Harmony patch never runs.** The method might be named differently in the version you're patching, or inlined. Log in `Prepare()` to check the patch is found, and read the method in a decompiler. [Harmony in A Township Tale](../game-api/patching/harmony.md) covers async methods, properties and other traps.
- **Your console command says "Command not found".** Command, module and alias names must be lower case. A `[ServerOnly]` command is hidden until the server has started. And a module with the same name as another replaces it, so check yours wasn't replaced. See [Console commands](tavernlib/console-commands.md).

## Launcher addons

- **The addon isn't in the Addons window.** It needs to be a folder inside `addons`, next to the `.exe` (or in the repo when running from source). Folders starting with `_` are skipped.
- **It's ticked but nothing happens.** Restart the launcher. Addons load at startup.
- **It shows as failed.** Click **Show error** in the Addons window, or read `addon_load_errors.log` in `%APPDATA%\TheModdingTavern`.
- **"Has no client.py".** The addon only has `server.py`, so there's nothing for the client launcher to load. That's fine if it's a server addon.

## Publishing

The checks comment on your pull request says what failed. The usual ones:

- **The sha256 doesn't match.** You changed the file after hashing it, or hashed a different one. Hash the exact file on the release, with the builder's **Hash a file** or `fill-hashes`.
- **The download URL isn't a release asset.** It has to be `https://github.com/<owner>/<repo>/releases/download/<tag>/<file>`, on your mod's own repo.
- **An unknown field.** Usually a typo. Check the spelling against the [Manifest reference](publishing/manifest-reference.md#fields).
- **The version is already published.** Versions never change. Bump it, release again and submit the new one.
- **"Submitter works on the mod" failed.** Whoever opens the pull request needs to own the repo, have published one of its releases, or have contributed to it. Otherwise a maintainer checks with the owner first.
- **VirusTotal flagged it.** Sometimes this is a false alarm. Say so in the pull request and a maintainer will look.
