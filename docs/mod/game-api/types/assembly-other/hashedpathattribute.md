---
title: "HashedPathAttribute"
description: "Put on a hashed value type (a HashedGeneralValue asset type) to set which asset folders its items are loaded from."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HashedPathAttribute

A **class** in `Alta.Values`, `Alta`.

Put on a hashed value type (a `HashedGeneralValue` asset type) to set which asset folders its items are loaded from. Without it the type's own name is used as the folder.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** `Attribute`
- **Documented in** [Alta assemblies](/mod/game-api/console-and-utilities/alta-assemblies)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HashedPathAttribute(params string[] paths)"}</code> | <span className="api-desc">Creates a `HashedPathAttribute` from `paths`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-paths" /><code>{"string[] Paths { get; private set; }"}</code> | <span className="api-desc">The asset folder paths to load items of this type from, such as `Cooking/Effects`.</span> |
