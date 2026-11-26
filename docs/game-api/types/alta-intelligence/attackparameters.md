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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AttackParameters(float damage, Vector3 position)"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-damage" /><code>{"float damage"}</code> | Damage the attack would deal at its current speed. |
| <Link id="m-empty" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/attackparameters">{"AttackParameters"}</Link>{" Empty"}</code> | A zero attack, returned when a tool isn't swinging hard enough or fails. |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | World position of the attacking point (such as a weapon tip). |

## Used in

Members of other types that take, return or hold a `AttackParameters`:

[`FixedImpactor.GetCurrentAttack`](/game-api/types/alta-items/fixedimpactor#m-getcurrentattack), [`ImpactGenerator.GetCurrentAttack`](/game-api/types/alta-items/impactgenerator#m-getcurrentattack), [`Impactor.GetCurrentAttack`](/game-api/types/alta-items/impactor#m-getcurrentattack), [`ITarget.Attacks`](/game-api/types/alta-intelligence/itarget#m-attacks), [`PlayerCharacterTarget.Attacks`](/game-api/types/alta-intelligence/playercharactertarget#m-attacks), [`Target.Attacks`](/game-api/types/alta-intelligence/target#m-attacks), [`Wyrm.Attacks`](/game-api/types/alta-intelligence/wyrm#m-attacks).
