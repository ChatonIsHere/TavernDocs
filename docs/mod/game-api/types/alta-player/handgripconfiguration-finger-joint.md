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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Nested in** [`HandGripConfiguration.Finger`](/mod/game-api/types/alta-player/handgripconfiguration-finger)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Joint()"}</code> | <span className="api-desc">Creates a `HandGripConfiguration.Finger.Joint` with default values.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-curlinterval" /><code>{"private float curlInterval"}</code> | <span className="api-desc">Backing field for `CurlInterval`.</span> |
| <Link id="m-length" /><code>{"private float length"}</code> | <span className="api-desc">Backing field for `Length`.</span> |
| <Link id="m-maximumcurl" /><code>{"private float maximumCurl"}</code> | <span className="api-desc">Backing field for `MaximumCurl`.</span> |
| <Link id="m-radius" /><code>{"private float radius"}</code> | <span className="api-desc">Backing field for `Radius`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-curlinterval-2" /><code>{"float CurlInterval { get; }"}</code> | <span className="api-desc">Degrees the joint curls per step while closing around an object.</span> |
| <Link id="m-length-2" /><code>{"float Length { get; }"}</code> | <span className="api-desc">Length of the joint's bone.</span> |
| <Link id="m-maximumcurl-2" /><code>{"float MaximumCurl { get; }"}</code> | <span className="api-desc">Furthest the joint can curl, in degrees; negative values curl the other way.</span> |
| <Link id="m-radius-2" /><code>{"float Radius { get; }"}</code> | <span className="api-desc">Thickness of the joint, used for its collision check.</span> |

## Used in

Members of other types that take, return or hold a `Joint`:

<div className="api-used-in">

[`HandGrip.GripJoint.GripJoint`](/mod/game-api/types/alta-player/handgrip-gripjoint#m-ctor-2), [`HandGrip.GripJoint.joint`](/mod/game-api/types/alta-player/handgrip-gripjoint#m-joint), [`HandGrip.ThumbGripJoint.ThumbGripJoint`](/mod/game-api/types/alta-player/handgrip-thumbgripjoint#m-ctor-2), [`HandGripConfiguration.Finger.joints`](/mod/game-api/types/alta-player/handgripconfiguration-finger#m-joints), [`HandGripConfiguration.Finger.Joints`](/mod/game-api/types/alta-player/handgripconfiguration-finger#m-joints-2).

</div>
