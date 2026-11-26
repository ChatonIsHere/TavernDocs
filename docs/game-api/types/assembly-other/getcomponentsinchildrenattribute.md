---
title: "GetComponentsInChildrenAttribute"
description: "Like GetComponentsAttribute, but collects components from this object and its children."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GetComponentsInChildrenAttribute

A **class** in `Alta.Attributes`, no namespace.

Like `GetComponentsAttribute`, but collects components from this object and its children.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`GetComponentsAttribute`](/game-api/types/assembly-other/getcomponentsattribute)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GetComponentsInChildrenAttribute()"}</code> | Creates a `GetComponentsInChildrenAttribute` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcomponents" /><code>{"override Component[] GetComponents(Transform transform, Type type)"}</code> | All matching components in this object and its children, honouring `IncludeInActive`. |
