---
title: "ShoulderTwistController"
description: "class ShoulderTwistController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShoulderTwistController

A **class** in `Root.Township`, `Alta.Character`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`CharacterComponentController`](/game-api/types/alta-player/charactercomponentcontroller)
- **Derived types** [`ShoulderTwistControllerHelper`](/game-api/types/alta-player/shouldertwistcontrollerhelper)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ShoulderTwistController()"}</code> |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-body" /><code>{"private Transform body"}</code> |
| <Link id="m-elbow" /><code>{"private Transform elbow"}</code> |
| <Link id="m-hand" /><code>{"private Transform hand"}</code> |
| <Link id="m-handvector" /><code>{"private Vector3 handVector"}</code> |
| <Link id="m-rotationaxis" /><code>{"private Vector3 rotationAxis"}</code> |
| <Link id="m-rotationlimit" /><code>{"private RotationLimit rotationLimit"}</code> |
| <Link id="m-shoulder" /><code>{"private Transform shoulder"}</code> |
| <Link id="m-speed" /><code>{"private float speed"}</code> |
| <Link id="m-startangle" /><code>{"private float startAngle"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-body-2" /><code>{"Transform Body { set; }"}</code> |
| <Link id="m-elbow-2" /><code>{"Transform Elbow { set; }"}</code> |
| <Link id="m-hand-2" /><code>{"Transform Hand { set; }"}</code> |
| <Link id="m-rotationlimit-2" /><code>{"RotationLimit RotationLimit { set; }"}</code> |
| <Link id="m-shoulder-2" /><code>{"Transform Shoulder { get; set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-fixedupdatecharactercomponent" /><code>{"override void FixedUpdateCharacterComponent()"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-gethandvectorangle" /><code>{"private float GetHandVectorAngle()"}</code> |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> |
| <Link id="m-start" /><code>{"private void Start()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `ShoulderTwistController`:

[`ArmIKController.shoulderTwistController`](/game-api/types/alta-player/armikcontroller#m-shouldertwistcontroller), [`ArmIKController.ShoulderTwistController`](/game-api/types/alta-player/armikcontroller#m-shouldertwistcontroller-2).
