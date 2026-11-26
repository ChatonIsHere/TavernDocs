---
title: "PortConfig"
description: "A named port in an Agones game server's status."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PortConfig

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Agones`.

A named port in an Agones game server's status.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PortConfig()"}</code> | <span className="api-desc">Creates a `PortConfig` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | <span className="api-desc">Port name.</span> |
| <Link id="m-port" /><code>{"int Port { get; set; }"}</code> | <span className="api-desc">Port number.</span> |

## Used in

Members of other types that take, return or hold a `PortConfig`:

<div className="api-used-in">

[`Status.Ports`](/mod/game-api/types/assembly-api-models/status#m-ports).

</div>
