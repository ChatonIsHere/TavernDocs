---
title: "ClientCacheManager.FileDownloader"
description: "class ClientCacheManager.FileDownloader in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClientCacheManager.FileDownloader

A **private class** in `Root.Township`, `Alta.Static`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Nested in** [`ClientCacheManager`](/game-api/types/alta-world/clientcachemanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FileDownloader(string name, string serverFolder, "}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" clientFolder)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-assembly" /><code>{"private Dictionary<uint, byte[]> assembly"}</code> |  |
| <Link id="m-completionsource" /><code>{"private TaskCompletionSource<"}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{"> completionSource"}</code> |  |
| <Link id="m-partcount" /><code>{"private uint partCount"}</code> |  |
| <Link id="m-totalbytes" /><code>{"private uint totalBytes"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-clientfolder" /><code><Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" ClientFolder { get; }"}</code> |  |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> |  |
| <Link id="m-serverfolder" /><code>{"string ServerFolder { get; }"}</code> |  |
| <Link id="m-task" /><code>{"Task<"}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{"> Task { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-finished" /><code>{"event Action<"}<Link to="/game-api/types/alta-world/clientcachemanager-filedownloader">{"ClientCacheManager.FileDownloader"}</Link>{", "}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{"> Finished"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-start" /><code>{"async void Start()"}</code> |  |

## Used in

Members of other types that take, return or hold a `FileDownloader`:

[`ClientCacheManager.DownloaderFinished`](/game-api/types/alta-world/clientcachemanager#m-downloaderfinished), [`ClientCacheManager.downloaders`](/game-api/types/alta-world/clientcachemanager#m-downloaders).
