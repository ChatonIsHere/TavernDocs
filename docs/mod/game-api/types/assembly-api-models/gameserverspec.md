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

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Nested types** [`GameServerTemplate`](/mod/game-api/types/assembly-api-models/gameserverspec-gameservertemplate)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GameServerSpec()"}</code> | <span className="api-desc">Creates a `GameServerSpec` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ports" /><code>{"List<"}<Link to="/mod/game-api/types/assembly-api-models/specportconfig">{"SpecPortConfig"}</Link>{"> Ports { get; set; }"}</code> | <span className="api-desc">Ports the game server exposes.</span> |
| <Link id="m-template" /><code><Link to="/mod/game-api/types/assembly-api-models/gameserverspec-gameservertemplate">{"GameServerSpec.GameServerTemplate"}</Link>{" Template { get; set; }"}</code> | <span className="api-desc">Pod template with the container to run. Starts with one empty container.</span> |

## Used in

Members of other types that take, return or hold a `GameServerSpec`:

<div className="api-used-in">

[`AgonesGameServer.Spec`](/mod/game-api/types/assembly-api-models/agonesgameserver#m-spec).

</div>
