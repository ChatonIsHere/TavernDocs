---
title: "GetComponentsInChildrenAttribute"
description: "Like GetComponentsAttribute, but collects components from this object and its children."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GetComponentsInChildrenAttribute

A **class** in `Alta.Attributes`, the global namespace.

Like `GetComponentsAttribute`, but collects components from this object and its children.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`GetComponentsAttribute`](/mod/game-api/types/assembly-other/getcomponentsattribute)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GetComponentsInChildrenAttribute()"}</code> | <span className="api-desc">Creates a `GetComponentsInChildrenAttribute` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcomponents" /><code>{"override Component[] GetComponents(Transform transform, Type type)"}</code> | <span className="api-desc">All matching components in this object and its children, honouring `IncludeInActive`.</span> |
