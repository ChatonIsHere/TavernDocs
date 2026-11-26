---
title: "ClientCacheManager.FileDownloader"
description: "Client: downloads one file from the joined server's web server (port 1761 unless the server says otherwise) into a local folder, retrying up to three times."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClientCacheManager.FileDownloader

A **private class** in `Root.Township`, `Alta.Static`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Client: downloads one file from the joined server's web server (port 1761 unless the server says otherwise) into a local folder, retrying up to three times.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Nested in** [`ClientCacheManager`](/game-api/types/alta-world/clientcachemanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FileDownloader(string name, string serverFolder, "}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" clientFolder)"}</code> | Creates a `ClientCacheManager.FileDownloader` from `name`, `serverFolder` and `clientFolder`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-assembly" /><code>{"private Dictionary<uint, byte[]> assembly"}</code> | Dictionary of parts by index. Not used in this build. |
| <Link id="m-completionsource" /><code>{"private TaskCompletionSource<"}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{"> completionSource"}</code> | Source behind `Task`. |
| <Link id="m-partcount" /><code>{"private uint partCount"}</code> | Not used in this build. |
| <Link id="m-totalbytes" /><code>{"private uint totalBytes"}</code> | Not used in this build. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-clientfolder" /><code><Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" ClientFolder { get; }"}</code> | Local folder the file is saved into (the cache folder when made by `ClientCacheManager`). |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | File name, used both in the URL and as the local file name. |
| <Link id="m-serverfolder" /><code>{"string ServerFolder { get; }"}</code> | Folder path on the server's web server, `cache` when made by `ClientCacheManager`. |
| <Link id="m-task" /><code>{"Task<"}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{"> Task { get; }"}</code> | Completes with the downloaded file, or null after the last failed attempt. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-finished" /><code>{"event Action<"}<Link to="/game-api/types/alta-world/clientcachemanager-filedownloader">{"ClientCacheManager.FileDownloader"}</Link>{", "}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{"> Finished"}</code> | Raised when the download ends, with the file or null if it failed. The manager uses it to drop the downloader. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-start" /><code>{"async void Start()"}</code> | Downloads over HTTP, deleting partial files and retrying with a growing delay. Completes `Task` with the file or null. |

## Used in

Members of other types that take, return or hold a `FileDownloader`:

[`ClientCacheManager.DownloaderFinished`](/game-api/types/alta-world/clientcachemanager#m-downloaderfinished), [`ClientCacheManager.downloaders`](/game-api/types/alta-world/clientcachemanager#m-downloaders).
