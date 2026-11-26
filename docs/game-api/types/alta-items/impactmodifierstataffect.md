---
title: "ImpactModifierStatAffect"
description: "Impact modifier asset that changes a stat's base value on the target or the wielder, based on the hit's damage, cripple damage or effectiveness."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactModifierStatAffect

A **class** in `Root.Township`, `Alta.Impact`.

Impact modifier asset that changes a stat's base value on the target or the wielder, based on the hit's damage, cripple damage or effectiveness.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`ImpactModifierComponent`](/game-api/types/alta-items/impactmodifiercomponent)
- **Nested types** [`HitValue`](/game-api/types/alta-items/impactmodifierstataffect-hitvalue)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ImpactModifierStatAffect()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addvalueoverhitvalue" /><code>{"private AnimationCurve addValueOverHitValue"}</code> | Amount added to the stat, by hit value. |
| <Link id="m-isaffectingwielder" /><code>{"private bool isAffectingWielder"}</code> | When on, changes the wielding player's stat instead of the target's. |
| <Link id="m-isbasedon" /><code>{"private "}<Link to="/game-api/types/alta-items/impactmodifierstataffect-hitvalue">{"ImpactModifierStatAffect.HitValue"}</Link>{" isBasedOn"}</code> | Which hit value drives the curves: damage, cripple damage or effectiveness. |
| <Link id="m-multiplyvalueoverhitvalue" /><code>{"private AnimationCurve multiplyValueOverHitValue"}</code> | Factor the stat's base is multiplied by, by hit value. |
| <Link id="m-targetstat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" targetStat"}</code> | The stat changed. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modifyhit" /><code>{"override void ModifyHit("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> | Picks the hit value and applies it to the wielder's or the hit target's stats. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-affectstatmanager" /><code>{"private void AffectStatManager("}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager, float value)"}</code> | Sets the stat's base to base times the multiply curve plus the add curve times `ImpactModifierValueMultiplier`. |

</details>
