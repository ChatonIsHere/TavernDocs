---
title: "HandGripConfiguration"
description: "Asset that sets up hand gripping: the fingers and their joints, grip timing, thumb positions and the stored hand poses for each hand."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandGripConfiguration

A **class** in `Root.Township`, `Alta.Character`.

Asset that sets up hand gripping: the fingers and their joints, grip timing, thumb positions and the stored hand poses for each hand.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** `ScriptableObject`
- **Nested types** [`Finger`](/game-api/types/alta-player/handgripconfiguration-finger), [`RotationSnapshots`](/game-api/types/alta-player/handgripconfiguration-rotationsnapshots)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"HandGripConfiguration()"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fingers" /><code>{"private "}<Link to="/game-api/types/alta-player/handgripconfiguration-finger">{"HandGripConfiguration.Finger"}</Link>{"[] fingers"}</code> | Backing field for `Fingers`. |
| <Link id="m-gripduration" /><code>{"private float gripDuration"}</code> | Backing field for `GripDuration`. |
| <Link id="m-leftrotations" /><code>{"private "}<Link to="/game-api/types/alta-player/handgripconfiguration-rotationsnapshots">{"HandGripConfiguration.RotationSnapshots"}</Link>{" leftRotations"}</code> | Backing field for `LeftRotations`. |
| <Link id="m-rightrotations" /><code>{"private "}<Link to="/game-api/types/alta-player/handgripconfiguration-rotationsnapshots">{"HandGripConfiguration.RotationSnapshots"}</Link>{" rightRotations"}</code> | Backing field for `RightRotations`. |
| <Link id="m-splaidcurve" /><code>{"private AnimationCurve splaidCurve"}</code> | Backing field for `SplaidCurve`. |
| <Link id="m-thumbconfigurations" /><code>{"private "}<Link to="/game-api/types/global-t-x/thumbconfiguration">{"ThumbConfiguration"}</Link>{"[] thumbConfigurations"}</code> | Backing field for `ThumbConfigurations`. |
| <Link id="m-ungripduration" /><code>{"private float ungripDuration"}</code> | Backing field for `UngripDuration`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-fingers-2" /><code><Link to="/game-api/types/alta-player/handgripconfiguration-finger">{"HandGripConfiguration.Finger"}</Link>{"[] Fingers { get; }"}</code> | Each finger's name, joints and skeletal input correction curve. |
| <Link id="m-gripduration-2" /><code>{"float GripDuration { get; }"}</code> | Seconds to close the hand into a grip (default 0.1). |
| <Link id="m-leftrotations-2" /><code><Link to="/game-api/types/alta-player/handgripconfiguration-rotationsnapshots">{"HandGripConfiguration.RotationSnapshots"}</Link>{" LeftRotations { get; }"}</code> | Default, open, splayed and closed poses for the left hand. |
| <Link id="m-rightrotations-2" /><code><Link to="/game-api/types/alta-player/handgripconfiguration-rotationsnapshots">{"HandGripConfiguration.RotationSnapshots"}</Link>{" RightRotations { get; }"}</code> | Default, open, splayed and closed poses for the right hand. |
| <Link id="m-splaidcurve-2" /><code>{"AnimationCurve SplaidCurve { get; }"}</code> | Curve from total finger curl to how splayed the fingers are. |
| <Link id="m-thumbconfigurations-2" /><code><Link to="/game-api/types/global-t-x/thumbconfiguration">{"ThumbConfiguration"}</Link>{"[] ThumbConfigurations { get; }"}</code> | Thumb setup for each `ThumbPosition`, indexed by the enum. |
| <Link id="m-ungripduration-2" /><code>{"float UngripDuration { get; }"}</code> | Seconds to open the hand when letting go (default 0.1). |

## Used in

Members of other types that take, return or hold a `HandGripConfiguration`:

[`HandGrip.configuration`](/game-api/types/alta-player/handgrip#m-configuration).
