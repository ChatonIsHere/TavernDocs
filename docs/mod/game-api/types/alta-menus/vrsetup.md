---
title: "VRSetup"
description: "Static VR helpers: sets every XR input subsystem to floor tracking and copies tracked pose data onto transforms."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VRSetup

A **static class** in `Root.Township`, `Alta.XR`.

Static VR helpers: sets every XR input subsystem to floor tracking and copies tracked pose data onto transforms. Client side.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-needstosetup" /><code>{"private static bool needsToSetup"}</code> | <span className="api-desc">True until `Setup` has run once.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"static void Setup()"}</code> | <span className="api-desc">Runs once: sets floor tracking now and again each time XR subsystems reload.</span> |
| <Link id="m-updatetransform" /><code>{"static void UpdateTransform(Transform transform, TrackedPoseDriver.TrackedPose pose)"}</code> | <span className="api-desc">Sets a transform's local position and rotation from a tracked pose, if the pose has data.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-updatesubsystems" /><code>{"private static void UpdateSubsystems()"}</code> | <span className="api-desc">Sets the tracking origin to floor on every XR input subsystem.</span> |

</details>
