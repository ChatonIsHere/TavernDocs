---
title: "AreaAttackSkill"
description: "class AreaAttackSkill in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AreaAttackSkill

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`PickupBasedSkill`](/game-api/types/global-p/pickupbasedskill)
- **Derived types** [`AreaAttackSkill.Create`](/game-api/types/global-a-b/areaattackskill-create), [`DynamiteStrike`](/game-api/types/global-c-d/dynamitestrike)
- **Nested types** [`Create`](/game-api/types/global-a-b/areaattackskill-create), [`HitInformation`](/game-api/types/global-a-b/areaattackskill-hitinformation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AreaAttackSkill()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-collectionlayers" /><code>{"private LayerMask collectionLayers"}</code> |  |
| <Link id="m-collectionoverlevels" /><code>{"private "}<Link to="/game-api/types/global-s/shapeimpactcollector">{"ShapeImpactCollector"}</Link>{"[] collectionOverLevels"}</code> |  |
| <Link id="m-damageoverradius" /><code>{"private AnimationCurve damageOverRadius"}</code> |  |
| <Link id="m-dealsdamagetokinematicobjects" /><code>{"private bool dealsDamageToKinematicObjects"}</code> |  |
| <Link id="m-hitdamagemultiplier" /><code>{"private float hitDamageMultiplier"}</code> |  |
| <Link id="m-hitobjecteffect" /><code>{"private "}<Link to="/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" hitObjectEffect"}</code> |  |
| <Link id="m-hitobjectpositions" /><code>{"private List<"}<Link to="/game-api/types/global-a-b/areaattackskill-hitinformation">{"AreaAttackSkill.HitInformation"}</Link>{"> hitObjectPositions"}</code> |  |
| <Link id="m-minimumeffectiveness" /><code>{"protected float minimumEffectiveness"}</code> |  |
| <Link id="m-targetchannels" /><code>{"private "}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] targetChannels"}</code> |  |
| <Link id="m-toolrequiredchannels" /><code>{"protected "}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] toolRequiredChannels"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-executewithhit" /><code>{"override void ExecuteWithHit("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool, bool hasHit = true)"}</code> |  |
| <Link id="m-validateexecutionhit" /><code>{"override bool ValidateExecutionHit("}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> |  |
| <Link id="m-validatepickup" /><code>{"override bool ValidatePickup("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler)"}</code> |  |
| <Link id="m-dealdamage" /><code>{"protected bool DealDamage("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" castingPlayer)"}</code> |  |
| <Link id="m-serializeinternal" /><code>{"protected override void SerializeInternal("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
