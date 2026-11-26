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

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-needstosetup" /><code>{"private static bool needsToSetup"}</code> | True until `Setup` has run once. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"static void Setup()"}</code> | Runs once: sets floor tracking now and again each time XR subsystems reload. |
| <Link id="m-updatetransform" /><code>{"static void UpdateTransform(Transform transform, TrackedPoseDriver.TrackedPose pose)"}</code> | Sets a transform's local position and rotation from a tracked pose, if the pose has data. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-updatesubsystems" /><code>{"private static void UpdateSubsystems()"}</code> | Sets the tracking origin to floor on every XR input subsystem. |

</details>
