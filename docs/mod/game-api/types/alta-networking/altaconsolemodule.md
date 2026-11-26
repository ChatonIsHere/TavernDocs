---
title: "AltaConsoleModule"
description: "Server web module for the REST console: takes a POST with a bearer console token and a command, runs it on the main thread and writes back the result."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AltaConsoleModule

A **class** in `Root.Township`, `Alta.WebServer`.

Server web module for the REST console: takes a POST with a bearer console token and a command, runs it on the main thread and writes back the result.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** `WebModuleBase`
- **Documented in** [Remote console](/mod/game-api/console-and-utilities/remote-console)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AltaConsoleModule(string path)"}</code> | Creates an `AltaConsoleModule` from `path`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Class logger. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isfinalhandler" /><code>{"override bool IsFinalHandler { get; }"}</code> | True: no later module handles the request. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onrequestasync" /><code>{"protected override async Task OnRequestAsync(IHttpContext context)"}</code> | Rejects non POST requests and invalid tokens, then runs the command as the token's user and returns the result as JSON. |
