---
title: "ISearchableTool"
description: "An editor tool or menu item that can be found by search."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ISearchableTool

An **interface** in `Alta.SearchableTools`, no namespace.

An editor tool or menu item that can be found by search. `AltaMenuItem` implements it.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Derived types** [`AltaMenuItem`](/game-api/types/assembly-other/altamenuitem)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-description" /><code>{"string Description { get; }"}</code> | Text shown with the tool in search. |
| <Link id="m-icon" /><code>{"string Icon { get; }"}</code> | Icon path; `AltaMenuItem` always uses `Icons/Command.png`. |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | Display name; `AltaMenuItem` uses the class name with spaces added. |
| <Link id="m-priority" /><code>{"int Priority { get; }"}</code> | Ordering priority for the tool. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getpath" /><code>{"string GetPath()"}</code> | Returns the folder path the tool sits under, without its name; `AltaMenuItem` builds it from its base type's name. |
| <Link id="m-validate" /><code>{"bool Validate()"}</code> | Whether the tool is available; `AltaMenuItem` returns true unless overridden. |

## Used in

Members of other types that take, return or hold a `ISearchableTool`:

[`AltaMenuItem.GeneratePath`](/game-api/types/assembly-other/altamenuitem#m-generatepath), [`AltaMenuItem.GeneratePathSplit`](/game-api/types/assembly-other/altamenuitem#m-generatepathsplit).
