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
| <Link id="m-ctor" /><code>{"OutputFolderModule(string baseRoute)"}</code> | Creates an `OutputFolderModule` from `baseRoute`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-filemodule" /><code>{"private FileModule fileModule"}</code> | The EmbedIO file module over the download folder. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Class logger. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isfinalhandler" /><code>{"override bool IsFinalHandler { get; }"}</code> | True: no later module handles the request. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | Disposes the inner file module. |
| <Link id="m-finalize" /><code>{"protected override void Finalize()"}</code> | Finalizer that disposes the module. |
| <Link id="m-onrequestasync" /><code>{"protected override async Task OnRequestAsync(IHttpContext context)"}</code> | Checks the path starts with a user id and the bearer token is a valid console token whose `UserId` claim matches, then serves the file. |
| <Link id="m-onstart" /><code>{"protected override void OnStart(CancellationToken cancellationToken)"}</code> | Starts the inner file module. |
