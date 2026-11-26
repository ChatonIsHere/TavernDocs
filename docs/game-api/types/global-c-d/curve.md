---
title: "Curve"
description: "A hashed asset wrapping an AnimationCurve, stored under StatDefinition/Curves."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Curve

A **class** in `Root.Township`, no namespace.

A hashed asset wrapping an `AnimationCurve`, stored under `StatDefinition/Curves`.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`HashedGeneralValue<Curve>`](/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`Curve`](/game-api/types/global-c-d/curve), [`Curve.Create`](/game-api/types/global-c-d/curve-create)
- **Nested types** [`Create`](/game-api/types/global-c-d/curve-create)
- **Attributes** `HashedPath`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Curve()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-curve" /><code>{"private AnimationCurve curve"}</code> | The animation curve that `Evaluate` reads. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluate" /><code>{"float Evaluate(float time)"}</code> | Returns the curve's value at a time. |

## Used in

Members of other types that take, return or hold a `Curve`:

[`IndirectModifier.IndirectModifier`](/game-api/types/alta-stats-effects/indirectmodifier#m-ctor), [`IndirectModifier.valueOverDuration`](/game-api/types/alta-stats-effects/indirectmodifier#m-valueoverduration), [`IndirectModifierSaveData.valueOverDuration`](/game-api/types/alta-stats-effects/indirectmodifiersavedata#m-valueoverduration), [`IndirectStatModifierDefinition.curveOverDuration`](/game-api/types/alta-stats-effects/indirectstatmodifierdefinition#m-curveoverduration).
