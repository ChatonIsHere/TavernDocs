---
title: "SavingCommandModule"
description: "static class SavingCommandModule in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SavingCommandModule

A **static class** in `Root.Township`, `Alta.Console.Commands`.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Attributes** `PlayOnly`, `Module`

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forcebackup" /><code>{"static void ForceBackup(bool isInstant = false)"}</code> |  |
| <Link id="m-cavewipe" /><code>{"private static async Task CaveWipe()"}</code> |  |
| <Link id="m-forcewipe" /><code>{"private static async Task<bool> ForceWipe(bool keepPlayers = true)"}</code> |  |
| <Link id="m-fullwipe" /><code>{"private static async Task<bool> FullWipe()"}</code> |  |
| <Link id="m-instant" /><code>{"private static async Task Instant()"}</code> |  |
| <Link id="m-save" /><code>{"private static async Task Save()"}</code> |  |
| <Link id="m-wipe" /><code>{"private static async Task<bool> Wipe()"}</code> |  |
| <Link id="m-wipe-2" /><code>{"private static async Task<bool> Wipe(bool isSettingOffline)"}</code> |  |
| <Link id="m-wipeallplayers" /><code>{"private static void WipeAllPlayers(bool isWipingATM = true, bool isWipingPostbox = true, bool isWipingLandmarks = true, bool isWipingMap = true)"}</code> |  |
| <Link id="m-wipecache" /><code>{"private static void WipeCache(bool isSettingOffline = false)"}</code> |  |
| <Link id="m-wipecommunitystorage" /><code>{"private static async Task WipeCommunityStorage()"}</code> |  |
| <Link id="m-wipeplayer" /><code>{"private static async Task<bool> WipePlayer("}<Link to="/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{" user, bool isWipingLockbox = true, bool isWipingATM = true, bool isWipingPostbox = true, bool isWipingLandmarks = true, bool isWipingMap = true)"}</code> |  |
