---
title: "PowerStinger"
description: "Charged skill asset: hitting the target with a forward thrust dashes the player forward and damages up to a few things in a sphere cast along the way."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PowerStinger

A **class** in `Root.Township`, no namespace.

Charged skill asset: hitting the target with a forward thrust dashes the player forward and damages up to a few things in a sphere cast along the way.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`TargetBasedSkill`](/game-api/types/global-t-x/targetbasedskill)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PowerStinger()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-damagemultiplier" /><code>{"private float damageMultiplier"}</code> | Share of the hit's damage dealt to each target (default 0.5). |
| <Link id="m-executeeffect" /><code>{"private "}<Link to="/game-api/types/global-p/positionrotationevent">{"PositionRotationEvent"}</Link>{" executeEffect"}</code> | Event run on clients with the hit position and rotation. |
| <Link id="m-layermask" /><code>{"private LayerMask layerMask"}</code> | Layers the sphere cast hits. |
| <Link id="m-maxanglefromforward" /><code>{"private float maxAngleFromForward"}</code> | Minimum dot product between the hit and head forward (set in the inspector as an angle). |
| <Link id="m-maxobjectshit" /><code>{"private int maxObjectsHit"}</code> | Most targets damaged by one thrust (default 5). |
| <Link id="m-smoothlocomotionspeed" /><code>{"private float smoothLocomotionSpeed"}</code> | Dash speed (default 10). |
| <Link id="m-spherecastradius" /><code>{"private float sphereCastRadius"}</code> | Radius of the damage sphere cast. |
| <Link id="m-stingerdistance" /><code>{"private float stingerDistance"}</code> | Dash and sphere cast distance (default 2). |
| <Link id="m-targetchannel" /><code>{"private "}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{" targetChannel"}</code> | Impact channel the tool needs. |
| <Link id="m-targetchannels" /><code>{"private "}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] targetChannels"}</code> | Impact channels a hit object must have to be damaged. |
| <Link id="m-targetdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" targetDefinition"}</code> | Pooled target shown to the player. |
| <Link id="m-targetdistance" /><code>{"private float targetDistance"}</code> | How far in front of the head the target appears. |
| <Link id="m-targetheightfromeyelevel" /><code>{"private float targetHeightFromeyeLevel"}</code> | Target height relative to the eyes (default -0.2). |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-executeonclient" /><code>{"override void ExecuteOnClient(uint toolIdentifier, Vector3 position, Vector3 direction, Vector3 up, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit)"}</code> | Client: after reporting the hit, moves the smooth locomotion player forward over `stingerDistance`. |
| <Link id="m-executewithhit" /><code>{"override void ExecuteWithHit("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool, bool hasHit = true)"}</code> | Sphere casts along the thrust and applies a hit to up to `maxObjectsHit` matching targets, skipping the player. |
| <Link id="m-validatepickup" /><code>{"override bool ValidatePickup("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler)"}</code> | True if the held item is a tool with `targetChannel`. |
| <Link id="m-validatetargethit" /><code>{"override bool ValidateTargetHit("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit)"}</code> | True if the base check passes and the hit points mostly forward from the head. |
| <Link id="m-placetarget" /><code>{"protected override "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" PlaceTarget()"}</code> | Client: places the target in front of the head on the horizontal plane. |
| <Link id="m-serializeinternal" /><code>{"protected override void SerializeInternal("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | When consumed, also sends the hit position and direction; clients play `executeEffect` there. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lerpmove" /><code>{"private IEnumerator LerpMove("}<Link to="/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" smoothLocomotionPlayerController) (iterator)"}</code> | Coroutine that moves the player along the hit direction at `smoothLocomotionSpeed`, without gravity. |
| <Link id="m-positiontarget" /><code>{"private void PositionTarget(Transform head, out Vector3 position, out Quaternion rotation)"}</code> | Works out the target position and rotation from the head's flattened forward direction. |

</details>
