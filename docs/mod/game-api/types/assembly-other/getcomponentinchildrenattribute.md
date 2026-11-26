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
| <Link id="m-ctor" /><code>{"GetComponentInChildrenAttribute()"}</code> | <span className="api-desc">Creates a `GetComponentInChildrenAttribute` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-includeinactive" /><code>{"bool IncludeInActive { get; set; }"}</code> | <span className="api-desc">Also searches inactive children.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcomponent" /><code>{"override Component GetComponent(Transform transform, Type type)"}</code> | <span className="api-desc">First matching component in this object or its children.</span> |
