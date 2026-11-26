---
title: "TableOrderAttribute"
description: "Sets a property's column position when ToStringTable prints a list of objects as a text table."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TableOrderAttribute

A **class** in `Root.Township`, `TableParser`.

Sets a property's column position when `ToStringTable` prints a list of objects as a text table.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** `Attribute`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TableOrderAttribute(int order)"}</code> | Creates a `TableOrderAttribute` from `order`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-order" /><code>{"int Order { get; set; }"}</code> | Sort key for the column; lower comes first. |
