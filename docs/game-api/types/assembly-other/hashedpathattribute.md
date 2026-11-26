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

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** `Attribute`
- **Documented in** [Alta assemblies](/game-api/console-and-utilities/alta-assemblies)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"HashedPathAttribute(params string[] paths)"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-paths" /><code>{"string[] Paths { get; private set; }"}</code> | The asset folder paths to load items of this type from, such as `Cooking/Effects`. |
