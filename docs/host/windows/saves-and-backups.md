---
title: Saves and backups
description: Where the world is saved, and how to back it up and restore it.
---

# Saves and backups

## Where the world is

Your world is in `%APPDATA%\A Township Tale\Servers\-1`. The **Saves** button opens the player saves inside it.

The server's settings, players and roles are in `%APPDATA%\TheModdingTavern`. To paste either path, press `Win+R`, paste it in and press Enter.

## Automatic backups

Turn them on in **Settings**, **Advanced**:

- **ServerBackupTime**: hours between backups. For example `6` makes one every 6 hours. `0` is off.
- **ServerBackupMaxBackups**: how many to keep. The oldest are deleted when there are more. `0` keeps them all.

Backups are zips called `ServerBackup_<date>_<time>.zip` in `Servers\-1\Backups`. They leave out the logs.

Backups stay on the same PC. If the drive dies, so do they. Copy one somewhere else now and then, like another drive or cloud storage.

## Backing up by hand

1. **Close Server** and wait for it to finish saving.
2. Copy `%APPDATA%\A Township Tale\Servers` and `%APPDATA%\TheModdingTavern` somewhere safe.

## Restoring a backup

1. **Close Server**.
2. Rename `%APPDATA%\A Township Tale\Servers\-1` to `-1-old`, so you can go back if you need to.
3. Extract the backup zip into `%APPDATA%\A Township Tale\Servers`. It holds a single folder called `-1`, so it lands back in the right place.
4. **Open Server**.

## Moving the server to another PC or to Docker

Copy both folders across. See [Moving a world between them](../pick-how-to-host.md#moving-a-world-between-them).
