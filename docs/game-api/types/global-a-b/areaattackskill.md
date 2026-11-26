---
title: "AreaAttackSkill"
description: "Progression skill where a tool hit also damages everything around the hit point, in a shape that grows with skill level."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AreaAttackSkill

A **class** in `Root.Township`, no namespace.

Progression skill where a tool hit also damages everything around the hit point, in a shape that grows with skill level. Damage falls off with distance.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`PickupBasedSkill`](/game-api/types/global-p/pickupbasedskill)
- **Derived types** [`AreaAttackSkill.Create`](/game-api/types/global-a-b/areaattackskill-create), [`DynamiteStrike`](/game-api/types/global-c-d/dynamitestrike)
- **Nested types** [`Create`](/game-api/types/global-a-b/areaattackskill-create), [`HitInformation`](/game-api/types/global-a-b/areaattackskill-hitinformation)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AreaAttackSkill()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-minimumeffectiveness" /><code>{"protected float minimumEffectiveness"}</code> | Not read anywhere in this build. |
| <Link id="m-toolrequiredchannels" /><code>{"protected "}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] toolRequiredChannels"}</code> | Tool channels that allow the skill. |

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-collectionlayers" /><code>{"private LayerMask collectionLayers"}</code> | Physics layers searched for colliders around the hit. |
| <Link id="m-collectionoverlevels" /><code>{"private "}<Link to="/game-api/types/global-s/shapeimpactcollector">{"ShapeImpactCollector"}</Link>{"[] collectionOverLevels"}</code> | Collection shape per skill level; the player's level picks the entry (capped at the last one). |
| <Link id="m-damageoverradius" /><code>{"private AnimationCurve damageOverRadius"}</code> | Maps squared distance over squared shape size (0 to 1) to the hit effectiveness used for each target. |
| <Link id="m-dealsdamagetokinematicobjects" /><code>{"private bool dealsDamageToKinematicObjects"}</code> | If false, colliders on kinematic rigidbodies are skipped. |
| <Link id="m-hitdamagemultiplier" /><code>{"private float hitDamageMultiplier"}</code> | Serialized multiplier that nothing in this class reads. |
| <Link id="m-hitobjecteffect" /><code>{"private "}<Link to="/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" hitObjectEffect"}</code> | Effect invoked on clients at each hit position when the skill's consumed state is read from the network. |
| <Link id="m-hitobjectpositions" /><code>{"private List<"}<Link to="/game-api/types/global-a-b/areaattackskill-hitinformation">{"AreaAttackSkill.HitInformation"}</Link>{"> hitObjectPositions"}</code> | Positions and chunks of the objects hit by the last `DealDamage`, sent to clients in `SerializeInternal` (up to 31). |
| <Link id="m-targetchannels" /><code>{"private "}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] targetChannels"}</code> | Impact channels a target must have to be damaged, also checked on the main hit. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-executewithhit" /><code>{"override void ExecuteWithHit("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool, bool hasHit = true)"}</code> | Deals the area damage, then runs the normal skill execution. |
| <Link id="m-validateexecutionhit" /><code>{"override bool ValidateExecutionHit("}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> | True if the struck detector is on one of the target channels. |
| <Link id="m-validatepickup" /><code>{"override bool ValidatePickup("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler)"}</code> | True if the held tool has one of the required channels. |
| <Link id="m-dealdamage" /><code>{"protected bool DealDamage("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" castingPlayer)"}</code> | Hits everything in the level's shape with distance falloff, skipping the caster and things too hard for the tool. False if nothing was hit. |
| <Link id="m-serializeinternal" /><code>{"protected override void SerializeInternal("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | When consumed, sends the hit positions so clients can play hit effects there. |
