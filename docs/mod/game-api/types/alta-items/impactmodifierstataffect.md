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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`ImpactModifierComponent`](/mod/game-api/types/alta-items/impactmodifiercomponent)
- **Nested types** [`HitValue`](/mod/game-api/types/alta-items/impactmodifierstataffect-hitvalue)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ImpactModifierStatAffect()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addvalueoverhitvalue" /><code>{"private AnimationCurve addValueOverHitValue"}</code> | <span className="api-desc">Amount added to the stat, by hit value.</span> |
| <Link id="m-isaffectingwielder" /><code>{"private bool isAffectingWielder"}</code> | <span className="api-desc">When on, changes the wielding player's stat instead of the target's.</span> |
| <Link id="m-isbasedon" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactmodifierstataffect-hitvalue">{"ImpactModifierStatAffect.HitValue"}</Link>{" isBasedOn"}</code> | <span className="api-desc">Which hit value drives the curves: damage, cripple damage or effectiveness.</span> |
| <Link id="m-multiplyvalueoverhitvalue" /><code>{"private AnimationCurve multiplyValueOverHitValue"}</code> | <span className="api-desc">Factor the stat's base is multiplied by, by hit value.</span> |
| <Link id="m-targetstat" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" targetStat"}</code> | <span className="api-desc">The stat changed.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modifyhit" /><code>{"override void ModifyHit("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> | <span className="api-desc">Picks the hit value and applies it to the wielder's or the hit target's stats.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-affectstatmanager" /><code>{"private void AffectStatManager("}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager, float value)"}</code> | <span className="api-desc">Sets the stat's base to base times the multiply curve plus the add curve times `ImpactModifierValueMultiplier`.</span> |

</details>
