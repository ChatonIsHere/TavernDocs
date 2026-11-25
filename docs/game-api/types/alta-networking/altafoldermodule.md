---
title: "AltaFolderModule"
description: "class AltaFolderModule in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AltaFolderModule

A **class** in `Root.Township`, `Alta.WebServer`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** `WebModuleBase`, `IDisposable`
- **Documented in** [Remote console](/game-api/console-and-utilities/remote-console)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AltaFolderModule("}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" folder, string path)"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-filemodule" /><code>{"private FileModule fileModule"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-folder" /><code><Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" Folder { get; }"}</code> |
| <Link id="m-isfinalhandler" /><code>{"override bool IsFinalHandler { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> |
| <Link id="m-finalize" /><code>{"protected override void Finalize()"}</code> |
| <Link id="m-onrequestasync" /><code>{"protected override async Task OnRequestAsync(IHttpContext context)"}</code> |
| <Link id="m-onstart" /><code>{"protected override void OnStart(CancellationToken cancellationToken)"}</code> |
