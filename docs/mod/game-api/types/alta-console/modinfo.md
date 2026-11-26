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
| <Link id="m-ctor" /><code>{"ModInfo(string name, bool isActive)"}</code> | Creates a `ModInfo` with default values. |
| <Link id="m-ctor-2" /><code>{"ModInfo()"}</code> | Creates a `ModInfo` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"bool IsActive { get; set; }"}</code> | Whether the script bundle is currently active. |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | The script bundle's name. |

## Used in

Members of other types that take, return or hold a `ModInfo`:

[`ModCommands.ListMods`](/mod/game-api/types/alta-console/modcommands#m-listmods).
