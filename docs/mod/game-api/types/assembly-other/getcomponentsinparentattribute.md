---
title: "GetComponentsInParentAttribute"
description: "Like GetComponentsAttribute, but collects components from this object and its parents."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GetComponentsInParentAttribute

A **class** in `Alta.Attributes`, the global namespace.

Like `GetComponentsAttribute`, but collects components from this object and its parents.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`GetComponentsAttribute`](/mod/game-api/types/assembly-other/getcomponentsattribute)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GetComponentsInParentAttribute()"}</code> | <span className="api-desc">Creates a `GetComponentsInParentAttribute` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcomponents" /><code>{"override Component[] GetComponents(Transform transform, Type type)"}</code> | <span className="api-desc">All matching components in this object and its parents, honouring `IncludeInActive`.</span> |
