---
title: "NetworkEntityRenderer"
description: "abstract class NetworkEntityRenderer in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkEntityRenderer

An **abstract class** in `Root.Township`, `Alta.Logging.Targets`.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Inherits or implements** `LayoutRenderer`
- **Derived types** [`NetworkEntityChunkRenderer`](/game-api/types/alta-console/networkentitychunkrenderer), [`NetworkEntityIdentifierRenderer`](/game-api/types/alta-console/networkentityidentifierrenderer), [`NetworkEntityOwnedRenderer`](/game-api/types/alta-console/networkentityownedrenderer), [`NetworkEntityParentRenderer`](/game-api/types/alta-console/networkentityparentrenderer), [`NetworkEntityPrefabRenderer`](/game-api/types/alta-console/networkentityprefabrenderer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected NetworkEntityRenderer()"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-append" /><code>{"protected override void Append(StringBuilder builder, LogEventInfo logEvent)"}</code> |  |
| <Link id="m-processentity" /><code>{"protected abstract object ProcessEntity("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |
