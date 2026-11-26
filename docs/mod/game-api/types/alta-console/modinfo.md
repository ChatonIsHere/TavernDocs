---
title: "ModInfo"
description: "A row returned by the mod list console command: a loaded script bundle's name and whether it is active."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModInfo

A **class** in `Root.Township`, `Alta.Console.Commands`.

A row returned by the mod list console command: a loaded script bundle's name and whether it is active.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ModInfo(string name, bool isActive)"}</code> | <span className="api-desc">Creates a `ModInfo` with default values.</span> |
| <Link id="m-ctor-2" /><code>{"ModInfo()"}</code> | <span className="api-desc">Creates a `ModInfo` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"bool IsActive { get; set; }"}</code> | <span className="api-desc">Whether the script bundle is currently active.</span> |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | <span className="api-desc">The script bundle's name.</span> |

## Used in

Members of other types that take, return or hold a `ModInfo`:

<div className="api-used-in">

[`ModCommands.ListMods`](/mod/game-api/types/alta-console/modcommands#m-listmods).

</div>
