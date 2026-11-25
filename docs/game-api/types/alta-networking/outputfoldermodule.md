---
title: "OutputFolderModule"
description: "class OutputFolderModule in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OutputFolderModule

A **class** in `Root.Township`, `Alta.WebServer`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** `WebModuleBase`, `IDisposable`
- **Documented in** [Remote console](/game-api/console-and-utilities/remote-console)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OutputFolderModule(string baseRoute)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-filemodule" /><code>{"private FileModule fileModule"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isfinalhandler" /><code>{"override bool IsFinalHandler { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> |  |
| <Link id="m-finalize" /><code>{"protected override void Finalize()"}</code> |  |
| <Link id="m-onrequestasync" /><code>{"protected override async Task OnRequestAsync(IHttpContext context)"}</code> |  |
| <Link id="m-onstart" /><code>{"protected override void OnStart(CancellationToken cancellationToken)"}</code> |  |
