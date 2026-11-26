---
title: "NonDamagingCollider"
description: "Collider modifier asset that makes hits on its colliders non-damaging, while they still register as hits."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NonDamagingCollider

A **class** in `Root.Township`, `Alta.Impact`.

Collider modifier asset that makes hits on its colliders non-damaging, while they still register as hits.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`ColliderModifierSettings`](/mod/game-api/types/alta-items/collidermodifiersettings)
- **Attributes** `CreateAssetMenu`
- **Documented in** [Impacts and hit detection](/mod/game-api/items/impacts)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NonDamagingCollider()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isdamaging" /><code>{"override bool IsDamaging("}<Link to="/mod/game-api/types/alta-items/impactdetectorcollidermodifier">{"ImpactDetectorColliderModifier"}</Link>{" modifier, "}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool, "}<Link to="/mod/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{" point)"}</code> | <span className="api-desc">Always false.</span> |
| <Link id="m-modifyhit" /><code>{"override void ModifyHit("}<Link to="/mod/game-api/types/alta-items/impactdetectorcollidermodifier">{"ImpactDetectorColliderModifier"}</Link>{" modifier, "}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/mod/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{" point)"}</code> | <span className="api-desc">Does nothing.</span> |
