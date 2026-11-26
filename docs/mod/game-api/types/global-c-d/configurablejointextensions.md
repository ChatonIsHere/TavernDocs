---
title: "ConfigurableJointExtensions"
description: "Extension methods that set a ConfigurableJoint's target rotation from a wanted rotation, taking the joint's axes into account."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConfigurableJointExtensions

A **static class** in `Root.Township`, the global namespace.

Extension methods that set a `ConfigurableJoint`'s target rotation from a wanted rotation, taking the joint's axes into account.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Attributes** `Extension`

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getworldtojoint" /><code>{"static Quaternion GetWorldToJoint(ConfigurableJoint joint)"}</code> | <span className="api-desc">Rotation from the joint's axis and secondary axis into joint space.</span> |
| <Link id="m-settargetrotation" /><code>{"static void SetTargetRotation(ConfigurableJoint joint, Quaternion targetWorldRotation, Quaternion startWorldRotation)"}</code> | <span className="api-desc">Sets the target rotation from world rotations. Logs an error if the joint isn't in world space.</span> |
| <Link id="m-settargetrotationlocal" /><code>{"static void SetTargetRotationLocal(ConfigurableJoint joint, Quaternion targetLocalRotation, Quaternion startLocalRotation)"}</code> | <span className="api-desc">Sets the target rotation from local rotations. Logs an error if the joint is in world space.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-settargetrotationinternal" /><code>{"private static void SetTargetRotationInternal(ConfigurableJoint joint, Quaternion targetRotation, Quaternion startRotation, Space space)"}</code> | <span className="api-desc">Shared maths for the two setters.</span> |

</details>
