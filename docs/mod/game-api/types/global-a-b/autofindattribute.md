---
title: "AutoFindAttribute"
description: "Inspector attribute for a field that should be filled automatically, optionally by searching children."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AutoFindAttribute

A **class** in `Root.Township`, the global namespace.

Inspector attribute for a field that should be filled automatically, optionally by searching children. Probably handled by an editor tool, since nothing at runtime reads it.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `PropertyAttribute`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AutoFindAttribute(bool isSearchingChildren = false)"}</code> | <span className="api-desc">Creates an `AutoFindAttribute` from `isSearchingChildren`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-issearchingchildren" /><code>{"bool IsSearchingChildren { get; }"}</code> | <span className="api-desc">Whether the search includes child objects.</span> |
