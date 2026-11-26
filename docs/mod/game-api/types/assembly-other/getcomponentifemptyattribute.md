---
title: "GetComponentIfEmptyAttribute"
description: "Like GetComponentAttribute, but only fills the field when it is empty."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GetComponentIfEmptyAttribute

A **class** in `Alta.Attributes`, the global namespace.

Like `GetComponentAttribute`, but only fills the field when it is empty.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`GetComponentAttribute`](/mod/game-api/types/assembly-other/getcomponentattribute)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GetComponentIfEmptyAttribute()"}</code> | <span className="api-desc">Creates a `GetComponentIfEmptyAttribute` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handleapply" /><code>{"override bool HandleApply(Component component, FieldInfo field, GameObject prefab)"}</code> | <span className="api-desc">Skips the field if it already has a value, else looks it up as the base does.</span> |
