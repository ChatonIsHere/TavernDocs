---
title: "NetworkStarer.RotatingJoint"
description: "Private: one joint in a NetworkStarer chain that turns to look at a target, with its own angle limit."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkStarer.RotatingJoint

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private: one joint in a `NetworkStarer` chain that turns to look at a target, with its own angle limit.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Nested in** [`NetworkStarer`](/game-api/types/global-m-o/networkstarer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RotatingJoint()"}</code> | Creates a `NetworkStarer.RotatingJoint` with default values. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isinitialized" /><code>{"private bool isInitialized"}</code> | Whether `Initialize` has run. |
| <Link id="m-joint" /><code>{"private Transform joint"}</code> | Backing field for `Joint`. |
| <Link id="m-maxangle" /><code>{"private float maxAngle"}</code> | Backing field for `MaxAngle` (default 20). |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-joint-2" /><code>{"Transform Joint { get; }"}</code> | The transform that rotates. |
| <Link id="m-maxangle-2" /><code>{"float MaxAngle { get; }"}</code> | Most this joint turns; the rest is passed to the next joint. |
| <Link id="m-originalrotation" /><code>{"Quaternion OriginalRotation { get; private set; }"}</code> | Local rotation when initialized. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getangle" /><code>{"float GetAngle(Vector3 direction)"}</code> | Angle between the joint's starting rotation and facing the given direction. |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> | Stores the joint's starting local rotation, once. |

## Used in

Members of other types that take, return or hold a `RotatingJoint`:

[`NetworkStarer.RotatingStructure.Base`](/game-api/types/global-m-o/networkstarer-rotatingstructure#m-base), [`NetworkStarer.RotatingStructure.joints`](/game-api/types/global-m-o/networkstarer-rotatingstructure#m-joints).
