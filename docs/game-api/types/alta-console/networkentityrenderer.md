---
title: "NetworkEntityRenderer"
description: "Base for NLog layout renderers that print something about a NetworkEntity passed as the log message's first parameter (its prefab, parent, owner, identifier..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkEntityRenderer

An **abstract class** in `Root.Township`, `Alta.Logging.Targets`.

Base for NLog layout renderers that print something about a `NetworkEntity` passed as the log message's first parameter (its prefab, parent, owner, identifier or chunk).

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
| <Link id="m-append" /><code>{"protected override void Append(StringBuilder builder, LogEventInfo logEvent)"}</code> | Writes `ProcessEntity` for the first log parameter if it is a network entity, otherwise `n/a`. |
| <Link id="m-processentity" /><code>{"protected abstract object ProcessEntity("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Returns the value to print for the entity. |
