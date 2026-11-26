---
title: "GetComponentInParentAttribute"
description: "Like GetComponentAttribute, but searches this object and its parents."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GetComponentInParentAttribute

A **class** in `Alta.Attributes`, the global namespace.

Like `GetComponentAttribute`, but searches this object and its parents.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`GetComponentAttribute`](/mod/game-api/types/assembly-other/getcomponentattribute)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GetComponentInParentAttribute()"}</code> | Creates a `GetComponentInParentAttribute` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcomponent" /><code>{"override Component GetComponent(Transform transform, Type type)"}</code> | First matching component in this object or its parents. |
