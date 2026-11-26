---
title: "RotationOverrider"
description: "After a LimbIK solve, copies a target's world rotation onto a bone, optionally clamped by its RotationLimitAngle."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RotationOverrider

A **class** in `Root.Township`, the global namespace.

After a `LimbIK` solve, copies a target's world rotation onto a bone, optionally clamped by its `RotationLimitAngle`. Needs a `LimbIK` on the same object.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RotationOverrider()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-iksolver" /><code>{"private IKSolver ikSolver"}</code> | The IK solver whose post-update triggers the override. Replaced in `Awake` with the `LimbIK` solver. |
| <Link id="m-isusingrotationlimit" /><code>{"private bool isUsingRotationLimit"}</code> | Whether to clamp with the `RotationLimitAngle`. Default true. |
| <Link id="m-rotationlimit" /><code>{"private RotationLimitAngle rotationLimit"}</code> | `RotationLimitAngle` on the overridden transform, if any. |
| <Link id="m-target" /><code>{"private Transform target"}</code> | Transform whose world rotation is copied. |
| <Link id="m-test" /><code>{"private GameObject test"}</code> | Unused object reference. |
| <Link id="m-transformtooverride" /><code>{"private Transform transformToOverride"}</code> | The bone to rotate. Null means this object's transform. |

</details>

## Methods

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Defaults the overridden transform to its own, gets the IK solver from `LimbIK` and finds the rotation limit. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Unhooks `UpdateRotation` from the solver's post-update. |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | Empty. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Hooks `UpdateRotation` to the solver's post-update. |
| <Link id="m-updaterotation" /><code>{"private void UpdateRotation()"}</code> | Sets the transform's rotation to the target's, then applies the rotation limit if enabled. |

</details>
