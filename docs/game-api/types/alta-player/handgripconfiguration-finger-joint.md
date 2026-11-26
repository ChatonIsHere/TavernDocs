---
title: "HandGripConfiguration.Finger.Joint"
description: "Size and curl limits of one finger joint, used by HandGrip to curl fingers around what the hand holds."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandGripConfiguration.Finger.Joint

A **class** in `Root.Township`, `Alta.Character`.

Size and curl limits of one finger joint, used by `HandGrip` to curl fingers around what the hand holds.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Nested in** [`HandGripConfiguration.Finger`](/game-api/types/alta-player/handgripconfiguration-finger)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Joint()"}</code> | Creates a `HandGripConfiguration.Finger.Joint` with default values. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-curlinterval" /><code>{"private float curlInterval"}</code> | Backing field for `CurlInterval`. |
| <Link id="m-length" /><code>{"private float length"}</code> | Backing field for `Length`. |
| <Link id="m-maximumcurl" /><code>{"private float maximumCurl"}</code> | Backing field for `MaximumCurl`. |
| <Link id="m-radius" /><code>{"private float radius"}</code> | Backing field for `Radius`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-curlinterval-2" /><code>{"float CurlInterval { get; }"}</code> | Degrees the joint curls per step while closing around an object. |
| <Link id="m-length-2" /><code>{"float Length { get; }"}</code> | Length of the joint's bone. |
| <Link id="m-maximumcurl-2" /><code>{"float MaximumCurl { get; }"}</code> | Furthest the joint can curl, in degrees; negative values curl the other way. |
| <Link id="m-radius-2" /><code>{"float Radius { get; }"}</code> | Thickness of the joint, used for its collision check. |

## Used in

Members of other types that take, return or hold a `Joint`:

[`HandGrip.GripJoint.GripJoint`](/game-api/types/alta-player/handgrip-gripjoint#m-ctor-2), [`HandGrip.GripJoint.joint`](/game-api/types/alta-player/handgrip-gripjoint#m-joint), [`HandGrip.ThumbGripJoint.ThumbGripJoint`](/game-api/types/alta-player/handgrip-thumbgripjoint#m-ctor-2), [`HandGripConfiguration.Finger.joints`](/game-api/types/alta-player/handgripconfiguration-finger#m-joints), [`HandGripConfiguration.Finger.Joints`](/game-api/types/alta-player/handgripconfiguration-finger#m-joints-2).
