---
title: "LogArchiver"
description: "A static class in TavernLib, TavernLib.Debugging."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogArchiver

A **static class** in `TavernLib`, `TavernLib.Debugging`.

A **static class** in `TavernLib`, `TavernLib.Debugging`.

- **Listed in** [TavernLib.Debugging](/tavernlib-api/types/debugging)
- **Documented in** [LogArchiver](/tavernlib-api/types/debugging/logarchiver), [Internals](/tavernlib-api/internals)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-maxarchivefiles" /><code>{"private const int MaxArchiveFiles"}</code> |  |
| <Link id="m-sizethresholdbytes" /><code>{"private const long SizeThresholdBytes"}</code> |  |
| <Link id="m-targetname" /><code>{"private const string TargetName"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-archivelognow" /><code>{"static string ArchiveLogNow()"}</code> |  |
| <Link id="m-shouldautoarchive" /><code>{"static bool ShouldAutoArchive()"}</code> |  |
| <Link id="m-findunitylogtarget" /><code>{"private static FileTarget FindUnityLogTarget()"}</code> |  |
| <Link id="m-renderfilepath" /><code>{"private static string RenderFilePath(FileTarget target)"}</code> |  |
| <Link id="m-tryparsesequencenumber" /><code>{"private static int? TryParseSequenceNumber(string path, string stem, string ext)"}</code> |  |
