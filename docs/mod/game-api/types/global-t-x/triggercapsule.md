---
title: "TriggerCapsule"
description: "A TriggerShape that adds its own capsule trigger collider when initialised from code."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TriggerCapsule

A **class** in `Root.Township`, the global namespace.

A `TriggerShape` that adds its own capsule trigger collider when initialised from code.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`TriggerShape`](/mod/game-api/types/global-t-x/triggershape)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TriggerCapsule()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-capsulecollider" /><code>{"private CapsuleCollider capsuleCollider"}</code> | <span className="api-desc">The capsule collider added by `Initialize`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-height" /><code>{"float Height { get; set; }"}</code> | <span className="api-desc">The capsule's height, or 0 before `Initialize`.</span> |
| <Link id="m-radius" /><code>{"float Radius { get; set; }"}</code> | <span className="api-desc">The capsule's radius, or 0 before `Initialize`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize(float radius, float height)"}</code> | <span className="api-desc">Adds a trigger capsule collider with the given radius and height and renames the object.</span> |
