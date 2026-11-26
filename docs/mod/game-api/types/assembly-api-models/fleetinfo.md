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

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FleetInfo()"}</code> | <span className="api-desc">Creates a `FleetInfo` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-additionalbuffer" /><code>{"int? AdditionalBuffer { get; set; }"}</code> | <span className="api-desc">Probably extra spare servers kept ready on top of the normal amount, if set.</span> |
| <Link id="m-bufferlastupdatetime" /><code>{"DateTime? BufferLastUpdateTime { get; set; }"}</code> | <span className="api-desc">When `AdditionalBuffer` was last changed.</span> |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | <span className="api-desc">Fleet name.</span> |
| <Link id="m-status" /><code><Link to="/mod/game-api/types/assembly-api-models/gameserverstatus">{"GameServerStatus"}</Link>{" Status { get; set; }"}</code> | <span className="api-desc">The fleet's status.</span> |
