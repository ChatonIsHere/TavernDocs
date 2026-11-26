---
title: "AutoFindAttribute"
description: "Inspector attribute for a field that should be filled automatically, optionally by searching children."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AutoFindAttribute

A **class** in `Root.Township`, no namespace.

Inspector attribute for a field that should be filled automatically, optionally by searching children. Probably handled by an editor tool, since nothing at runtime reads it.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** `PropertyAttribute`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AutoFindAttribute(bool isSearchingChildren = false)"}</code> | Creates an `AutoFindAttribute` from `isSearchingChildren`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-issearchingchildren" /><code>{"bool IsSearchingChildren { get; }"}</code> | Whether the search includes child objects. |
