---
title: "Curve"
description: "A hashed asset wrapping an AnimationCurve, stored under StatDefinition/Curves."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Curve

A **class** in `Root.Township`, the global namespace.

A hashed asset wrapping an `AnimationCurve`, stored under `StatDefinition/Curves`.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`HashedGeneralValue<Curve>`](/mod/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`Curve`](/mod/game-api/types/global-c-d/curve), [`Curve.Create`](/mod/game-api/types/global-c-d/curve-create)
- **Nested types** [`Create`](/mod/game-api/types/global-c-d/curve-create)
- **Attributes** `HashedPath`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Curve()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-curve" /><code>{"private AnimationCurve curve"}</code> | <span className="api-desc">The animation curve that `Evaluate` reads.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluate" /><code>{"float Evaluate(float time)"}</code> | <span className="api-desc">Returns the curve's value at a time.</span> |

## Used in

Members of other types that take, return or hold a `Curve`:

<div className="api-used-in">

[`IndirectModifier.IndirectModifier`](/mod/game-api/types/alta-stats-effects/indirectmodifier#m-ctor), [`IndirectModifier.valueOverDuration`](/mod/game-api/types/alta-stats-effects/indirectmodifier#m-valueoverduration), [`IndirectModifierSaveData.valueOverDuration`](/mod/game-api/types/alta-stats-effects/indirectmodifiersavedata#m-valueoverduration), [`IndirectStatModifierDefinition.curveOverDuration`](/mod/game-api/types/alta-stats-effects/indirectstatmodifierdefinition#m-curveoverduration).

</div>
