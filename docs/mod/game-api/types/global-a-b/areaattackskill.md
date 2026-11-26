---
title: "AreaAttackSkill"
description: "Progression skill where a tool hit also damages everything around the hit point, in a shape that grows with skill level."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AreaAttackSkill

A **class** in `Root.Township`, the global namespace.

Progression skill where a tool hit also damages everything around the hit point, in a shape that grows with skill level. Damage falls off with distance.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`PickupBasedSkill`](/mod/game-api/types/global-p/pickupbasedskill)
- **Derived types** [`AreaAttackSkill.Create`](/mod/game-api/types/global-a-b/areaattackskill-create), [`DynamiteStrike`](/mod/game-api/types/global-c-d/dynamitestrike)
- **Nested types** [`Create`](/mod/game-api/types/global-a-b/areaattackskill-create), [`HitInformation`](/mod/game-api/types/global-a-b/areaattackskill-hitinformation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AreaAttackSkill()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-minimumeffectiveness" /><code>{"protected float minimumEffectiveness"}</code> | <span className="api-desc">Not read anywhere in this build.</span> |
| <Link id="m-toolrequiredchannels" /><code>{"protected "}<Link to="/mod/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] toolRequiredChannels"}</code> | <span className="api-desc">Tool channels that allow the skill.</span> |

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-collectionlayers" /><code>{"private LayerMask collectionLayers"}</code> | <span className="api-desc">Physics layers searched for colliders around the hit.</span> |
| <Link id="m-collectionoverlevels" /><code>{"private "}<Link to="/mod/game-api/types/global-s/shapeimpactcollector">{"ShapeImpactCollector"}</Link>{"[] collectionOverLevels"}</code> | <span className="api-desc">Collection shape per skill level; the player's level picks the entry (capped at the last one).</span> |
| <Link id="m-damageoverradius" /><code>{"private AnimationCurve damageOverRadius"}</code> | <span className="api-desc">Maps squared distance over squared shape size (0 to 1) to the hit effectiveness used for each target.</span> |
| <Link id="m-dealsdamagetokinematicobjects" /><code>{"private bool dealsDamageToKinematicObjects"}</code> | <span className="api-desc">If false, colliders on kinematic rigidbodies are skipped.</span> |
| <Link id="m-hitdamagemultiplier" /><code>{"private float hitDamageMultiplier"}</code> | <span className="api-desc">Serialized multiplier that nothing in this class reads.</span> |
| <Link id="m-hitobjecteffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" hitObjectEffect"}</code> | <span className="api-desc">Effect invoked on clients at each hit position when the skill's consumed state is read from the network.</span> |
| <Link id="m-hitobjectpositions" /><code>{"private List<"}<Link to="/mod/game-api/types/global-a-b/areaattackskill-hitinformation">{"AreaAttackSkill.HitInformation"}</Link>{"> hitObjectPositions"}</code> | <span className="api-desc">Positions and chunks of the objects hit by the last `DealDamage`, sent to clients in `SerializeInternal` (up to 31).</span> |
| <Link id="m-targetchannels" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] targetChannels"}</code> | <span className="api-desc">Impact channels a target must have to be damaged, also checked on the main hit.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-executewithhit" /><code>{"override void ExecuteWithHit("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler, "}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool, bool hasHit = true)"}</code> | <span className="api-desc">Deals the area damage, then runs the normal skill execution.</span> |
| <Link id="m-validateexecutionhit" /><code>{"override bool ValidateExecutionHit("}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, "}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> | <span className="api-desc">True if the struck detector is on one of the target channels.</span> |
| <Link id="m-validatepickup" /><code>{"override bool ValidatePickup("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler)"}</code> | <span className="api-desc">True if the held tool has one of the required channels.</span> |
| <Link id="m-dealdamage" /><code>{"protected bool DealDamage("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" castingPlayer)"}</code> | <span className="api-desc">Hits everything in the level's shape with distance falloff, skipping the caster and things too hard for the tool. False if nothing was hit.</span> |
| <Link id="m-serializeinternal" /><code>{"protected override void SerializeInternal("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">When consumed, sends the hit positions so clients can play hit effects there.</span> |
