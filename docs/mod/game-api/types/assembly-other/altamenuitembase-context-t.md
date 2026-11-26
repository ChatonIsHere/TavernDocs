---
title: "AltaMenuItemBase.CONTEXT<T>"
description: "Editor menu item base for a Unity inspector context menu entry on component type T (path CONTEXT/ plus the type name)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AltaMenuItemBase.CONTEXT&lt;T&gt;

An **abstract class** in `Alta.MenuItem`, the global namespace.

Editor menu item base for a Unity inspector context menu entry on component type `T` (path `CONTEXT/` plus the type name). Nothing in this build derives from it; does nothing at runtime.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Nested in** [`AltaMenuItemBase`](/mod/game-api/types/assembly-other/altamenuitembase)
- **Inherits or implements** [`AltaMenuItem`](/mod/game-api/types/assembly-other/altamenuitem)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected CONTEXT()"}</code> | Creates an `AltaMenuItemBase.CONTEXT` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-target" /><code>{"T Target { get; private set; }"}</code> | The component the context menu was opened on. Its setter is private and nothing in this build sets it. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getpath" /><code>{"override string GetPath()"}</code> | Returns `CONTEXT/` followed by the name of `T`, the path Unity uses for component context menus. |
