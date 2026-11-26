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
| <Link id="m-ctor" /><code>{"AltaSelection()"}</code> | <span className="api-desc">Creates an `AltaSelection` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-current" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Current { get; set; }"}</code> | <span className="api-desc">The selected network entity, or null.</span> |
| <Link id="m-transform" /><code>{"Transform Transform { get; }"}</code> | <span className="api-desc">The selected entity's transform, or null when nothing is selected.</span> |

## Used in

Members of other types that take, return or hold a `AltaSelection`:

<div className="api-used-in">

[`CommandContext.Selection`](/mod/game-api/types/alta-console/commandcontext#m-selection).

</div>
