---
title: "HandGripConfiguration.Finger"
description: "Setup for one finger of the hand grip: its joints and how skeletal input is corrected."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandGripConfiguration.Finger

A **class** in `Root.Township`, `Alta.Character`.

Setup for one finger of the hand grip: its joints and how skeletal input is corrected. Read by `HandGrip` to build its finger joints.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Nested in** [`HandGripConfiguration`](/mod/game-api/types/alta-player/handgripconfiguration)
- **Nested types** [`Joint`](/mod/game-api/types/alta-player/handgripconfiguration-finger-joint)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Finger()"}</code> | <span className="api-desc">Creates a `HandGripConfiguration.Finger` with default values.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isthumb" /><code>{"private bool isThumb"}</code> | <span className="api-desc">Backing field for `IsThumb`.</span> |
| <Link id="m-joints" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/handgripconfiguration-finger-joint">{"HandGripConfiguration.Finger.Joint"}</Link>{"[] joints"}</code> | <span className="api-desc">Backing field for `Joints`.</span> |
| <Link id="m-name" /><code>{"private string name"}</code> | <span className="api-desc">Backing field for `Name`.</span> |
| <Link id="m-skeletalinputcorrection" /><code>{"private AnimationCurve skeletalInputCorrection"}</code> | <span className="api-desc">Backing field for `SkeletalInputCorrection`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isthumb-2" /><code>{"bool IsThumb { get; }"}</code> | <span className="api-desc">True for the thumb, which gets thumb joints instead of normal ones.</span> |
| <Link id="m-joints-2" /><code><Link to="/mod/game-api/types/alta-player/handgripconfiguration-finger-joint">{"HandGripConfiguration.Finger.Joint"}</Link>{"[] Joints { get; }"}</code> | <span className="api-desc">Joint settings from the base out: radius, length, maximum curl and curl step.</span> |
| <Link id="m-name-2" /><code>{"string Name { get; }"}</code> | <span className="api-desc">Finger name.</span> |
| <Link id="m-skeletalinputcorrection-2" /><code>{"AnimationCurve SkeletalInputCorrection { get; }"}</code> | <span className="api-desc">Curve applied to the skeletal curl input before the joints use it. Defaults to a line from 0 to 0.9.</span> |

## Used in

Members of other types that take, return or hold a `Finger`:

<div className="api-used-in">

[`HandGrip.GripFinger.finger`](/mod/game-api/types/alta-player/handgrip-gripfinger#m-finger), [`HandGrip.GripFinger.GripFinger`](/mod/game-api/types/alta-player/handgrip-gripfinger#m-ctor-2), [`HandGripConfiguration.fingers`](/mod/game-api/types/alta-player/handgripconfiguration#m-fingers), [`HandGripConfiguration.Fingers`](/mod/game-api/types/alta-player/handgripconfiguration#m-fingers-2).

</div>
