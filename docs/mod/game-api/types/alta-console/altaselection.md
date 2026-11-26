---
title: "AltaSelection"
description: "The entity a console user has selected, kept on their CommandContext as Selection."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AltaSelection

A **class** in `Root.Township`, `Alta.Console.Commands`.

The entity a console user has selected, kept on their `CommandContext` as `Selection`.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AltaSelection()"}</code> | Creates an `AltaSelection` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-current" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Current { get; set; }"}</code> | The selected network entity, or null. |
| <Link id="m-transform" /><code>{"Transform Transform { get; }"}</code> | The selected entity's transform, or null when nothing is selected. |

## Used in

Members of other types that take, return or hold a `AltaSelection`:

[`CommandContext.Selection`](/mod/game-api/types/alta-console/commandcontext#m-selection).
