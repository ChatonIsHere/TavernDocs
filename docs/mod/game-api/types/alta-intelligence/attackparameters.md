---
title: "AttackParameters"
description: "An attack a target is making: how much damage it would do and where it is."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AttackParameters

A **struct** in `Root.Township`, `Alta.Intelligence`.

An attack a target is making: how much damage it would do and where it is. AI reads these from `Target.Attacks` to react to incoming hits.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AttackParameters(float damage, Vector3 position)"}</code> | <span className="api-desc">Creates an `AttackParameters` from `damage` and `position`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-damage" /><code>{"float damage"}</code> | <span className="api-desc">Damage the attack would deal at its current speed.</span> |
| <Link id="m-empty" /><code>{"static "}<Link to="/mod/game-api/types/alta-intelligence/attackparameters">{"AttackParameters"}</Link>{" Empty"}</code> | <span className="api-desc">A zero attack, returned when a tool isn't swinging hard enough or fails.</span> |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | <span className="api-desc">World position of the attacking point (such as a weapon tip).</span> |

## Used in

Members of other types that take, return or hold a `AttackParameters`:

<div className="api-used-in">

[`FixedImpactor.GetCurrentAttack`](/mod/game-api/types/alta-items/fixedimpactor#m-getcurrentattack), [`ImpactGenerator.GetCurrentAttack`](/mod/game-api/types/alta-items/impactgenerator#m-getcurrentattack), [`Impactor.GetCurrentAttack`](/mod/game-api/types/alta-items/impactor#m-getcurrentattack), [`ITarget.Attacks`](/mod/game-api/types/alta-intelligence/itarget#m-attacks), [`PlayerCharacterTarget.Attacks`](/mod/game-api/types/alta-intelligence/playercharactertarget#m-attacks), [`Target.Attacks`](/mod/game-api/types/alta-intelligence/target#m-attacks), [`Wyrm.Attacks`](/mod/game-api/types/alta-intelligence/wyrm#m-attacks).

</div>
