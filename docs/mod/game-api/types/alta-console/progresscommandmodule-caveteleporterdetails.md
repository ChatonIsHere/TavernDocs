---
title: "ProgressCommandModule.CaveTeleporterDetails"
description: "A row in the cave teleporter list command: one available cave layer's teleporter."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProgressCommandModule.CaveTeleporterDetails

A **private class** in `Root.Township`, `Alta.Console.Commands`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A row in the cave teleporter list command: one available cave layer's teleporter.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Nested in** [`ProgressCommandModule`](/mod/game-api/types/alta-console/progresscommandmodule)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CaveTeleporterDetails("}<Link to="/mod/game-api/types/alta-world-generation/caveteleporterproxy">{"CaveTeleporterProxy"}</Link>{" proxy)"}</code> | <span className="api-desc">Creates a `ProgressCommandModule.CaveTeleporterDetails` from `proxy`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-fuel" /><code>{"int Fuel { get; }"}</code> | <span className="api-desc">The teleporter's current fuel.</span> |
| <Link id="m-level" /><code>{"int Level { get; }"}</code> | <span className="api-desc">The cave layer the teleporter goes to.</span> |

## Used in

Members of other types that take, return or hold a `CaveTeleporterDetails`:

<div className="api-used-in">

[`ProgressCommandModule.ListCaveTeleporter`](/mod/game-api/types/alta-console/progresscommandmodule#m-listcaveteleporter).

</div>
