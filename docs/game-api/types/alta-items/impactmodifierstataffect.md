---
title: "ImpactModifierStatAffect"
description: "class ImpactModifierStatAffect in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactModifierStatAffect

A **class** in `Root.Township`, `Alta.Impact`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`ImpactModifierComponent`](/game-api/types/alta-items/impactmodifiercomponent)
- **Nested types** [`HitValue`](/game-api/types/alta-items/impactmodifierstataffect-hitvalue)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ImpactModifierStatAffect()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-addvalueoverhitvalue" /><code>{"private AnimationCurve addValueOverHitValue"}</code> |  |
| <Link id="m-isaffectingwielder" /><code>{"private bool isAffectingWielder"}</code> |  |
| <Link id="m-isbasedon" /><code>{"private "}<Link to="/game-api/types/alta-items/impactmodifierstataffect-hitvalue">{"ImpactModifierStatAffect.HitValue"}</Link>{" isBasedOn"}</code> |  |
| <Link id="m-multiplyvalueoverhitvalue" /><code>{"private AnimationCurve multiplyValueOverHitValue"}</code> |  |
| <Link id="m-targetstat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" targetStat"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modifyhit" /><code>{"override void ModifyHit("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> |  |
| <Link id="m-affectstatmanager" /><code>{"private void AffectStatManager("}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager, float value)"}</code> |  |
