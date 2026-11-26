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

- **Listed in** [TavernLib.Debugging](/mod/tavernlib-api/types/debugging)
- **Documented in** [LogArchiver](/mod/tavernlib-api/types/debugging/logarchiver), [Internals](/mod/tavernlib-api/internals)

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maxarchivefiles" /><code>{"private const int MaxArchiveFiles"}</code> | <span className="api-desc">Most archived logs kept, 20; the oldest are deleted first.</span> |
| <Link id="m-sizethresholdbytes" /><code>{"private const long SizeThresholdBytes"}</code> | <span className="api-desc">Log size at which `ShouldAutoArchive` is true, 10,000,000 bytes.</span> |
| <Link id="m-targetname" /><code>{"private const string TargetName"}</code> | <span className="api-desc">The NLog target name assumed for the Unity log, "unity-log".</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-archivelognow" /><code>{"static string ArchiveLogNow()"}</code> | <span className="api-desc">Moves the log now, briefly clearing NLog's configuration to free the file. Returns the archive's path, or `null` if nothing was moved.</span> |
| <Link id="m-shouldautoarchive" /><code>{"static bool ShouldAutoArchive()"}</code> | <span className="api-desc">True when `unity-log.csv` is 10 MB or more.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-findunitylogtarget" /><code>{"private static FileTarget FindUnityLogTarget()"}</code> | <span className="api-desc">Finds the NLog file target for the Unity log by name, or by a file name ending in `unity-log.csv`.</span> |
| <Link id="m-renderfilepath" /><code>{"private static string RenderFilePath(FileTarget target)"}</code> | <span className="api-desc">Returns the file path a target writes to, or null if it can't be worked out.</span> |
| <Link id="m-tryparsesequencenumber" /><code>{"private static int? TryParseSequenceNumber(string path, string stem, string ext)"}</code> | <span className="api-desc">Reads the sequence number from an archived log's file name, or null if it doesn't match.</span> |

</details>
