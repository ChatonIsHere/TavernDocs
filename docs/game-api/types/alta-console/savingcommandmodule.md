---
title: "SavingCommandModule"
description: "Console module save: server commands to save the world and to wipe the world, caves, community storage or player saves."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SavingCommandModule

A **static class** in `Root.Township`, `Alta.Console.Commands`.

Console module `save`: server commands to save the world and to wipe the world, caves, community storage or player saves. Play mode only.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Attributes** `PlayOnly`, `Module`

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this module. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forcebackup" /><code>{"static void ForceBackup(bool isInstant = false)"}</code> | Server: `save backup` backs up every changed remote file. |

<details>
<summary>11 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cavewipe" /><code>{"private static async Task CaveWipe()"}</code> | Server: `save wipecaves` clears all cave chunks and moves players in the caves to the surface, unless a wipe is running. |
| <Link id="m-forcewipe" /><code>{"private static async Task<bool> ForceWipe(bool keepPlayers = true)"}</code> | Server: `save wipe-forced` deletes chunks, cache and community storage (or the whole save folder if not keeping players), disconnects everyone and quits. |
| <Link id="m-fullwipe" /><code>{"private static async Task<bool> FullWipe()"}</code> | Server: `save full-wipe` stops pinging the API and wipes all saves, players and chunks. |
| <Link id="m-instant" /><code>{"private static async Task Instant()"}</code> | Server: `save now` saves the world straight away. |
| <Link id="m-save" /><code>{"private static async Task Save()"}</code> | Server: `save` saves the world through `StreamerManager` (not instant). |
| <Link id="m-wipe" /><code>{"private static async Task<bool> Wipe()"}</code> | Server: `save wipe` runs the normal server wipe (`ServerHandler.WipeServer`), optionally setting the server offline. Returns false if a wipe is already running. |
| <Link id="m-wipe-2" /><code>{"private static async Task<bool> Wipe(bool isSettingOffline)"}</code> | Server: `save wipe` runs the normal server wipe (`ServerHandler.WipeServer`), optionally setting the server offline. Returns false if a wipe is already running. |
| <Link id="m-wipeallplayers" /><code>{"private static void WipeAllPlayers(bool isWipingATM = true, bool isWipingPostbox = true, bool isWipingLandmarks = true, bool isWipingMap = true)"}</code> | Server: `save player-wipe-all` deletes the whole player save folder and, by choice, all ATM, postbox, landmark and map data. |
| <Link id="m-wipecache" /><code>{"private static void WipeCache(bool isSettingOffline = false)"}</code> | Server: `save wipecache` wipes the server cache. The offline flag is ignored. |
| <Link id="m-wipecommunitystorage" /><code>{"private static async Task WipeCommunityStorage()"}</code> | Server: `save wipe-storage` wipes the global community storage. |
| <Link id="m-wipeplayer" /><code>{"private static async Task<bool> WipePlayer("}<Link to="/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{" user, bool isWipingLockbox = true, bool isWipingATM = true, bool isWipingPostbox = true, bool isWipingLandmarks = true, bool isWipingMap = true)"}</code> | Server: `save player-wipe` deletes one player's save and backup, plus by choice their lockbox, ATM, postbox, landmarks and map. |

</details>
