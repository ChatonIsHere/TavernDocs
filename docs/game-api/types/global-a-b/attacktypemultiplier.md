---
title: "AttackTypeMultiplier"
description: "A damage multiplier for one impact type, used by armour and health settings."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AttackTypeMultiplier

A **class** in `Root.Township`, no namespace.

A damage multiplier for one impact type, used by armour and health settings.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AttackTypeMultiplier()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-multiplier" /><code>{"private float multiplier"}</code> | Backing field for `Multiplier`. |
| <Link id="m-type" /><code>{"private "}<Link to="/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" type"}</code> | Backing field for `Type`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-multiplier-2" /><code>{"float Multiplier { get; }"}</code> | Factor applied to damage of this type. |
| <Link id="m-type-2" /><code><Link to="/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" Type { get; }"}</code> | The impact type it applies to. |

## Used in

Members of other types that take, return or hold a `AttackTypeMultiplier`:

[`ArmorDefinition.attackTypeMultipliers`](/game-api/types/alta-items/armordefinition#m-attacktypemultipliers), [`DamageMultiplierCollider.attackTypeMultipliers`](/game-api/types/alta-items/damagemultipliercollider#m-attacktypemultipliers), [`DestroyableStaticObject.multipliers`](/game-api/types/alta-networking/destroyablestaticobject#m-multipliers), [`HealthObject.multipliers`](/game-api/types/global-e-h/healthobject#m-multipliers), [`HealthObject.Multipliers`](/game-api/types/global-e-h/healthobject#m-multipliers-2).
