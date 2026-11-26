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

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Nested in** [`ProgressCommandModule`](/game-api/types/alta-console/progresscommandmodule)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CaveTeleporterDetails("}<Link to="/game-api/types/alta-world-generation/caveteleporterproxy">{"CaveTeleporterProxy"}</Link>{" proxy)"}</code> | Creates a `ProgressCommandModule.CaveTeleporterDetails` from `proxy`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-fuel" /><code>{"int Fuel { get; }"}</code> | The teleporter's current fuel. |
| <Link id="m-level" /><code>{"int Level { get; }"}</code> | The cave layer the teleporter goes to. |

## Used in

Members of other types that take, return or hold a `CaveTeleporterDetails`:

[`ProgressCommandModule.ListCaveTeleporter`](/game-api/types/alta-console/progresscommandmodule#m-listcaveteleporter).
