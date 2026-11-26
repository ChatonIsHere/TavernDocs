---
title: "GameServerAllocationSpec.RequiredSpec"
description: "Label selector in an Agones game server allocation request."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameServerAllocationSpec.RequiredSpec

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Agones`.

Label selector in an Agones game server allocation request.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Nested in** [`GameServerAllocationSpec`](/mod/game-api/types/assembly-api-models/gameserverallocationspec)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RequiredSpec()"}</code> | <span className="api-desc">Creates a `GameServerAllocationSpec.RequiredSpec` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-matchlabels" /><code>{"Dictionary<string, string> MatchLabels { get; set; }"}</code> | <span className="api-desc">Labels a game server must have to be picked.</span> |

## Used in

Members of other types that take, return or hold a `RequiredSpec`:

<div className="api-used-in">

[`GameServerAllocationSpec.Required`](/mod/game-api/types/assembly-api-models/gameserverallocationspec#m-required), [`GameServerAllocationSpec.Selectors`](/mod/game-api/types/assembly-api-models/gameserverallocationspec#m-selectors).

</div>
