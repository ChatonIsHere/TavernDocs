---
title: "ShoulderTwistController"
description: "Character rig component that slowly twists the shoulder around the shoulder-to-elbow axis to follow the hand, within a rotation limit."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShoulderTwistController

A **class** in `Root.Township`, `Alta.Character`.

Character rig component that slowly twists the shoulder around the shoulder-to-elbow axis to follow the hand, within a rotation limit.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`CharacterComponentController`](/game-api/types/alta-player/charactercomponentcontroller)
- **Derived types** [`ShoulderTwistControllerHelper`](/game-api/types/alta-player/shouldertwistcontrollerhelper)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShoulderTwistController()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-body" /><code>{"private Transform body"}</code> | Backing field for `Body`. |
| <Link id="m-elbow" /><code>{"private Transform elbow"}</code> | Backing field for `Elbow`. |
| <Link id="m-hand" /><code>{"private Transform hand"}</code> | Backing field for `Hand`. |
| <Link id="m-handvector" /><code>{"private Vector3 handVector"}</code> | Last elbow-to-hand vector in shoulder space. |
| <Link id="m-rotationaxis" /><code>{"private Vector3 rotationAxis"}</code> | Shoulder-to-elbow axis the twist is applied around. |
| <Link id="m-rotationlimit" /><code>{"private RotationLimit rotationLimit"}</code> | Backing field for `RotationLimit`. |
| <Link id="m-shoulder" /><code>{"private Transform shoulder"}</code> | Backing field for `Shoulder`. |
| <Link id="m-speed" /><code>{"private float speed"}</code> | Twist speed in degrees per second (default 5). |
| <Link id="m-startangle" /><code>{"private float startAngle"}</code> | Forearm angle at `Start`, which the twist direction is measured from. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-body-2" /><code>{"Transform Body { set; }"}</code> | Body transform (set only). |
| <Link id="m-elbow-2" /><code>{"Transform Elbow { set; }"}</code> | Elbow bone (set only). |
| <Link id="m-hand-2" /><code>{"Transform Hand { set; }"}</code> | Hand bone (set only). |
| <Link id="m-rotationlimit-2" /><code>{"RotationLimit RotationLimit { set; }"}</code> | Rotation limit applied to the shoulder after twisting (set only). |
| <Link id="m-shoulder-2" /><code>{"Transform Shoulder { get; set; }"}</code> | The shoulder bone this rotates. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fixedupdatecharactercomponent" /><code>{"override void FixedUpdateCharacterComponent()"}</code> | Rotates the shoulder towards the hand's angle at `speed`, applies the limit and keeps the elbow's rotation unchanged. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gethandvectorangle" /><code>{"private float GetHandVectorAngle()"}</code> | Angle of the forearm vector (elbow to hand) in the shoulder's space. |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | Gizmo hook; draws nothing in this build. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Records the starting forearm angle. |

</details>

## Used in

Members of other types that take, return or hold a `ShoulderTwistController`:

[`ArmIKController.shoulderTwistController`](/game-api/types/alta-player/armikcontroller#m-shouldertwistcontroller), [`ArmIKController.ShoulderTwistController`](/game-api/types/alta-player/armikcontroller#m-shouldertwistcontroller-2).
