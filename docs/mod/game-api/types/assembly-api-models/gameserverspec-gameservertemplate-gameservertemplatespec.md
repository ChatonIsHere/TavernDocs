---
title: "GameServerSpec.GameServerTemplate.GameServerTemplateSpec"
description: "Pod spec inside an Agones game server template."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameServerSpec.GameServerTemplate.GameServerTemplateSpec

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Agones`.

Pod spec inside an Agones game server template.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Nested in** [`GameServerSpec.GameServerTemplate`](/mod/game-api/types/assembly-api-models/gameserverspec-gameservertemplate)
- **Nested types** [`ContainerConfig`](/mod/game-api/types/assembly-api-models/gameserverspec-gameservertemplate-gameservertemplatespec-containerconfig)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GameServerTemplateSpec()"}</code> | Creates a `GameServerSpec.GameServerTemplate.GameServerTemplateSpec` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-containers" /><code><Link to="/mod/game-api/types/assembly-api-models/gameserverspec-gameservertemplate-gameservertemplatespec-containerconfig">{"GameServerSpec.GameServerTemplate.GameServerTemplateSpec.ContainerConfig"}</Link>{"[] Containers { get; set; }"}</code> | Containers in the pod. Starts with one empty entry. |

## Used in

Members of other types that take, return or hold a `GameServerTemplateSpec`:

[`GameServerSpec.GameServerTemplate.Spec`](/mod/game-api/types/assembly-api-models/gameserverspec-gameservertemplate#m-spec).
