---
title: "GameServerSpec.GameServerTemplate.GameServerTemplateSpec.ContainerConfig"
description: "One container in an Agones game server pod."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameServerSpec.GameServerTemplate.GameServerTemplateSpec.ContainerConfig

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Agones`.

One container in an Agones game server pod.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Nested in** [`GameServerSpec.GameServerTemplate.GameServerTemplateSpec`](/mod/game-api/types/assembly-api-models/gameserverspec-gameservertemplate-gameservertemplatespec)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ContainerConfig()"}</code> | <span className="api-desc">Creates a `GameServerSpec.GameServerTemplate.GameServerTemplateSpec.ContainerConfig` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-image" /><code>{"string Image { get; set; }"}</code> | <span className="api-desc">Docker image the container runs.</span> |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | <span className="api-desc">Container name.</span> |

## Used in

Members of other types that take, return or hold a `ContainerConfig`:

<div className="api-used-in">

[`GameServerSpec.GameServerTemplate.GameServerTemplateSpec.Containers`](/mod/game-api/types/assembly-api-models/gameserverspec-gameservertemplate-gameservertemplatespec#m-containers).

</div>
