---
title: "TriggerSphere"
description: "A TriggerShape that adds its own sphere trigger collider when initialised from code."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TriggerSphere

A **class** in `Root.Township`, no namespace.

A `TriggerShape` that adds its own sphere trigger collider when initialised from code.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`TriggerShape`](/game-api/types/global-t-x/triggershape)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TriggerSphere()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-spherecollider" /><code>{"private SphereCollider sphereCollider"}</code> | The sphere collider added by `Initialize`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-radius" /><code>{"float Radius { get; set; }"}</code> | The sphere's radius, or 0 before `Initialize`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize(float radius)"}</code> | Adds a trigger sphere collider with the given radius and renames the object. |
