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

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpecPortConfig()"}</code> | <span className="api-desc">Creates a `SpecPortConfig` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-containerport" /><code>{"int ContainerPort { get; set; }"}</code> | <span className="api-desc">Port inside the container.</span> |
| <Link id="m-hostport" /><code>{"int HostPort { get; set; }"}</code> | <span className="api-desc">Port on the host node.</span> |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | <span className="api-desc">Port name.</span> |
| <Link id="m-portpolicy" /><code>{"string PortPolicy { get; set; }"}</code> | <span className="api-desc">Agones port policy name.</span> |

## Used in

Members of other types that take, return or hold a `SpecPortConfig`:

<div className="api-used-in">

[`GameServerSpec.Ports`](/mod/game-api/types/assembly-api-models/gameserverspec#m-ports).

</div>
