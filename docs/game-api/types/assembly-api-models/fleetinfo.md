---
title: "FleetInfo"
description: "Info about a fleet of game servers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FleetInfo

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

Info about a fleet of game servers.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FleetInfo()"}</code> | Creates a `FleetInfo` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-additionalbuffer" /><code>{"int? AdditionalBuffer { get; set; }"}</code> | Probably extra spare servers kept ready on top of the normal amount, if set. |
| <Link id="m-bufferlastupdatetime" /><code>{"DateTime? BufferLastUpdateTime { get; set; }"}</code> | When `AdditionalBuffer` was last changed. |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | Fleet name. |
| <Link id="m-status" /><code><Link to="/game-api/types/assembly-api-models/gameserverstatus">{"GameServerStatus"}</Link>{" Status { get; set; }"}</code> | The fleet's status. |
