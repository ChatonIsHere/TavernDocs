---
title: "SpecPortConfig"
description: "A port in an Agones game server spec."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpecPortConfig

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Agones`.

A port in an Agones game server spec.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpecPortConfig()"}</code> | Creates a `SpecPortConfig` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-containerport" /><code>{"int ContainerPort { get; set; }"}</code> | Port inside the container. |
| <Link id="m-hostport" /><code>{"int HostPort { get; set; }"}</code> | Port on the host node. |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | Port name. |
| <Link id="m-portpolicy" /><code>{"string PortPolicy { get; set; }"}</code> | Agones port policy name. |

## Used in

Members of other types that take, return or hold a `SpecPortConfig`:

[`GameServerSpec.Ports`](/game-api/types/assembly-api-models/gameserverspec#m-ports).
