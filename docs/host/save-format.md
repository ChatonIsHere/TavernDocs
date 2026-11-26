---
title: Save format
description: What's in the world save, what each file holds, and what's safe to back up, edit or delete.
summary:
    - "The world is in `Servers/-1/`. Stop the server before you copy, edit or delete anything there."
    - "`Save/Chunks` is the world, and `Save/Players/<id>` holds each player's character and inventory."
    - "Most files are binary and not meant to be edited. `ServerConfiguration.json` and `InfoBoard` files are safe to change."
    - "Back up `Servers/-1/` and TavernLib's config folder together. You can leave out `Backups/`, `Logs/` and `Cache/`."
    - "`save full-wipe` deletes the whole `Servers/-1/` folder including your backups, so copy them first."
---

# Save format

The world is in `Servers/-1/` inside the game's folder. Where that is for your install is in the [Config reference](config-reference.md#where-the-files-are).

Stop the server before you copy, edit or delete anything here. A running server keeps writing these files.

## The folder

```
Servers/-1/
├── ServerConfiguration.json          The game's settings (JSON)
├── Backups/                          Automatic backups (zip)
├── Logs/logs/                        The game's logs (CSV), older ones in archives/
└── Save/
    ├── Chunks/                       The world, one file per area
    ├── Players/<id>/<id>             Each player's character and what they carry
    ├── Players/<id>/Personal Chunk Storage <id>.bytes    Their lockbox
    ├── PlayerGoldBankAccountData/<id>.bytes             Gold in their bank
    ├── PlayerPostboxStorageFileFormat/<id>.bytes        Their postbox
    ├── LandmarkSaveFormat/<id>.bytes                    Landmarks they know of or have found
    ├── MapSaveFormat/<id>.bytes                         Map pieces they've uncovered
    ├── ClimbingTowerTeleporterSaveData/<id>.bytes       Their climbing tower teleporter
    ├── InfoBoard/<name>                                 Text on info boards
    ├── Global Communal Storage                          The town's shared storage (ore, sticks and so on)
    └── Cache/                        Forest and terrain data made from the world seed
```

`<id>` is the player's user id: the `user_id` for them in TavernLib's [users.json](config-reference.md#usersjson). A folder or file only appears once there's something to put in it.

Mods can keep their own files in `Save/` too. Keep them with the rest of the save.

## Formats

| Files | Format |
| --- | --- |
| `ServerConfiguration.json` | JSON. See [ServerConfiguration.json](config-reference.md#serverconfigurationjson). |
| `InfoBoard/<name>` | Plain text. |
| Everything else in `Save/` | Binary, little-endian, not compressed. |

Most of a binary file is the game's own packed format, saved part by part with a version for each part. A text editor or hex editor won't make sense of it, and reading it takes the game's code. The exceptions are the small per-player files below, which are simple.

### _backup and _temp files

The game never writes over a save file directly. It writes `<name>_temp` first, then swaps it in, and the old file becomes `<name>_backup`. So every `_backup` file is the same file one save older. For player files, which have no extension, it's `<id>_backup`.

- The game doesn't read `_backup` files itself. They're there for you.
- A `_temp` file left behind means a write was cut off, for example by a crash. The real file is still the last good one.
- A `_backup` with no file beside it (like `Cave Layer 0_backup.bytes`) is left when the game deletes a file but keeps its backup. It's harmless.

To go back one save for a single file: stop the server, copy the folder somewhere safe, delete the broken file and rename its `_backup` to the real name.

## The world: Chunks

One file per area of the world:

| File | What it is |
| --- | --- |
| `Chunk <x>-<y>.bytes` | The overworld, a 64 by 64 grid from `Chunk 0-0` to `Chunk 63-63`. |
| `Townhall Building Chunk.bytes`, `Blacksmith Building Chunk.bytes`, and the other `Building Chunk` files | The town's main buildings, each its own area. |
| `Mine Entrance 1.bytes` to `Mine Entrance 5.bytes`, `Mining Shrine Chunk.bytes` | The mine entrances and the shrine. |
| `Cave Layer <n>.bytes` | One per cave layer that has been made. |
| `Global Chunk.bytes` | Things that aren't in one place. World-wide state, like the clock and the cave seed, is probably kept here. |
| `Void Chunk.bytes` | Where the game parks things between areas, like a player's body while they're moved somewhere new. |

Each file is a list of saved objects. Each object has the hash of what it is (its prefab) and the saved state of its parts: where it is, what's in it, how worn it is, and so on. The file also starts with a format number (`239722743` for this version of the game) and ends with the date it was saved.

Every autosave rewrites the file of every area that's loaded, changed or not. Areas nobody has been near since the start stay as they are.

## Players

`Players/<id>/<id>` is one player's character:

- where they are and their home (respawn) point
- the player and their look
- their state (in the character room, playing, downed and so on)
- their body and everything on it: hands, belt, back, and what's inside bags and pouches
- their skills and XP
- the last safe spot they stood on

A player's inventory is in this file, inside the body. There's no separate inventory file.

A player's file is written when they leave, at every autosave, and when the server stops. Players in Fly mode or still in the character room aren't saved.

### The small per-player files

| Folder | What it holds | Format |
| --- | --- | --- |
| `PlayerGoldBankAccountData` | Gold in the bank. | One 32-bit whole number. The file is 4 bytes. |
| `ClimbingTowerTeleporterSaveData` | The climbing tower teleporter they last went to. | Two 32-bit whole numbers: a version (`1`), then the destination (`-1` for none). |
| `LandmarkSaveFormat` | Landmarks they know of or have found. | A version (`0`), a count, then for each landmark its index on the map (32 bits) and a yes/no byte: no means they know of it, yes means they've found it. |
| `MapSaveFormat` | Which pieces of each map they've uncovered. | A version (`0`), a count, then each map's hash and one byte per piece. |
| `PlayerPostboxStorageFileFormat` | What's in their postbox. | The same list of saved objects as a chunk. |

The lockbox, `Personal Chunk Storage <id>.bytes`, sits in the player's folder and is a chunk file too.

## Cache

The forest's layout, its terrain and its rivers, made from the world seed (the number at the end of each file name). Making them takes a while, so the server keeps them. Players download them from the server when they join, and keep their own copy.

They're not part of the world's state. Delete them (with the server stopped) and the server makes them again on the next start, which makes that start slower. `save wipecache` on the console deletes them too.

## Backing up

Back up the whole `Servers/-1/` folder and TavernLib's config folder (`users.json` holds the user ids the player files are named after). Stop the server first, or run `save now` on the console and copy straight after, so all the files are from the same save.

You can leave out:

- `Backups/`, unless you want the old backups too.
- `Logs/`, which isn't part of the world.
- `Cache/`, which the server can make again.

The automatic backups leave out `Backups/` and `Logs/`. See [Saves and backups](windows/saves-and-backups.md) for turning them on and restoring one.

## What's safe to change

| What | Safe? |
| --- | --- |
| `ServerConfiguration.json` | Yes. See the [Config reference](config-reference.md#serverconfigurationjson). |
| `InfoBoard/<name>` | Yes, it's plain text. Or use `settings infoboard <name> "<text>"` on the console. |
| `PlayerGoldBankAccountData/<id>.bytes` | Yes, with a hex editor: 4 bytes, a whole number with the low byte first. Deleting it leaves that player 0 gold. |
| `Cache/` | Delete it whenever the server is stopped. |
| `_backup` and `_temp` files | You can delete them. You lose the copy from one save back. |
| `Players/<id>/` | Deleting the folder gives that player a new character (and empties their lockbox) next time they join. `save player-wipe <player>` does it from the console, and also clears their bank, postbox, landmarks and map. |
| `Chunks/` | Don't edit these. Use the console commands below to reset parts of the world. |

## Console commands

These are the game's own, under `save`. Run them on the server's console. See [Console and tokens](console-and-tokens.md).

| Command | What it does |
| --- | --- |
| `save` | Saves the world now, spread over a few frames. |
| `save now` | Saves everything at once. The server pauses until it's done. |
| `save wipecache` | Deletes `Cache/`. |
| `save wipecaves` | Moves everyone in the caves to the surface and clears the caves. |
| `save wipe-storage` | Empties the town's shared storage (`Global Communal Storage`). |
| `save backup [isInstant]` | Copies changed save files to a second copy, but only on a server started with `/remote_saves <type> <path>`. Any type except `s3` and `gcs` means a plain folder at `<path>`. On a normal server it does nothing. Read from the code, not tested. |
| `save player-wipe <player>` | Deletes one player's character, lockbox, bank, postbox, landmarks and map. |
| `save player-wipe-all` | The same for every player. |
| `save wipe` | Kicks everyone, deletes `Chunks/` and `Cache/`, moves every player to the spawn point and clears their home, then stops the server. Players keep their characters and what they carry, but lose the map markers they made. |
| `save full-wipe` | Kicks everyone, deletes the whole `Servers/-1/` folder, then stops the server. |
| `save wipe-forced` | Deletes `Chunks/`, `Cache/` and the shared storage, kicks everyone and stops the server, without moving players or clearing homes. `save wipe-forced false` deletes the whole `Servers/-1/` folder instead. |

:::danger[full-wipe deletes your backups]

`save full-wipe` deletes everything in `Servers/-1/`, including `ServerConfiguration.json` and the `Backups/` folder. Copy your backups somewhere else first.

:::
