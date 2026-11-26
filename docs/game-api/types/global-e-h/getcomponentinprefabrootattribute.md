---
title: "GetComponentInPrefabRootAttribute"
description: "Like GetComponentAttribute, but takes the component from the root NetworkPrefab object above the field's object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GetComponentInPrefabRootAttribute

A **class** in `Root.Township`, no namespace.

Like `GetComponentAttribute`, but takes the component from the root `NetworkPrefab` object above the field's object.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`GetComponentAttribute`](/game-api/types/assembly-other/getcomponentattribute)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GetComponentInPrefabRootAttribute()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcomponent" /><code>{"override Component GetComponent(Transform transform, Type type)"}</code> | Finds the nearest `NetworkPrefab` in the parents and gets the component from it, or null. |
