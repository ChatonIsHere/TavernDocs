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

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Nested in** [`ClientCacheManager`](/mod/game-api/types/alta-world/clientcachemanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FileDownloader(string name, string serverFolder, "}<Link to="/mod/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" clientFolder)"}</code> | <span className="api-desc">Creates a `ClientCacheManager.FileDownloader` from `name`, `serverFolder` and `clientFolder`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-assembly" /><code>{"private Dictionary<uint, byte[]> assembly"}</code> | <span className="api-desc">Dictionary of parts by index. Not used in this build.</span> |
| <Link id="m-completionsource" /><code>{"private TaskCompletionSource<"}<Link to="/mod/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{"> completionSource"}</code> | <span className="api-desc">Source behind `Task`.</span> |
| <Link id="m-partcount" /><code>{"private uint partCount"}</code> | <span className="api-desc">Not used in this build.</span> |
| <Link id="m-totalbytes" /><code>{"private uint totalBytes"}</code> | <span className="api-desc">Not used in this build.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-clientfolder" /><code><Link to="/mod/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" ClientFolder { get; }"}</code> | <span className="api-desc">Local folder the file is saved into (the cache folder when made by `ClientCacheManager`).</span> |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | <span className="api-desc">File name, used both in the URL and as the local file name.</span> |
| <Link id="m-serverfolder" /><code>{"string ServerFolder { get; }"}</code> | <span className="api-desc">Folder path on the server's web server, `cache` when made by `ClientCacheManager`.</span> |
| <Link id="m-task" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{"> Task { get; }"}</code> | <span className="api-desc">Completes with the downloaded file, or null after the last failed attempt.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-finished" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-world/clientcachemanager-filedownloader">{"ClientCacheManager.FileDownloader"}</Link>{", "}<Link to="/mod/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{"> Finished"}</code> | <span className="api-desc">Raised when the download ends, with the file or null if it failed. The manager uses it to drop the downloader.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-start" /><code>{"async void Start()"}</code> | <span className="api-desc">Downloads over HTTP, deleting partial files and retrying with a growing delay. Completes `Task` with the file or null.</span> |

## Used in

Members of other types that take, return or hold a `FileDownloader`:

<div className="api-used-in">

[`ClientCacheManager.DownloaderFinished`](/mod/game-api/types/alta-world/clientcachemanager#m-downloaderfinished), [`ClientCacheManager.downloaders`](/mod/game-api/types/alta-world/clientcachemanager#m-downloaders).

</div>
