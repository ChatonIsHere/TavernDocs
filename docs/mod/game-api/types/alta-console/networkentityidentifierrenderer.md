---
title: "NetworkEntityIdentifierRenderer"
description: "NLog layout renderer ${entity-id}: the identifier of a NetworkEntity passed as the first log parameter, or n/a."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkEntityIdentifierRenderer

A **class** in `Root.Township`, `Alta.Logging.Targets`.

NLog layout renderer `${entity-id}`: the identifier of a `NetworkEntity` passed as the first log parameter, or `n/a`.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Inherits or implements** [`NetworkEntityRenderer`](/mod/game-api/types/alta-console/networkentityrenderer)
- **Attributes** `LayoutRenderer`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkEntityIdentifierRenderer()"}</code> | Creates a `NetworkEntityIdentifierRenderer` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-processentity" /><code>{"protected override object ProcessEntity("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Returns the entity's identifier. |
