---
title: "ISearchableTool"
description: "An editor tool or menu item that can be found by search."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ISearchableTool

An **interface** in `Alta.SearchableTools`, the global namespace.

An editor tool or menu item that can be found by search. `AltaMenuItem` implements it.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Derived types** [`AltaMenuItem`](/mod/game-api/types/assembly-other/altamenuitem)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-description" /><code>{"string Description { get; }"}</code> | <span className="api-desc">Text shown with the tool in search.</span> |
| <Link id="m-icon" /><code>{"string Icon { get; }"}</code> | <span className="api-desc">Icon path; `AltaMenuItem` always uses `Icons/Command.png`.</span> |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | <span className="api-desc">Display name; `AltaMenuItem` uses the class name with spaces added.</span> |
| <Link id="m-priority" /><code>{"int Priority { get; }"}</code> | <span className="api-desc">Ordering priority for the tool.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getpath" /><code>{"string GetPath()"}</code> | <span className="api-desc">Returns the folder path the tool sits under, without its name; `AltaMenuItem` builds it from its base type's name.</span> |
| <Link id="m-validate" /><code>{"bool Validate()"}</code> | <span className="api-desc">Whether the tool is available; `AltaMenuItem` returns true unless overridden.</span> |

## Used in

Members of other types that take, return or hold a `ISearchableTool`:

<div className="api-used-in">

[`AltaMenuItem.GeneratePath`](/mod/game-api/types/assembly-other/altamenuitem#m-generatepath), [`AltaMenuItem.GeneratePathSplit`](/mod/game-api/types/assembly-other/altamenuitem#m-generatepathsplit).

</div>
