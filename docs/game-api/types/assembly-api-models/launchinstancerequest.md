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

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LaunchInstanceRequest()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-extraarguments" /><code>{"string[] ExtraArguments { get; set; }"}</code> | Extra command-line arguments for the server. |
| <Link id="m-iswiping" /><code>{"bool IsWiping { get; set; }"}</code> | Probably whether to wipe the server's save on launch. |
| <Link id="m-serveridentifier" /><code>{"int ServerIdentifier { get; set; }"}</code> | Id of the server to launch. |
| <Link id="m-startshell" /><code>{"bool StartShell { get; set; }"}</code> | Probably whether to start the server with a shell attached. |
| <Link id="m-version" /><code>{"string Version { get; set; }"}</code> | Game version to run; `latest` by default. |
