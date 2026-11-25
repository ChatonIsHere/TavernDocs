---
title: "CustomFixedJoint"
description: "class CustomFixedJoint in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CustomFixedJoint

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CustomFixedJoint()"}</code> |

## Fields

<details>
<summary>12 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-attachedobject" /><code>{"private Rigidbody attachedObject"}</code> |
| <Link id="m-grippointposition" /><code>{"private Vector3 gripPointPosition"}</code> |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> |
| <Link id="m-iscollisionenabled" /><code>{"private bool isCollisionEnabled"}</code> |
| <Link id="m-islimitingarmlength" /><code>{"private bool isLimitingArmLength"}</code> |
| <Link id="m-limitedposition" /><code>{"private Vector3 limitedPosition"}</code> |
| <Link id="m-offset" /><code>{"private Vector3 offset"}</code> |
| <Link id="m-rigidbody" /><code>{"private Rigidbody rigidbody"}</code> |
| <Link id="m-rotationoffset" /><code>{"private Quaternion rotationOffset"}</code> |
| <Link id="m-roteulers" /><code>{"private Vector3 rotEulers"}</code> |
| <Link id="m-shoulder" /><code>{"private Transform shoulder"}</code> |
| <Link id="m-shoulderposition" /><code>{"private Vector3 shoulderPosition"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-controller" /><code><Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" "}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" { get; set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-disable" /><code>{"void Disable()"}</code> |
| <Link id="m-enable" /><code>{"void Enable()"}</code> |
| <Link id="m-setup" /><code>{"void Setup(Rigidbody attachedObject, Vector3 offset, Quaternion rotationOffset, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, bool isCollisionEnabled = false)"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> |
| <Link id="m-ignorecollisions" /><code>{"private void IgnoreCollisions(bool isIgnoring)"}</code> |
| <Link id="m-start" /><code>{"private void Start()"}</code> |

</details>
