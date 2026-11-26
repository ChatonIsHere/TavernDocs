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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`ColliderModifierSettings`](/game-api/types/alta-items/collidermodifiersettings)
- **Attributes** `CreateAssetMenu`
- **Documented in** [Impacts and hit detection](/game-api/items/impacts)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NonDamagingCollider()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isdamaging" /><code>{"override bool IsDamaging("}<Link to="/game-api/types/alta-items/impactdetectorcollidermodifier">{"ImpactDetectorColliderModifier"}</Link>{" modifier, "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool, "}<Link to="/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{" point)"}</code> | Always false. |
| <Link id="m-modifyhit" /><code>{"override void ModifyHit("}<Link to="/game-api/types/alta-items/impactdetectorcollidermodifier">{"ImpactDetectorColliderModifier"}</Link>{" modifier, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{" point)"}</code> | Does nothing. |
