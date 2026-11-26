---
title: "AttackTypeMultiplier"
description: "A damage multiplier for one impact type, used by armour and health settings."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AttackTypeMultiplier

A **class** in `Root.Township`, the global namespace.

A damage multiplier for one impact type, used by armour and health settings.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AttackTypeMultiplier()"}</code> | <span className="api-desc">Creates an `AttackTypeMultiplier` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-multiplier" /><code>{"private float multiplier"}</code> | <span className="api-desc">Backing field for `Multiplier`.</span> |
| <Link id="m-type" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" type"}</code> | <span className="api-desc">Backing field for `Type`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-multiplier-2" /><code>{"float Multiplier { get; }"}</code> | <span className="api-desc">Factor applied to damage of this type.</span> |
| <Link id="m-type-2" /><code><Link to="/mod/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" Type { get; }"}</code> | <span className="api-desc">The impact type it applies to.</span> |

## Used in

Members of other types that take, return or hold a `AttackTypeMultiplier`:

<div className="api-used-in">

[`ArmorDefinition.attackTypeMultipliers`](/mod/game-api/types/alta-items/armordefinition#m-attacktypemultipliers), [`DamageMultiplierCollider.attackTypeMultipliers`](/mod/game-api/types/alta-items/damagemultipliercollider#m-attacktypemultipliers), [`DestroyableStaticObject.multipliers`](/mod/game-api/types/alta-networking/destroyablestaticobject#m-multipliers), [`HealthObject.multipliers`](/mod/game-api/types/global-e-h/healthobject#m-multipliers), [`HealthObject.Multipliers`](/mod/game-api/types/global-e-h/healthobject#m-multipliers-2).

</div>
