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

| Member |
| --- |
| <Link id="m-maxarchivefiles" /><code>{"private const int MaxArchiveFiles"}</code> |
| <Link id="m-sizethresholdbytes" /><code>{"private const long SizeThresholdBytes"}</code> |
| <Link id="m-targetname" /><code>{"private const string TargetName"}</code> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-archivelognow" /><code>{"static string ArchiveLogNow()"}</code> | Moves the log now, briefly clearing NLog's configuration to free the file. Returns the archive's path, or `null` if nothing was moved. |
| <Link id="m-shouldautoarchive" /><code>{"static bool ShouldAutoArchive()"}</code> | True when `unity-log.csv` is 10 MB or more. |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-findunitylogtarget" /><code>{"private static FileTarget FindUnityLogTarget()"}</code> |
| <Link id="m-renderfilepath" /><code>{"private static string RenderFilePath(FileTarget target)"}</code> |
| <Link id="m-tryparsesequencenumber" /><code>{"private static int? TryParseSequenceNumber(string path, string stem, string ext)"}</code> |

</details>
