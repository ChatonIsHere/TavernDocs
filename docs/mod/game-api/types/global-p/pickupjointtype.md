---
title: "PickUpJointType"
description: "How a held pickup is attached to the hand: fixed, spring, velocity-driven or custom joints, or no joint."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickUpJointType

An **enum** in `Root.Township`, the global namespace.

How a held pickup is attached to the hand: fixed, spring, velocity-driven or custom joints, or no joint. `Pickup` defaults to `VelocityJoint`.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)

## Values

| Member |
| --- |
| <Link id="m-customfixedjoint" /><code>{"CustomFixedJoint = 3"}</code> |
| <Link id="m-emptyjoint" /><code>{"EmptyJoint = 4"}</code> |
| <Link id="m-fixedjoint" /><code>{"FixedJoint = 0"}</code> |
| <Link id="m-regularupdatefixedjoint" /><code>{"RegularUpdateFixedJoint = 5"}</code> |
| <Link id="m-springjoint" /><code>{"SpringJoint = 1"}</code> |
| <Link id="m-velocityjoint" /><code>{"VelocityJoint = 2"}</code> |

## Used in

Members of other types that take, return or hold a `PickUpJointType`:

<div className="api-used-in">

[`Pickup.jointType`](/mod/game-api/types/global-p/pickup#m-jointtype), [`Pickup.JointType`](/mod/game-api/types/global-p/pickup#m-jointtype-2), [`PickupJoints.jointType`](/mod/game-api/types/global-p/pickupjoints#m-jointtype), [`PickupJoints.PickupJoints`](/mod/game-api/types/global-p/pickupjoints#m-ctor), [`PickupTypeSetting.type`](/mod/game-api/types/global-p/pickuptypesetting#m-type), [`PickupTypeSetting.Type`](/mod/game-api/types/global-p/pickuptypesetting#m-type-2), [`PickupTypeSettings.GetPickupSettings`](/mod/game-api/types/global-p/pickuptypesettings#m-getpickupsettings), [`PickupTypeSettings.pickupSettings`](/mod/game-api/types/global-p/pickuptypesettings#m-pickupsettings).

</div>
