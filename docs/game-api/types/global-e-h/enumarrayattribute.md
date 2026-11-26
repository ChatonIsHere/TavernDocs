---
title: "EnumArrayAttribute"
description: "Property attribute for an array indexed by an enum, so the inspector can label each entry with an enum name."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EnumArrayAttribute

A **class** in `Root.Township`, no namespace.

Property attribute for an array indexed by an enum, so the inspector can label each entry with an enum name.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `PropertyAttribute`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EnumArrayAttribute(Type enumType, int startIndex = 0, bool isFlagEnum = false)"}</code> | Creates an `EnumArrayAttribute` from `enumType`, `startIndex` and `isFlagEnum`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-enumtype" /><code>{"Type EnumType { get; }"}</code> | The enum whose names label the entries. |
| <Link id="m-isflagenum" /><code>{"bool IsFlagEnum { get; }"}</code> | Whether the enum is a flags enum. |
| <Link id="m-startindex" /><code>{"int StartIndex { get; }"}</code> | Enum value that the first entry stands for, probably. |
