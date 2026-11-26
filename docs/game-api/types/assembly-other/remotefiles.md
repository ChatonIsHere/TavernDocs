---
title: "RemoteFiles"
description: "Static registry of every remote-backed save file, so changed files can be backed up together."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RemoteFiles

A **static class** in `Alta.IO`, `Alta.Utilities`.

Static registry of every remote-backed save file, so changed files can be backed up together. The `backup` console command calls `BackupAllChanged`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Nested types** [`RemoteAltaFile<TFileType>`](/game-api/types/assembly-other/remotefiles-remotealtafile-tfiletype)

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allremotefiles" /><code>{"private static List<"}<Link to="/game-api/types/assembly-other/iremotealtafile">{"IRemoteAltaFile"}</Link>{"> allRemoteFiles"}</code> | Every remote file created. Files add themselves in the constructor; the list holds them so they are never collected. |
| <Link id="m-currentlybackingup" /><code>{"private static ConcurrentDictionary<"}<Link to="/game-api/types/assembly-other/iremotealtafile">{"IRemoteAltaFile"}</Link>{", byte> currentlyBackingUp"}</code> | Files with a backup in progress, so the same file is not backed up twice at once. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-backupallchanged" /><code>{"static void BackupAllChanged(bool isInstant)"}</code> | Server: backs up every remote file that has changed and is not already backing up, either blocking or async. |
