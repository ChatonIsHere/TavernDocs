---
title: "InsetModifier"
description: "Forest spawn modifier that sinks each spawn point into the ground by a random depth taken from a curve."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InsetModifier

A **class** in `Root.Township`, no namespace.

Forest spawn modifier that sinks each spawn point into the ground by a random depth taken from a curve.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`SpawnModifierPointNormal`](/game-api/types/global-s/spawnmodifierpointnormal)
- **Derived types** [`InsetModifier.Create`](/game-api/types/global-i-l/insetmodifier-create)
- **Nested types** [`Create`](/game-api/types/global-i-l/insetmodifier-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InsetModifier()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-inset" /><code>{"private AnimationCurve inset"}</code> | Curve mapping a random 0 to 1 value to how far down to move the point. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"override void Filter("}<Link to="/game-api/types/alta-world-generation/forestfillcore-setup">{"ForestFillCore.Setup"}</Link>{" setup, ref "}<Link to="/game-api/types/alta-world-generation/pointnormal">{"PointNormal"}</Link>{" pointNormal, ref float weight)"}</code> | Lowers the point by the `inset` curve evaluated at a random value from the setup's random source. |
