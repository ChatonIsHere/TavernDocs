---
title: "TriggerCapsule"
description: "A TriggerShape that adds its own capsule trigger collider when initialised from code."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TriggerCapsule

A **class** in `Root.Township`, no namespace.

A `TriggerShape` that adds its own capsule trigger collider when initialised from code.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`TriggerShape`](/game-api/types/global-t-x/triggershape)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TriggerCapsule()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-capsulecollider" /><code>{"private CapsuleCollider capsuleCollider"}</code> | The capsule collider added by `Initialize`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-height" /><code>{"float Height { get; set; }"}</code> | The capsule's height, or 0 before `Initialize`. |
| <Link id="m-radius" /><code>{"float Radius { get; set; }"}</code> | The capsule's radius, or 0 before `Initialize`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize(float radius, float height)"}</code> | Adds a trigger capsule collider with the given radius and height and renames the object. |
