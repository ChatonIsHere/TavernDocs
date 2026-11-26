---
title: "LogsUploader"
description: "Packs the log folder into one gzip file."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogsUploader

A **class** in `Root.Township`, the global namespace.

Packs the log folder into one gzip file. Despite the name it uploads nothing.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogsUploader()"}</code> | Creates a `LogsUploader` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-uploadlogs" /><code>{"async void UploadLogs()"}</code> | Packs the `Logs` folder under persistent data into a file named `Logs ` inside that folder. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-compressdirectory" /><code>{"private static void CompressDirectory(string sInDir, string sOutFile)"}</code> | Writes every file in a folder into one gzip stream, each as its relative path and its bytes. |
| <Link id="m-compressfile" /><code>{"private static void CompressFile(string sDir, string sRelativePath, GZipStream zipStream)"}</code> | Writes one file's path length, path and contents to the gzip stream. |

</details>
