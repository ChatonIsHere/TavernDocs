---
title: "ColliderModifierSettings"
description: "abstract class ColliderModifierSettings in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ColliderModifierSettings

An **abstract class** in `Root.Township`, `Alta.Impact`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`DamageMultiplierCollider`](/game-api/types/alta-items/damagemultipliercollider), [`DirectionalMultiplierCollider`](/game-api/types/alta-items/directionalmultipliercollider), [`NonDamagingCollider`](/game-api/types/alta-items/nondamagingcollider)
- **Documented in** [Impacts and hit detection](/game-api/items/impacts)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ColliderModifierSettings()"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isdamaging" /><code>{"abstract bool IsDamaging("}<Link to="/game-api/types/alta-items/impactdetectorcollidermodifier">{"ImpactDetectorColliderModifier"}</Link>{" modifier, "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool, "}<Link to="/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{" point)"}</code> |  |
| <Link id="m-modifyhit" /><code>{"abstract void ModifyHit("}<Link to="/game-api/types/alta-items/impactdetectorcollidermodifier">{"ImpactDetectorColliderModifier"}</Link>{" modifier, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{" point)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ColliderModifierSettings`:

[`ImpactDetectorColliderModifier.settings`](/game-api/types/alta-items/impactdetectorcollidermodifier#m-settings).
