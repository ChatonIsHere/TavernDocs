---
title: "GameServerSpec"
description: "Spec of an Agones game server: its ports and pod template."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameServerSpec

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Agones`.

Spec of an Agones game server: its ports and pod template.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Nested types** [`GameServerTemplate`](/game-api/types/assembly-api-models/gameserverspec-gameservertemplate)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GameServerSpec()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ports" /><code>{"List<"}<Link to="/game-api/types/assembly-api-models/specportconfig">{"SpecPortConfig"}</Link>{"> Ports { get; set; }"}</code> | Ports the game server exposes. |
| <Link id="m-template" /><code><Link to="/game-api/types/assembly-api-models/gameserverspec-gameservertemplate">{"GameServerSpec.GameServerTemplate"}</Link>{" Template { get; set; }"}</code> | Pod template with the container to run. Starts with one empty container. |

## Used in

Members of other types that take, return or hold a `GameServerSpec`:

[`AgonesGameServer.Spec`](/game-api/types/assembly-api-models/agonesgameserver#m-spec).
