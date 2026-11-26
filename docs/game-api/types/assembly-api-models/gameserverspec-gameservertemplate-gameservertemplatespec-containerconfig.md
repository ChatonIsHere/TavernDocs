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

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Nested in** [`GameServerSpec.GameServerTemplate.GameServerTemplateSpec`](/game-api/types/assembly-api-models/gameserverspec-gameservertemplate-gameservertemplatespec)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ContainerConfig()"}</code> | Creates a `GameServerSpec.GameServerTemplate.GameServerTemplateSpec.ContainerConfig` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-image" /><code>{"string Image { get; set; }"}</code> | Docker image the container runs. |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | Container name. |

## Used in

Members of other types that take, return or hold a `ContainerConfig`:

[`GameServerSpec.GameServerTemplate.GameServerTemplateSpec.Containers`](/game-api/types/assembly-api-models/gameserverspec-gameservertemplate-gameservertemplatespec#m-containers).
