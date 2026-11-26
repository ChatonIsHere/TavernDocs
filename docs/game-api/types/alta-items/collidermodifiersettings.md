---
title: "ColliderModifierSettings"
description: "Base for settings that change hits on one collider, listed on an ImpactDetectorColliderModifier."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ColliderModifierSettings

An **abstract class** in `Root.Township`, `Alta.Impact`.

Base for settings that change hits on one collider, listed on an `ImpactDetectorColliderModifier`. Subclasses include `NonDamagingCollider`, `DamageMultiplierCollider` and `DirectionalMultiplierCollider`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`DamageMultiplierCollider`](/game-api/types/alta-items/damagemultipliercollider), [`DirectionalMultiplierCollider`](/game-api/types/alta-items/directionalmultipliercollider), [`NonDamagingCollider`](/game-api/types/alta-items/nondamagingcollider)
- **Documented in** [Impacts and hit detection](/game-api/items/impacts)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ColliderModifierSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isdamaging" /><code>{"abstract bool IsDamaging("}<Link to="/game-api/types/alta-items/impactdetectorcollidermodifier">{"ImpactDetectorColliderModifier"}</Link>{" modifier, "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool, "}<Link to="/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{" point)"}</code> | Whether a hit at this contact point should do damage. |
| <Link id="m-modifyhit" /><code>{"abstract void ModifyHit("}<Link to="/game-api/types/alta-items/impactdetectorcollidermodifier">{"ImpactDetectorColliderModifier"}</Link>{" modifier, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{" point)"}</code> | Changes a hit at this contact point, for example scaling its damage. |

## Used in

Members of other types that take, return or hold a `ColliderModifierSettings`:

[`ImpactDetectorColliderModifier.settings`](/game-api/types/alta-items/impactdetectorcollidermodifier#m-settings).
