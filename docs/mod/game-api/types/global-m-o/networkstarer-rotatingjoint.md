---
title: "NetworkStarer.RotatingJoint"
description: "Private: one joint in a NetworkStarer chain that turns to look at a target, with its own angle limit."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkStarer.RotatingJoint

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private: one joint in a `NetworkStarer` chain that turns to look at a target, with its own angle limit.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Nested in** [`NetworkStarer`](/mod/game-api/types/global-m-o/networkstarer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RotatingJoint()"}</code> | <span className="api-desc">Creates a `NetworkStarer.RotatingJoint` with default values.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isinitialized" /><code>{"private bool isInitialized"}</code> | <span className="api-desc">Whether `Initialize` has run.</span> |
| <Link id="m-joint" /><code>{"private Transform joint"}</code> | <span className="api-desc">Backing field for `Joint`.</span> |
| <Link id="m-maxangle" /><code>{"private float maxAngle"}</code> | <span className="api-desc">Backing field for `MaxAngle` (default 20).</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-joint-2" /><code>{"Transform Joint { get; }"}</code> | <span className="api-desc">The transform that rotates.</span> |
| <Link id="m-maxangle-2" /><code>{"float MaxAngle { get; }"}</code> | <span className="api-desc">Most this joint turns; the rest is passed to the next joint.</span> |
| <Link id="m-originalrotation" /><code>{"Quaternion OriginalRotation { get; private set; }"}</code> | <span className="api-desc">Local rotation when initialized.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getangle" /><code>{"float GetAngle(Vector3 direction)"}</code> | <span className="api-desc">Angle between the joint's starting rotation and facing the given direction.</span> |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> | <span className="api-desc">Stores the joint's starting local rotation, once.</span> |

## Used in

Members of other types that take, return or hold a `RotatingJoint`:

<div className="api-used-in">

[`NetworkStarer.RotatingStructure.Base`](/mod/game-api/types/global-m-o/networkstarer-rotatingstructure#m-base), [`NetworkStarer.RotatingStructure.joints`](/mod/game-api/types/global-m-o/networkstarer-rotatingstructure#m-joints).

</div>
