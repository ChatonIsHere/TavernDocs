---
title: "DirectionalMultiplierCollider"
description: "Collider modifier asset that scales damage by the angle a hit comes from, relative to a set direction."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DirectionalMultiplierCollider

A **class** in `Root.Township`, `Alta.Impact`.

Collider modifier asset that scales damage by the angle a hit comes from, relative to a set direction. A hit whose curve value is 0 or less doesn't count as damaging.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`ColliderModifierSettings`](/mod/game-api/types/alta-items/collidermodifiersettings)
- **Attributes** `CreateAssetMenu`
- **Documented in** [Impacts and hit detection](/mod/game-api/items/impacts)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DirectionalMultiplierCollider()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-angletomultiplier" /><code>{"private AnimationCurve angleToMultiplier"}</code> | <span className="api-desc">Curve from hit angle in degrees to damage multiplier.</span> |
| <Link id="m-direction" /><code>{"private Vector3 direction"}</code> | <span className="api-desc">Local direction, rotated by the modifier's transform, that angles are measured from.</span> |
| <Link id="m-lastvalue" /><code>{"private float lastValue"}</code> | <span className="api-desc">Multiplier from the last `IsDamaging` call, used by the next `ModifyHit`. Shared by every collider using this asset.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isdamaging" /><code>{"override bool IsDamaging("}<Link to="/mod/game-api/types/alta-items/impactdetectorcollidermodifier">{"ImpactDetectorColliderModifier"}</Link>{" modifier, "}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool, "}<Link to="/mod/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{" point)"}</code> | <span className="api-desc">Works out the angle between the hit and the rotated `direction`, stores the curve value, and returns true if it's above 0.</span> |
| <Link id="m-modifyhit" /><code>{"override void ModifyHit("}<Link to="/mod/game-api/types/alta-items/impactdetectorcollidermodifier">{"ImpactDetectorColliderModifier"}</Link>{" modifier, "}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/mod/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{" point)"}</code> | <span className="api-desc">Multiplies the hit's health and cripple multipliers by the value stored in `IsDamaging`, then resets it to 1.</span> |
