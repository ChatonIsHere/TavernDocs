---
title: TavernLib.Backend.Server
description: Every type in the TavernLib.Backend.Server namespace.
sidebar_position: 8
---

# TavernLib.Backend.Server

Every type in `TavernLib.Backend.Server`, from TavernLib's own assembly. See [the overview](overview.md) for how these pages are made.

| Type | Kind | Public members | What it is |
| --- | --- | --- | --- |
| [`ServerBackup`](/tavernlib-api/types/backend-server/serverbackup) | static class | 1 | Timed zip backups of the server's world folder (`Servers\-1`) into its `Backups` folder, for servers not run by the launcher. Server; started from `Tavern` unless `/launcherauth` is given. |
| [`ServerBackup.BackupResult`](/tavernlib-api/types/backend-server/serverbackup-backupresult) | internal class | 5 | Internal: what one `CreateBackup` made. |
| [`ServerListingController`](/tavernlib-api/types/backend-server/serverlistingcontroller) | class | 5 | Sends the server to the Community Servers listing every 3 seconds from a background loop, backing off after failures, and removes it when the game quits. Server; `TavernManager` makes one when `community_listed` is on at start. |
| [`ServerListingPayload`](/tavernlib-api/types/backend-server/serverlistingpayload) | struct | 13 | The JSON body each heartbeat sends to the Community Servers listing, built from the server's settings and ports. |
| [`ServerListingPayload.SceneKind`](/tavernlib-api/types/backend-server/serverlistingpayload-scenekind) | private enum | 3 | Private: which scene the listing reports, Normal, Quest or Tutorial. The launch arguments win over the settings. |
