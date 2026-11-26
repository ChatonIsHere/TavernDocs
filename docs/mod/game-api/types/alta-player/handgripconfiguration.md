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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** `ScriptableObject`
- **Nested types** [`Finger`](/mod/game-api/types/alta-player/handgripconfiguration-finger), [`RotationSnapshots`](/mod/game-api/types/alta-player/handgripconfiguration-rotationsnapshots)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HandGripConfiguration()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fingers" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/handgripconfiguration-finger">{"HandGripConfiguration.Finger"}</Link>{"[] fingers"}</code> | <span className="api-desc">Backing field for `Fingers`.</span> |
| <Link id="m-gripduration" /><code>{"private float gripDuration"}</code> | <span className="api-desc">Backing field for `GripDuration`.</span> |
| <Link id="m-leftrotations" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/handgripconfiguration-rotationsnapshots">{"HandGripConfiguration.RotationSnapshots"}</Link>{" leftRotations"}</code> | <span className="api-desc">Backing field for `LeftRotations`.</span> |
| <Link id="m-rightrotations" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/handgripconfiguration-rotationsnapshots">{"HandGripConfiguration.RotationSnapshots"}</Link>{" rightRotations"}</code> | <span className="api-desc">Backing field for `RightRotations`.</span> |
| <Link id="m-splaidcurve" /><code>{"private AnimationCurve splaidCurve"}</code> | <span className="api-desc">Backing field for `SplaidCurve`.</span> |
| <Link id="m-thumbconfigurations" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/thumbconfiguration">{"ThumbConfiguration"}</Link>{"[] thumbConfigurations"}</code> | <span className="api-desc">Backing field for `ThumbConfigurations`.</span> |
| <Link id="m-ungripduration" /><code>{"private float ungripDuration"}</code> | <span className="api-desc">Backing field for `UngripDuration`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-fingers-2" /><code><Link to="/mod/game-api/types/alta-player/handgripconfiguration-finger">{"HandGripConfiguration.Finger"}</Link>{"[] Fingers { get; }"}</code> | <span className="api-desc">Each finger's name, joints and skeletal input correction curve.</span> |
| <Link id="m-gripduration-2" /><code>{"float GripDuration { get; }"}</code> | <span className="api-desc">Seconds to close the hand into a grip (default 0.1).</span> |
| <Link id="m-leftrotations-2" /><code><Link to="/mod/game-api/types/alta-player/handgripconfiguration-rotationsnapshots">{"HandGripConfiguration.RotationSnapshots"}</Link>{" LeftRotations { get; }"}</code> | <span className="api-desc">Default, open, splayed and closed poses for the left hand.</span> |
| <Link id="m-rightrotations-2" /><code><Link to="/mod/game-api/types/alta-player/handgripconfiguration-rotationsnapshots">{"HandGripConfiguration.RotationSnapshots"}</Link>{" RightRotations { get; }"}</code> | <span className="api-desc">Default, open, splayed and closed poses for the right hand.</span> |
| <Link id="m-splaidcurve-2" /><code>{"AnimationCurve SplaidCurve { get; }"}</code> | <span className="api-desc">Curve from total finger curl to how splayed the fingers are.</span> |
| <Link id="m-thumbconfigurations-2" /><code><Link to="/mod/game-api/types/global-t-x/thumbconfiguration">{"ThumbConfiguration"}</Link>{"[] ThumbConfigurations { get; }"}</code> | <span className="api-desc">Thumb setup for each `ThumbPosition`, indexed by the enum.</span> |
| <Link id="m-ungripduration-2" /><code>{"float UngripDuration { get; }"}</code> | <span className="api-desc">Seconds to open the hand when letting go (default 0.1).</span> |

## Used in

Members of other types that take, return or hold a `HandGripConfiguration`:

<div className="api-used-in">

[`HandGrip.configuration`](/mod/game-api/types/alta-player/handgrip#m-configuration).

</div>
