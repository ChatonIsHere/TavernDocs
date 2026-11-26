---
title: "DamageMultiplierCollider"
description: "Collider modifier asset that scales health and cripple damage for hits on the colliders it's assigned to, such as a weak or armoured spot."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DamageMultiplierCollider

A **class** in `Root.Township`, `Alta.Impact`.

Collider modifier asset that scales health and cripple damage for hits on the colliders it's assigned to, such as a weak or armoured spot. Can scale differently per impact type.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`ColliderModifierSettings`](/game-api/types/alta-items/collidermodifiersettings)
- **Attributes** `CreateAssetMenu`
- **Documented in** [Impacts and hit detection](/game-api/items/impacts)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DamageMultiplierCollider()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-affectscrippledamage" /><code>{"private bool affectsCrippleDamage"}</code> | Whether cripple damage is scaled. |
| <Link id="m-affectshealthdamage" /><code>{"private bool affectsHealthDamage"}</code> | Whether health damage is scaled. |
| <Link id="m-attacktypemultipliers" /><code>{"private "}<Link to="/game-api/types/global-a-b/attacktypemultiplier">{"AttackTypeMultiplier"}</Link>{"[] attackTypeMultipliers"}</code> | Extra multipliers per impact type, applied on top of the health and cripple multipliers. |
| <Link id="m-cripplemultiplier" /><code>{"private float crippleMultiplier"}</code> | Factor for cripple damage. Default 0.5. |
| <Link id="m-healthmultiplier" /><code>{"private float healthMultiplier"}</code> | Factor for health damage. Default 0.5. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isdamaging" /><code>{"override bool IsDamaging("}<Link to="/game-api/types/alta-items/impactdetectorcollidermodifier">{"ImpactDetectorColliderModifier"}</Link>{" modifier, "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool, "}<Link to="/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{" point)"}</code> | Always true, so hits on these colliders still count as damaging. |
| <Link id="m-modifyhit" /><code>{"override void ModifyHit("}<Link to="/game-api/types/alta-items/impactdetectorcollidermodifier">{"ImpactDetectorColliderModifier"}</Link>{" modifier, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{" point)"}</code> | Multiplies the hit's health and cripple multipliers by the set multipliers times the impact type multiplier. |
| <Link id="m-getmultiplier" /><code>{"protected float GetMultiplier("}<Link to="/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" impactType)"}</code> | Returns the extra multiplier for the hit's impact type from `attackTypeMultipliers`, or 1 if the type isn't listed. |
