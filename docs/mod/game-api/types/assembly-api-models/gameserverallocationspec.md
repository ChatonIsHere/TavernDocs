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

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Nested types** [`RequiredSpec`](/mod/game-api/types/assembly-api-models/gameserverallocationspec-requiredspec)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GameServerAllocationSpec()"}</code> | <span className="api-desc">Creates a `GameServerAllocationSpec` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-metadata" /><code><Link to="/mod/game-api/types/assembly-api-models/metadata">{"Metadata"}</Link>{" "}<Link to="/mod/game-api/types/assembly-api-models/metadata">{"Metadata"}</Link>{" { get; set; }"}</code> | <span className="api-desc">Metadata to apply to the allocated server.</span> |
| <Link id="m-required" /><code><Link to="/mod/game-api/types/assembly-api-models/gameserverallocationspec-requiredspec">{"GameServerAllocationSpec.RequiredSpec"}</Link>{" Required { get; set; }"}</code> | <span className="api-desc">Old single label selector. Marked obsolete in favour of `Selectors`.</span> |
| <Link id="m-scheduling" /><code>{"string Scheduling { get; set; }"}</code> | <span className="api-desc">Agones scheduling strategy name.</span> |
| <Link id="m-selectors" /><code><Link to="/mod/game-api/types/assembly-api-models/gameserverallocationspec-requiredspec">{"GameServerAllocationSpec.RequiredSpec"}</Link>{"[] Selectors { get; set; }"}</code> | <span className="api-desc">Label selectors a server must match to be allocated.</span> |

## Used in

Members of other types that take, return or hold a `GameServerAllocationSpec`:

<div className="api-used-in">

[`GameServerAllocation.Spec`](/mod/game-api/types/assembly-api-models/gameserverallocation#m-spec).

</div>
