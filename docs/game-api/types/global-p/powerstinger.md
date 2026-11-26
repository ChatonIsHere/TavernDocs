---
title: "PowerStinger"
description: "class PowerStinger in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PowerStinger

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`TargetBasedSkill`](/game-api/types/global-t-x/targetbasedskill)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PowerStinger()"}</code> |

## Fields

<details>
<summary>13 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-damagemultiplier" /><code>{"private float damageMultiplier"}</code> |
| <Link id="m-executeeffect" /><code>{"private "}<Link to="/game-api/types/global-p/positionrotationevent">{"PositionRotationEvent"}</Link>{" executeEffect"}</code> |
| <Link id="m-layermask" /><code>{"private LayerMask layerMask"}</code> |
| <Link id="m-maxanglefromforward" /><code>{"private float maxAngleFromForward"}</code> |
| <Link id="m-maxobjectshit" /><code>{"private int maxObjectsHit"}</code> |
| <Link id="m-smoothlocomotionspeed" /><code>{"private float smoothLocomotionSpeed"}</code> |
| <Link id="m-spherecastradius" /><code>{"private float sphereCastRadius"}</code> |
| <Link id="m-stingerdistance" /><code>{"private float stingerDistance"}</code> |
| <Link id="m-targetchannel" /><code>{"private "}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{" targetChannel"}</code> |
| <Link id="m-targetchannels" /><code>{"private "}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] targetChannels"}</code> |
| <Link id="m-targetdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" targetDefinition"}</code> |
| <Link id="m-targetdistance" /><code>{"private float targetDistance"}</code> |
| <Link id="m-targetheightfromeyelevel" /><code>{"private float targetHeightFromeyeLevel"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-executeonclient" /><code>{"override void ExecuteOnClient(uint toolIdentifier, Vector3 position, Vector3 direction, Vector3 up, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit)"}</code> |
| <Link id="m-executewithhit" /><code>{"override void ExecuteWithHit("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool, bool hasHit = true)"}</code> |
| <Link id="m-validatepickup" /><code>{"override bool ValidatePickup("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler)"}</code> |
| <Link id="m-validatetargethit" /><code>{"override bool ValidateTargetHit("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit)"}</code> |
| <Link id="m-placetarget" /><code>{"protected override "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" PlaceTarget()"}</code> |
| <Link id="m-serializeinternal" /><code>{"protected override void SerializeInternal("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-lerpmove" /><code>{"private IEnumerator LerpMove("}<Link to="/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" smoothLocomotionPlayerController) (iterator)"}</code> |
| <Link id="m-positiontarget" /><code>{"private void PositionTarget(Transform head, out Vector3 position, out Quaternion rotation)"}</code> |

</details>
