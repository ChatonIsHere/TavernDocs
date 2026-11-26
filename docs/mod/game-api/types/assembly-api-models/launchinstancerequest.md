---
title: "LaunchInstanceRequest"
description: "Request body for launching a game server instance."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LaunchInstanceRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Request body for launching a game server instance.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LaunchInstanceRequest()"}</code> | <span className="api-desc">Creates a `LaunchInstanceRequest` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-extraarguments" /><code>{"string[] ExtraArguments { get; set; }"}</code> | <span className="api-desc">Extra command-line arguments for the server.</span> |
| <Link id="m-iswiping" /><code>{"bool IsWiping { get; set; }"}</code> | <span className="api-desc">Probably whether to wipe the server's save on launch.</span> |
| <Link id="m-serveridentifier" /><code>{"int ServerIdentifier { get; set; }"}</code> | <span className="api-desc">Id of the server to launch.</span> |
| <Link id="m-startshell" /><code>{"bool StartShell { get; set; }"}</code> | <span className="api-desc">Probably whether to start the server with a shell attached.</span> |
| <Link id="m-version" /><code>{"string Version { get; set; }"}</code> | <span className="api-desc">Game version to run; `latest` by default.</span> |
