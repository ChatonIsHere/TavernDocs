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

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Nested in** [`GameServerAllocationSpec`](/game-api/types/assembly-api-models/gameserverallocationspec)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RequiredSpec()"}</code> | Creates a `GameServerAllocationSpec.RequiredSpec` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-matchlabels" /><code>{"Dictionary<string, string> MatchLabels { get; set; }"}</code> | Labels a game server must have to be picked. |

## Used in

Members of other types that take, return or hold a `RequiredSpec`:

[`GameServerAllocationSpec.Required`](/game-api/types/assembly-api-models/gameserverallocationspec#m-required), [`GameServerAllocationSpec.Selectors`](/game-api/types/assembly-api-models/gameserverallocationspec#m-selectors).
