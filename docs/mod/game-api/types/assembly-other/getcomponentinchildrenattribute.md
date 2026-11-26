---
title: "GetComponentInChildrenAttribute"
description: "Like GetComponentAttribute, but searches this object and its children."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GetComponentInChildrenAttribute

A **class** in `Alta.Attributes`, the global namespace.

Like `GetComponentAttribute`, but searches this object and its children.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`GetComponentAttribute`](/mod/game-api/types/assembly-other/getcomponentattribute)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GetComponentInChildrenAttribute()"}</code> | Creates a `GetComponentInChildrenAttribute` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-includeinactive" /><code>{"bool IncludeInActive { get; set; }"}</code> | Also searches inactive children. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcomponent" /><code>{"override Component GetComponent(Transform transform, Type type)"}</code> | First matching component in this object or its children. |
