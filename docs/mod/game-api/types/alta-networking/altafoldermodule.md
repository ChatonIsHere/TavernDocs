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

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** `WebModuleBase`, `IDisposable`
- **Documented in** [Remote console](/mod/game-api/console-and-utilities/remote-console)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AltaFolderModule("}<Link to="/mod/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" folder, string path)"}</code> | <span className="api-desc">Creates an `AltaFolderModule` from `folder` and `path`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-filemodule" /><code>{"private FileModule fileModule"}</code> | <span className="api-desc">The EmbedIO file module that sends the file.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-folder" /><code><Link to="/mod/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" Folder { get; }"}</code> | <span className="api-desc">The folder files are served from.</span> |
| <Link id="m-isfinalhandler" /><code>{"override bool IsFinalHandler { get; }"}</code> | <span className="api-desc">True: no later module handles the request.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | <span className="api-desc">Disposes the inner file module.</span> |
| <Link id="m-finalize" /><code>{"protected override void Finalize()"}</code> | <span className="api-desc">Finalizer that disposes the module.</span> |
| <Link id="m-onrequestasync" /><code>{"protected override async Task OnRequestAsync(IHttpContext context)"}</code> | <span className="api-desc">Walks the path through the folder's subfolders and returns 404 if anything is missing, otherwise serves the file.</span> |
| <Link id="m-onstart" /><code>{"protected override void OnStart(CancellationToken cancellationToken)"}</code> | <span className="api-desc">Starts the inner file module.</span> |
