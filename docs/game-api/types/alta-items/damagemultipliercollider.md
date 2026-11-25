---
title: "DamageMultiplierCollider"
description: "class DamageMultiplierCollider in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DamageMultiplierCollider

A **class** in `Root.Township`, `Alta.Impact`.

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

| Member |
| --- |
| <Link id="m-affectscrippledamage" /><code>{"private bool affectsCrippleDamage"}</code> |
| <Link id="m-affectshealthdamage" /><code>{"private bool affectsHealthDamage"}</code> |
| <Link id="m-attacktypemultipliers" /><code>{"private "}<Link to="/game-api/types/global-a-b/attacktypemultiplier">{"AttackTypeMultiplier"}</Link>{"[] attackTypeMultipliers"}</code> |
| <Link id="m-cripplemultiplier" /><code>{"private float crippleMultiplier"}</code> |
| <Link id="m-healthmultiplier" /><code>{"private float healthMultiplier"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-isdamaging" /><code>{"override bool IsDamaging("}<Link to="/game-api/types/alta-items/impactdetectorcollidermodifier">{"ImpactDetectorColliderModifier"}</Link>{" modifier, "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool, "}<Link to="/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{" point)"}</code> |
| <Link id="m-modifyhit" /><code>{"override void ModifyHit("}<Link to="/game-api/types/alta-items/impactdetectorcollidermodifier">{"ImpactDetectorColliderModifier"}</Link>{" modifier, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{" point)"}</code> |
| <Link id="m-getmultiplier" /><code>{"protected float GetMultiplier("}<Link to="/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" impactType)"}</code> |
