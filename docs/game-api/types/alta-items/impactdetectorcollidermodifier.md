---
title: "ImpactDetectorColliderModifier"
description: "Component on a collider that changes how hits on it are treated, through a list of ColliderModifierSettings."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactDetectorColliderModifier

A **class** in `Root.Township`, `Alta.Impact`.

Component on a collider that changes how hits on it are treated, through a list of `ColliderModifierSettings`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ImpactDetectorColliderModifier()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/alta-items/collidermodifiersettings">{"ColliderModifierSettings"}</Link>{"[] settings"}</code> | Modifier settings checked in order. A hit only damages if all agree, and each can change the hit. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isdamaging" /><code>{"bool IsDamaging("}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool, "}<Link to="/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{" point)"}</code> | True only if every setting agrees the hit at this point should do damage. |
| <Link id="m-modifyhit" /><code>{"void ModifyHit("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{" point)"}</code> | Lets each setting change the hit at this contact point. |

## Used in

Members of other types that take, return or hold a `ImpactDetectorColliderModifier`:

[`ColliderMap.ColliderMap`](/game-api/types/alta-items/collidermap#m-ctor), [`ColliderMap.modifier`](/game-api/types/alta-items/collidermap#m-modifier), [`ColliderMap.Modifier`](/game-api/types/alta-items/collidermap#m-modifier-2), [`ColliderModifierSettings.IsDamaging`](/game-api/types/alta-items/collidermodifiersettings#m-isdamaging), [`ColliderModifierSettings.ModifyHit`](/game-api/types/alta-items/collidermodifiersettings#m-modifyhit), [`DamageMultiplierCollider.IsDamaging`](/game-api/types/alta-items/damagemultipliercollider#m-isdamaging), [`DamageMultiplierCollider.ModifyHit`](/game-api/types/alta-items/damagemultipliercollider#m-modifyhit), [`DirectionalMultiplierCollider.IsDamaging`](/game-api/types/alta-items/directionalmultipliercollider#m-isdamaging), [`DirectionalMultiplierCollider.ModifyHit`](/game-api/types/alta-items/directionalmultipliercollider#m-modifyhit), [`ImpactDetector.colliderModifiers`](/game-api/types/alta-items/impactdetector#m-collidermodifiers), [`ImpactDetector.ColliderModifiers`](/game-api/types/alta-items/impactdetector#m-collidermodifiers-2), [`NonDamagingCollider.IsDamaging`](/game-api/types/alta-items/nondamagingcollider#m-isdamaging), [`NonDamagingCollider.ModifyHit`](/game-api/types/alta-items/nondamagingcollider#m-modifyhit).
