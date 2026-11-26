---
title: "OutputFolderModule"
description: "Server web module that lets a user download their own files from the FileDownload folder."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OutputFolderModule

A **class** in `Root.Township`, `Alta.WebServer`.

Server web module that lets a user download their own files from the `FileDownload` folder. Paths start with the user id, and the console token must belong to that user.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** `WebModuleBase`, `IDisposable`
- **Documented in** [Remote console](/mod/game-api/console-and-utilities/remote-console)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OutputFolderModule(string baseRoute)"}</code> | <span className="api-desc">Creates an `OutputFolderModule` from `baseRoute`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-filemodule" /><code>{"private FileModule fileModule"}</code> | <span className="api-desc">The EmbedIO file module over the download folder.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Class logger.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isfinalhandler" /><code>{"override bool IsFinalHandler { get; }"}</code> | <span className="api-desc">True: no later module handles the request.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | <span className="api-desc">Disposes the inner file module.</span> |
| <Link id="m-finalize" /><code>{"protected override void Finalize()"}</code> | <span className="api-desc">Finalizer that disposes the module.</span> |
| <Link id="m-onrequestasync" /><code>{"protected override async Task OnRequestAsync(IHttpContext context)"}</code> | <span className="api-desc">Checks the path starts with a user id and the bearer token is a valid console token whose `UserId` claim matches, then serves the file.</span> |
| <Link id="m-onstart" /><code>{"protected override void OnStart(CancellationToken cancellationToken)"}</code> | <span className="api-desc">Starts the inner file module.</span> |
