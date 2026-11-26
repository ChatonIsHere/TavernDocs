---
title: "GetComponentIfEmptyAttribute"
description: "Like GetComponentAttribute, but only fills the field when it is empty."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GetComponentIfEmptyAttribute

A **class** in `Alta.Attributes`, no namespace.

Like `GetComponentAttribute`, but only fills the field when it is empty.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`GetComponentAttribute`](/game-api/types/assembly-other/getcomponentattribute)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GetComponentIfEmptyAttribute()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handleapply" /><code>{"override bool HandleApply(Component component, FieldInfo field, GameObject prefab)"}</code> | Skips the field if it already has a value, else looks it up as the base does. |
