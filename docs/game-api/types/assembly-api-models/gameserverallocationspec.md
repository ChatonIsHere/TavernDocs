---
title: "GameServerAllocationSpec"
description: "Spec of an Agones game server allocation request: which servers may be picked and metadata to set on the chosen one."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameServerAllocationSpec

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Agones`.

Spec of an Agones game server allocation request: which servers may be picked and metadata to set on the chosen one.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Nested types** [`RequiredSpec`](/game-api/types/assembly-api-models/gameserverallocationspec-requiredspec)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GameServerAllocationSpec()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-metadata" /><code><Link to="/game-api/types/assembly-api-models/metadata">{"Metadata"}</Link>{" "}<Link to="/game-api/types/assembly-api-models/metadata">{"Metadata"}</Link>{" { get; set; }"}</code> | Metadata to apply to the allocated server. |
| <Link id="m-required" /><code><Link to="/game-api/types/assembly-api-models/gameserverallocationspec-requiredspec">{"GameServerAllocationSpec.RequiredSpec"}</Link>{" Required { get; set; }"}</code> | Old single label selector. Marked obsolete in favour of `Selectors`. |
| <Link id="m-scheduling" /><code>{"string Scheduling { get; set; }"}</code> | Agones scheduling strategy name. |
| <Link id="m-selectors" /><code><Link to="/game-api/types/assembly-api-models/gameserverallocationspec-requiredspec">{"GameServerAllocationSpec.RequiredSpec"}</Link>{"[] Selectors { get; set; }"}</code> | Label selectors a server must match to be allocated. |

## Used in

Members of other types that take, return or hold a `GameServerAllocationSpec`:

[`GameServerAllocation.Spec`](/game-api/types/assembly-api-models/gameserverallocation#m-spec).
