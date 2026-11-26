---
title: "LogArchiver"
description: "Moves the game's unity-log.csv into a numbered file in an Archives folder next to it, keeping 20."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogArchiver

A **static class** in `TavernLib`, `TavernLib.Debugging`.

Moves the game's `unity-log.csv` into a numbered file in an `Archives` folder next to it, keeping 20. TavernLib runs it on servers it manages (not with `/launcherauth`).

- **Listed in** [TavernLib.Debugging](/tavernlib-api/types/debugging)
- **Documented in** [LogArchiver](/tavernlib-api/types/debugging/logarchiver), [Internals](/tavernlib-api/internals)

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maxarchivefiles" /><code>{"private const int MaxArchiveFiles"}</code> | Most archived logs kept, 20; the oldest are deleted first. |
| <Link id="m-sizethresholdbytes" /><code>{"private const long SizeThresholdBytes"}</code> | Log size at which `ShouldAutoArchive` is true, 10,000,000 bytes. |
| <Link id="m-targetname" /><code>{"private const string TargetName"}</code> | The NLog target name assumed for the Unity log, "unity-log". |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-archivelognow" /><code>{"static string ArchiveLogNow()"}</code> | Moves the log now, briefly clearing NLog's configuration to free the file. Returns the archive's path, or `null` if nothing was moved. |
| <Link id="m-shouldautoarchive" /><code>{"static bool ShouldAutoArchive()"}</code> | True when `unity-log.csv` is 10 MB or more. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-findunitylogtarget" /><code>{"private static FileTarget FindUnityLogTarget()"}</code> | Finds the NLog file target for the Unity log by name, or by a file name ending in `unity-log.csv`. |
| <Link id="m-renderfilepath" /><code>{"private static string RenderFilePath(FileTarget target)"}</code> | Returns the file path a target writes to, or null if it can't be worked out. |
| <Link id="m-tryparsesequencenumber" /><code>{"private static int? TryParseSequenceNumber(string path, string stem, string ext)"}</code> | Reads the sequence number from an archived log's file name, or null if it doesn't match. |

</details>
