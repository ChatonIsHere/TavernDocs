---
title: "InsetModifier"
description: "Forest spawn modifier that sinks each spawn point into the ground by a random depth taken from a curve."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InsetModifier

A **class** in `Root.Township`, the global namespace.

Forest spawn modifier that sinks each spawn point into the ground by a random depth taken from a curve.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`SpawnModifierPointNormal`](/mod/game-api/types/global-s/spawnmodifierpointnormal)
- **Derived types** [`InsetModifier.Create`](/mod/game-api/types/global-i-l/insetmodifier-create)
- **Nested types** [`Create`](/mod/game-api/types/global-i-l/insetmodifier-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InsetModifier()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-inset" /><code>{"private AnimationCurve inset"}</code> | <span className="api-desc">Curve mapping a random 0 to 1 value to how far down to move the point.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"override void Filter("}<Link to="/mod/game-api/types/alta-world-generation/forestfillcore-setup">{"ForestFillCore.Setup"}</Link>{" setup, ref "}<Link to="/mod/game-api/types/alta-world-generation/pointnormal">{"PointNormal"}</Link>{" pointNormal, ref float weight)"}</code> | <span className="api-desc">Lowers the point by the `inset` curve evaluated at a random value from the setup's random source.</span> |
