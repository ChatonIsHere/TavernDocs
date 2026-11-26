---
title: "PowerStinger"
description: "Charged skill asset: hitting the target with a forward thrust dashes the player forward and damages up to a few things in a sphere cast along the way."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PowerStinger

A **class** in `Root.Township`, the global namespace.

Charged skill asset: hitting the target with a forward thrust dashes the player forward and damages up to a few things in a sphere cast along the way.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`TargetBasedSkill`](/mod/game-api/types/global-t-x/targetbasedskill)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PowerStinger()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-damagemultiplier" /><code>{"private float damageMultiplier"}</code> | <span className="api-desc">Share of the hit's damage dealt to each target (default 0.5).</span> |
| <Link id="m-executeeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionrotationevent">{"PositionRotationEvent"}</Link>{" executeEffect"}</code> | <span className="api-desc">Event run on clients with the hit position and rotation.</span> |
| <Link id="m-layermask" /><code>{"private LayerMask layerMask"}</code> | <span className="api-desc">Layers the sphere cast hits.</span> |
| <Link id="m-maxanglefromforward" /><code>{"private float maxAngleFromForward"}</code> | <span className="api-desc">Minimum dot product between the hit and head forward (set in the inspector as an angle).</span> |
| <Link id="m-maxobjectshit" /><code>{"private int maxObjectsHit"}</code> | <span className="api-desc">Most targets damaged by one thrust (default 5).</span> |
| <Link id="m-smoothlocomotionspeed" /><code>{"private float smoothLocomotionSpeed"}</code> | <span className="api-desc">Dash speed (default 10).</span> |
| <Link id="m-spherecastradius" /><code>{"private float sphereCastRadius"}</code> | <span className="api-desc">Radius of the damage sphere cast.</span> |
| <Link id="m-stingerdistance" /><code>{"private float stingerDistance"}</code> | <span className="api-desc">Dash and sphere cast distance (default 2).</span> |
| <Link id="m-targetchannel" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{" targetChannel"}</code> | <span className="api-desc">Impact channel the tool needs.</span> |
| <Link id="m-targetchannels" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] targetChannels"}</code> | <span className="api-desc">Impact channels a hit object must have to be damaged.</span> |
| <Link id="m-targetdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" targetDefinition"}</code> | <span className="api-desc">Pooled target shown to the player.</span> |
| <Link id="m-targetdistance" /><code>{"private float targetDistance"}</code> | <span className="api-desc">How far in front of the head the target appears.</span> |
| <Link id="m-targetheightfromeyelevel" /><code>{"private float targetHeightFromeyeLevel"}</code> | <span className="api-desc">Target height relative to the eyes (default -0.2).</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-executeonclient" /><code>{"override void ExecuteOnClient(uint toolIdentifier, Vector3 position, Vector3 direction, Vector3 up, "}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit)"}</code> | <span className="api-desc">Client: after reporting the hit, moves the smooth locomotion player forward over `stingerDistance`.</span> |
| <Link id="m-executewithhit" /><code>{"override void ExecuteWithHit("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler, "}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool, bool hasHit = true)"}</code> | <span className="api-desc">Sphere casts along the thrust and applies a hit to up to `maxObjectsHit` matching targets, skipping the player.</span> |
| <Link id="m-validatepickup" /><code>{"override bool ValidatePickup("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler)"}</code> | <span className="api-desc">True if the held item is a tool with `targetChannel`.</span> |
| <Link id="m-validatetargethit" /><code>{"override bool ValidateTargetHit("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit)"}</code> | <span className="api-desc">True if the base check passes and the hit points mostly forward from the head.</span> |
| <Link id="m-placetarget" /><code>{"protected override "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" PlaceTarget()"}</code> | <span className="api-desc">Client: places the target in front of the head on the horizontal plane.</span> |
| <Link id="m-serializeinternal" /><code>{"protected override void SerializeInternal("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">When consumed, also sends the hit position and direction; clients play `executeEffect` there.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lerpmove" /><code>{"private IEnumerator LerpMove("}<Link to="/mod/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" smoothLocomotionPlayerController) (iterator)"}</code> | <span className="api-desc">Coroutine that moves the player along the hit direction at `smoothLocomotionSpeed`, without gravity.</span> |
| <Link id="m-positiontarget" /><code>{"private void PositionTarget(Transform head, out Vector3 position, out Quaternion rotation)"}</code> | <span className="api-desc">Works out the target position and rotation from the head's flattened forward direction.</span> |

</details>
