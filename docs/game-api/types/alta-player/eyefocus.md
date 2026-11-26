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

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"EyeFocus()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-eyemovementspeed" /><code>{"private float eyeMovementSpeed"}</code> | How fast the eye turns (default 50). |
| <Link id="m-lastrotation" /><code>{"private Quaternion lastRotation"}</code> | The rotation from the last update, eased from towards the target. |
| <Link id="m-rotationlimit" /><code>{"private RotationLimit rotationLimit"}</code> | Rotation limit applied after turning. |
| <Link id="m-target" /><code>{"private Transform target"}</code> | Backing field for `Target`. |
| <Link id="m-torotate" /><code>{"private Transform toRotate"}</code> | The transform that is turned. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-target-2" /><code>{"Transform Target { get; set; }"}</code> | What the eye looks at. Null stops it moving. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"void Setup(Transform toRotate, RotationLimit rotationLimit)"}</code> | Sets the transform to rotate and the rotation limit to apply. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-forceupdate" /><code>{"private void ForceUpdate()"}</code> | Editor context menu item that runs one look update. |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | Eases `toRotate` towards looking at the target and applies the rotation limit. Does nothing without a target. |

</details>

## Used in

Members of other types that take, return or hold a `EyeFocus`:

[`CharacterEye.eyeFocus`](/game-api/types/alta-player/charactereye#m-eyefocus).
