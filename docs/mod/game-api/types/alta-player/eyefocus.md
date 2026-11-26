---
title: "EyeFocus"
description: "Simple component that turns a transform (an eye) to look at a target each frame, then applies a rotation limit."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EyeFocus

A **class** in `Root.Township`, `Alta.Character`.

Simple component that turns a transform (an eye) to look at a target each frame, then applies a rotation limit.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EyeFocus()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-eyemovementspeed" /><code>{"private float eyeMovementSpeed"}</code> | <span className="api-desc">How fast the eye turns (default 50).</span> |
| <Link id="m-lastrotation" /><code>{"private Quaternion lastRotation"}</code> | <span className="api-desc">The rotation from the last update, eased from towards the target.</span> |
| <Link id="m-rotationlimit" /><code>{"private RotationLimit rotationLimit"}</code> | <span className="api-desc">Rotation limit applied after turning.</span> |
| <Link id="m-target" /><code>{"private Transform target"}</code> | <span className="api-desc">Backing field for `Target`.</span> |
| <Link id="m-torotate" /><code>{"private Transform toRotate"}</code> | <span className="api-desc">The transform that is turned.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-target-2" /><code>{"Transform Target { get; set; }"}</code> | <span className="api-desc">What the eye looks at. Null stops it moving.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"void Setup(Transform toRotate, RotationLimit rotationLimit)"}</code> | <span className="api-desc">Sets the transform to rotate and the rotation limit to apply.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-forceupdate" /><code>{"private void ForceUpdate()"}</code> | <span className="api-desc">Editor context menu item that runs one look update.</span> |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | <span className="api-desc">Eases `toRotate` towards looking at the target and applies the rotation limit. Does nothing without a target.</span> |

</details>

## Used in

Members of other types that take, return or hold a `EyeFocus`:

<div className="api-used-in">

[`CharacterEye.eyeFocus`](/mod/game-api/types/alta-player/charactereye#m-eyefocus).

</div>
