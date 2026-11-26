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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`ColliderModifierSettings`](/mod/game-api/types/alta-items/collidermodifiersettings)
- **Attributes** `CreateAssetMenu`
- **Documented in** [Impacts and hit detection](/mod/game-api/items/impacts)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DamageMultiplierCollider()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-affectscrippledamage" /><code>{"private bool affectsCrippleDamage"}</code> | <span className="api-desc">Whether cripple damage is scaled.</span> |
| <Link id="m-affectshealthdamage" /><code>{"private bool affectsHealthDamage"}</code> | <span className="api-desc">Whether health damage is scaled.</span> |
| <Link id="m-attacktypemultipliers" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/attacktypemultiplier">{"AttackTypeMultiplier"}</Link>{"[] attackTypeMultipliers"}</code> | <span className="api-desc">Extra multipliers per impact type, applied on top of the health and cripple multipliers.</span> |
| <Link id="m-cripplemultiplier" /><code>{"private float crippleMultiplier"}</code> | <span className="api-desc">Factor for cripple damage. Default 0.5.</span> |
| <Link id="m-healthmultiplier" /><code>{"private float healthMultiplier"}</code> | <span className="api-desc">Factor for health damage. Default 0.5.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isdamaging" /><code>{"override bool IsDamaging("}<Link to="/mod/game-api/types/alta-items/impactdetectorcollidermodifier">{"ImpactDetectorColliderModifier"}</Link>{" modifier, "}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool, "}<Link to="/mod/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{" point)"}</code> | <span className="api-desc">Always true, so hits on these colliders still count as damaging.</span> |
| <Link id="m-modifyhit" /><code>{"override void ModifyHit("}<Link to="/mod/game-api/types/alta-items/impactdetectorcollidermodifier">{"ImpactDetectorColliderModifier"}</Link>{" modifier, "}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/mod/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{" point)"}</code> | <span className="api-desc">Multiplies the hit's health and cripple multipliers by the set multipliers times the impact type multiplier.</span> |
| <Link id="m-getmultiplier" /><code>{"protected float GetMultiplier("}<Link to="/mod/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" impactType)"}</code> | <span className="api-desc">Returns the extra multiplier for the hit's impact type from `attackTypeMultipliers`, or 1 if the type isn't listed.</span> |
