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
| <Link id="m-ctor" /><code>{"RotationOverrider()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-iksolver" /><code>{"private IKSolver ikSolver"}</code> | <span className="api-desc">The IK solver whose post-update triggers the override. Replaced in `Awake` with the `LimbIK` solver.</span> |
| <Link id="m-isusingrotationlimit" /><code>{"private bool isUsingRotationLimit"}</code> | <span className="api-desc">Whether to clamp with the `RotationLimitAngle`. Default true.</span> |
| <Link id="m-rotationlimit" /><code>{"private RotationLimitAngle rotationLimit"}</code> | <span className="api-desc">`RotationLimitAngle` on the overridden transform, if any.</span> |
| <Link id="m-target" /><code>{"private Transform target"}</code> | <span className="api-desc">Transform whose world rotation is copied.</span> |
| <Link id="m-test" /><code>{"private GameObject test"}</code> | <span className="api-desc">Unused object reference.</span> |
| <Link id="m-transformtooverride" /><code>{"private Transform transformToOverride"}</code> | <span className="api-desc">The bone to rotate. Null means this object's transform.</span> |

</details>

## Methods

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Defaults the overridden transform to its own, gets the IK solver from `LimbIK` and finds the rotation limit.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Unhooks `UpdateRotation` from the solver's post-update.</span> |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | <span className="api-desc">Empty.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Hooks `UpdateRotation` to the solver's post-update.</span> |
| <Link id="m-updaterotation" /><code>{"private void UpdateRotation()"}</code> | <span className="api-desc">Sets the transform's rotation to the target's, then applies the rotation limit if enabled.</span> |

</details>
