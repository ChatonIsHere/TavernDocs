---
title: "AltaFolderModule"
description: "Web module that serves files from an IAltaFolder."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AltaFolderModule

A **class** in `Root.Township`, `Alta.WebServer`.

Web module that serves files from an `IAltaFolder`. Remote backed files are copied locally before they're sent.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** `WebModuleBase`, `IDisposable`
- **Documented in** [Remote console](/game-api/console-and-utilities/remote-console)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AltaFolderModule("}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" folder, string path)"}</code> | Creates an `AltaFolderModule` from `folder` and `path`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-filemodule" /><code>{"private FileModule fileModule"}</code> | The EmbedIO file module that sends the file. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-folder" /><code><Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" Folder { get; }"}</code> | The folder files are served from. |
| <Link id="m-isfinalhandler" /><code>{"override bool IsFinalHandler { get; }"}</code> | True: no later module handles the request. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | Disposes the inner file module. |
| <Link id="m-finalize" /><code>{"protected override void Finalize()"}</code> | Finalizer that disposes the module. |
| <Link id="m-onrequestasync" /><code>{"protected override async Task OnRequestAsync(IHttpContext context)"}</code> | Walks the path through the folder's subfolders and returns 404 if anything is missing, otherwise serves the file. |
| <Link id="m-onstart" /><code>{"protected override void OnStart(CancellationToken cancellationToken)"}</code> | Starts the inner file module. |
