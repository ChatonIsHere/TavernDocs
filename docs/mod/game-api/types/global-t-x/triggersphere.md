---
title: "TriggerSphere"
description: "A TriggerShape that adds its own sphere trigger collider when initialised from code."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TriggerSphere

A **class** in `Root.Township`, the global namespace.

A `TriggerShape` that adds its own sphere trigger collider when initialised from code.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`TriggerShape`](/mod/game-api/types/global-t-x/triggershape)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TriggerSphere()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-spherecollider" /><code>{"private SphereCollider sphereCollider"}</code> | <span className="api-desc">The sphere collider added by `Initialize`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-radius" /><code>{"float Radius { get; set; }"}</code> | <span className="api-desc">The sphere's radius, or 0 before `Initialize`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize(float radius)"}</code> | <span className="api-desc">Adds a trigger sphere collider with the given radius and renames the object.</span> |
