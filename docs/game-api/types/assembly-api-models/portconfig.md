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

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PortConfig()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | Port name. |
| <Link id="m-port" /><code>{"int Port { get; set; }"}</code> | Port number. |

## Used in

Members of other types that take, return or hold a `PortConfig`:

[`Status.Ports`](/game-api/types/assembly-api-models/status#m-ports).
