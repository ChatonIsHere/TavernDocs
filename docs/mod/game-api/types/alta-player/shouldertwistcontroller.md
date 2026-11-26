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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`CharacterComponentController`](/mod/game-api/types/alta-player/charactercomponentcontroller)
- **Derived types** [`ShoulderTwistControllerHelper`](/mod/game-api/types/alta-player/shouldertwistcontrollerhelper)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShoulderTwistController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-body" /><code>{"private Transform body"}</code> | <span className="api-desc">Backing field for `Body`.</span> |
| <Link id="m-elbow" /><code>{"private Transform elbow"}</code> | <span className="api-desc">Backing field for `Elbow`.</span> |
| <Link id="m-hand" /><code>{"private Transform hand"}</code> | <span className="api-desc">Backing field for `Hand`.</span> |
| <Link id="m-handvector" /><code>{"private Vector3 handVector"}</code> | <span className="api-desc">Last elbow-to-hand vector in shoulder space.</span> |
| <Link id="m-rotationaxis" /><code>{"private Vector3 rotationAxis"}</code> | <span className="api-desc">Shoulder-to-elbow axis the twist is applied around.</span> |
| <Link id="m-rotationlimit" /><code>{"private RotationLimit rotationLimit"}</code> | <span className="api-desc">Backing field for `RotationLimit`.</span> |
| <Link id="m-shoulder" /><code>{"private Transform shoulder"}</code> | <span className="api-desc">Backing field for `Shoulder`.</span> |
| <Link id="m-speed" /><code>{"private float speed"}</code> | <span className="api-desc">Twist speed in degrees per second (default 5).</span> |
| <Link id="m-startangle" /><code>{"private float startAngle"}</code> | <span className="api-desc">Forearm angle at `Start`, which the twist direction is measured from.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-body-2" /><code>{"Transform Body { set; }"}</code> | <span className="api-desc">Body transform (set only).</span> |
| <Link id="m-elbow-2" /><code>{"Transform Elbow { set; }"}</code> | <span className="api-desc">Elbow bone (set only).</span> |
| <Link id="m-hand-2" /><code>{"Transform Hand { set; }"}</code> | <span className="api-desc">Hand bone (set only).</span> |
| <Link id="m-rotationlimit-2" /><code>{"RotationLimit RotationLimit { set; }"}</code> | <span className="api-desc">Rotation limit applied to the shoulder after twisting (set only).</span> |
| <Link id="m-shoulder-2" /><code>{"Transform Shoulder { get; set; }"}</code> | <span className="api-desc">The shoulder bone this rotates.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fixedupdatecharactercomponent" /><code>{"override void FixedUpdateCharacterComponent()"}</code> | <span className="api-desc">Rotates the shoulder towards the hand's angle at `speed`, applies the limit and keeps the elbow's rotation unchanged.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gethandvectorangle" /><code>{"private float GetHandVectorAngle()"}</code> | <span className="api-desc">Angle of the forearm vector (elbow to hand) in the shoulder's space.</span> |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | <span className="api-desc">Gizmo hook; draws nothing in this build.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Records the starting forearm angle.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ShoulderTwistController`:

<div className="api-used-in">

[`ArmIKController.shoulderTwistController`](/mod/game-api/types/alta-player/armikcontroller#m-shouldertwistcontroller), [`ArmIKController.ShoulderTwistController`](/mod/game-api/types/alta-player/armikcontroller#m-shouldertwistcontroller-2).

</div>
