---
title: "ReadOnlyAttribute"
description: "Inspector attribute that shows a field as read only, with separate modes for in and out of play mode."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ReadOnlyAttribute

A **class** in `Alta.Attributes`, the global namespace.

Inspector attribute that shows a field as read only, with separate modes for in and out of play mode.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** `PropertyAttribute`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ReadOnlyAttribute("}<Link to="/mod/game-api/types/assembly-other/readonlymode">{"ReadOnlyMode"}</Link>{" mode = 1)"}</code> | <span className="api-desc">Creates a `ReadOnlyAttribute` from `outOfPlayMode` and `inPlayMode`.</span> |
| <Link id="m-ctor-2" /><code>{"ReadOnlyAttribute("}<Link to="/mod/game-api/types/assembly-other/readonlymode">{"ReadOnlyMode"}</Link>{" outOfPlayMode, "}<Link to="/mod/game-api/types/assembly-other/readonlymode">{"ReadOnlyMode"}</Link>{" inPlayMode)"}</code> | <span className="api-desc">Creates a `ReadOnlyAttribute` from `outOfPlayMode` and `inPlayMode`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-inplaymode" /><code><Link to="/mod/game-api/types/assembly-other/readonlymode">{"ReadOnlyMode"}</Link>{" InPlayMode { get; private set; }"}</code> | <span className="api-desc">Read-only mode used while in play mode.</span> |
| <Link id="m-outofplaymode" /><code><Link to="/mod/game-api/types/assembly-other/readonlymode">{"ReadOnlyMode"}</Link>{" OutOfPlayMode { get; private set; }"}</code> | <span className="api-desc">Read-only mode used outside play mode.</span> |
