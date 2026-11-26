---
title: "ReadOnlyAttribute"
description: "Inspector attribute that shows a field as read only, with separate modes for in and out of play mode."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ReadOnlyAttribute

A **class** in `Alta.Attributes`, no namespace.

Inspector attribute that shows a field as read only, with separate modes for in and out of play mode.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** `PropertyAttribute`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ReadOnlyAttribute("}<Link to="/game-api/types/assembly-other/readonlymode">{"ReadOnlyMode"}</Link>{" mode = 1)"}</code> | Creates a `ReadOnlyAttribute` from `outOfPlayMode` and `inPlayMode`. |
| <Link id="m-ctor-2" /><code>{"ReadOnlyAttribute("}<Link to="/game-api/types/assembly-other/readonlymode">{"ReadOnlyMode"}</Link>{" outOfPlayMode, "}<Link to="/game-api/types/assembly-other/readonlymode">{"ReadOnlyMode"}</Link>{" inPlayMode)"}</code> | Creates a `ReadOnlyAttribute` from `outOfPlayMode` and `inPlayMode`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-inplaymode" /><code><Link to="/game-api/types/assembly-other/readonlymode">{"ReadOnlyMode"}</Link>{" InPlayMode { get; private set; }"}</code> | Read-only mode used while in play mode. |
| <Link id="m-outofplaymode" /><code><Link to="/game-api/types/assembly-other/readonlymode">{"ReadOnlyMode"}</Link>{" OutOfPlayMode { get; private set; }"}</code> | Read-only mode used outside play mode. |
