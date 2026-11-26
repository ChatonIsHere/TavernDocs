---
title: "GetComponentsInChildrenInterfaceAttribute"
description: "Like GetComponentsInterfaceAttribute, but collects from this object and its children."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GetComponentsInChildrenInterfaceAttribute

A **class** in `Alta.Attributes`, the global namespace.

Like `GetComponentsInterfaceAttribute`, but collects from this object and its children.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`GetComponentsInterfaceAttribute`](/mod/game-api/types/assembly-other/getcomponentsinterfaceattribute)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GetComponentsInChildrenInterfaceAttribute(Type type)"}</code> | <span className="api-desc">Creates a `GetComponentsInChildrenInterfaceAttribute` from `type`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcomponents" /><code>{"override Component[] GetComponents(Transform transform, Type type)"}</code> | <span className="api-desc">All components in this object and its children that implement the type. Ignores `IncludeInActive`.</span> |
